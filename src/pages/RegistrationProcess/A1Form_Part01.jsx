import React from "react";
import holder_signature from "../../assets/signature.png"
import uov_logo from "../../assets/uov_logo.png"
function A1Form_Part01() {

  return (
    <>
      <div className="bg-white m-2 sm:m-5 xl:m-8 p-4 sm:p-7 xl:p-10 rounded-lg flex justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <header className="text-center mb-4">
            <img
              src={uov_logo}
              alt="University Logo"
              className="w-16 mx-auto mb-2"
            />
            <h1 className="text-xl font-semibold">UNIVERSITY OF VAVUNIYA</h1>
            <p className="text-sm text-gray-600">Personal Data of Students</p>
            <p className="text-sm text-gray-600">
              Student Admission for the Academic Year 2022/23
            </p>
          </header>


          <form
            className="flex flex-col items-center gap-5">
            {/* Enrollment Number */}
            <div className="mb-4">
              <label className="text-sm sm:text-lg xl:text-2xl font-medium uppercase">
                1. Enrollment No :-
              </label>
            </div>

            {/* Name */}

            <div className="mb-4">
              <label className="text-sm sm:text-lg xl:text-2xl font-medium uppercase">
                2. Name :-
              </label>
              <div className="flex flex-col sm:flex-row gap-10 sm:gap-7 w-[255px] sm:w-[673px] xl:w-[1115px]">
                <label className="text-sm sm:text-lg xl:text-xl font-medium">
                  &nbsp;&nbsp;&nbsp;i Title :-
                </label>
                <div className="flex gap-2 sm:gap-7 ml-9">
                  <label className="flex items-center space-x-1 sm:space-x-2 xl:space-x-4">
                    <input
                      type="radio"
                      name="state"
                      value="Ref"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-xl font-semibold">
                      Ref.
                    </span>
                  </label>
                  <label className="flex items-center space-x-1 sm:space-x-2 xl:space-x-4">
                    <input
                      type="radio"
                      name="state"
                      value="Mr"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-xl font-semibold">
                      Mr.
                    </span>
                  </label>
                  <label className="flex items-center space-x-1 sm:space-x-2 xl:space-x-4">
                    <input
                      type="radio"
                      name="state"
                      value="Mrs"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-xl font-semibold">
                      Mrs.
                    </span>
                  </label>
                  <label className="flex items-center space-x-1 sm:space-x-2 xl:space-x-4">
                    <input
                      type="radio"
                      name="state"
                      value="Miss"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-xl font-semibold">
                      Miss.
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center  w-[255px] sm:w-[355px] xl:w-[650px]">
                <label className="text-sm sm:text-lg xl:text-sm font-medium">
                  (other please specify) 
                </label>
                <input
                  type="text"
                  name="specify"
                  className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[465px] text-sm sm:text-lg xl:text-2xl py-1"
                />
              </div>
              <input
                type="text"
                placeholder="Others (specify)"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Name with initials"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Name denoted by initials"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ADDRESS:
              </label>
              <textarea
                placeholder="Permanent Address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Province"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="District"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Divisional Secretariat"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="National Identity Card No"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Mobile No"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              NEXT
            </button>
          </form>
        </div>
      </div>

    </>
  );
}

export default A1Form_Part01;
