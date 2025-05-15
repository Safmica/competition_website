import React from "react";

const PaymentUIUX = () => {
  return (
    <div className="h-screen text-white bg-cover bg-center bg-fixed bg-black font-sans mt-13">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center mb-14 ml-5">
          <p className="text-4xl font-bold mb-10"> Payment</p>
          <img
            src="\UIUX IMG.jpg"
            alt="Hackathon"
            className="rounded-lg shadow-lg mb-6 h-100 w-200 "
          />
          <h2 className="text-2xl font-semibold mb-2">
           UI/UX Registration
          </h2>
          <div className="bg-gray-900 w-95 h-20 rounded mb-4">
            <p className="ml-2 text-">
              Showcase your design expertise by creating innovative, responsive,
              and functional UI/UX design.
            </p>
          </div>
          <p className="bg-gradient-to-r from-[#A951FF] to-[#FD4F53] bg-clip-text text-transparent font-bold text-4xl ">
            Rp 80.000,00
          </p>
        </div>

        {/* Right Section */}
        <div className=" lg:w-1/3.5 p-5 ml-28 mr-4 mt-7">
          <div className="bg-gray-900 border border-pink-500 rounded-lg p-6 ">
            <h3 className="text-lg font-semibold mb-4">Transfer to:</h3>

            <div className="mb-4">
              <label className="form-label">Bank Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="BCA"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Account Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="ZAKI MEZENTZ"
                readOnly
              />
            </div>

            <div className="mb-6">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                className="form-control"
                defaultValue="1203 1029 3012 9"
                readOnly
              />
            </div>

            <h4 className="text-md font-semibold mb-2">Confirm Payment</h4>
            <p className="text-sm text-blue-400 mb-3">
              Please upload proof of payment. We will confirm it as soon as
              possible.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <input type="file" className="form-control" />
              <div className="bg-green-600 text-white px-2 py-1 text-sm rounded">
                60%
              </div>  
            </div>

            <button className="w-full text-white py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-semibold">
              Submit Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentUIUX;
