import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Button from '../src/Components/Button'
import { NavContext } from '../src/Components/Context'

function Contact() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "Contact") return;
    
      setPage("Contact")
      
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Prince Legend Academy | Contact</title>
                <meta name="description" content="Contact us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-screen bg-school-building main__bg text-white' >
                <div className='main__overlay items-center gap-3 page__title ' >
                    <p>Contact</p>
                </div>
            </main>

            <section className='md:grid md:grid-cols-2' >
                <div className='mobile__grid' >
                    <div className='w-full flex flex-col gap-2' >
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <textarea type="text" placeholder='Message' />
                    </div>
                    <div>
                        <Button style="primary w-full text-white" >
                            Send Message
                        </Button>
                    </div>
                </div>
                <div className='w-full h-44 md:h-full bg-blue-300' />
            </section>

        </div>
    )
}

export default Contact