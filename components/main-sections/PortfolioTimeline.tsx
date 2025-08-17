'use client';

import { useState } from 'react';
import { FadeInAnimation, ScrollViewAnimationTimeline } from '../component-animations/animations';

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
        description: string;
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

export const PortfolioTimeline = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

    const timelineData: TimelineItem[] = [
        {
            id: 'about',
            title: 'About Me',
            content: {
                title: 'About Me',
                description: "Hello! I'm a passionate developer with expertise in modern web technologies. I love creating beautiful, functional interfaces that provide great user experiences. With over 5 years of experience in the industry, I've worked on projects ranging from small business websites to large-scale enterprise applications.",
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
                description: ''
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
                <ScrollViewAnimationTimeline whileInView>
                    <div className="content-area">
                        <h2 className="text-2xl font-bold mb-4 text-gradient">{activeItem.content.title}</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                                <img
                                    src={activeItem.content.image}
                                    alt="Profile"
                                    className="rounded-lg shadow-md w-full h-auto"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <p className="mb-4 ">{activeItem.content.description}</p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {activeItem.content.skills?.map((skill, index) => (
                                        <ScrollViewAnimationTimeline key={skill} delay={0.1 + (index * 0.1)} whileInView>
                                            <span className="px-3 py-1 shadow-sm shadow-gray-400 text-gradient rounded-full text-sm">
                                                {skill}
                                            </span>
                                        </ScrollViewAnimationTimeline>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollViewAnimationTimeline>
            );
        }

        if (activeTab === 'journey') {
            const journeyItem = timelineData.find(item => item.id === 'journey');

            if (!journeyItem?.subItems) return null;

            if (!activeSubTab) {
                return (
                    <ScrollViewAnimationTimeline whileInView>
                        <div className="content-area">
                            <h2 className="text-2xl font-bold mb-6 text-gradient">{journeyItem.subItems.title}</h2>
                            <p className=" mb-6">
                                Select a year from the timeline to explore my career milestones and achievements during that period.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                                <p className="text-gray-500 dark:text-gray-400">👈 Click on a year to view details</p>
                            </div>
                        </div>
                    </ScrollViewAnimationTimeline>
                );
            }

            const subItemContent = journeyItem.subItems.content.find(item => item.period === activeSubTab);

            if (!subItemContent) return null;

            return (
                <ScrollViewAnimationTimeline whileInView>
                    <div className="content-area">
                        <h2 className="text-2xl font-bold mb-4 text-gradient">{subItemContent.title}</h2>
                        <div className="space-y-4">
                            <ScrollViewAnimationTimeline delay={0.1} whileInView>
                                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <h3 className="font-semibold text-lg">{subItemContent.title.split(' - ')[1]}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{subItemContent.period}</p>
                                    <p className="mt-2 ">{subItemContent.description}</p>
                                </div>
                            </ScrollViewAnimationTimeline>
                        </div>
                    </div>
                </ScrollViewAnimationTimeline>
            );
        }

        if (activeTab === 'certificates') {
            return (
                <ScrollViewAnimationTimeline whileInView>
                    <div className="content-area">
                        <h2 className="text-2xl font-bold mb-6 text-gradient">My Certifications</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {certificates.map((cert, index) => (
                                <ScrollViewAnimationTimeline key={cert.id} delay={0.1 + (index * 0.1)} whileInView>
                                    <div className=" rounded-lg p-5 hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-indigo-400 dark:bg-indigo-900 p-3 rounded-lg">
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
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Issued by {cert.issuer} - {cert.year}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollViewAnimationTimeline>
                            ))}
                        </div>
                    </div>
                </ScrollViewAnimationTimeline>
            );
        }

        return null;
    };

    return (
        <div className="transition-colors duration-300 min-h-screen m-auto ">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar Timeline Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 space-y-1">
                            <ScrollViewAnimationTimeline whileInView>
                                <h2 className="text-2xl font-bold mb-6 text-gradient">My Journey</h2>
                            </ScrollViewAnimationTimeline>

                            {/* Timeline Items */}
                            <div className="space-y-8 relative pl-8 timeline-border">
                                {timelineData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`timeline-item relative ${activeTab === item.id ? 'active' : ''}`}
                                        data-target={item.id}
                                    >
                                        <ScrollViewAnimationTimeline delay={0.1 + (index * 0.1)} whileInView>
                                            <div className="flex items-center">
                                                <div className={`timeline-dot absolute -left-8 w-4 h-4 rounded-full bg-[#725bda] border-2 border-white dark:border-gray-900 ${activeTab === item.id ? 'active' : ''}`} />
                                                <button
                                                    className={`cursor-pointer tab-button text-left font-medium text-lg hover:text-[#725bda] transition-colors ${activeTab === item.id ? 'text-gradient' : ''}`}
                                                    onClick={() => handleTabChange(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </div>
                                        </ScrollViewAnimationTimeline>

                                        {/* Sub-items */}
                                        {item.subItems && (
                                            <div className="ml-6 mt-2 space-y-2 pl-4 flex flex-col">
                                                {item.subItems.content.map((subItem, index) => (
                                                    <ScrollViewAnimationTimeline key={subItem.period} delay={0.1 + (index * 0.1)} whileInView>
                                                        <button
                                                            className={`cursor-pointer sub-item tab-button text-sm py-1.5 block transition-colors hover:text-[#725bda] ${activeSubTab === subItem.period ? 'active font-semibold text-gradient' : ''}`}
                                                            onClick={() => handleTabChange(subItem.period, true)}
                                                        >
                                                            {subItem.period} - {subItem.title.split(' - ')[1]}
                                                        </button>
                                                    </ScrollViewAnimationTimeline>
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
                        <div className="rounded-xl p-6 md:p-8 min-h-[400px]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};