import Head from 'next/head'
import { MEDIA, MediaComponent, Styles, WorkComponent, WORKS, Section, PROJECTS, ProjectComponent } from '../components/models'


export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Daniel Pyrathon</title>
      </Head>
      <div className="flex md:mt-20 mt-5 flex-wrap">
        <img src="/images/daniel.png" className="object-contain hidden sm:block" />
        <div className="flex-1 md:ml-12 ml-6">
          <h1 className="text-4xl md:mt-20 font-semibold">Hello, I'm Daniel!</h1>
          <p className="mt-3">I am a software engineer at 0x. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas in vel aliquam quis ac nunc, sed vulputate libero. Suspendisse consectetur aliquam dui interdum ac, lobortis. Eu at ipsum at cras arcu rutrum. Euismod sodales aenean tincidunt imperdiet quis amet aliquam ac.</p>
          <p className="mt-5">Rome, Italy 🛫 London, UK 🛫 San Francisco, US</p>
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
          {PROJECTS.slice(0, 1).map((project, idx) => <ProjectComponent key={idx} project={project} />)}
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
