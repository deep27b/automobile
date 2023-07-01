import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 text-black ">
        <div className="flex flex-col p-4 justify-center  items-center max-w-full mx-auto h-full">
            <div className="pb-8 text-center">
                <p className="text-4xl font-bold ">Contact Us</p>
          
            </div>
            <div className="w-8/12 grid grid-cols-1 sm:grid-cols-2 justify-center  ">
                <div className=" pl-12 pt-4">
                <form action="https://getform.io/f/312f30e0-1922-485e-97be-4229db11a513" method="POST"  className="flex flex-col w-full  md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name"  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

                    <input type="tel" name="phone" placeholder="Enter your phone number"  className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
                    <textarea name="message" placeholder="Enter your enquiry" rows="10" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none">
                    </textarea>
                    <button className="text-white bg-gradient-to-b from bg-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's talk
                    </button>
                </form>
            </div>
            <div >
            <p className="py-6 text-4xl font-bold ">
                    K and S Mobiled Mechanic
                </p> 
                <p className="py-6 text-2xl font-bold ">
                    Address
                   <p>Karanjosan007@gmail.com</p> 
                </p> 
                <p className=" text-2xl font-bold ">
                   
                </p>
                <p className="py-6 text-4xl font-bold ">
                Hours
                </p> 
                <p className=" text-2xl font-bold ">
                Appointments Only
                </p> 
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Contact