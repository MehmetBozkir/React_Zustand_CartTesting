import React from "react";
import Link from "next/link";

function Body() {
  return (
    <div className="hero min-h-screen shadow-2xl bg-opacity-60 mt-10 mb-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold drop-shadow-2xl ">
            Welcome <br/> To <br/> React Coffee!
          </h1>
          <p className="py-6 mt-10">
            We believe that every cup carries a story. Whether youre seeking an
            energy boost to start your day or looking to spend quality time with
            friends over delightful conversations, this place is for you. 
          </p>
          <Link href={"/product"} className="btn btn-success text-white">
            See Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
