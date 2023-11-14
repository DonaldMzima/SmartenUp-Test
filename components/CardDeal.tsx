import styles, { layout } from '@/styles/style'
import { AiOutlineCreditCard } from 'react-icons/ai'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="flex items-center mb-5">
        <AiOutlineCreditCard size={30} className="mr-2" />
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* You can replace the following image tag with your actual image */}
      <img
        src={AiOutlineCreditCard}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
)

export default CardDeal
