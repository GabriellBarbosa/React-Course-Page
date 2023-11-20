import React from 'react';
import { useParams } from 'react-router-dom';

function useSlide() {
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(1);
    const slides = React.useRef<Array<HTMLElement | null>>([]).current;
    const urlParams = useParams();

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
        if (currentSlide) {
            return currentSlide.offsetTop;
        } else {
            throw new Error('Slide not found');
        }
    }

    React.useEffect(() => {
        if (isValid(urlParams.slideNumber)) {
            setCurrentSlideNumber(Number(urlParams.slideNumber));
        }
    }, [])

    function isValid(urlParam: unknown) {
        return Number.isInteger(Number(urlParam)) && isInRange(Number(urlParam));
    }

    function isInRange(urlParam: number) {
        return urlParam >= 1 && urlParam <= slides.length;
    }

    const addSlide = React.useCallback((element: HTMLElement | null) => {
        slides[slides.length] = element;
    }, []);

    return { currentSlideNumber, getCurrentSlideOffsetTop, addSlide };
}

export default useSlide;