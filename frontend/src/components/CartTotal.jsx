import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContex';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    const [total, setTotal] = useState(0);

    // getCartAmount async ফাংশন হওয়ায় useEffect দিয়ে কল করতে হবে
    useEffect(() => {
        const fetchTotal = async () => {
            const amount = await getCartAmount();
            setTotal(amount);
        };
        fetchTotal();
    }, [getCartAmount]);   // cartItems পরিবর্তন হলে আবার কল হবে

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                
                {/* Subtotal */}
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>
                        {currency} {total}.00
                    </p>
                </div> 

                <hr />

                {/* Shipping Fee */}
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>
                        {currency} {delivery_fee} .00
                    </p>
                </div>

                <hr />

                {/* Total */}
                <div className='flex justify-between font-medium'>
                    <p>Total</p>
                    <p>
                <b>{currency} {total === 0 ? 0 : total + delivery_fee}.00</b>                        
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CartTotal;