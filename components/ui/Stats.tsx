import styles from '@/styles/style'
import { stats } from '@/utils'

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 inline-flex items-start gap-31`}
  >
    <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
      <h4>300+</h4>
      <img src={'/assets/images/200+.png'} />
      <h4>500+</h4>
    </h4>
  </section>
)

export default Stats
