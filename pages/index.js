import Head from 'next/head'
import Image from 'next/image'
import AwardCard from '../src/Components/AwardCard'
import Button from '../src/Components/Button'
import GalleryCard from '../src/Components/GalleryCard'
import TestimonialCard from '../src/Components/TestimonialCard'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Prince Legend Academy | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen bg-school-building main__bg text-white " >
        <div  className="main__overlay" >
          <div>
            <p className="normal__text" >Welcome to</p>
            <p className="large__text" >Prince Legend Academy</p>
            <p className="normal__text" >In light we shall see light</p>
          </div>
          <div>
            <p className="normal__text md:w-1/2 " >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <Button style="primary" >
              Enroll Now
            </Button>
          </div>
        </div>
      </main>

      <section>
        <div className="section__title" >
          <p>About Us</p>
        </div>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 justify-start items-start gap-3  " >
          <div className="w-full h-48 md:h-full bg-school-board main__bg" ></div>
          <div className='w-full normal__text flex flex-col gap-3' >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button style="primary w-full" >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="section__title" >
          <p>Award</p>
        </div>
        <div className='mobile__grid md:grid-cols-3 ' >
          <AwardCard />
          <AwardCard />
          <AwardCard />
        </div>
      </section>

      <section>
        <div className="section__title" >
          Gallery
        </div>
        <div className='mobile__grid md:grid-cols-4'>
          <GalleryCard/>
          <GalleryCard/>
          <GalleryCard/>
          <GalleryCard/>
        </div>
      </section>

      <section>
        <div className='section__title' >
          Testimonials
        </div>
        <div className='mobile__grid md:grid-cols-3'>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>

    </div>
  )
}
