import { Work, Media, MediaType, Project } from "./types"

export const WORKS: Work[] = [
    {
        title: 'Senior Software Engineer',
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: `
        Build open source infrastructure and tooling (TypeScript, Python, Go) with 
        potential to disrupt the legacy financial system. Work with high degree of autonomy,
        across teams, and owns entire features from specification to shipping.
        `,
        duration: 'Mar/2019 - Today'
    },
    {
        title: 'Senior Machine Learning engineer',
        employer: 'Coffee meets Bagel',
        employerUrl: 'https://coffeemeetsbagel.com/',
        description: `
        Designed, tested, and released features that scaled and were used by millions. 
        Built a machine learning pipeline using EC2, ECS, Docker, and gRPC that allows Data Scientists 
        to innovate without having to focus on deployment, retraining, and offline testing.
        `,
        duration: 'Sep/2015 - Mar/2019',
    },
    {
        title: 'Developer',
        employer: 'Skimlinks',
        employerUrl: 'https://skimlinks.com/',
        description: `
        Developed, together with a team of other highly skilled developers, the Skimlinks Publisher Hub 
        user interface. I really enjoyed working with such wonderful people in such a wonderful city.
        `,
        duration: 'Sep/2015 - Mar/2019',
    },
]

export const MEDIA: Media[] = [
    {
        date: 'Apr/2020',
        location: 'UC Berkeley Blockchain Club',
        title: 'Guest Lecture: Spring 2020 Blockchain for Developers on DeFi',
        type: MediaType.Video,
        url: 'https://youtu.be/SOBGjoJHxV4',
    },
    {
        date: 'Jan/2019',
        location: 'AWS Blog guest post',
        title: 'Powering recommendation models using Amazon ElastiCache for Redis at Coffee Meets Bagel',
        type: MediaType.Article,
        url: 'https://aws.amazon.com/blogs/database/powering-recommendation-models-using-amazon-elasticache-for-redis-at-coffee-meets-bagel/',
    },
    {
        date: 'Dec/2017',
        location: 'AWS Re:invent Las Vegas',
        title: 'Dating and Data Science: How Coffee MeetsBagel Uses Amazon Elasticache (DAT323)',
        type: MediaType.Video,
        url: 'https://www.youtube.com/watch?v=_Aniee-XpSQ&feature=youtu.be',
    },
    {
        date: 'May/2018',
        location: 'PyCon 2018 Cleveland',
        title: 'A practical guide to Singular Value Decomposition in Python',
        type: MediaType.Video,
        url: 'https://www.youtube.com/watch?v=d7iIb_XVkZs&t=762s',
    },
    {
        date: 'May/2018',
        location: 'Botmetrics podcast',
        title: 'Botmetrics: Meet The Makers // Daniel Pyrathon & Ranger Dave',
        type: MediaType.Video,
        url: 'https://www.youtube.com/watch?v=rq_JMDfN5YE&feature=youtu.be',
    },
    {
        date: 'Mar/2020',
        location: 'Medium',
        title: 'How SF Python hosted a remote meetup during the times of COVID-19',
        type: MediaType.Article,
        url: 'https://medium.com/@pirosb3/how-sf-python-hosted-a-remote-meetup-during-the-times-of-covid-19-b6ac10ba4cb8',
    },
    {
        date: 'Dec/2014',
        location: 'Django Under the Hood - Amsterdam',
        title: 'Daniel Pyrathon about Meta API at Django: Under The Hood ',
        type: MediaType.Video,
        url: 'https://www.youtube.com/watch?v=-1tt0S__kQk',
    },
    {
        date: 'Jul/2014',
        location: 'PyCon IT - Florence',
        title: 'Daniel Pyrathon about Meta API at Django: Under The Hood',
        type: MediaType.Video,
        url: 'https://www.youtube.com/watch?v=pxBfDe7wiEo',
    },
].sort((a, b) => parseInt(a.date.split('/')[1]) < parseInt(b.date.split('/')[1]) ? 1 : -1);

export const PROJECTS: Project[] = [
    {
        title: 'CycleToken',
        description: (
            <span>
                CycleToken is a unique collection of 7 cryptocurrency tokens (ERC721) that I build to raise money for <a className="underline" href="https://www.aidslifecycle.org/">AIDS LifeCycle</a>.
            </span>
        ),
    },
    {
        title: 'Django model meta contributions',
        description: (
            <span>
                Designed, tested, and released Django’s Meta API, already in use by many developers in production. Planned the strategy for deprecation and backwards-compatibility: Old API 100% backwards-compatible.
                My code can be found <a className="underline" href="https://github.com/django/django/commit/fb48eb05816b1ac87d58696cdfe48be18c901f16">Here</a>
            </span>
        ),
    },
]

export const VOLUNTEERING: Project[] = [
    {
        title: 'SF Python and PyBay',
        description: (
            <span>
                Since 2015, I've been on the leadership team for <a href="http://pybay.com/" className="underline">PyBay</a> (the annual flaghip conference) and <a href="https://www.sfpythonmeetup.com/" className="underline">SF Python</a> (the monthly meetup).
                Aside from lining up talks for SF Python and helping out with PyBay, I've also been helping attendees find jobs and encourage
                bootcamp students to become first-time speakers.
            </span>
        ),
    },
    {
        title: 'Techtonica',
        description: (
            <span>
                I've been a volunteer for Techtonica's 2019 cohort. <a href="https://techtonica.org/" className="underline">Techtonica</a> provides aspirational Bay Area women and non-binary adults with low incomes a pathway to careers in software engineering, 
                and serves the recruitment needs of tech companies committed to diversity and inclusion in the workplace. I'm proud to say that 2 of the students that I've been directly mentoring have been chosen for an internship opportunity, and both of them
                have also given talks at SF Python!
            </span>
        ),
    },
]