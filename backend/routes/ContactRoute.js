import express from 'express'

import {
    addContact,
    listContacts,
    getContactById,
    updateContactStatus
} from '../controllers/contactController.js'

const contactRouter = express.Router()

// User submits a contact message
contactRouter.post('/add', addContact)

// Admin gets all contact messages
contactRouter.get('/list', listContacts)

// Admin gets a single contact message
contactRouter.get('/:id', getContactById)

// Admin updates message status
contactRouter.patch('/:id/status', updateContactStatus)

export default contactRouter