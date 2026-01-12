import React from 'react';
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Palette,
    Smartphone,
    ExternalLink
} from 'lucide-react';

const About = ({ hasAnimated }) => {
    const features = [
        {
            icon: <Code className='w-8 h-8 mb-4 text-black' />,
            title: 'Clean code',
            description:
                'Writing maintainable code that is easy to read and understand.'
        },
        {
            icon: <Palette className='w-8 h-8 mb-4 text-black' />,
            title: 'UI/UX design',
            description:
                'Creating user-friendly and visually appealing interfaces.'
        },
        {
            icon: <Smartphone className='w-8 h-8 mb-4 text-black' />,
            title: 'Mobile development',
            description: 'Building responsive and user-friendly mobile apps.'
        },
        {
            icon: <ExternalLink className='w-8 h-8 mb-4 text-black' />,
            title: 'Web development',
            description: 'Building responsive and user-friendly web apps.'
        }
    ];
    return (
        <section id='about' className='py-16 px-6 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <div
                    className={`transitiona-all duration-1000 delay-200 ${
                        hasAnimated.about
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className='text-4xl font-bold mb-12 text-center'>
                        About Me
                    </h2>

                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        <div className=''>
                            <p className='text-lg text-gray-700 mb-6'>
                                I am a software engineering graduate from
                                Greenwich University (2023). After graduation, I
                                completed my local militia duty while improving
                                my English and programming skills.
                            </p>
                            <p className='text-lg text-gray-700 mb-6'>
                                I also have experience in customer service and
                                ticket sales, where I developed strong
                                communication and problem-solving skills. I am
                                eager to learn new skills and continuously
                                improve myself.
                            </p>
                            <div className='flex space-x-4'>
                                <Github className='w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors' />{' '}
                                <Linkedin className='w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors' />
                                <Mail className='w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            {features.map((feature, index) => (
                                <div
                                    className='bg-white p-6 rounded-lg shadow-sm border border-gray-500'
                                    key={index}
                                >
                                    {feature.icon}
                                    <h3 className='font-semibold mb-2'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm'>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
