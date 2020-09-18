import React from "react";

const Home = () => {
  return (
    <>
      <section
        className="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center"
        style={{
          background:
            "url(https://source.unsplash.com/random/1920x1080) no-repeat center",
        }}
      >
        <label
          htmlFor=""
          className="uppercase tracking-extrawide text-white text-xs font-hairline mt-8"
        >
          Welcome
        </label>
        <h3 className="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal">
          Differentiate Yourself And Attract More Attention Sales And Profits
        </h3>
      </section>

      {/* sections */}

      <section className="text-gray-700 body-font">
        <div className="container px-8 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="font-sans bg-pink-400 text-white py-8 px-4">
        <div className="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
          <a href="/" className="block mr-4 w-1/2">
            <img src="/logo512.png" className="w-32" alt="logo" />
          </a>
          <div className="w-1/2 flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Product
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Features
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Company
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Works
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Info
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Customer Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-white hover:text-gray-400 no-underline"
                >
                  Started Guide
                </a>
              </li>
            </ul>
            <div className="text-gray-700 flex flex-col">
              <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Follow Us
              </div>
              <div className="flex pl-4 justify-start">
                <a
                  className="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                  href="#"
                >
                  <i className="fab fa-github-alt"></i>
                </a>
                <a
                  className="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                  href="#"
                >
                  <i className="fab fa-slack"></i>
                </a>
                <a
                  className="block flex items-center text-white hover:text-gray-500 no-underline"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 text-pink-700 border-t border-pink-900 text-center">
          ©2020 Eleibee. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
