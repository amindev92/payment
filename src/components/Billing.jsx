import React from 'react'
import styles, { layout } from '..'
import { apple, bill, google } from '../assets'

const Billing = () => {
    return (
        <section className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />
                <div className='absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient' />
                <div className='absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full blue__gradient' />
            </div>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    Easily Control your <br className='sm:block hidden' />
                    billing and invoicing
                </h2>
                <p className={`${styles.paragraph} max-w-[470px]`}>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                </p>
                <div className='flex flex-wrap flex-row sm:mt-10 mt-6'>
                    <img src={google} alt='Google play' className='w-[124px] h-[42px]' />
                    <img src={apple} alt='Apple store' className='w-[124px] h-[42px]' />
                </div>
            </div>
        </section>
    )
}

export default Billing