import styles from '@/styles/style'
import Stats from './Stats'

const Hero = () => {
  return (
    <section
      id="Products"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        background: `url('/assets/Artboard.png') lightgray -91.869px 41.66px / 102.737% 92.356% no-repeat`,
        mixBlendMode: 'color-dodge',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '947px',
        flexShrink: 0,
      }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-ondo font-extrabold text-6xl text-white leading-[76.245px]">
            Let your <br className="sm:block hidden" /> mind
            <span className="text-gradient"> explore </span>{' '}
          </h1>
        </div>

        <h1 className="font-ondo font-extrabold text-5xl text-white leading-[76.245px] w-full">
          Payment Method.
        </h1>

        <p
          className={`max-w-[470px] mt-5 text-white font-lato text-base md:text-lg font-normal leading-[185.1%] tracking-[0.749px]`}
        >
          Playing electronic games, whether through consoles, computers, mobile
          phones, or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
        <div className="flex mt-5">
          <a href="/link-to-where-you-want-to-go" className="cursor-pointer">
            <img
              src={'/SVGs/gradientButton.svg'}
              alt="Logo"
              className="w-232 h-74 flex-shrink-0"
            />
          </a>
          <a href="/another-link" className="cursor-pointer">
            <img
              src={'/SVGs/colorlessButton.svg'}
              alt="Logo"
              className="w-232 h-74 flex-shrink-0"
            />
          </a>
        </div>

        <Stats />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero
