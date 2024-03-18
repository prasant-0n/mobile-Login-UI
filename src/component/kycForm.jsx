import React from "react";

export default function () {
  return (
    <div className="container mx-auto px-4 py-8 h-[852px] w-[400px]  ">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col">
          <img
            src="https://t4.ftcdn.net/jpg/01/09/23/89/240_F_109238979_8qLUFshVRXss6meBwqudhyDCxAcURXYP.jpg"
            alt="Logo"
            className="h-20 w-40"
          />
          {/* Adjust the height and width as needed */}
          <h1 className=" text-2xl font-bold text-blue-600 mb-4">
            Let's get you started!
          </h1>
          <span className=" text-gray-400">
            Fill the Following details to get started with your online KYC.
          </span>
        </div>
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label
                className=" font-bold block text-sm text-gray-700 mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="fullName"
                type="text"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="contactPhone"
              >
                Contact Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="contactPhone"
                type="tel"
                placeholder=" (+1) 419-346-8170"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="email"
                type="email"
                placeholder="janedoe@mycompany.org"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                className="shadow appearance-none border rounded-lg	 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="dob"
                type="date"
                placeholder="08-06-1987"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="address"
              >
                Current Address
              </label>
              <input
                className="shadow  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="contactPhone"
                type="tel"
                placeholder="Suite 784 89877 Arlen Station, New Roxyland, CA 88974-6608"
              />
            </div>
          </form>
        </div>
        <div className="border-b border-gray-300 my-4"></div>

        <div className="p-4 flex items-center justify-center">
          <button className=" w-[200px] bg-[#486df2] hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
            Sign Up{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
