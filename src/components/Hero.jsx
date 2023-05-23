import styles from '..'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <section className={`${styles.paddingY} flex flex-col md:flex-row`}>
            <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 z-[5] mr-10`}>
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <img src={discount} alt='discount' className='w-[32px] h-[32px]'></img>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>
                            Discount for {" "}
                        </span>
                        <span className='text-white'>
                            1 Month
                        </span>
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center w-full '>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>
                        The Next
                        <br className='sm:block hidden' />{" "}
                        <span className='text-gradient'>Generation</span>
                        {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>
                <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] w-full'>
                    Payment method
                </h1>
                <p className={`${styles.paragraph} text-white text-[16px] mt-5`}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown...</p>
            </div>

            <div>
                <img src={robot} alt='robot' className='w-[100%] h-[100%] relative z-[5] ml-5' />
                <div className='pink__gradient z-[0] w-[40%] h-[35%] absolute top-20' />
                <div className='white__gradient rounded-full z-[1] w-[80%] h-[65%] absolute bottom-40' />
                <div className='blue__gradient z-[0] w-[40%] h-[35%] absolute right-30' />
            </div>

            <div className={`${styles.flexStart} ss:hidden`}>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero