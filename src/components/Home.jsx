import React from 'react';
import homeImage from "../assets/home.jpg";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
        <div className="max-w-full mx-auto  flex flex-col items-center justify-center h-full px-10  md:flex-row">
            <div className="w-2/3">
                <img src={homeImage} alt="services" className="rounded-2xl h-4/5 mx-auto  md:w-full" />
            </div>
            <div className="flex flex-col justify-center ml-8 h-full w-1/2 ">
                <h2 className="text-4xl sm:text-7xl font-bold text-black"> We Service , Maintain And Safety-Check for Cars, UTES and 4WD </h2>
                <p className="text-gray-500 py-4 max-w-md">We offer quality auto repairs backed by years of experience!</p>
                

                <div>
                    <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"> call US</button>
                    <span>0470218747</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;