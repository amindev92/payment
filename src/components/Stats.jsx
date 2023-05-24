import { stats } from "../constant/index.js"
import styles from "../index.js"

const Stats = () => {
    return (
        <div className={`${styles.flexCenter} flex-row flex-wrap ss:mb-20 mb-6`}>
            {stats.map((stat) => (
                <div className="flex-1 flex flex-row justify-start items-center m-3" key={stat.id}>
                    <h2 className='font-poppins font-semibold xs:text-[40px] text-[32px] text-white'>
                        {stat.value}
                    </h2>
                    <p className="font-poppins font-normal xs:text-[24px] text-[16px] text-gradient ml-4">
                        {stat.title}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Stats