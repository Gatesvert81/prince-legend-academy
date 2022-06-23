import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import VisionCard from '../src/Components/VisionCard'
import GalleryCard from '../src/Components/GalleryCard'
import { NavContext } from '../src/Components/Context'


function About() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "About") return;
    
      setPage("About")
      
    }, [])
    

    return (
        <div className="w-full min-h-screen" >
            <Head>
                <title>Prince Legend Academy | About</title>
                <meta name="description" content="About Prince Legend Academy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-screen bg-school-building main__bg text-white' >
                <div className='main__overlay items-center gap-3 page__title ' >
                    <p>About</p>
                    <p>Our Journey</p>
                </div>
            </main>

            <section>
                <div className='section__title' >History</div>
                <div className='normal__text' >
                    <p>
                        <div className='w-full h-32 bg-blue-300' /> <span>Prince Legend Academy</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
            </section>

            <section>
                <div className='section__title' > Vision </div>
                <div className='mobile__grid md:grid-cols-3 ' >
                    <VisionCard title="Qualified Teachers" />
                    <VisionCard title="Excellent Guaduates" />
                    <VisionCard title="Security" />
                </div>
            </section>

            <section>
                <div className="section__title" >
                    Facilities
                </div>
                <div className='mobile__grid md:grid-cols-4'>
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>
            </section>

        </div>
    )
}

export default About