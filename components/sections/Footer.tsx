// Import necessary dependencies and styles
import React from 'react'
import { Marquee } from '../ui/Marquee'
import { Companies, bannerTexts, footerLinks, socialMedia } from '@/utils'
import styles from '@/styles/style'

// Define the Footer component
const Footer = () => (
  <>
    {/* Marquee Section */}
    <div>
      <Marquee items={bannerTexts} className="flex-shrink-0" />
    </div>

    {/* Main Footer Section */}
    <section
      className={` w-full relative`}
      style={{
        background: `url('/assets/images/footer.png') lightgray -0.573px -40.736px / 100.066% 108.213% no-repeat`,
        mixBlendMode: 'color-dodge',
      }}
    >
      <div
        className={`flex flex-wrap justify-center md:flex-row flex-col items-center mb-8 w-full`}
      >
        {/* Logo and Description */}
        <div className=" flex flex-col ">
          <div className="flex items-center">
            <img src={'/SVGs/logo.svg'} alt="Logo" width="32" height="32" />
            <span className="ml-2 text-white font-Ondo text-1xl font-extrabold leading-[43.994px] tracking-widest">
              board
            </span>
          </div>
          <p
            className={`${styles.paragraph} mt-4 max-w-[312px] font-poppins font-normal text-[18px] leading-[27px] text-white`}
          >
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic
            visuals.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-[1.5] w-full mx-auto flex flex-row flex-wrap md:mt-0 mt-10 text-center">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-8">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] text-white leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? 'mb-10' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Company Logos */}
      <div className=" text-center">
        <div className="flex flex-wrap justify-center ">
          {Companies.map((company: any) => (
            <div key={company.id} className="m-4">
              <img src={company.logo} alt={company.id} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-between items-center md:flex-row text-white flex-col pt-6">
        <div className="flex flex-row md:mt-0 mt-6">
          {/* Social Media Icons */}
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
          {/* Copyright Text */}© Copyright 2023, All Rights Reserved by board
        </div>
      </div>
    </section>
  </>
)

export default Footer
