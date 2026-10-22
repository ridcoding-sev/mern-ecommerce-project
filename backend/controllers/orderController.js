
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";




// Placing orders using COD Method
const placeOrder = async (req, res) => {

    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Placing orders using bKash Practice Mode
const placeOrderBkash = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "bKash",
            payment: false,
            paymentStatus: "Pending",
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: "bKash test order created",
            orderId: newOrder._id,
            paymentStatus: newOrder.paymentStatus
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


   // Placing orders using Nagad Practice Mode
const placeOrderNogod = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Nagad",
            payment: false,
            paymentStatus: "Pending",
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: "Nagad test order created",
            orderId: newOrder._id,
            paymentStatus: newOrder.paymentStatus
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// Delete Order from Admin Panel
const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.body;

        // Check if order ID is provided
        if (!orderId) {
            return res.status(400).json({
                success: false,
                message: "Order ID is required"
            });
        }

        // Find and delete order
        const deletedOrder = await orderModel.findByIdAndDelete(orderId);

        // Check if order exists
        if (!deletedOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Order deleted successfully"
        });

    } catch (error) {
        console.log("Delete Order Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// All Orders data for Admin Panel
const allOrders = async (req,res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// User Order Data For Forntend
const userOrders = async (req,res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// update order status from Admin Panel
const updateStatus = async (req,res) => {
    try {

        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message: 'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {placeOrder,placeOrderBkash,placeOrderNogod,allOrders,userOrders,updateStatus,deleteOrder}