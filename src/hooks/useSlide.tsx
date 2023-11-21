import React from 'react';

function useSlide() {
    const slides = React.useRef<Array<HTMLElement | null>>([]).current;
    const [slideNumber, setSlideNumber] = React.useState(1);

    React.useEffect(() => {
        window.addEventListener('keydown', changeSlideNumber);
        return () => {
            window.removeEventListener('keydown', changeSlideNumber);
        }
    }, [slideNumber]);

    function changeSlideNumber(event: KeyboardEvent) {
        if (event.key == 'ArrowRight') {
            incrementSlideNumber();
        } else if (event.key == 'ArrowLeft') {
            decrementSlideNumber();
        }
    }

    function incrementSlideNumber() {
        if (slideNumber == slides.length) {
            setSlideNumber(1);
        } else {
            setSlideNumber(slideNumber + 1);
        }
    }

    function decrementSlideNumber() {
        if (slideNumber == 1) {
            setSlideNumber(slides.length);
        } else {
            setSlideNumber(slideNumber - 1);
        }
    }

    React.useEffect(() => {
        try {
            window.scrollTo(0, getCurrentSlideOffsetTop());
        } catch (err) {
            console.error(err);
        }
    }, [slideNumber]);

    function getCurrentSlideOffsetTop() {
        const currentSlide = slides[slideNumber - 1];
        if (currentSlide) {
            return currentSlide.offsetTop;
        } else {
            throw new Error('Slide not found');
        }
    }

    const addSlide = React.useCallback((element: HTMLElement | null) => {
        slides[slides.length] = element;
    }, []);

    return { slideNumber, addSlide };
}

export default useSlide;