import React, { FunctionComponent } from 'react';
import { Work, Media, MediaType, Project } from './types';

const MEDIA_IMAGES: {[key in MediaType]: string} = {
    [MediaType.Article] : '/images/article.svg',
    [MediaType.Video] : '/images/video.svg',
}

export const Styles = {
    'sectionBox': 'flex flex-col mt-5 px-12',
    'sectionHeader': 'font-semibold text-2xl mb-5 md:pl-2 font-syne font-bold text-3xl',
    'componentTitle': 'font-bold text-xl',
    'longChildItem': 'flex flex-col w-full mb-8 pt-5 md:px-3'
}

export const WorkComponent: FunctionComponent<{work: Work}> = (props) => {
    const { work } = props;
    return (
        <div className="flex md:w-1/2 w-full mb-8">
            <div className="relative md:w-2/6">
                <img className="absolute w-full h-full object-cover" src={work.imageUrl} />
            </div>
            <div className="flex flex-col md:mr-12 md:w-4/5">
                <div className={`${Styles.componentTitle} md:ml-5 flex-grow mt-5`}><a className="underline" target="_blank" href={work.employerUrl}>{work.employer}</a></div>
                <div className="md:ml-5 flex-grow text-gray-700 font-bold">{work.duration}</div>
                <div className="md:ml-5 flex-grow">{work.description}</div>
            </div>
        </div>
    )
}

export const MediaComponent: FunctionComponent<{media: Media<Date>}> = (props) => {

    const { media } = props;
    return (
        <div className={Styles.longChildItem}>
            <h3 className={`${Styles.componentTitle} underline`}><a target="_blank" href={media.url}>{media.title}</a></h3>
            <div className="flex mt-3">
                <img src={MEDIA_IMAGES[media.type]} />
                <p className="ml-2 color-date font-medium sm:inline-block hidden">{media.type.toString()}</p>
                <p className="color-date ml-2"><span className="sm:inline-block hidden"> • {media.date.toLocaleDateString("en-US")} • </span>{media.location}</p>
            </div>
        </div>
    );
}

export const ProjectComponent: FunctionComponent<{project: Project}> = (props) => {
    const { project } = props;
    const title = project.url ? <a className="underline" target="_blank" href={project.url}>{project.title}</a> : <span>{project.title}</span>

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