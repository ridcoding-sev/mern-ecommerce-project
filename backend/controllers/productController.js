import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productsModel.js"

// function to add the products
const addProduct = async (req, res) => {
try {
const {
name,
description,
price,
category,
subCategory,
sizes,
bestseller
} = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // At least one image is required
    if (images.length === 0) {
        return res.json({
            success: false,
            message: "At least one product image is required"
        });
    }

    // Upload images directly to Cloudinary from memory
    const imagesUrl = await Promise.all(
        images.map((item) =>
            new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: "image",
                        folder: "ecommerce"
                    },
                    (error, result) => {
                        if (error) {
                            return reject(error);
                        }

                        resolve(result.secure_url);
                    }
                );

                stream.end(item.buffer);
            })
        )
    );

    const productData = {
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestseller: bestseller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imagesUrl,
        date: Date.now()
    };

    const product = new productModel(productData);

    await product.save();

    res.json({
        success: true,
        message: "Product Added"
    });

} catch (error) {
    console.log(error);

    res.json({
        success: false,
        message: error.message
    });
}


};


// function for list product
const listProducts = async (req, res) => {
    try {

        const products = await productModel.find({});
        res.json({success:true, products})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
}