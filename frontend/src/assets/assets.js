/*
Perpose of file : 
                export all of images which we need in our website 
                create all of product arrays and store all products ditels which help us to destroy all product

*/ 



/*
All web pic is placed here and import Where we need
*/ 
import Logo from './RidEsiteLogo.svg'
import SearchIcon from './search_icon.png'
import profileIcone from './profile_icon.jpg'
import CartIcon  from './cart_icon.png'
import MobileManu from './menu-dropdown-icon.png'
import BackMAnu from './cross_dropdownManu.jpg'
import HeroImage from './heroImage.jpg'
import CrossDropdown from './cross_dropdownManu.jpg'
import Cross from './cross_.png'
import star from './star_rating.jpg'
import deleteIcon from './bin_icon.png'
import bkash from './bkash.jpg'
import nogod from './nogod.jpg'
import aboutImage from './aboutImage1.webp'
import contactImage from './contact.webp'
import collectionIcon from './cart_icon.png'
import HomeIcone from './Home.png'


export const assets ={
    Logo,
    SearchIcon,
    profileIcone,
    CartIcon,
    MobileManu,
    BackMAnu,
    HeroImage,
    CrossDropdown,
    Cross,
    star,
    deleteIcon,
    bkash,
    nogod,
    aboutImage,
    contactImage,
    collectionIcon,
    HomeIcone

}
/*
This part import all products image and create a product array sothat it can handle easily
*/ 

import menAshTshirt from './men-Ash-t-shirt3.jpg'

import menNavyBlueTshirt from './men-navy-blue-t-shirt.webp'
import menNavyBlueTshirt1 from './men-navy-blue-t-shirt2.jpg'
import menNavyBlueTshirt2 from './men-navy-blue-t-shirt3.jpg'
import menNavyBlueTshirt3 from './men-navy-blue-t-shirt4.jpg'


import womenBlackShoes from './women-black-shoes1.jpg'
import babyBoyTonyDress from './babyBoyTonyDress2.jpg'
import WomenStraightPant from './WomenStraightPant1.jpg'




export const products=[
{
    _id:"aaaa",
    name:"Men Ash T-shirt",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias?",
    price:120,          
    image:[menAshTshirt],
    category:"Men",
    subCategory:"Topwear",
    sizes:["S","L","M","Xl"],
    date:Date.now(),
    bestseller:true
},
{
    _id:"aaab",
    name:"Men Navy Blue T-shirt1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias?",
    price:200,          
    image:[menNavyBlueTshirt,menNavyBlueTshirt1,menNavyBlueTshirt2,menNavyBlueTshirt3],
    category:"Men",
    subCategory:"Topwear",
    sizes:["S","L","M","Xl"],
    date:Date.now(),
    bestseller:true
},
{
    _id:"aaac",
    name:"Women Black Shoes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias?",
    price:120,          
    image:[womenBlackShoes],
    category:"Women",
    subCategory:"Bottomwear",
    sizes:["28","29","30","31"],
    date:Date.now(),
    bestseller:true
},
{
    _id:"aaad",
    name:"Baby Boy Tony Dress",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias?",
    price:200,          
    image:[babyBoyTonyDress],
    category:"Kids",
    subCategory:["Topwear","Bottomwear"],
    sizes:["s","m","l","xl"],
    date:Date.now(),
    bestseller:true
},

{
    _id:"aaae",
    name:"Women Straight Pant",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias?",
    price:100,          
    image:[WomenStraightPant],
    category:"Women",
    subCategory:"Women",
    sizes:["s","m","l","xl"],
    date:Date.now(),
    bestseller:false
}
]







