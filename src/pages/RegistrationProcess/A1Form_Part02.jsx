import React from "react";

function A1Form_Part02() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white m-2 sm:m-5 xl:m-8 p-4 sm:p-7 xl:p-10 rounded-lg flex flex-col gap-5"
    >
      {/* Education Qualification */}
      <div className="flex flex-col gap-4">
        <h4 className="text-lg sm:text-xl xl:text-2xl font-bold">
          4. EDUCATION QUALIFICATION
        </h4>

        {/* Year of GCE (A/L) Examination */}
        <div className="flex gap-2 items-center">
          <label className="text-sm sm:text-lg xl:text-xl font-medium ml-12">
            i. Year of the GCE (A/L) Examination :-
          </label>
          <input
            type="text"
            name="yearOfALExamination"
            className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
          />
        </div>

        {/* Index No of GCE (A/L) Examination */}
        <div className="flex gap-2 items-center">
          <label className="text-sm sm:text-lg xl:text-xl font-medium ml-12">
            ii. Index No of the GCE (A/L) Examination :-
          </label>
          <input
            type="text"
            name="indexOfALExamination"
            className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
          />
        </div>

        {/* Average Z Score */}
        <div className="flex gap-2 items-center">
          <label className="text-sm sm:text-lg xl:text-xl font-medium ml-12">
            iii. Average Z Score :-
          </label>
          <input
            type="text"
            name="avgZscore"
            className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
          />
        </div>

        {/* GCE (A/L) Examination */}
        <div className="flex flex-col gap-4">
          <h5 className="text-sm sm:text-lg xl:text-xl font-medium ml-12">
            iv. GCE (A/L) Examination :-
          </h5>

          {/* Subject & Result Fields */}
          <div className="flex gap-2 items-center ml-16">
          <label className="text-sm sm:text-lg xl:text-xl font-medium ml-1">
             Subject :-
          </label>
           <input
            type="text"
            name="subject1"
            className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
           />
         <label className="text-sm sm:text-lg xl:text-xl font-medium ml-5">
            Result :-
         </label>
         <select
           name="result1"
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[100px] sm:w-[150px] xl:w-[200px]"
         >
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="S">S</option>
          <option value="F">F</option>
        </select>
      </div>
            
     <div className="flex gap-2 items-center ml-16">
      <label className="text-sm sm:text-lg xl:text-xl font-medium ml-1">
         Subject :-
      </label>
      <input
        type="text"
        name="subject2"
        className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
      />
      <label className="text-sm sm:text-lg xl:text-xl font-medium ml-5">
         Result :-
      </label>
       <select
        name="result2"
        className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[100px] sm:w-[150px] xl:w-[200px]"
       >
       <option value=""></option>
       <option value="A">A</option>
       <option value="B">B</option>
       <option value="C">C</option>
       <option value="S">S</option>
       <option value="F">F</option>
      </select>
    </div>
     <div className="flex gap-2 items-center ml-16">
     <label className="text-sm sm:text-lg xl:text-xl font-medium ml-1">
        Subject :-
     </label>
       <input
         type="text"
         name="subject3"
         className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[200px] sm:w-[300px] xl:w-[400px]"
       />
      <label className="text-sm sm:text-lg xl:text-xl font-medium ml-5">
          Result :-
      </label>
       <select
        name="result3"
        className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black px-3 py-1 text-sm sm:text-base xl:text-lg w-[100px] sm:w-[150px] xl:w-[200px]"
       >
         <option value=""></option>
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="C">C</option>
         <option value="S">S</option>
         <option value="F">F</option>
       </select>
     </div>
    </div>
  </div>


    </form>
  );
}

export default A1Form_Part02;
