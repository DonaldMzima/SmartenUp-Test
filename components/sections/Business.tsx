import styles, { layout } from '@/styles/style'
import { bannerTexts, features } from '@/utils'
import { Marquee } from '../ui/Marquee'
import { TransparentButton } from '../ui/Buttons/TransparentButton'
import { MainButton } from '../ui/Buttons/MainButton'

type FeatureCardProps = {
  src: string
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ src, index }) => (
  <div
    className={`p-6 ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
    style={{
      width: '451.136px',
      height: '366.969px',
      flexShrink: 0,
      borderRadius: '11.222px',
      backgroundImage: `url(${src})`,
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>
)

const Business = () => (
  <>
    <section id="features" className={layout.section}>
      <div
        className={`${layout.sectionImg} flex flex-col items-center justify-center`}
      >
        <h1 className="flex-1 font-ondo font-extrabold text-6xl uppercase text-white leading-[76.245px]">
          Choose Your <br className="sm:block hidden" />
          <span className="text-gradient"> Favorite </span> Games
        </h1>

        <p
          className={`max-w-[470px] mt-5 text-white font-lato text-base md:text-lg font-normal leading-[185.1%] tracking-[0.749px]`}
        >
          Playing electronic games, whether through consoles, computers, mobile
          phones, or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>

        <div className="flex flex-wrap justify-center gap-0 mt-60">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>

        <div className="flex mt-48">
          {' '}
          <MainButton>
            <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-wide uppercase">
              VIEW ALL
            </h1>
          </MainButton>
          <TransparentButton>
            <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-[0.72px] uppercase">
              <img src={'/assets/images/PlayNow.png'} />
            </h1>
          </TransparentButton>
        </div>
        <div className="flex mt-48">
          <div
            style={{
              borderRadius: '10px',
              backgroundPosition: '0% 0%',
              backgroundImage: `url("/assets/images/Rectangle5.png")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              background:
                ' lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(217, 217, 217, 0.04) 100%)',
              boxShadow: '0px 4px 20px -1px rgba(0, 0, 0, 0.00)',
              width: '1240px',
              height: '556px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={'/assets/images/transformed.png'}
              alt="transformed"
              className="w-725 h-639 flex-shrink-0 bg-lightgray bg-center bg-cover mb-24 bg-no-repeat"
            />
            <div className="flex flex-col justify-center pl-10">
              <h1 className="w-531 text-white font-Ondo font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[55.968px] tracking-wide uppercase bg-gradient bg-lightgray bg-text">
                Discover the <br className="sm:block hidden" />
                <span className="text-gradient">Virtual</span> Reality
                <br className="md:block hidden" /> Gaming
              </h1>
              <p className="w-463 text-white font-Lato text-base font-normal leading-[29.616px] tracking-wide">
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </p>
              <TransparentButton>
                <h1 className="text-white font-Lato font-medium text-base leading-[110.6%] tracking-[0.72px] uppercase">
                  <img src={'/assets/images/PlayNow.png'} />
                </h1>
              </TransparentButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Marquee items={bannerTexts} hasContainer={false} />
  </>
)

export default Business
