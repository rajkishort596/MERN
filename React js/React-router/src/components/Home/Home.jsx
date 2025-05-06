import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex w-full justify-between items-center p-16">
        <div>
          <img
            className="w-96"
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Rural_Hours_-_Wood_Duck_white_background.jpg"
            alt="image1"
          />
        </div>
        <div className="flex flex-col gap-8 items-end">
          <h2 className="text-4xl font-bold sm:text-5xl">Wood Duck</h2>
          <p className="text-sm text-right font-medium w-[350px] text-gray-400">
            The wood duck or Carolina duck is a partially migratory species of
            perching duck found in North America. The male is one of the most
            colorful North American waterfowls.
          </p>

          <Link
            className=" text-white px-4 py-3 mt-8 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://www.hdwallpapers.in/download/colorful_butterfly_in_white_background_4k_hd_abstract-HD.jpg"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Beautifull Butterfly
      </h1>
    </div>
  );
};

export default Home;
