import styles from '@/styles/style'
import AppsCards from '../ui/AppsCards'
import { AppsData, bannerTexts } from '@/utils'
import { Marquee } from '../ui/Marquee'
import { MainButton } from '../ui/Buttons/MainButton'
import { TransparentButton } from '../ui/Buttons/TransparentButton'

const AppsGames = () => (
  <section
    id="product"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-ondo font-extrabold text-4xl md:text-6xl text-white leading-[76.245px] text-center">
        WELCOME TO THE <br />
        TOP
      </h1>
      <div className="flex mt-20">
        <MainButton>
          <h1 className="text-white font-Lato font-medium text-xs sm:text-xs md:text-xl leading-[110.6%] tracking-wide uppercase">
            Newest Games
          </h1>
        </MainButton>

        <TransparentButton>
          <h1 className="text-white font-Lato font-medium text-xs sm:text-xs md:text-xl leading-[110.6%] tracking-[0.72px] uppercase">
            Latest games
          </h1>
        </TransparentButton>
        <TransparentButton>
          <h1 className="text-white font-Lato font-medium text-xs sm:text-xs md:text-xl leading-[110.6%] tracking-[0.72px] uppercase">
            Fight games
          </h1>
        </TransparentButton>
        <TransparentButton>
          <h1 className="text-white font-Lato font-medium text-xs sm:text-xs md:text-xl leading-[110.6%] tracking-[0.72px] uppercase">
            sport games
          </h1>
        </TransparentButton>
      </div>
    </div>

    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {AppsData.map((AppsData: any) => (
        <div
          key={AppsData.id}
          className="w-full md:w-1/2 lg:w-1/3 mb-10  md:px-10 lg:px-4"
        >
          <AppsCards {...AppsData} />
        </div>
      ))}
    </div>
    <Marquee items={bannerTexts} hasContainer={false} />
  </section>
)

export default AppsGames
