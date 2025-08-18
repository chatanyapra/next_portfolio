'use client';

import { useState } from 'react';
import { ScrollViewAnimation, SectionHeadAnimation } from '../component-animations/animations';

type TimelineItem = {
    id: string;
    title: string;
    subItems?: {
        id: string;
        title: string;
        content: {
            title: string;
            period: string;
            description: string;
        }[];
    };
    content?: {
        title: string;
        description: string[];
        skills?: string[];
        image?: string;
    };
};

type Certificate = {
    id: string;
    title: string;
    issuer: string;
    year: string;
};

type ActiveItem = {
    description: string[];
};

export const PortfolioTimeline = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

    const timelineData: TimelineItem[] = [
        {
            id: 'about',
            title: 'About Me',
            content: {
                title: 'About Me',
                description: [`I’m Chatanya, a Full Stack Developer passionate about crafting modern, scalable, and high-performing web applications. I chose this career because I love turning ideas into functional and visually appealing digital experiences. Creativity and problem-solving drive my approach to development.`,
                    `Currently, I work as a Freelance Developer and a Full Stack Developer Intern, where I build dynamic web solutions tailored to users' needs. I am always open to new opportunities and challenges that push me to grow.`,

                    `With a mindset of continuous learning, I stay updated with the latest technologies, ensuring that my work aligns with industry best practices. My goal is to create impactful solutions that enhance user experiences and solve real-world problems.`],
                skills: ['JavaScript', 'React', 'Node.js', 'UI/UX'],
                image: 'https://via.placeholder.com/300x300'
            }
        },
        {
            id: 'journey',
            title: 'My Journey',
            subItems: {
                id: 'journey',
                title: 'My Professional Journey',
                content: [
                    {
                        title: '2021 - Career Beginnings',
                        period: '2021',
                        description: 'Joined XYZ Corp as a junior front-end developer. Worked on maintaining legacy code and implementing small features. Completed several online courses to master ES6+, React, and modern development workflows.'
                    },
                    {
                        title: '2022 - First Major Project',
                        period: '2022',
                        description: 'Led a team of 3 developers to build a custom e-commerce solution for a retail client. Implemented React frontend with Node.js backend. Recognized for contributions and promoted with increased responsibilities and mentorship role.'
                    },
                    {
                        title: '2023 - Career Growth',
                        period: '2023',
                        description: 'Joined ABC Product as a frontend specialist to work on their SaaS platform with 50,000+ users. Created and implemented a company-wide design system that improved development speed by 40%.'
                    },
                    {
                        title: '2024 - Current Focus',
                        period: '2024',
                        description: 'Promoted to senior developer with architecture responsibilities and team leadership. Currently mastering advanced React patterns, performance optimization, and accessibility best practices.'
                    }
                ]
            }
        },
        {
            id: 'certificates',
            title: 'Certificates',
            content: {
                title: 'My Certifications',
                description: []
            }
        }
    ];

    const certificates: Certificate[] = [
        {
            id: '1',
            title: 'Advanced React Developer',
            issuer: 'React Academy',
            year: '2023'
        },
        {
            id: '2',
            title: 'JavaScript Algorithms',
            issuer: 'CodeMaster',
            year: '2022'
        },
        {
            id: '3',
            title: 'UI/UX Design Principles',
            issuer: 'Design Institute',
            year: '2021'
        },
        {
            id: '4',
            title: 'Web Accessibility',
            issuer: 'A11y.org',
            year: '2023'
        }
    ];

    const handleTabChange = (tabId: string, isSubItem = false) => {
        if (isSubItem) {
            setActiveSubTab(tabId);
            setActiveTab('journey');
        } else {
            setActiveTab(tabId);
            setActiveSubTab(null);
        }
    };

    const renderContent = () => {
        const activeItem = timelineData.find(item => item.id === activeTab);

        if (!activeItem) return null;

        if (activeTab === 'about' && activeItem.content) {
            return (
                <ScrollViewAnimation whileInView>
                    <div className="content-area">
                        <h2 className="text-3xl font-bold mb-4 text-gradient">{activeItem.content.title}</h2>
                        <div className="flex">
                            <div className="w-full">
                                {activeItem.content.description.map((text: string, index: number) => (
                                    <ScrollViewAnimation key={index} delay={0.1 + (index * 0.1)} whileInView={index === 0}>
                                        <p className="mb-4">{text}</p>
                                    </ScrollViewAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollViewAnimation>
            );
        }

        if (activeTab === 'journey') {
            const journeyItem = timelineData.find(item => item.id === 'journey');

            if (!journeyItem?.subItems) return null;

            if (!activeSubTab) {
                return (
                    <div className="content-area">
                        <h2 className="text-3xl font-bold mb-6 text-gradient">{journeyItem.subItems.title}</h2>
                        <p className=" mb-6">
                            Select a year from the timeline to explore my career milestones and achievements during that period.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                            <p className="text-gray-500 ">👈 Click on a year to view details</p>
                        </div>
                    </div>
                );
            }

            const subItemContent = journeyItem.subItems.content.find(item => item.period === activeSubTab);

            if (!subItemContent) return null;

            return (
                // <ScrollViewAnimation whileInView>
                <div className="content-area">
                    <h2 className="text-3xl font-bold mb-4 text-gradient">{subItemContent.title}</h2>
                    <div className="space-y-4">
                        <ScrollViewAnimation delay={0.1} whileInView>
                            <div className="p-4  rounded-lg">
                                <p className="mt-2 ">{subItemContent.description}</p>
                            </div>
                        </ScrollViewAnimation>
                    </div>
                </div>
                // </ScrollViewAnimation>
            );
        }

        if (activeTab === 'certificates') {
            return (
                // <ScrollViewAnimation whileInView>
                <div className="content-area">
                    <h2 className="text-3xl font-bold mb-6 text-gradient">My Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certificates.map((cert, index) => (
                            <ScrollViewAnimation key={cert.id} delay={0.1 + (index * 0.1)} whileInView>
                                <div className=" rounded-lg p-5 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-indigo-400 p-3 rounded-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-gradient"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{cert.title}</h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Issued by {cert.issuer} - {cert.year}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollViewAnimation>
                        ))}
                    </div>
                </div>
                // </ScrollViewAnimation>
            );
        }

        return null;
    };

    return (
        <div className="transition-colors duration-300 m-auto md:pl-6 ">
            <div className='-ml-6'>
                <SectionHeadAnimation>
                    <i className="mb-2">My Journey</i>
                </SectionHeadAnimation>
            </div>

            <div className="container mx-auto md:px-4 px-2 pt-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar Timeline Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 space-y-1">
                            {/* Timeline Items */}
                            <div className="space-y-8 relative pl-8 timeline-border">
                                {timelineData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`timeline-item relative ${activeTab === item.id ? 'active' : ''}`}
                                        data-target={item.id}
                                    >
                                        <ScrollViewAnimation delay={0.1 + (index * 0.1)} whileInView>
                                            <div className="flex items-center">
                                                <div className={`timeline-dot absolute -left-8 w-4 h-4 rounded-full bg-[#725bda] border-2 border-white ${activeTab === item.id ? 'active' : ''}`} />
                                                <button
                                                    className={`cursor-pointer tab-button text-left font-medium text-xl hover:text-purple-400 transition-colors ${activeTab === item.id ? 'text-gradient' : 'hover:text-shadow-xs text-shadow-black'}`}
                                                    onClick={() => handleTabChange(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </div>
                                        </ScrollViewAnimation>

                                        {/* Sub-items */}
                                        {item.subItems && (
                                            <div className="ml-6 mt-2 space-y-2 pl-4 flex flex-col">
                                                {item.subItems.content.map((subItem, index) => (
                                                    <ScrollViewAnimation key={subItem.period} delay={0.1 + (index * 0.1)} whileInView>
                                                        <button
                                                            className={`cursor-pointer sub-item tab-button text-lg py-1.5 block transition-colors hover:text-purple-400 ${activeSubTab === subItem.period ? 'active font-semibold text-purple-400 text-gradient' : 'hover:text-shadow-xs text-shadow-black'}`}
                                                            onClick={() => handleTabChange(subItem.period, true)}
                                                        >
                                                            {subItem.period} - {subItem.title.split(' - ')[1]}
                                                        </button>
                                                    </ScrollViewAnimation>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        <div className="rounded-xl p-2 md:p-8 min-h-[400px]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};