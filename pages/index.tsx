import Head from 'next/head'
import { WORKS, MEDIA, PROJECTS, VOLUNTEERING } from '../components/data'
import { MediaComponent, Styles, WorkComponent, Section, ProjectComponent } from '../components/models'


export default function Home() {
  return (
    <div className='container mx-auto font-inter bg-white shadow-2xl my-10'>
      <Head>
        <title>Daniel Pyrathon</title>
      </Head>
      <div className="flex flex-wrap my-header py-24 px-12 text-lg">
        <div className="md:w-1/2 justify-center flex">
            <div className="relative">
                <img className="h-full w-full object-cover rounded-2xl" src="/images/daniel.png" />
            </div>
        </div>
        <div className="md:w-1/2 flex-1 md:ml-12 ml-6">
          <h1 className="md:mt-20 font-bold font-syne text-5xl">Hello, I'm Daniel!</h1>
          <p className="mt-3">
            This is my personal space. I love computers, building software, and fostering a culture of passion and growth within my team.
          </p>
          <p className="mt-3">
            I moved to San Francisco in 2015 to work for an Online Dating startup (my mum is still unclear of what I used to do) and I ended up biting the "Bitcoin bug"
            when I discovered the Whitepaper. Nowadays, I work for <a href="https://0x.org">0x</a> with a really amazing group of people.
          </p>
          <p className="mt-3">
            When I'm not working, I try to travel as much as possible and meet new inspiring people on the road. Some of them I end up doing really cool things with, 
            others remain a great memory.
          </p>
        </div>
      </div>
      <Section title="Work" childBoxClassExtra="flex-wrap" parentBoxClassExtra="pt-5">
        {WORKS.map((work, idx) => <WorkComponent key={idx} work={work} />)}
      </Section>
      <Section title="Talks & Articles" childBoxClassExtra="flex-col" parentBoxClassExtra="bg-black text-white bg-image bg-top bg-no-repeat py-10">
        {MEDIA.map((media, idx) => <MediaComponent key={idx} media={media} />)}
      </Section>
      <div className="flex flex-wrap mt-10">
        <Section title="Projects" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pr-12 md:w-1/2 w-full">
          {PROJECTS.map((project, idx) => <ProjectComponent key={idx} project={project} />)}
        </Section>
        <Section title="Volunteering" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pl-12 md:w-1/2 w-full">
          {VOLUNTEERING.map((volunteer, idx) => <ProjectComponent key={idx} project={volunteer} />)}
        </Section>
      </div>
      <footer className={`flex flex-col w-full py-5 px-12 footer-color border-t-2` }>
        <div className="flex my-4">
          <a className="flex-grow" href="https://twitter.com/pirosb3">@pirosb3</a>
          <a className="mx-2" href="mailto:pirosb3@gmail.com">Email</a>
          <a className="mx-2" href="https://www.linkedin.com/in/danielpyrathon/">Linkedin</a>
          <a className="mx-2" href="/pubkey.asc">PGP public key 🔑</a>
        </div>
      </footer>
    </div>
  )
}
