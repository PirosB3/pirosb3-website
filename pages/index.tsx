import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { WORKS, MEDIA, PROJECTS, VOLUNTEERING } from '../components/data'
import { MediaComponent, WorkComponent, Section, ProjectComponent } from '../components/models'

import {google} from 'googleapis'
import { Media, MediaType } from '../components/types'

export const getStaticProps: GetStaticProps = async () => {
  const instance = google.youtube({
    version: 'v3',
    auth: process.env.YT_KEY,
  });

  const results = await instance.playlistItems.list({
    playlistId: 'PL-LwXcXRA2ocTwwdPg0tU_0zx7IrBSRA4',
    part: ['snippet', 'id', 'contentDetails'],
    maxResults: 50,
  });
  const items = results.data.items || [];
  const itemIds: Array<string> = items.map(item => item.snippet?.resourceId?.videoId).filter(item => item !== undefined)
  const response = await instance.videos.list({
    id: itemIds,
    part: ['snippet'],
  })

  const videos: Media<number>[] = [];
  for (const item of response.data.items) {
    const videoId: string | undefined = item.id
    const title: string | undefined = item.snippet?.title;
    const channelTitle: string | undefined = item.snippet?.channelTitle;
    const publishedAt: string | undefined = item.snippet?.publishedAt;

    if (videoId && title && channelTitle && publishedAt) {
      videos.push({
        date: (new Date(publishedAt)).getTime(),
        location: channelTitle,
        type: MediaType.Video,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        title,
      });
    }
  }
  return {
    props: {
      videos,
    },
    revalidate: 30,
  }
}


export default function Home(props: {videos: Media<number>[]}) {
  const allMedia: Media<Date>[] = props.videos.map(v => {
    return {
      ...v,
      date: new Date(v.date),
    }
  }).concat(MEDIA).sort((a, b) => a.date < b.date ? 1 : -1);
  return (
    <div className='container mx-auto font-inter bg-white shadow-2xl md:my-10'>
      <Head>
        <title>Daniel Pyrathon</title>
      </Head>
      <div className="flex flex-wrap my-header py-24 px-12 text-lg">
        <div className="md:w-1/2 justify-center flex">
            <div className="relative">
              <Image src="/images/daniel.png" width="616" height="460" className="h-full w-full object-cover rounded-2xl" />
            </div>
        </div>
        <div className="md:w-1/2 flex-1 md:ml-12 ml-6">
          <h1 className="md:mt-20 font-bold font-syne text-5xl">Hello, I'm Daniel!</h1>
          <p className="mt-3">
            This is my personal space. I love computers, building software, and fostering a culture of passion and growth within my team.
          </p>
          <p className="mt-3">
            I moved to San Francisco in 2015 to work for an Online Dating startup (my mum is still unclear of what I used to do) and I ended up biting the "Bitcoin bug"
            when I discovered the Whitepaper. Nowadays, I work for <a className="underline" target="_blank" href="https://0x.org">0x</a> with a really amazing group of people.
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
        {allMedia.map((media, idx) => <MediaComponent key={idx} media={media} />)}
      </Section>
      <div className="flex flex-wrap mt-10">
        <Section title="Projects" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pr-12 md:w-1/2 w-full">
          {PROJECTS.map((project, idx) => <ProjectComponent key={idx} project={project} />)}
        </Section>
        <Section title="Volunteering" childBoxClassExtra="flex-col" parentBoxClassExtra="md:pl-12 md:w-1/2 w-full">
          {VOLUNTEERING.map((volunteer, idx) => <ProjectComponent key={idx} project={volunteer} />)}
        </Section>
      </div>
      <footer className="flex flex-col w-full py-5 px-12 footer-color border-t-2 mt-8">
        <div className="flex my-4">
          <a className="flex-grow" target="_blank" href="https://twitter.com/pirosb3">@pirosb3</a>
          <a className="mx-2" href="mailto:pirosb3@gmail.com">Email</a>
          <a className="mx-2" target="_blank" href="https://www.linkedin.com/in/danielpyrathon/">Linkedin</a>
          <a className="mx-2" target="_blank" href="https://github.com/PirosB3/">GitHub</a>
          <a className="mx-2" href="/pubkey.asc">PGP public key 🔑</a>
        </div>
      </footer>
    </div>
  )
}
