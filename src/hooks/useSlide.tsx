import React from 'react';

function useSlide() {
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(1);
    const slides = React.useRef<Array<HTMLElement | null>>([]).current;

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

    const addSlide = React.useCallback((element: HTMLElement | null) => {
        slides[slides.length] = element;
    }, []);

    return { currentSlideNumber, getCurrentSlideOffsetTop, addSlide };
}

export default useSlide;