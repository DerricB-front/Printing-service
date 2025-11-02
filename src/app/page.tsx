import React from "react"
import { FieldComponent } from "@/components/FieldComponent"

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10 py-10">

                {/* Left Section */}
                <div className="flex flex-col flex-1 space-y-6 text-gray-700">
                    <div>
                        <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold text-gray-900">
                            Print for Me!
                        </h2>
                        <p className="text-center md:text-left text-gray-600 text-base md:text-lg mt-2">
                            Product by ITSO, to make it easier to avail our product.
                        </p>
                    </div>

                    {/* Form field guidance */}
                    <div className="space-y-4 text-sm md:text-base">
                        <p>
                            🧑‍💻 <span className="font-semibold">Full Name:</span> Enter your complete legal name so your order can be verified upon pickup.
                        </p>
                        <p>
                            ✉️ <span className="font-semibold">Email:</span> Make sure your email is valid — we’ll send updates or notices about your file here. As for the sending updates and notice, unfortunately we don't have money to buy domain and send you updates blah blah blah.
                        </p>
                        <p>
                            📄 <span className="font-semibold">Number of Copies:</span> Specify how many printed copies you want for your document.
                        </p>
                        <p>
                            📎 <span className="font-semibold">Upload File:</span> Upload only PDF files (no images or Word documents) to avoid processing issues.
                        </p>
                        <p>
                            📏 <span className="font-semibold">Coupon Size:</span> Choose from available print sizes such as A4, A5, or Letter.
                        </p>
                        <p>
                            💬 <span className="font-semibold">Comments:</span> Add any notes or instructions (like print color, sides, or binding preferences). If you don't have someone to talk to, talk to me HAHA!
                        </p>
                        <p className="text-red-600">
                            ⏰ <span className="font-semibold">Date & Time for Retrieval:</span>
                            Please select a date and a time between <span className="underline font-bold">2:00 PM and 5:00 PM</span>.
                            Submissions outside these hours will be marked as <span className="font-bold">invalid</span>.
                        </p>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="flex-1 w-full">
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
                        <FieldComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home































// import React from 'react'
// import {FieldComponent} from '@/components/FieldComponent'
//
// const Home = () => {
//     return (
//         <div className="w-10/12 m-auto flex">
//             <div className="flex flex-col flex-1">
//                 <h2 className="text-center text-3xl">
//                     Print for Me!
//                 </h2>
//             </div>
//             <div className="flex-1">
//                 <FieldComponent />
//             </div>
//
//         </div>
//
//     );
// }
//
// export default Home