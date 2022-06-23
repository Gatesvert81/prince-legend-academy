import React, { useContext, useState, useEffect } from 'react'
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {

    const [show, handleShow] = useState(false)

    const [page, setPage] = useContext(NavContext)


    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    return (
        <nav className={`w-full h-fit px-10 md:px-16 lg:px-24 py-3 fixed top-0 left-0 flex flex-row justify-between z-10 text-white ${show ? "backdrop-blur bg-faded-blue" : null} `} >
            <div>
                Logo
            </div>
            <div className='hidden md:flex md:flex-row md:gap-3' >
                <AnchorLink route="/" >
                    <Button
                        click={() => setPage("Home")}
                        style={` nav__btn ${ page === "Home" ? "selected" : null}`}
                        >
                        Home
                    </Button>
                </AnchorLink>
                <AnchorLink route="/about" >
                    <Button
                        click={() => setPage("About")}
                        style={` nav__btn ${ page === "About" ? "selected" : null}`}
                        >
                        About
                    </Button>
                </AnchorLink>
                <AnchorLink route="/admission" >
                    <Button
                        click={() => setPage("Admission")}
                        style={` nav__btn ${ page === "Admission" ? "selected" : null}`}
                        >
                        Admission
                    </Button>
                </AnchorLink>
                <AnchorLink route="/academics" >
                    <Button
                        click={() => setPage("Academics")}
                        style={` nav__btn ${ page === "Academics" ? "selected" : null}`}
                        >
                        Academics
                    </Button>
                </AnchorLink>
                <AnchorLink route="/gallery" >
                    <Button
                        click={() => setPage("Gallery")}
                        style={` nav__btn ${ page === "Gallery" ? "selected" : null}`}
                        >
                        Gallery
                    </Button>
                </AnchorLink>
                <AnchorLink route="/contact" >
                    <Button
                        click={() => setPage("Contact")}
                        style={` nav__btn ${ page === "Contact" ? "selected" : null}`}
                        >
                        Contact
                    </Button>
                </AnchorLink>
            </div>
            <div className='flex md:hidden' >
                hamburger
            </div>
        </nav>
    )
}

export default Navigation