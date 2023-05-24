import React from 'react'
import { logo } from '../assets/index.js'
import { footerLinks } from '../constant/index.js'
import styles from '../index.js'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY}`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-[260px] h-[72px] object-contain' />
                    <p className={`${styles.paragraph} mt-4 max-w-[300px]`}>
                        Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
                    </p>
                </div>

                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                                {footerlink.title}
                            </h4>
                            <ul className='list-none mt-4'>
                                {footerlink.links.map((link, index) => (
                                    <li key={link.name}
                                        className={`font-poppins font-normal 
                                        leading-[24px] text-dimWhite
                                        hover:text-secondary cursor-pointer
                                        ${index != footerlink.length - 1 ?
                                                'mb-4' : 'mb-0'}
                                        `}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer