import styles from '@/styles/style'
import { bannerTexts, footerLinks } from '@/utils'
import { Marquee } from '../ui/Marquee'

const Footer = () => (
  <>
    <div>
      <Marquee
        items={bannerTexts}
        className={`flex-shrink-0 bg-cover bg-center relative ${'bg-url("/assets/images/border.png")'}`}
      />
    </div>
    <section
      className={`${styles.flexCenter} ${styles.paddingY}  w-full`}
      style={{
        width: '100%',
        height: '529px',
        flexShrink: 0,
        background: `url('/assets/images/footer.png') lightgray -0.573px -40.736px / 100.066% 108.213% no-repeat`,
        mixBlendMode: 'color-dodge',
      }}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <div className="flex items-center">
            <img src={'/SVGs/logo.svg'} alt="Logo" width="32" height="32" />
            <span className="ml-2 text-white font-Ondo text-1xl font-extrabold leading-[43.994px] tracking-widest">
              board
            </span>
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            .
          </p>
        </div>

        <div className="flex-[1.5] w-full mx-auto flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-center">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">
      

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div> */}
    </section>
  </>
)

export default Footer
