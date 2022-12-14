import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../../Images/image/treatment.png";
import Button from "../../Shared/Button/Button";

const Care = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto lg:px-20 px-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex justify-center lg:justify-start lg:w-1/2 overflow-hidden">
            <img
              className="h-full w-full max-w-[500px] max-h-[450px] object-cover rounded-lg"
              src={treatment}
              alt=""
            />
          </div>

          <div className="text-center lg:text-left lg:mt-0 mt-10 w-full lg:w-1/2">
            <h1 className="text-4xl font-bold pr-5 text-[#3A4256]">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link to="/appointment">
              <Button>APPOINMENT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;
