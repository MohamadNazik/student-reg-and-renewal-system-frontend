import React from "react";

function A1Form_Part02() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white m-2 sm:m-5 xl:m-8 p-4 sm:p-7 xl:p-10 rounded-lg flex flex-col gap-5"
    >
      {/* Education Qualification */}
      <div className="flex flex-col gap-4">
        <h4 className="text-lg sm:text-xl xl:text-2xl font-bold">
          4. EDUCATION QUALIFICATION
        </h4>
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
      </div>
    </form>
  );
}

export default A1Form_Part02;
