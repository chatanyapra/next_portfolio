import React from 'react'
import WelcomeSection from './WelcomeSection'

const Home = () => {
    return (
        <div className='w-full h-screen bg-gray-900 pt-32 flex justify-around items-center text-white max-md:flex-col'>
            {/* <div className='w-full'>Chatanya</div> */}
            <div className='w-full h-screen flex justify-center items-center'>
                <WelcomeSection />
            </div>
        </div>
    )
}

export default Home
