import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import AcademicCard from '../src/Components/AcademicCard'
import Button from '../src/Components/Button'
import { NavContext } from '../src/Components/Context'


function Academics() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "Academics") return;
    
      setPage("Academics")
      
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Prince Legend Academy | Academics</title>
                <meta name="description" content="Academic classes taken  in Prince Legend Academic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='w-full h-screen bg-school-building main__bg text-white' >
                <div className='main__overlay items-center gap-3 page__title ' >
                    <p>Academics</p>
                </div>
            </main>

            <section>
                <div className='section__title' >Academic Classes</div>
                <div className="mobile__grid md:grid-cols-4" >
                    <AcademicCard name=" Creche "/>
                    <AcademicCard name=" Kindergarten " />
                    <AcademicCard name=" Primary " />
                    <AcademicCard name=" Junior High " />
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

export default Academics