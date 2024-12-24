import React from "react";
import Header from "../../components/Header";
import holder_signature from "../../assets/signature.png";
import SecondaryButton from "../../components/SecondaryButton";

function Renewal() {
  return (
    <>
      <Header title="Renewal of Registration" />
      <div className="bg-white m-2 sm:m-5 xl:m-8 p-4 sm:p-7 xl:p-10 rounded-lg flex justify-center">
        <form className="flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 xl:gap-14">
            <div className="flex flex-col gap-2 xl:gap-4">
              {/* Academic Year */}
              <div className="flex justify-between items-center w-[255px] sm:w-[355px] xl:w-[650px]">
                <label className="text-sm sm:text-lg xl:text-2xl font-medium">
                  Academic Year :
                </label>
                <input
                  type="text"
                  name="academic-year"
                  className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[465px] text-sm sm:text-lg xl:text-2xl py-1"
                />
              </div>
              {/* Faculty */}
              <div className="flex justify-between items-center w-[255px] sm:w-[355px] xl:w-[650px]">
                <label className="text-sm sm:text-lg xl:text-2xl font-medium">
                  Faculty :
                </label>
                <input
                  type="text"
                  name="faculty"
                  value="Faculty of Applied Science"
                  className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[465px] text-sm sm:text-lg xl:text-2xl py-1"
                />
              </div>
              {/* Course */}
              <div className="flex justify-between items-center w-[255px] sm:w-[355px] xl:w-[650px]">
                <label className="text-sm sm:text-lg xl:text-2xl font-medium">
                  Course :
                </label>
                <input
                  type="text"
                  name="course"
                  className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[465px] text-sm sm:text-lg xl:text-2xl py-1"
                />
              </div>
              {/* Specialization */}
              <div className="flex justify-between items-center w-[255px] sm:w-[355px] xl:w-[650px]">
                <label className="text-sm sm:text-lg xl:text-2xl font-medium">
                  Specialization :
                </label>
                <input
                  type="text"
                  name="specialization"
                  className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[465px] text-sm sm:text-lg xl:text-2xl py-1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 xl:gap-4">
              {/* Reg No */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-[255px] sm:w-[300px] xl:w-[410px]">
                  <label className="text-sm sm:text-lg xl:text-2xl font-medium">
                    Reg No :
                  </label>
                  <input
                    type="text"
                    name="regno"
                    className="border-2 border-black rounded-md focus:outline-1 focus:outline-black px-2 w-[145px] sm:w-[215px] xl:w-[300px] text-sm sm:text-lg xl:text-2xl py-1"
                  />
                </div>
              </div>

              {/* Year */}
              <div className="flex items-start sm:flex-col sm:gap-0 gap-5 xl:gap-2 py-1">
                <p className="text-sm sm:text-lg xl:text-2xl font-medium">
                  Year :
                </p>
                <div className="flex flex-col mt-[2px] gap-1 xl:gap-3 justify-center">
                  <label className="flex justify-center items-center space-x-4">
                    <input
                      type="radio"
                      name="year"
                      value="second"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-2xl font-semibold">
                      Second
                    </span>
                  </label>

                  <label className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="year"
                      value="third"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-2xl font-semibold">
                      Third
                    </span>
                  </label>

                  <label className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="year"
                      value="fourth"
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] rounded-full accent-[#391031]"
                    />
                    <span className="text-sm sm:text-lg xl:text-2xl font-semibold">
                      Fourth
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Renewal;
