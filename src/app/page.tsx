'use client';
import ReactTypingEffect from 'react-typing-effect';
import { render } from "react-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import landing from "./_images/landing.jpg";
import landingSmall from "./_images/landingSmall.jpg";
import landing1 from "./_images/landing1.jpg";
import landing1Small from "./_images/landing1Small.jpg";
import landing2 from "./_images/landing2.jpg";
import landing2Small from "./_images/landing2Small.jpg";
import landing3 from "./_images/landing3.jpg";
import landing3Small from "./_images/landing3Small.jpg";
import landing4 from "./_images/landing4.jpg";
import landing4Small from "./_images/landing4Small.jpg";
import landing5 from "./_images/landing5.jpg";
import landing5Small from "./_images/landing5Small.jpg";
import rent from "./_images/rent.png";
import wear from "./_images/wear.png";
import returnpic from "./_images/return.png";
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive'; // If you don't have this library, install it: npm install react-responsive
import axios from 'axios';

const isSmallScreen = () => {
  if (useMediaQuery({ maxWidth: 400 })) {
    return true;
  }
  else {
    return false;
  }

}

const imageUrl = landing.src;
const imageSmallUrl = landingSmall.src;
const image1Url = landing1.src;
const image1SmallUrl = landing1Small.src;
const image2Url = landing2.src;
const image2SmallUrl = landing2Small.src;
const image3Url = landing3.src;
const image3SmallUrl = landing3Small.src;
const image4Url = landing4.src;
const image4SmallUrl = landing4Small.src;
const image5Url = landing5.src;
const image5SmallUrl = landing5Small.src;
const rentUrl = rent.src;
const wearUrl = wear.src;
const returnUrl = returnpic.src;
const Landing: React.FC = () => {


  const slides = [
    {
      url: isSmallScreen() ? imageSmallUrl : imageUrl,
    },
    {
      url: isSmallScreen() ? image1SmallUrl : image1Url,
    },
    {
      url: isSmallScreen() ? image2SmallUrl : image2Url,
    },

    {
      url: isSmallScreen() ? image3SmallUrl : image3Url,
    },
  ];

  const secondImg = [
    { url: image4Url },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <section>
      <div className="container mx-auto flex py-16 items-center justify-center flex-col">
        <div className='group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-screen h-screen bg-cover bg-center duration-500'
          ></div>
          <div className='absolute top-0 pt-4 w-full h-full flex items-center justify-center'>
            <ReactTypingEffect className='text-white text-center sm:text-3xl font-bold' speed={100} eraseSpeed={100} typingDelay={500}
              text={['RENT DESIGNER CLOTHING FOR ANY OCCASION']}
            />
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
          <div
            className="w-screen h-screen relative bg-cover bg-center"
            style={{ backgroundImage: isSmallScreen() ? `url(${image5SmallUrl})` : `url(${image5Url})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-24">
              <button className="box-border py-3 px-8  w-150px tracking-[1.5px] flex  bg-white text-black">
                <div className="uppercase flex items-center justify-center">
                  View Summer 2023 Collection
                </div>
              </button>
            </div>
          </div>

          <div
            className="sm:w-screen h-screen relative bg-cover bg-center"
            style={{ backgroundImage: isSmallScreen() ? `url(${image4SmallUrl})` : `url(${image4Url})` }}
          >
            <div className="absolute bottom-0 left-0 ml-40 flex justify-center mb-40">
              <button className="box-border py-3 px-8 border-[1px] w-150px tracking-[1.5px] flex border-none bg-white text-black">
                <div className="uppercase flex items-center justify-center">
                  View Trend 1
                </div>
              </button>
            </div>
          </div>

          <div
            className=" w-screen h-screen relative bg-cover  sm:bg-relative"
            style={{ backgroundImage: isSmallScreen() ? `url(${image3SmallUrl})` : `url(${image3Url})` }}
          >
            <div className="absolute bottom-0 right-0 mr-40 flex justify-center mb-40">
              <button className="rotate-0 box-border py-3 px-8 border-[1px] w-150px tracking-[1.5px] flex border-none bg-white text-black">
                <div className="uppercase flex items-center justify-center">
                  View Trend 2
                </div>
              </button>
            </div>
          </div>

          <div className="container mx-auto py-16">
            <h1 className="text-center text-4xl sm:text-3xl font-bold uppercase">How it works</h1>
            <div className="mx-auto py-8  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="px-21 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-24">
                <div>
                  <img src={rentUrl}></img>
                  <h2 className=" text-center text-4xl sm:text-3xl py-4">Rent</h2>
                  <p className='text-center'>Choose your desired outfits from our thoughtfully curated selection.</p>
                </div>
                <div>
                  <img src={wearUrl} ></img>
                  <h3 className=" text-center text-4xl sm:text-3xl py-4">Wear</h3>
                  <p className='text-center'>Flaunt your style confidently and make a statement wherever you go.</p>
                </div>
                <div>
                  <img src={returnUrl}></img>
                  <h4 className=" text-center text-4xl sm:text-3xl py-4">Return</h4>
                  <p className='text-center'>After your stylish adventure, easily return the rental and explore more fashion options.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Landing;