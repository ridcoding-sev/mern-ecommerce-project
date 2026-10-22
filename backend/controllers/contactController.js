import mongoose from 'mongoose'
import contactModel from '../models/contactModel.js'


// ==========================================
// 1. ADD CONTACT MESSAGE
// POST: /api/contact/add
// ==========================================

const addContact = async (req, res) => {
    try {
        const { name, email, message } = req.body

        // Check required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email and message are required.'
            })
        }

        // Create new contact
        const newContact = new contactModel({
            name,
            email,
            message
        })

        // Save message to MongoDB
        await newContact.save()

        return res.status(201).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully.',
            contact: {
                _id: newContact._id,
                name: newContact.name,
                email: newContact.email,
                createdAt: newContact.createdAt
            }
        })

    } catch (error) {
        console.error('Add Contact Error:', error)

        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        return res.status(500).json({
            success: false,
            message: 'Failed to send your message. Please try again.'
        })
    }
}


// ==========================================
// 2. GET ALL CONTACT MESSAGES
// GET: /api/contact/list
// ==========================================

const listContacts = async (req, res) => {
    try {
        // Get all messages, newest first
        const contacts = await contactModel
            .find({})
            .sort({ createdAt: -1 })
            .lean()

        return res.status(200).json({
            success: true,
            total: contacts.length,
            contacts
        })

    } catch (error) {
        console.error('List Contacts Error:', error)

        return res.status(500).json({
            success: false,
            message: 'Failed to fetch contact messages.'
        })
    }
}


// ==========================================
// 3. GET SINGLE CONTACT MESSAGE
// GET: /api/contact/:id
// ==========================================

const getContactById = async (req, res) => {
    try {
        const { id } = req.params

        // Validate MongoDB ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid contact ID.'
            })
        }

        // Find message by ID
        const contact = await contactModel.findById(id).lean()

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact message not found.'
            })
        }

        return res.status(200).json({
            success: true,
            contact
        })

    } catch (error) {
        console.error('Get Contact Error:', error)

        return res.status(500).json({
            success: false,
            message: 'Failed to fetch contact details.'
        })
    }
}


// ==========================================
// 4. UPDATE CONTACT MESSAGE STATUS
// PATCH: /api/contact/:id/status
// ==========================================

const updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body

        // Validate MongoDB ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid contact ID.'
            })
        }

        // Allow only these statuses
        const allowedStatuses = ['New', 'Read', 'Replied']

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Status must be New, Read or Replied.'
            })
        }

        // Update message status
        const updatedContact = await contactModel.findByIdAndUpdate(
            id,
            { status },
            {
                new: true,
                runValidators: true
            }
        )

        if (!updatedContact) {
            return res.status(404).json({
                success: false,
                message: 'Contact message not found.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Contact status updated successfully.',
            contact: updatedContact
        })

    } catch (error) {
        console.error('Update Contact Status Error:', error)

        return res.status(500).json({
            success: false,
            message: 'Failed to update contact status.'
        })
    }
}


// ==========================================
// EXPORT CONTROLLER FUNCTIONS
// ==========================================

export {
    addContact,
    listContacts,
    getContactById,
    updateContactStatus
}