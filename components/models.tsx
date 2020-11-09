import React, { FunctionComponent } from 'react';
import { Work, Media, MediaType, Project } from './types';

const MEDIA_IMAGES: {[key in MediaType]: string} = {
    [MediaType.Article] : '/images/article.png',
    [MediaType.Video] : '/images/video.png',
}

export const Styles = {
    'sectionBox': 'flex flex-col mt-5 ml-6 md:ml-0',
    'sectionHeader': 'font-semibold text-2xl mb-5 md:pl-2',
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