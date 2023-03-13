import React, {useState, useEffect} from 'react'
import {HiChevronUp} from 'react-icons/hi'

function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll, true);
    });

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
  return (
    <>
    {showButton ? <button onClick={scrollToTop} className='fixed bottom-2 right-3 rounded-full bg-green-600 text-white z-30 shadow-lg p-1'>
        <HiChevronUp size={35} />
    </button> : <p></p>}
    </>
  )
}

export default ScrollToTop