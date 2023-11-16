import React from 'react'
import { AppsButton } from './Buttons/AppsButton'

export type AppsCardsProps = {
  src: string
  name: string
  subtitle: string
  title: string
  img: string
}

const AppsCards: React.FC<AppsCardsProps> = ({
  src,
  name,
  title,
  subtitle,
  img,
}) => (
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
    <div>
      <h4 className="text-white font-Lato text-xl font-medium leading-[26.544px] tracking-wide mt-5 ml-7">
        {title}
      </h4>
    </div>
    <div className="flex flex-row  mt-9 ml-5">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex ml-3 flex-col">
        <h4 className="text-white font-Lato text-md font-medium leading-[26.544px] tracking-wide ">
          {name}
        </h4>

        <p className="font-poppins font-normal text-[11px] leading-[24px] text-white">
          {subtitle}
        </p>
      </div>
    </div>
    <div>
      {' '}
      <AppsButton>
        <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-[0.72px] uppercase mt-6 ">
          LIVE DEMO
        </h1>
      </AppsButton>
    </div>
  </div>
)

export default AppsCards
