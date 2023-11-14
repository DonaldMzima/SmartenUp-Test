import {
  FaUser,
  FaShieldAlt,
  FaExchangeAlt,
  FaStar,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaAirbnb,
  FaDropbox,
} from 'react-icons/fa' // Import icons from the react-icons/fa library

export const navLinks = [
  {
    id: 'home',
    title: 'Products',
  },
  {
    id: 'product',
    title: 'Apps & Games',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'clients',
    title: 'Support',
  },
  {
    id: 'clients',
    title: 'about',
  },
]

export const features = [
  {
    id: 'feature-1',
    imageBackground: ' url(/assets/images/Rectangle.png )',
  },
  {
    id: 'feature-2',
    imageBackground: 'url(/assets/images/Vector.png)',
  },
  {
    id: 'feature-3',
    imageBackground: 'url(/assets/images/Rectangle30.png)',
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: <FaTwitter />,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/',
  },
]
export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    // img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    // img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    // img: people03,
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: <FaAirbnb />,
  },
  {
    id: 'client-2',
    // logo: <FaBinance />,
  },
  {
    id: 'client-3',
    // logo: <FaCoinbase />,
  },
  {
    id: 'client-4',
    logo: <FaDropbox />,
  },
]
export const stats = [
  {
    id: 'stats-1',
    title: 'Unique style',
    value: '300+',
  },
  {
    id: 'stats-2',
    title: 'Project finished',
    value: '200+',
  },
  {
    id: 'stats-3',
    title: 'Happy customer',
    value: '500+',
  },
]
