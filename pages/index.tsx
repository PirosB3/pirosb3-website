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
      <div className={Styles.sectionBox}>
        <h2 className={Styles.sectionHeader}>Works</h2>
        <div className="flex flex-wrap">
          {WORKS.map((work, idx) => <WorkComponent key={idx} work={work} />)}
        </div>
      </div>
      <div className={Styles.sectionBox}>
        <h2 className={Styles.sectionHeader}>Talks & Articles</h2>
        <div className="flex flex-col">
          {MEDIA.map((media, idx) => <MediaComponent key={idx} media={media} />)}
        </div>
      </div>
      <Section title="Projects" classExtra="flex-col">
        {PROJECTS.map((project, idx) => <ProjectComponent key={idx} project={project} />)}
      </Section>
    </div>
  )
}
