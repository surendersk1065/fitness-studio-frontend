import React, { useContext } from 'react'
import { Storedata } from '../usecontextdata/UseDataProvider'
import axios from 'axios'

const Mycart = () => {

    const {mycart} = useContext(Storedata)
    const {deletecart} = useContext(Storedata)

    async function payment(item) {

        const { data } = await axios.post(
            "https://fitness-studio-backend-5hbi.onrender.com/order",
            {
                amount: item.price
            }
        );
        console.log(data);

        const options = {

            key: "rzp_test_THIMWDxFyEOGd6",

            amount: data.amount,

            currency: data.currency,

            name: "Fitness Studio",

            description: "Purchase",

            order_id: data.id,

            handler: function (response) {

                alert("Payment Successful");

                console.log(response);

            },

            prefill: {
                name: "Surender",
                email: "example@gmail.com"
            },

            theme: {
                color: "#000000"
            }

        };

        const razor = new window.Razorpay(options);
        console.log(options);

        razor.open();

    }

  return (
    <div className='my-5 p-10'>
        <p className='text-center font-bold text-3xl mb-10'>Mycart</p>
        {mycart.length == 0 ? <p className='text-center font-medium'>Cart is empty</p> : ""}
                    <div className='flex justify justify-evenly flex-wrap'>
                {mycart.map((items) => {
                    return (
                        <div className='mb-3' key={items.id}>
                            <img src={items.img} alt="" className='w-56' />
                            <p className='m-2 italic'>&#8377;.{items.price}<span className='line-through ml-2'>999</span></p>
                            <div>
                                <button className='bg-white m-2 text-black p-2 font-bold hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer 'onClick={() => deletecart(items.id)}>Delete from Cart</button>
                                <button className='bg-white m-2 text-black p-2 font-bold hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer' onClick={() => payment(items)} >{items.buy}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Mycart