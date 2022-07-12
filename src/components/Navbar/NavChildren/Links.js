import { useState, useEffect } from "react"
import * as Scroll from 'react-scroll';

const Links = () => {
    const scroll = Scroll.animateScroll;
    const scroller = Scroll.scroller;
    const [width, setWidth] = useState(window.innerWidth)

    const menuSlide = () => {
        let menu = document.querySelector("#menu")
        if (menu.classList.contains('slideIn')) {
            document.querySelector("#menu").classList.remove('slideIn')
            document.querySelector("#menu").classList.add('slideOut')
        } else {
            document.querySelector("#menu").classList.remove('slideOut')
            document.querySelector("#menu").classList.add('slideIn')
        }
    }
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
    return (
        <div className="navbar-links col-xxl-4 col-lg-7 col-md-10 col-12">
            {width <= 768 &&
            <>
                <img onClick={menuSlide} src='imgs/menu.png' alt='menu' width={"50px"} height={"50px"} id="menu-img" />
                <ul id='menu'>
                    <li onClick={() => { menuSlide(); scroll.scrollToTop({duration: 100, smooth: true})} }>Home</li>
                    <li onClick={() => { menuSlide(); scroller.scrollTo('view-projects', { spy: true, smooth: true, duration: 100 }) }}>Projects</li>
                    <li onClick={() => { menuSlide(); scroller.scrollTo('contact', { spy: true, smooth: true, duration: 100 })} }>Contact Me</li>
                </ul>
            </>
            }
            {width >= 768 &&
                <ul id='menu'>
                    <li onClick={() => scroll.scrollToTop({duration: 100, smooth: true})}>Home</li>
                    <li onClick={() => scroller.scrollTo('view-projects', { spy: true, smooth: true, duration: 100 })}>Projects</li>
                    <li onClick={() => scroller.scrollTo('contact', { spy: true, smooth: true, duration: 100 })}>Contact Me</li>
                </ul> 
            }
      </div>
    )
}

export default Links