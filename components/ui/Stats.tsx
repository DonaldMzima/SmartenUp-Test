import styles from '@/styles/style'
import { stats } from '@/utils'

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 inline-flex items-start gap-31`}
  >
    {stats.map((stat: any) => (
      <div key={stat.id} className={`flex-1 flex flex-col items-center m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase mt-1">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)

export default Stats
