import React, { FunctionComponent } from 'react';
import { Work, Media, MediaType, Project } from './types';

const MEDIA_IMAGES: {[key in MediaType]: string} = {
    [MediaType.Article] : '/images/article.svg',
    [MediaType.Video] : '/images/video.svg',
}

export const Styles = {
    'sectionBox': 'flex flex-col mt-5 ml-6 md:ml-0 px-12',
    'sectionHeader': 'font-semibold text-2xl mb-5 md:pl-2 font-syne font-bold text-3xl',
    'componentTitle': 'font-bold text-xl',
    'longChildItem': 'flex flex-col w-full mb-8 pt-5 px-3'
}

export const WorkComponent: FunctionComponent<{work: Work}> = (props) => {
    const { work } = props;
    return (
        <div className="flex md:w-1/2 w-full mb-8">
            <div className="relative">
                <img className="h-full w-full object-cover" src={work.imageUrl} />
            </div>
            <div className="flex flex-col mr-12">
                <div className={`${Styles.componentTitle} ml-5 flex-grow mt-5`}><a className="underline" href={work.employerUrl}>{work.employer}</a></div>
                <div className="ml-5 flex-grow text-gray-700 font-bold">{work.duration}</div>
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
                <p className="ml-2 color-date font-medium">{media.type.toString()}</p>
            </div>
            <h3 className={`${Styles.componentTitle} mt-3 underline`}><a href={media.url}>{media.title}</a></h3>
            <p className="mt-3">{media.date} • {media.location}</p>
        </div>
    );
}

export const ProjectComponent: FunctionComponent<{project: Project}> = (props) => {
    const { project } = props;
    const title = project.url ? <a className="underline" href={project.url}>{project.title}</a> : <span>{project.title}</span>

    return (
        <div className={Styles.longChildItem}>
            <h3 className={`${Styles.componentTitle}`}>{title}</h3>
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