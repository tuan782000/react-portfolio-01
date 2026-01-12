import { useState, useEffect } from 'react';

export const useIntersectionObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const obsserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        // Only animate if it hasn't been animated before
                        // Chỉ tạo hiệu ứng nếu chưa từng được tạo hiệu ứng trước đó
                        setHasAnimated(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            {
                threshold: 0.1
            }
        );
        document.querySelectorAll('[id]').forEach(el => obsserver.observe(el));

        return () => {
            obsserver.disconnect();
        };
    }, [hasAnimated]);
    return hasAnimated;
};
