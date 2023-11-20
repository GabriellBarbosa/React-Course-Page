function useScrollbar() {
    const bodyElement = document.querySelector('body');
    
    function hideScrollbar() {
        if (bodyElement) {
            bodyElement.classList.add('hide_scrollbar');
        }
    }

    function showScrollbar() {
        if (bodyElement) {
            bodyElement.classList.remove('hide_scrollbar');
         }
    }

    return { hideScrollbar, showScrollbar };
}

export default useScrollbar;