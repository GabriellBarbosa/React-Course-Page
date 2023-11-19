import React from 'react';

function useSlide(slides: (HTMLElement | null)[]) {
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(1);

    React.useEffect(() => {
        window.addEventListener('keydown', changeSlideNumber);
        return () => {
            window.removeEventListener('keydown', changeSlideNumber);
        }
    }, [currentSlideNumber]);

    function changeSlideNumber(event: KeyboardEvent) {
        if (event.key == 'ArrowRight') {
            incrementSlideNumber();
        } else if (event.key == 'ArrowLeft') {
            decrementSlideNumber();
        }
    }

    function incrementSlideNumber() {
        if (currentSlideNumber == slides.length) {
            setCurrentSlideNumber(1);
        } else {
            setCurrentSlideNumber(currentSlideNumber + 1);
        }
    }

    function decrementSlideNumber() {
        if (currentSlideNumber == 1) {
            setCurrentSlideNumber(slides.length);
        } else {
            setCurrentSlideNumber(currentSlideNumber - 1);
        }
    }

    function getCurrentSlideOffsetTop() {
        const currentSlide = slides[currentSlideNumber - 1];
        return currentSlide ? currentSlide.offsetTop : 0;
    }

    return { currentSlideNumber, getCurrentSlideOffsetTop };
}

export default useSlide;