import React, { useContext } from 'react'
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Footer() {

    const [page, setPage] = useContext(NavContext)

    return (
        <footer className="w-full h-fit px-10  md:px-16 lg:px-24 py-5 bg-main-blue flex flex-col md:grid justify-start md:grid-cols-3 items-center gap-2 normal__text text-white " >
            <div>logo</div>
            <div className="w-full flex flex-row md:flex-col justify-around items-center " >
                <AnchorLink route="/" >
                    <Button
                        click={() => setPage("Home")}
                        style={` nav__btn text-xs  ${page === "Home" ? "selected" : null}`}
                    >
                        Home
                    </Button>
                </AnchorLink>
                <AnchorLink route="/about" >
                    <Button
                        click={() => setPage("About")}
                        style={` nav__btn text-xs ${page === "About" ? "selected" : null}`}
                    >
                        About
                    </Button>
                </AnchorLink>
                <AnchorLink route="/admission" >
                    <Button
                        click={() => setPage("Admission")}
                        style={` nav__btn text-xs ${page === "Admission" ? "selected" : null}`}
                    >
                        Admission
                    </Button>
                </AnchorLink>
                <AnchorLink route="/academics" >
                    <Button
                        click={() => setPage("Academics")}
                        style={` nav__btn text-xs ${page === "Academics" ? "selected" : null}`}
                    >
                        Academics
                    </Button>
                </AnchorLink>
                <AnchorLink route="/gallery" >
                    <Button
                        click={() => setPage("Gallery")}
                        style={` nav__btn text-xs ${page === "Gallery" ? "selected" : null}`}
                    >
                        Gallery
                    </Button>
                </AnchorLink>
                <AnchorLink route="/contact" >
                    <Button
                        click={() => setPage("Contact")}
                        style={` nav__btn text-xs ${page === "Contact" ? "selected" : null}`}
                    >
                        Contact
                    </Button>
                </AnchorLink>
            </div>
            <div className='w-full flex flex-col text-center ' >
                <p>Location: Dodowa, Accra</p>
                <p>Mail: P.O Box 287</p>
                <p>Email: princelegendaca@gmail.com</p>
                <p>Phone: 023 3844 284</p>
            </div>
        </footer>
    )
}

export default Footer