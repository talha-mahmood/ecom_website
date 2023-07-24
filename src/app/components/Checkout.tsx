'use client'
// import { loadStripe } from "@stripe/stripe-js"
import getStripePromise from "../lib/stripe"
const product=[
    {
        product:1,
        name:"Stripe Product",
        price:400,
        quantity:3
    },
    {
        product:2,
        name:"Stripe Product2",
        price:40,
        quantity:2
    },
    {
        product:3,
        name:"Stripe Product3",
        price:4000,
        quantity:1
    },
]

const StripeCheckOutButton= ()=>{
// console.log(getStripePromise)

const handleCheckout=async()=>{

    try{
        const stripe= await getStripePromise()
        if (!stripe) {
         console.error("Stripe instance not available.");
         return;
       }
    
    const response=await fetch ("/api/stripe-session",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        cache:"no-cache",
        body:JSON.stringify({product})
    });

    const data = await response.json()
    if(data.session){
        stripe?.redirectToCheckout({sessionId:data.session.id})
        // console.log(" file:Checkout.tsx:17 `handleCheckout ` response",     data.session)
    
    }
    if (!response.ok) {
        throw new Error("Network response was not ok");
      }

    } catch (error) {
        console.error("Error during checkout:", error);
    }
}
return(
<div className="py-5">
    <button className="bg-green-500 py-3 px-3 rounded-md " onClick={handleCheckout}>Check Out</button>
</div>


)
}

export default  StripeCheckOutButton