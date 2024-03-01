import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AOSInitializer() {
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            onInit: function() {},
            onReset: function() {},
            onRefresh: function() {},
        });
    }, []);

    return null; // AOSInitializer doesn't render anything
}

export default AOSInitializer;
