import { navLinks } from '@/utils'
import { useState } from 'react'
import { FaTimes, FaBars, FaHome } from 'react-icons/fa'

const Navbar = () => {
  const [active, setActive] = useState('Products')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar"
      style={{ background: '#2D1E6B' }}
    >
      <div className="flex items-center ">
        <img src={'/SVGs/logo.svg'} alt="Logo" width="32" height="32" />
        <span className="ml-2 text-white font-Ondo text-2xl font-extrabold leading-[43.994px] tracking-widest">
          board
        </span>
      </div>
      <ul className="list-none sm:flex hidden justify-center items-center uppercase flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-lato text-white text-base font-normal ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" items-center hidden md:block">
        <img
          src={'/SVGs/bag.svg'}
          alt="Logo"
          className="w-4.861 h-5.5 flex-shrink-0"
        />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer text-white"
        >
          {toggle ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-lato text-white text-base font-medium ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
