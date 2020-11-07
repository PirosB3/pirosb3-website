import React, { FunctionComponent, useState } from 'react';

export interface Work {
    duration: string;
    employer: string;
    employerUrl: string;
    title: string;
    description: string;
}

enum MediaType {
    Video = 'Video',
    Article = 'Article',
}

const MEDIA_IMAGES: {[key in MediaType]: string} = {
    [MediaType.Article] : '/images/article.png',
    [MediaType.Video] : '/images/video.png',
}

interface Media {
    type: MediaType;
    title: string;
    date: string;
    url: string;
    location: string;
}

interface Project {
    title: string;
    description: string;
}

export const WORKS: Work[] = [
    {
        title: 'Senior Software Engineer',
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed ',
        duration: 'Mar/2019 - Today'
    },
    {
        title: 'Senior Software Engineer',
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed ',
        duration: 'Mar/2019 - Today'
    },
    {
        title: 'Senior Software Engineer',
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed ',
        duration: 'Mar/2019 - Today'
    },
    {
        title: 'Senior Software Engineer',
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed ',
        duration: 'Mar/2019 - Today'
    },
]

export const MEDIA: Media[] = [
    {
        date: '01/Feb/2020',
        location: 'UC Berkeley Blockchain Club',
        title: 'Guest Lecture: Spring 2020 Blockchain for Developers on DeFi',
        type: MediaType.Video,
        url: '',
    },
    {
        date: '18/Mar/2018',
        location: 'AWS re:Invent 2017 - Las Vegas',
        title: 'Dating and Data Science: How Coffee MeetsBagel Uses Amazon Elas (DAT323)',
        type: MediaType.Article,
        url: '',
    }
]

export const PROJECTS: Project[] = [
    {
        title: 'CycleToken',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed tincidunt massa pharetra. Ullamcorper augue suscipit ut ut egestas netus. ',
    },
    {
        title: 'Django model meta contributions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare viverra id feugiat a. Faucibus donec auctor consectetur sed tincidunt massa pharetra. Ullamcorper augue suscipit ut ut egestas netus. ',
    },
]

export const Styles = {
    'sectionBox': 'flex flex-col mt-5',
    'sectionHeader': 'font-semibold text-2xl mb-5 pl-2',
    'componentTitle': 'font-semibold',
    'longChildItem': 'flex flex-col w-full mb-8 pt-5 border-solid border-t color-item-border px-3'
  }


export const WorkComponent: FunctionComponent<{work: Work}> = (props) => {
    const { work } = props;
    return (
        <div className="flex md:w-1/2 w-full mb-8">
            <img src="https://via.placeholder.com/216x185" />
            <div className="flex flex-col mr-12 border-solid border-t color-item-border">
                <div className="ml-5 flex-grow text-gray-600 text-sm mt-5 color-date">{work.duration}</div>
                <div className={`${Styles.componentTitle} ml-5 flex-grow`}>{work.title} @ <a className="underline" href={work.employerUrl}>{work.employer}</a></div>
                <div className="ml-5 flex-grow">{work.description}</div>
            </div>
        </div>
    )
}

export const MediaComponent: FunctionComponent<{media: Media}> = (props) => {

    const { media } = props;
    return (
        <div className={Styles.longChildItem}>
            <div className="flex">
                <img src={MEDIA_IMAGES[media.type]} />
                <p className="ml-2 color-date pt-2 font-medium">{media.type.toString()}</p>
            </div>
            <h3 className={`${Styles.componentTitle} mt-3 underline`}><a href={media.url}>{media.title}</a></h3>
            <p className="mt-3">{media.date} • {media.location}</p>
        </div>
    );
}

export const ProjectComponent: FunctionComponent<{project: Project}> = (props) => {
    const { project } = props;
    return (
        <div className={Styles.longChildItem}>
            <h3 className={`${Styles.componentTitle} mt-3`}>{project.title}</h3>
            <p className="mt-3">{project.description}</p>
        </div>
    );
}

export const Section: FunctionComponent<{title: string, childBoxClassExtra?: string, parentBoxClassExtra?: string }> = (props) => {
    return (
        <div className={`${Styles.sectionBox} ${props.parentBoxClassExtra}`}>
            <h2 className={Styles.sectionHeader}>{props.title}</h2>
            <div className={`flex ${props.childBoxClassExtra}`}>
                {props.children}
            </div>
        </div>
    );
}