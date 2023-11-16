import React from 'react'

export type AppsCardsProps = {
  src: string
  name: string
  title: string
  img: string
}

const AppsCards: React.FC<AppsCardsProps> = ({ src, name, title, img }) => (
  <div
    style={{
      width: '397px',
      height: '537px',
      flexShrink: 0,
      backgroundImage: `url('/assets/apps/AppsBg.png')`,
      backgroundPosition: '0% 0%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      background: `lightgray 0% 0% / 100px 100px, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(217, 217, 217, 0.04) 100%) url('/assets/apps/AppsBg.png')`,
      boxShadow: '0px 4px 20px -1px rgba(0, 0, 0, 0.00)',
      backdropFilter: 'blur(25px)',
    }}
  >
    <div className="flex items-center">
      <img
        src={src}
        alt={name}
        className="w-[361px] h-[265px] flex-shrink-0 border-[0px] rounded-[10px] mt-4  ml-4 relative"
      />
    </div>

    <div className="flex flex-row  mt-20 ml-5">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex ml-3 flex-col">
        <h4 className="text-white font-Lato text-xl font-medium leading-[26.544px] tracking-wide uppercase">
          {name}
        </h4>

        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
          {title}
        </p>
      </div>
    </div>
    <div>
      {' '}
      <a href="/another-link" className="cursor-pointer ">
        <img
          src={'/SVGs/AppsButton.svg'}
          alt="Logo"
          className="w-259 h-33 flex-shrink-0 ml-4 mt-7 "
        />
      </a>
    </div>
  </div>
)

export default AppsCards
