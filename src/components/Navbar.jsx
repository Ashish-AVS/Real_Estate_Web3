import React from "react";
import { ethers } from "ethers";

export default function Navbar({ account, setAccount }) {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header class="flex justify-between items-center py-4 md:py-8 mb-4">
          <a
            href="/"
            class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              class="w-6 h-auto text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            RealEstate
          </a>

          <nav class="hidden lg:flex gap-12">
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Docs
            </a>
            <a href="#" class="text-indigo-500 text-lg font-semibold">
              Home
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              GitHub
            </a>
          </nav>

          {account ? (
            <a
              href="#"
              class="hidden bg-transparent hover:bg-blue-500 text-blue-700 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              {account.slice(0, 6) + "..." + account.slice(38, 42)}
            </a>
          ) : (
            <a
              href="#"
              class="hidden lg:inline-block bg-indigo-500 hover:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              onClick={connectHandler}
            >
              Connect
            </a>
          )}

          {/* Mobile View */}
          <button
            type="button"
            class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>

        <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
          <img
            // src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            loading="lazy"
            alt="Photo by Fakurian Design"
            class="w-full h-full object-cover object-center absolute inset-0"
          />
          <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
          <div class="sm:max-w-xl flex flex-col items-center relative p-4">
            <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
              {/* Join Us */}
            </p>
            <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
              Decentralised Marketplace for Real Estate
            </h1>

            <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <a
                href="#"
                class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Read Docs
              </a>

              <a
                href="#main"
                class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Buy
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
