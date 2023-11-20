function dispatchKeydownEvent(key: string) {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
}

export default dispatchKeydownEvent;