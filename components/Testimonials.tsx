import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '@/styles/style'
import { TestimonialsFeedBack } from '@/components' // Make sure you import TestimonialsFeedBack correctly
import FeedbackCard from './AppsCards'

const Testimonials = () => {
  // Filter the feedback array to include only the first two elements
  const filteredFeedback = TestimonialsFeedBack.slice(0, 2)

  return (
    <section id="clients" className={styles.paddingY}>
      <Carousel
        showArrows={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={25}
      >
        {filteredFeedback.map((card) => (
          <div key={card.id} className="w-full mb-5 px-20">
            <FeedbackCard {...card} />
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Testimonials
