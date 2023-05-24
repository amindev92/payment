import React from 'react'
import styles from '..'
import Button from './Button'

const Cta = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col
        bg-black-gradient-2 rounded-[20px]
        `}>
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading2}>
                    Let's try our services now!
                </h2>
                <p className={styles.paragraph}>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
                <Button style={' sm:mt-0 mt-10'} />
            </div>
        </section>
    )
}

export default Cta