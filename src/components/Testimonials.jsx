import React from 'react'
import { feedback } from '../constant/index.js'
import styles from '../index.js'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
            <div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 sm:mb-16 z-[1]'>
                <h2 className={styles.heading2}>
                    what people are <br className='md:block hidden' />
                    saying about us
                </h2>
                <div className='w-full md:mt-0 mt-6'>
                    <p className={`${styles.paragraph} max-w-[450px]`}>
                        Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                    </p>
                </div>
            </div>

            <div className='flex flex-wrap sm:justify-between justify-center w-full relative'>
                {feedback.map((card) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials