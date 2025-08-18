'use client';

import { PortfolioTimeline } from './PortfolioTimeline';

const About = () => {
    // "/assets/personsImages/my-image2.png"
    return (
        <div className="w-full min-h-[540px] relative top-0 z-10 about-main overflow-hidden">
            <div className='m-auto w-full '>
                <PortfolioTimeline />
            </div>
        </div>
    );
};

export default About;
