import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import AdmissionCard from '../src/Components/AdmissionCard'
import Button from '../src/Components/Button'
import { NavContext } from '../src/Components/Context'


function Admission() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "Admission") return;
    
      setPage("Admission")
      
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Prince Legend Academy | Admission</title>
                <meta name="description" content="Admission Process" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-screen bg-school-building main__bg text-white' >
                <div className='main__overlay items-center gap-3 page__title ' >
                    <p>Admission</p>
                </div>
            </main>

            <section>
                <div className='section__title' >Admission Process</div>
                <div className="mobile__grid md:grid-cols-3" >
                    <AdmissionCard step="1"/>
                    <AdmissionCard step="2" />
                    <AdmissionCard step="3" />
                </div>
                <div className='w-full flex flex-row justify-center items-center' >
                    <Button style="primary text-white w-full md:w-fit">
                        Enroll Online
                    </Button>
                </div>
            </section>

        </div>
    )
}

export default Admission