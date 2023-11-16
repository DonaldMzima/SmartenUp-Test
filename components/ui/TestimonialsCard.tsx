import React from 'react'

export type FeedbackCardProps = {
  content: string
  name: string
  title: string
  img?: string
  src: string
  logo?: string
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  content,
  name,
  title,
  img = '/default-avatar-image.jpg',
  src,
  logo,
}) => (
  <div
    style={{
      width: '607px',
      height: '388px',
      flexShrink: 0,
      borderRadius: '10px',
      backgroundImage: `url('/assets/images/TestimonialVector.png')`,
      backgroundPosition: '0% 0%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      background:
        'lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(217, 217, 217, 0.04) 100%)',
      boxShadow: '0px 4px 20px -1px rgba(0, 0, 0, 0.00)',
      backdropFilter: 'blur(25px)',
    }}
  >
    <div>
      <img src={src} alt={src} />
    </div>
    <div className="flex items-start mb-8">
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
        {content}
      </p>
    </div>

    <img
      src="/assets/images/line.png"
      className="w-528 h-1"
      alt="Horizontal Line"
    />

    <div className="flex items-center">
      <img
        src={img || '/default-avatar-image.jpg'}
        alt={name}
        className="w-[48px] h-[48px] rounded-full mr-4"
      />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
      <div className="flex flex-row justify-end items-end ml-72">
        <img
          src="/assets/images/check.png"
          className="fill-current w-24.774 h-23.705 flex-shrink-0"
          alt="Check"
        />
        <h1 className="">Verified</h1>
      </div>
    </div>
  </div>
)

export default FeedbackCard
