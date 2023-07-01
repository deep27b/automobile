import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 text-black">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact Us</p>
                <p className="py-6 text-2xl font-bold">
                    Submit the enquiry below
                </p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/312f30e0-1922-485e-97be-4229db11a513" method="POST"  className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name"  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

                    <input type="tel" name="phone" placeholder="Enter your phone number"  className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
                    <textarea name="message" placeholder="Enter your enquiry" rows="10" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none">
                    </textarea>
                    <button className="text-white bg-gradient-to-b from bg-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact