import styles, { layout } from '@/styles/style'
import { features } from '../constants'
import Button from './Button'

const FeatureCard = ({ imageBackground, title, content, index }: any) => (
  <div
    className={`p-6 ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
    style={{
      width: '451.136px',
      height: '366.969px',
      flexShrink: 0,
      borderRadius: '11.222px',
      border: '1.122px solid var(--1, #000)',
      background: `url(${imageBackground}), lightgray 50% / cover no-repeat, url(${imageBackground}), lightgray 50% / cover no-repeat`,
    }}
  ></div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionImg} flex flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Business
