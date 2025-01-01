import React from "react";

function UploadDocuments() {
  return (
    <>
      <div className="bg-white m-2 sm:m-5 xl:m-8 p-4 sm:p-7 xl:p-10 rounded-lg flex flex-col justify-start gap-3 xl:gap-5">
        <h3 className="text-md sm:text-lg xl:text-2xl font-semibold">
          8. Upload the scanned documents
        </h3>
        <p className="text-xs sm:text-sm xl:text-lg font-medium text-red-600 ml-4">
          Please make sure that all the documents are clear, scanned using a
          scanner and in the pdf format.
        </p>
        <div className="flex flex-col gap-3 xl:gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">i. Admission Letter sent by UGC :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">ii. Birth Certificate :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">iii. School Leaving Certificate :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">
              iv. National Identity Card – Both side :-
            </p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">v. G.C.E. (O/L) Result Sheet :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">vi. G.C.E. (A/L) Result Sheet :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">vii. Bank Slip :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">viii. A3 Form :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">ix. A4 Form :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">x. A5 Form :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">xi. A6 Form :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm xl:text-lg ml-4">
            <p className="font-medium">xii. Attestation Form :-</p>
            <input
              type="file"
              name=""
              id=""
              className="border border-black p-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadDocuments;
