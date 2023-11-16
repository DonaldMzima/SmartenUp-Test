import React from 'react'
import styles from '@/styles/style'
import { TestimonialsFeedBack } from '@/utils'
import FeedbackCard from '../ui/TestimonialsCard'

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} flex justify-center items-center`}
    >
      <div className="flex flex-wrap justify-center p-5">
        {TestimonialsFeedBack.map(({ id, content, name, title, img, src }) => (
          <div
            key={id}
            className="mb-5 mx-20 flex flex-col items-center w-full md:w-1/2 lg:w-1/3"
          >
            <FeedbackCard
              content={content}
              name={name}
              title={title}
              img={img}
              src={src}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
