import styles from './Header.module.css';
import React from 'react';
import SubscribeButton from './SubscribeButton';
import { AuthContext } from '../context/AuthContext';

function Header() {
    const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
    const mobileMenu = React.useRef<HTMLDivElement>(null);
    const menuButton = React.useRef<HTMLDivElement>(null);
    const authContext = React.useContext(AuthContext);
    
    function toggleMobileMenuActive() {
        setMobileMenuActive(!mobileMenuActive);
    }

    React.useEffect(() => {
        window.addEventListener('click', deactiveMobileMenu);
        return () => {
            window.removeEventListener('click', deactiveMobileMenu);
        }
    }, [mobileMenuActive]);

    function deactiveMobileMenu(event: MouseEvent) {    
        if (shouldDeactiveMobileMenu(event)) {
            setMobileMenuActive(false);
        }
    }

    function shouldDeactiveMobileMenu(event: MouseEvent) {
        return (
            mobileMenuActive &&
            event.target instanceof Element &&
            isOutOfMobileMenu(event.target)
        );
    }

    function isOutOfMobileMenu(element: Element) {
        return (
            mobileMenu.current &&
            menuButton.current &&
            ! menuButton.current.contains(element) &&
            ! mobileMenu.current.contains(element)
        );
    }

    function getMyAccountBtnText() {
        if (authContext.user)
            return authContext.user.username || 'Minha conta';
        else 
            return 'Login';
    }

    return (
        <header className={styles.header} data-testid="header">
            <nav className={styles.navigation}>
                <a href="/" aria-label="bookinvideo" className={styles.logo}>
                    <svg width="191" height="22" viewBox="0 0 191 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.208 21C4.16 21 0.416 21.224 0.416 21.224L0.704 18.344C2.368 18.056 2.848 17.544 2.848 16.008L2.88 4.584C2.88 3.592 2.592 3.112 2.016 3.112C1.632 3.112 0.928 3.176 0.928 3.176L0.544 2.792L0.928 0.231998C0.928 0.231998 5.312 0.296 6.336 0.296C7.392 0.296 12.48 0.0719986 12.48 0.0719986C17.248 0.0719986 19.776 1.832 19.776 5.128C19.776 7.528 18.304 8.936 16.672 10.024C18.592 10.696 20.672 11.816 20.672 14.664C20.672 19.112 17.568 21.352 11.456 21.352C10.496 21.224 7.04 21 6.208 21ZM9.28 8.552C9.28 8.552 11.104 8.904 11.84 8.904C11.84 8.904 13.184 8.04 13.184 6.28C13.184 4.808 12.192 4.104 10.08 4.104C9.664 4.104 9.536 4.2 9.504 4.552C9.376 5.96 9.28 8.552 9.28 8.552ZM9.216 12.68L9.056 15.88C9.056 16.904 9.76 17.352 11.392 17.352C12.96 17.352 13.792 16.552 13.792 15.016C13.792 13.928 13.056 13.096 11.744 12.68H9.216ZM29.7308 21.288C24.5148 21.288 21.7628 18.504 21.7628 13.16C21.7628 7.496 24.7068 4.584 30.4348 4.584C35.8108 4.584 38.4028 7.176 38.4028 12.552C38.4028 18.248 35.3628 21.288 29.7308 21.288ZM30.2108 17.832C31.4588 17.832 31.8108 16.968 31.8108 14.216C31.8108 9.64 31.4588 8.328 29.9228 8.328C28.6748 8.328 28.3548 9.128 28.3548 11.88C28.3548 16.456 28.7068 17.832 30.2108 17.832ZM47.4495 21.288C42.2335 21.288 39.4815 18.504 39.4815 13.16C39.4815 7.496 42.4255 4.584 48.1535 4.584C53.5295 4.584 56.1215 7.176 56.1215 12.552C56.1215 18.248 53.0815 21.288 47.4495 21.288ZM47.9295 17.832C49.1775 17.832 49.5295 16.968 49.5295 14.216C49.5295 9.64 49.1775 8.328 47.6415 8.328C46.3935 8.328 46.0735 9.128 46.0735 11.88C46.0735 16.456 46.4255 17.832 47.9295 17.832ZM65.0083 12.296L67.7603 9.224C68.0803 8.936 68.2723 8.488 68.2723 8.104C68.2723 7.528 68.0483 7.336 67.2803 7.304L67.0883 7.016L67.3443 4.808C67.3443 4.808 70.0003 4.872 71.2483 4.872C72.2083 4.872 75.2483 4.744 75.2483 4.744L75.5363 5.16L75.2803 7.176C73.9363 7.944 72.6243 9.224 71.2483 11.112L70.5763 12.072L72.7843 16.424C73.5203 17.864 74.1923 18.504 75.2803 18.696L75.5683 19.112L75.2803 21.128C75.2803 21.128 71.6643 21.416 70.9603 21.416C69.5203 21.416 68.8483 20.968 68.0483 19.4L64.8802 13.096L65.0083 12.296ZM59.0243 8.52C59.0243 7.496 58.8323 7.272 58.0963 7.272H57.4243L57.1683 6.888L57.4243 4.84L61.8403 4.872C62.9923 4.872 66.6403 4.776 66.6403 4.776L66.4483 7.208C65.1363 7.528 64.9123 7.72 64.8802 8.584L64.6883 16.936C64.6883 18.312 64.8483 18.632 65.5203 18.632C66.0642 18.632 66.3203 18.568 66.3203 18.568L66.5443 18.856L66.3203 21.096C66.3203 21.096 62.8323 21 61.7123 21C59.9843 21 57.1363 21.128 57.1363 21.128L57.3283 18.856C58.7043 18.536 59.0243 18.184 59.0243 16.776V8.52ZM113.319 21.416C113.319 21.416 110.439 8.68 109.543 5.224C109.159 3.784 108.679 3.208 107.783 3.08L107.559 2.76L107.815 0.231998C107.815 0.231998 110.503 0.296 112.199 0.296C115.239 0.296 118.311 0.136 118.311 0.136L118.567 0.424L118.375 3.112C116.391 3.368 116.327 3.4 116.327 4.2C116.327 5.48 118.055 15.624 118.055 15.624H118.759C118.759 15.624 121.383 4.872 121.383 3.816C121.383 3.272 121.223 3.176 120.391 3.176H119.559L119.303 2.856L119.559 0.199999C119.559 0.199999 122.535 0.296 124.487 0.296C126.311 0.296 128.423 0.264 128.423 0.264L128.199 3.048C127.495 3.272 127.271 3.592 126.887 4.808L122.119 20.872L113.319 21.416ZM128.699 21.096L128.923 18.792C130.331 18.504 130.587 18.152 130.587 16.776V8.52C130.587 7.496 130.395 7.272 129.659 7.272H129.019L128.763 6.888L128.987 4.872H133.403C134.523 4.872 138.171 4.776 138.171 4.776L137.979 7.208C136.795 7.368 136.603 7.56 136.507 8.488C136.347 10.568 136.251 13.48 136.251 16.936C136.251 18.312 136.411 18.632 137.083 18.632C137.627 18.632 137.851 18.568 137.851 18.568L138.075 18.856L137.851 21.096C137.851 21.096 134.395 21 133.275 21C131.579 21 128.699 21.096 128.699 21.096ZM147.235 21.288C147.235 21.288 144.675 21 142.947 21C141.443 21 139.075 21.192 139.075 21.192L139.267 18.664C140.579 18.472 140.963 17.992 140.963 16.616V8.648C140.963 7.624 140.803 7.304 140.323 7.304C139.939 7.304 139.491 7.368 139.491 7.368L139.203 6.984L139.459 4.808C139.459 4.808 142.563 4.872 143.651 4.872C144.867 4.872 148.099 4.712 148.099 4.712C153.731 4.712 156.483 7.144 156.483 12.2C156.483 17.896 152.995 21.288 147.235 21.288ZM147.267 8.232C146.915 8.232 146.787 8.424 146.755 8.904C146.595 10.792 146.499 13.032 146.499 16.84C146.499 17.64 146.659 17.864 147.139 17.864C149.219 17.864 149.923 16.712 149.923 13.224C149.923 9.224 149.443 8.232 147.267 8.232ZM157.447 21.256L157.703 18.76C158.983 18.568 159.367 18.056 159.367 16.552L159.399 8.616C159.399 7.528 159.271 7.272 158.727 7.272C158.439 7.272 158.055 7.304 158.055 7.304L157.703 6.92L157.959 4.808C157.959 4.808 161.927 4.872 164.455 4.872C167.655 4.872 171.239 4.744 172.711 4.584L173.095 5C173.095 5 172.615 7.752 172.487 10.12L168.487 10.344C168.487 10.344 168.551 9.768 168.551 9.448C168.551 8.424 168.071 8.168 166.151 8.168C165.511 8.168 165.351 8.296 165.351 8.776L165.223 11.24H167.303C168.103 11.24 170.183 11.112 170.183 11.112L170.535 11.528L170.151 14.632C170.151 14.632 168.231 14.568 167.047 14.568C166.279 14.568 165.543 14.664 165.063 14.696C165.031 15.208 165.063 15.848 165.063 16.328C165.063 17.608 165.191 17.832 166.215 17.832C168.231 17.832 168.711 17.416 169.031 15.272L172.711 15.016L173.063 15.432C173.063 15.432 172.583 17.928 172.327 20.744L171.879 21.16C171.879 21.16 167.623 21 163.303 21C160.455 21 157.447 21.256 157.447 21.256ZM182.043 21.288C176.827 21.288 174.075 18.504 174.075 13.16C174.075 7.496 177.019 4.584 182.747 4.584C188.123 4.584 190.715 7.176 190.715 12.552C190.715 18.248 187.675 21.288 182.043 21.288ZM182.523 17.832C183.771 17.832 184.123 16.968 184.123 14.216C184.123 9.64 183.771 8.328 182.235 8.328C180.987 8.328 180.667 9.128 180.667 11.88C180.667 16.456 181.019 17.832 182.523 17.832Z" fill="white"/>
                        <path d="M76.1988 21.16L76.4548 18.44C78.1828 18.056 78.5348 17.576 78.5348 15.816V4.744C78.5348 3.432 78.3108 3.112 77.4148 3.112C77.1588 3.112 76.7747 3.144 76.5828 3.144L76.2948 2.696L76.5508 0.296H81.7028C82.4068 0.296 84.3588 0.231998 87.2068 0.136L86.9828 3.016C85.5108 3.24 85.2548 3.496 85.1588 4.68C84.9668 8.008 84.8388 12.2 84.8388 16.008C84.8388 17.8 85.0308 18.216 85.8628 18.216C86.1828 18.216 86.5988 18.184 86.8868 18.12L87.1428 18.44L86.8548 21.128C85.0948 21.064 82.4708 21 81.5108 21C80.4227 21 78.3428 21.064 76.1988 21.16ZM100.939 11.88L100.811 8.328C100.747 7.464 100.587 7.24 99.9465 7.24H99.1465L98.9865 6.952L99.1145 4.776C99.1145 4.776 102.219 4.872 103.755 4.872C105.291 4.872 107.595 4.84 107.595 4.808L107.467 7.24C106.347 7.4 105.995 7.784 105.963 8.808L105.611 20.872L100.075 21.16C97.3865 17.096 95.2105 14.056 95.2105 14.056H94.7625L94.8905 17.352C94.9225 18.344 95.1465 18.664 95.9465 18.664C96.2665 18.664 96.7785 18.568 96.7785 18.568L97.0665 18.792L96.7465 21.096C96.7465 21.096 93.6425 21 92.4905 21C90.5705 21 88.2025 21.192 88.2025 21.192L88.4905 18.76C89.5145 18.632 89.9305 18.184 89.9625 17.192L90.2825 8.904C90.2825 7.752 89.9945 7.528 88.3305 7.336L87.9785 6.952L88.1385 4.744C88.1385 4.744 90.1865 4.872 92.2985 4.872C93.8025 4.872 95.9145 4.776 95.9145 4.776C98.0265 8.36 100.491 11.88 100.491 11.88H100.939Z" fill="#D79C6B"/>
                    </svg>
                </a>

                <div 
                    data-testid="header_menu"
                    aria-label="menu"
                    className={`
                        ${styles.header_menu} 
                        ${mobileMenuActive ? styles.active : ''}
                    `}
                >
                    <div 
                        className={styles.hamburguer_menu} 
                        onClick={toggleMobileMenuActive}
                        data-testid="mobile_menu_button"
                        ref={menuButton}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.links_container} ref={mobileMenu}>
                        <div className={styles.links_wrapper}>
                            <a href="/curso/codigo-limpo/0101-configuracao" className={styles.link}>Curso</a>
                            <div className={styles.subscription}>
                                <SubscribeButton text="Inscreva-se" className={styles.link} />
                            </div>
                            <a href="/contato" className={styles.link}>Contato</a>
                            <a href="/conta" data-testid="myAccountBtn" className={`${styles.link} ${styles.login}`}>
                                { getMyAccountBtnText() }
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;