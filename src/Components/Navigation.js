import React, { useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {

    const [show, handleShow] = useState(false)
    const [showNav, setShowNav] = useState(false)

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

    const animation = useAnimation()
    const sideNavAnimate = useAnimation()

    useEffect(() => {
        if (show) {
            animation.start({
                backgroundColor: '#605B60'
            })
        } else {
            animation.start({
                backgroundColor: 'transparent'
            })
        }
    }, [show])



    useEffect(() => {
        if (showNav) {
            sideNavAnimate.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.2
                },
                y: 0,
                x: '0vw'
            })
        } else {
            sideNavAnimate.start({
                opacity: 0,
                scale: 0.9,
                x: '100vw'
            })
        }
    }, [showNav])



    return (
        <>
            <motion.nav className={`w-full h-fit px-10 md:px-16 lg:px-24 py-3 fixed top-0 left-0 flex flex-row justify-between z-10 text-white ${show ? "backdrop-blur bg-faded-blue" : null} `} >
                <div>
                    Logo
                </div>
                <div className='hidden md:flex md:flex-row md:gap-3' >
                    <AnchorLink route="/" >
                        <Button
                            click={() => setPage("Home")}
                            style={` nav__btn ${page === "Home" ? "selected" : null}`}
                        >
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            click={() => setPage("About")}
                            style={` nav__btn ${page === "About" ? "selected" : null}`}
                        >
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/admission" >
                        <Button
                            click={() => setPage("Admission")}
                            style={` nav__btn ${page === "Admission" ? "selected" : null}`}
                        >
                            Admission
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/academics" >
                        <Button
                            click={() => setPage("Academics")}
                            style={` nav__btn ${page === "Academics" ? "selected" : null}`}
                        >
                            Academics
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/gallery" >
                        <Button
                            click={() => setPage("Gallery")}
                            style={` nav__btn ${page === "Gallery" ? "selected" : null}`}
                        >
                            Gallery
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/contact" >
                        <Button
                            click={() => setPage("Contact")}
                            style={` nav__btn ${page === "Contact" ? "selected" : null}`}
                        >
                            Contact
                        </Button>
                    </AnchorLink>
                </div>
                <div className=' lg:hidden flex w-8 h-8 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer ' onClick={() => setShowNav(!showNav)} >
                    <div className={`w-full h-1 bg-white transition ease-in-out ${showNav ? "-rotate-45 translate-y-2.5" : null} `} />
                    <div className={`w-full h-1 bg-white ${showNav ? 'translate-x-full' : null} transition ease-in-out `} />
                    <div className={`w-full h-1 bg-white transition ease-in-out ${showNav ? "rotate-45 -translate-y-2" : null} `} />
                </div>
            </motion.nav>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                <motion.nav
                    className={`fixed top-14 lg:hidden right-0 left-0 bottom-0 w-full bg-faded-blue backdrop-blur gap-10 z-10 flex flex-col justify-center items-center`}
                    animate={sideNavAnimate}
                    onClick={() => setShowNav(!showNav)}
                >
                    <AnchorLink route="/" >
                        <Button
                            style={`nav__btn large__text ${page === "Home" ? 'selected' : null}`}
                            click={() => {
                                setPage("Home")
                                setShowNav(!showNav)
                            }}
                        >
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            style={`nav__btn large__text ${page === "About" ? 'selected' : null}`}
                            click={() => {
                                setPage("About")
                                setShowNav(!showNav)
                            }}
                        >
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/admission" >
                        <Button
                            style={`nav__btn large__text ${page === "Admission" ? 'selected' : null}`}
                            click={() => {
                                setPage("Admission")
                                setShowNav(!showNav)
                            }} >
                            Admission
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/academics" >
                        <Button
                            style={`nav__btn large__text font-semibold ${page === "Academics" ? 'selected' : null}`}
                            click={() => {
                                setPage("Academics")
                                setShowNav(!showNav)
                            }} >
                            Academics
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/gallery" >
                        <Button
                            style={`nav__btn large__text ${page === "Gallery" ? 'selected' : null}`}
                            click={() => {
                                setPage("Gallery")
                                setShowNav(!showNav)
                            }} >
                            Gallery
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/contact" >
                        <Button
                            style={`nav__btn large__text  ${page === "Contact" ? 'selected' : null}`}
                            click={() => {
                                setPage("Contact")
                                setShowNav(!showNav)
                            }} >
                            Contact
                        </Button>
                    </AnchorLink>
                </motion.nav>
            </AnimatePresence>
        </>
    )
}

export default Navigation