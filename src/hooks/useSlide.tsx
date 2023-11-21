import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function useSlide() {
    const urlParams = useParams();
    const navigate = useNavigate();
    const slides = React.useRef<Array<HTMLElement | null>>([]).current;
    const [slideNumber, setCurrentSlideNumber] = React.useState(1);

    React.useEffect(() => {
        const urlParam = Number(urlParams.slideNumber)
        if (isValid(urlParam)) {
            setCurrentSlideNumber(urlParam);
        }
    }, []);

    function isValid(urlParam: number) {
        return Number.isInteger(urlParam) && isInRange(urlParam);
    }

    function isInRange(urlParam: number) {
        return urlParam >= 1 && urlParam <= slides.length;
    }

    React.useEffect(() => {
        navigate(`/slide/clean-code/${slideNumber}`);
    }, [slideNumber]);

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
            setCurrentSlideNumber(1);
        } else {
            setCurrentSlideNumber(slideNumber + 1);
        }
    }

    function decrementSlideNumber() {
        if (slideNumber == 1) {
            setCurrentSlideNumber(slides.length);
        } else {
            setCurrentSlideNumber(slideNumber - 1);
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