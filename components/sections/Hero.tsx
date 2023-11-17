import styles from '@/styles/style'
import Stats from '../ui/Stats'
import { bannerTexts } from '@/utils'
import { Marquee } from '../ui/Marquee'
import { TransparentButton } from '../ui/Buttons/TransparentButton'
import { MainButton } from '../ui/Buttons/MainButton'

// Import necessary modules and components

const Hero = () => {
  return (
    <>
      <section
        id="Products"
        className={`flex md:flex-row flex-col ${styles.paddingY} bg-#2d1e6b`}
        style={{
          background: `url('/assets/Artboard.png') lightgray -91.869px 41.66px / 102.737% 92.356% no-repeat`,
          mixBlendMode: 'color-dodge',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          flexShrink: 0,
        }}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col md:px-0 sm:px-6 px-4 ml-4 md:ml-16`}
        >
          <div className="flex flex-col md:flex-row md:justify-between uppercase items-center w-full">
            <h1 className="flex-1 font-ondo font-extrabold text-4xl md:text-6xl text-white leading-[76.245px]">
              Let your <br className="sm:block hidden" /> mind
              <span className="text-gradient"> explore </span> <br />
              Payment Method.
            </h1>
          </div>

          <p
            className={`max-w-full md:max-w-[470px] mt-3 md:mt-5 text-white font-lato text-base md:text-lg font-normal leading-[185.1%] tracking-[0.749px]`}
          >
            Playing electronic games, whether through consoles, computers,
            mobile phones, or another medium altogether. Gaming is a nuanced
            term that suggests regular gameplay, possibly as a hobby.
          </p>

          <div className="hidden md:hidden lg:block">
            <div className="flex flex-col md:flex-row items-start md:items-center mt-3 md:mt-5">
              <MainButton>
                <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-wide uppercase">
                  BUY NOW
                </h1>
              </MainButton>
              <TransparentButton>
                <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-[0.72px] uppercase">
                  <img src={'/assets/images/PlayNow.png'} />
                </h1>
              </TransparentButton>
            </div>

            <Stats />
          </div>
        </div>

        <div
          className={`hidden md:flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>

      <Marquee items={bannerTexts} tiltAngle={-3} />
      <div className="block md:hidden lg:hidden">
        <div className="flex mt-14">
          {' '}
          <MainButton>
            <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-wide uppercase">
              BUY NOW
            </h1>
          </MainButton>
          <TransparentButton>
            <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-[0.72px] uppercase">
              <img src={'/assets/images/PlayNow.png'} />
            </h1>
          </TransparentButton>
        </div>

        <Stats />
      </div>
    </>
  )
}

export default Hero
