export interface Work {
    duration: string;
    employer: string;
    employerUrl: string;
    description: string;
    imageUrl: string;
}

export enum MediaType {
    Video = 'Video',
    Article = 'Article',
}

export interface Media<T> {
    type: MediaType;
    title: string;
    date: T,
    url: string;
    location: string;
}

export interface Project {
    title: string;
    url?: string;
    description: string | JSX.Element;
}