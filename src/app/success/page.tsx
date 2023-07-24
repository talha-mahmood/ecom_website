import Link from "next/link"

const Checkoutsuccess=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h1>
        <p className="text-gray-600">
          Thank you for your purchase.
        </p>
        <Link href="/" className="text-2xl font-bold mb-4 text-blue-600">Back to Home</Link>
      </div>
    </div>

    )
}

export default Checkoutsuccess