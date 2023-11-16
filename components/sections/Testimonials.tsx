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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {TestimonialsFeedBack.map(({ id, content, name, title, img, src }) => (
          <div key={id} className="mb-5">
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
