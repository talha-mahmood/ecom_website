import { loadStripe,Stripe } from '@stripe/stripe-js';

let stripePromise:Promise<null|Stripe>
const getStripePromise=()=>{
    const key=process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
    if(!stripePromise && !!key){
        stripePromise=loadStripe(key)
    }

     return stripePromise
}

export default getStripePromise









