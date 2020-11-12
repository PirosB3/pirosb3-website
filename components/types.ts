export interface Work {
    duration: string;
    employer: string;
    employerUrl: string;
    title: string;
    description: string;
    imageUrl: string;
}

export enum MediaType {
    Video = 'Video',
    Article = 'Article',
}

export interface Media {
    type: MediaType;
    title: string;
    date: string;
    url: string;
    location: string;
}

export interface Project {
    title: string;
    description: string | JSX.Element;
}