// import React from "react"
import React from "react"
import { features } from "../constant/index.js"
import styles, { layout } from "../index.js"
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index != features.length - 1 ? 'mb-6' : 'mb-0'}`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex flex-1 flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white">{title}</h4>
                <p className="text-white">{content}</p>
            </div>
        </div>
    )
}

const Business = () => {
    return (
        <section className={`${layout.section}`}>
            <div className={`${layout.sectionInfo} `}>
                <h2 className={`${styles.heading2} `}>
                    You do the business, <br className='sm:block hidden' />
                    well handle the money
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                </p>
                <Button style='mt-6' />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>

        </section>
    )
}

export default Business