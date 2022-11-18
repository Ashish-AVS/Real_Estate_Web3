import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./Navigation";
import Search from "./Search";
import Home from "./Home";

// ABIs
import RealEstate from "../abis/RealEstate.json";
import Escrow from "../abis/Escrow.json";

// Config
import config from "../config.json";

const HouseList = (props) => {
  const { homeList } = props;
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
            Houses for sale
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
            {homeList.map((home, idx) => (
              <>
                <div key = {idx}>
                  <a
                    href="#"
                    class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                  >
                    <img
                      src={home.image}
                      loading="lazy"
                      alt="Houses for rental"
                      class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div class="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                      <span class="text-gray-500">{home.attributes[0].value} ETH</span>
                      <span class="text-gray-800 text-lg lg:text-xl font-bold">
                        {home.attributes[1].value}
                      </span>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseList;
