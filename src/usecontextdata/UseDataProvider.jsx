import { createContext, useState } from "react";
import m1 from '../assets/m1.webp'
import m2 from '../assets/m2.webp'
import m3 from '../assets/m3.webp'
import m4 from '../assets/m4.webp'
import m5 from '../assets/m5.webp'
import w1 from '../assets/w1.webp'
import w2 from '../assets/w2.webp'
import w3 from '../assets/w3.webp'
import w4 from '../assets/w4.webp'
import w5 from '../assets/w5.webp'
import s1 from '../assets/s1.webp'
import s2 from '../assets/s2.webp'
import s3 from '../assets/s3.webp'
import s4 from '../assets/s4.webp'
import s5 from '../assets/s5.webp'
import a1 from '../assets/a1.webp'
import a2 from '../assets/a2.webp'
import a3 from '../assets/a3.webp'
import a4 from '../assets/a4.webp'
import a5 from '../assets/a5.webp'
import a6 from '../assets/a6.webp'
import c1 from '../assets/c1.webp'
import c2 from '../assets/c2.webp'
import c3 from '../assets/c3.webp'
import c4 from '../assets/c4.webp'
import c5 from '../assets/c5.webp'
import { use } from "react";


const Storedata =  createContext()

function UseDataProvider (data) {

    const [men,setMen] = useState([
        {
            id:1,
            img:m1,
            add:"Add to Cart",
            buy:"Buy Now",
            price:"500"
        },
        {
            id:2,
            img:m2,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:3,
            img:m3,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:4,
            img:m4,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:5,
            img:m5,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        }
    ])

        const [women,setWomen] = useState([
        {
            id:6,
            img:w1,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:7,
            img:w2,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:8,
            img:w3,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:9,
            img:w4,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:10,
            img:w5,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        }
    ])

    const [shoe,setShoe] = useState([
        {
            id:11,
            img:s1,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:12,
            img:s2,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:13,
            img:s3,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:14,
            img:s4,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:15,
            img:s5,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        }
    ])

        const [acc,setAcc] = useState([
        {
            id:16,
            img:a1,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:17,
            img:a2,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:18,
            img:a3,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:19,
            img:a4,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:20,
            img:a5,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:21,
            img:a6,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        }
    ])

    const [cardio,setCardio] = useState([
        {
            id:22,
            img:c1,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:23,
            img:c2,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:24,
            img:c3,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:25,
            img:c4,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        },
        {
            id:26,
            img:c5,
            add:"Add to Cart",
            price:"500",
            buy:"Buy Now"
        }
    ])

    const [mycart,setMycart] = useState([])
    const addtocart = (products) => {
        const exists = mycart.find((s) => s.id === products.id)
        if(exists){
           return alert("Already added")
        }
        if(!exists) {
            setMycart([...mycart,products])
        }
        alert("added to my cart")
        console.log(mycart)
    }
    const deletecart = (id) => {
    const updated = mycart.filter((s) => s.id !== id);
    setMycart(updated);
    alert('Removed from cart ')
  }

    return (
        <Storedata.Provider value={{men,women,shoe,cardio,acc,addtocart,mycart,deletecart}}>
            {data.children}
        </Storedata.Provider>
    )
}
export default UseDataProvider
export {Storedata}