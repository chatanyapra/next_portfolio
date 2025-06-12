import WelcomeSection from './WelcomeSection'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import "./Home.css"

const Home = () => {
    return (
        <div className='w-full pt-32 flex justify-around items-center text-white max-md:flex-col max-md:p-5'>
            {/* <div className='w-full'>Chatanya</div> */}
            <div className='w-full flex max-md:flex-col justify-evenly items-center overflow-hidden z-10'>
                <div className="w-2/4 max-md:w-full h-full text-gray-50 dark:text-black md:ml-16">
                    <div className='m-auto text-left'>
                        <h5 className='text-xl py-2'>Welcome to my world</h5>
                        <div className='text-4xl font-bold pt-8 leading-10 -mb-3'>Hi,</div>
                        <div className='text-8xl max-md:text-6xl font-bold'><span className="text-4xl"> I&apos;m</span> <span className='text-gradient font-bold'>Chatanya</span></div>
                        <span className='text-3xl font-bold py-4 max-md:text-4xl flex'>
                            a
                            <span className='sm:pl-1 mt-0.5 max-sm:mt-1.5'>
                                {/* <TypewriterEffect /> */}
                            </span>
                        </span>
                        <p className="pt-5">I create seamless, high-performance websites where every line of code serves a purpose—combining functionality with user-friendly experiences.</p>
                    </div>
                    <div className='my-14 text-3xl flex max-sm:justify-center text-white dark:text-black'>
                        <FaLinkedinIn className='m-1.5' />
                        <span className='btn-gradient w-14 mt-5 mx-2'></span>
                        <FaGithub className='m-1.5' />
                        <span className='btn-gradient w-14 mt-5 mx-2'></span>
                        <FaInstagram className='m-1.5' />
                    </div>
                </div>
                <WelcomeSection  />
            </div>
        </div>
    )
}

export default Home
