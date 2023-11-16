import React from 'react'
import styles from '@/styles/style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex flex-wrap sm:mb-20 mb-6`}>
    <div className="flex items-center justify-center gap-x-8">
      <div className="flex flex-col items-center">
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          300+
        </h4>
        <p className="text-sm text-white">Unique Style</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={'/assets/images/200+.png'} alt="200+" className="mb-2 mt-4" />
        <p className="text-sm text-white">Projects Finished</p>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          500+
        </h4>
        <p className="text-sm text-white">Happy Customers</p>
      </div>
    </div>
  </section>
)

export default Stats
