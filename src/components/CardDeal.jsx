import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../index.js'
import Button from './Button'

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal
                    <br className='sm:block hidden' />
                    in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[460px] mt-6`}>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                </p>

                <Button style={'mt-5'} />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} className='w-[100%] h-[100%]' alt='card' />
            </div>
        </section>
    )
}

export default CardDeal