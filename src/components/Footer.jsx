import React from 'react';

const Footer = ({ hasAnimated }) => {
    return (
        <div className='py-8 px-6 border-t border-gray-200'>
            <div className='max-w-6xl mx-auto text-center'>
                <p className='text-gray-600'>
                    © 2026 Thái Tuấn. Built with ReactJS and Tailwind CSS.
                </p>
            </div>
        </div>
    );
};

export default Footer;
