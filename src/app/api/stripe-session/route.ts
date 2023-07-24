// import { NextRequest,NextResponse } from "next/server";
// import Stripe from 'stripe'

// const key=process.env.STRIPE_SECRET_KEY || ""

// const stripe=new Stripe(key,{

//    apiVersion: "2022-11-15", 
// })

// export async function POST(request:NextRequest){
//     const body=await request.json()
//     // console.log('body', body)

//     try {

//         if(body.product?.length > 0){
//             let items = body.product?.map((item:any)=>{
               
//                 console.log('item: ', item)
//                 return{
//                     price_data:{
//                         currency:"pkr",
//                         product_data:{
//                             name:item.name,
//                             unit_amount:item.price *100,
//                         },
//                     },
//                     quantity:item.quantity,
//                     adjustable_quantity:{
//                         enabled:true,
//                         minimum:1,
//                         maximum:10
//                     },

//                 };

//             });
//             console.log("items: ", items);

//             const session = await stripe.checkout.sessions.create({
//                submit_type:"pay",
//                 mode: "payment",
//                 payment_method_types:["card"],
//                 billing_address_collection:"auto",
//                 shipping_options:[

//                     {
//                         shipping_rate:"shr_1NWZCnCTT9LQa9WIZwHMwxfQ"
//                     },
//                     {
//                         shipping_rate:"shr_1NWZBRCTT9LQa9WIIurmlwCG"
//                     }
//                 ],
//                 line_items: items,
//                 phone_number_collection:{
//                     enabled:true,
//                 },
//                 success_url: `${request.headers.get("origin")}/?success=true`,
//                 cancel_url: `${request.headers.get("origin")}/?canceled=true`,
//               });
      
//               return NextResponse.json({session});

//         }
//         else{
//             return NextResponse.json({message:"No data found"});
//         }
//         // Create Checkout Sessions from body params.
     
        
//       } catch (err:any) {
//         console.log(err)
//         return NextResponse.json(err.message)

//       }
// }






































import { NextRequest,NextResponse } from "next/server";
import Stripe from 'stripe'

const key=process.env.STRIPE_SECRET_KEY || ""

const stripe=new Stripe(key,{

   apiVersion: "2022-11-15", 
})

export async function POST(request:NextRequest){
    const body=await request.json()
    // console.log('body', body)

    try {

        if(body.product?.length > 0){
            let items = body.product?.map((item:any)=>{
               
                console.log('item: ', item)
                return {
                    price_data: {
                      currency: "pkr",
                      unit_amount: item.price * 100, // Move unit_amount here
                      product_data: {
                        name: item.name,
                      },
                    },
                    quantity: item.quantity,
                    adjustable_quantity: {
                      enabled: true,
                      minimum: 1,
                      maximum: 10,
                    },
                  };
                });
              
                console.log("items: ", items); // Log the items array to inspect its structure
              

            const session = await stripe.checkout.sessions.create({
               submit_type:"pay",
                mode: "payment",
                payment_method_types:["card"],
                billing_address_collection:"auto",
                shipping_options:[

                    {
                        shipping_rate:"shr_1NWZCnCTT9LQa9WIZwHMwxfQ"
                    },
                    {
                        shipping_rate:"shr_1NWZBRCTT9LQa9WIIurmlwCG"
                    }
                ],
                line_items: items,
                phone_number_collection:{
                    enabled:true,
                },
                success_url: `${request.headers.get("origin")}/success`,
                cancel_url: `${request.headers.get("origin")}/?canceled=true`,
              });
              //  return NextResponse.redirect(session.url as string)
              return NextResponse.json({session});

        }
        else{
            return NextResponse.json({message:"No data found"});
        }
        // Create Checkout Sessions from body params.
     
        
      } catch (err:any) {
        console.log(err)
        return NextResponse.json(err.message)

      }
}