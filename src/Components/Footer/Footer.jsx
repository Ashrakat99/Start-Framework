import React from 'react'

export default function Footer() {
  return (
    <footer className=" text-white ">
      <div className="mx-auto ">
        <div className="flex flex-wrap justify-between space-x-8 bg-gray-700 p-12 py-8">
          <div className=" text-white p-6 w-full sm:w-1/4">
            <h3 className="text-2xl font-bold text-center mb-2">LOCATION</h3>
            <p className="text-center mb-4">2215 John Daniel Drive</p>
            <p className="text-center">Clark, MO 65243</p>
          </div>
          <div className="p-6 w-full sm:w-1/4">
            <h3 className="text-2xl font-bold text-center mb-6">AROUND THE WEB</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white ">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
              <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-white">
              <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <div className=" text-white  w-full sm:w-1/4">
            <h3 className="text-2xl font-bold text-center mb-6">ABOUT FREELANCER</h3>
            <p className="text-center w-full">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>

        <div className="bg-gray-900 py-5 text-center text-sm">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  )
}
