import styles from '@/styles/style'
import { feedback } from '.'
import AppsCards from './AppsCards'

const AppsGames = () => (
  <section
    id="product"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-ondo font-extrabold text-6xl text-white leading-[76.245px] text-center">
        WELCOME TO THE <br />
        TOP
      </h1>
      <div className="flex mt-20">
        {' '}
        <a href="/link-to-where-you-want-to-go" className="cursor-pointer">
          <img
            src={'/SVGs/gradientButton.svg'}
            alt="Logo"
            className="w-232 h-42 flex-shrink-0"
          />
        </a>
        <a href="/another-link" className="cursor-pointer">
          <img
            src={'/SVGs/colorlessButton.svg'}
            alt="Logo"
            className="w-232 h-42 flex-shrink-0"
          />
        </a>
        <a href="/another-link" className="cursor-pointer">
          <img
            src={'/SVGs/colorlessButton.svg'}
            alt="Logo"
            className="w-232 h-42 flex-shrink-0"
          />
        </a>
        <a href="/another-link" className="cursor-pointer">
          <img
            src={'/SVGs/colorlessButton.svg'}
            alt="Logo"
            className="w-232 h-42 flex-shrink-0"
          />
        </a>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] items-center">
      {feedback.map((card) => (
        <div key={card.id} className="w-full md:w-1/2 lg:w-1/3 mb-10 px-28">
          <AppsCards {...card} />
        </div>
      ))}
    </div>
  </section>
)

export default AppsGames
