import Head from 'next/head'
import { MEDIA, MediaComponent, Styles, WorkComponent, WORKS, Section, PROJECTS, ProjectComponent } from '../components/models'


export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Daniel Pyrathon</title>
      </Head>
      <div className="flex md:mt-20 flex-wrap">
        <img src="/images/daniel.png" className="object-contain hidden sm:block" />
        <div className="flex-1 ml-12">
          <h1 className="text-4xl mt-20 font-semibold">Hello, I'm Daniel!</h1>
          <p className="mt-3">I am a software engineer at 0x. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas in vel aliquam quis ac nunc, sed vulputate libero. Suspendisse consectetur aliquam dui interdum ac, lobortis. Eu at ipsum at cras arcu rutrum. Euismod sodales aenean tincidunt imperdiet quis amet aliquam ac.</p>
          <p className="mt-5">Rome, Italy 🛫 London, UK 🛫 San Francisco, US</p>
        </div>
      </div>
      <Section title="Works" classExtra="flex-wrap">
        {WORKS.map((work, idx) => <WorkComponent key={idx} work={work} />)}
      </Section>
      <Section title="Talks & Articles" classExtra="flex-col">
        {MEDIA.map((media, idx) => <MediaComponent key={idx} media={media} />)}
      </Section>
      <Section title="Projects" classExtra="flex-col">
        {PROJECTS.map((project, idx) => <ProjectComponent key={idx} project={project} />)}
      </Section>
      <footer className={Styles.longChildItem}>
        <a className="underline mt-4" href="https://twitter.com/pirosb3">@pirosb3</a>
      </footer>
    </div>
  )
}
