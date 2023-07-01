import React from 'react'

const Services = () => {

    const list = [
        {
            id:1,
            title: "All In One Package",
            price: 130,
            source: "All of it: oil change, battery test,coolant and hydraulic fluids, light check, tires, exhaust, engine oil replacement, engine tuning, suspension.",
        },
        {
            id:2,
            title: "Oil Change + Filters",
            price: 110,
            source: "Choose from both synthetic and conventional motor oils.",
        },
        {
            id:3,
            title: "Coolant and Hydraulic Fluids",
            price: 50,
            source: "We can check a lot of fluids during your oil change, but if you need a more comprehensive look, let us know!  This is a full power steering and transmission fluid flush service.",
        },
        {
            id:4,
            title: "Tire Rotation",
            price: 40,
            source: "Rotation fee is waived upon the purchase of new tires.",
        }
    ]


   
  return (
    <div name="services" className="w-full h-fit bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-full mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
            <div className="justify-center text-center" >
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Services</p>
                <p className="py-6 text-2xl font-bold"> Routine Service</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-28 text-center py-8 px-16 sm:px-0">

                {
                    list.map(({id, title, price, source}) =>(

                    <div key={id} className="mb-8 mx-10">
                    <div className="flex flex-row mb-0 ">
                         <div className="text-4xl font-bold p-2">{title}
                         </div>
                        <div className="ml-12 text-4xl font-bold">{price}
                        </div>
                    </div>

                    <div className="mt-4 text-2xl font-bold  text-justify">
                     {source}
                    </div>
                    
                </div>
                    ))
                }
            </div>


            <div className="justify-center text-center" >
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">RWC and COI inspection</p>
                <p className="py-6 text-2xl font-bold"> We do Road worthy certification and Taxi/Uber inspection.</p>
            </div>

           


            
            
        </div>
    </div>
  )
}

export default Services