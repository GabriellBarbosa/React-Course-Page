import React from 'react';

function useSlide(slides: (HTMLElement | null)[]) {
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

    return [slideNumber];
}

export default useSlide;