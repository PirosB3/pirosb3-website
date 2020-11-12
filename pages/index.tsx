import Head from 'next/head'
import { WORKS, MEDIA, PROJECTS, VOLUNTEERING } from '../components/data'
import { MediaComponent, Styles, WorkComponent, Section, ProjectComponent } from '../components/models'


export default function Home() {
  return (
    <div className='container mx-auto font-inter'>
      <Head>
        <title>Daniel Pyrathon</title>
      </Head>
      <div className="flex flex-wrap my-header py-24 px-12 text-lg">
        <div className="md:w-1/2 justify-center flex">
          <img src="/images/daniel.png"/>
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
      <Section title="Works" childBoxClassExtra="flex-wrap">
        {WORKS.map((work, idx) => <WorkComponent key={idx} work={work} />)}
      </Section>
      <Section title="Talks & Articles" childBoxClassExtra="flex-col">
        {MEDIA.map((media, idx) => <MediaComponent key={idx} media={media} />)}
      </Section>
      <div className="flex flex-wrap">
        <Section title="Projects" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pr-3 md:w-1/2 w-full">
          {PROJECTS.map((project, idx) => <ProjectComponent key={idx} project={project} />)}
        </Section>
        <Section title="Volunteering" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pl-3 md:w-1/2 w-full">
          {VOLUNTEERING.map((volunteer, idx) => <ProjectComponent key={idx} project={volunteer} />)}
        </Section>
      </div>
      <footer className={Styles.longChildItem}>
        <div className="flex mt-4 underline">
          <a className="mr-6" href="https://twitter.com/pirosb3">@pirosb3</a>
          <a href="/pubkey.asc">🔑 PGP public key</a>
        </div>
      </footer>
    </div>
  )
}
