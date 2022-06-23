import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import GalleryCard from '../src/Components/GalleryCard'
import { NavContext } from '../src/Components/Context'


function Gallery() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "Gallery") return;
    
      setPage("Gallery")
      
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Prince Legend Academy | Gallery</title>
                <meta name="description" content="Pictures of special moments and events" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-screen bg-school-building main__bg text-white' >
                <div className='main__overlay items-center gap-3 page__title ' >
                    <p>Gallery</p>
                </div>
            </main>

            <section>
                <div className='section__title' >Graduation</div>
                <div className='mobile__grid md:grid-cols-3' >
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>
            </section>

            <section>
                <div className='section__title' >Science Lab</div>
                <div className='mobile__grid md:grid-cols-3' >
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>
            </section>

            <section>
                <div className='section__title' >Excursion</div>
                <div className='mobile__grid md:grid-cols-3' >
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>
            </section>

        </div>
    )
}

export default Gallery