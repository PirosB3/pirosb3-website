import { Work, Media, MediaType, Project } from "./types"

export const WORKS: Work[] = [
    {
        employer: 'Bountycaster',
        employerUrl: 'https://www.bountycaster.xyz',
        description: `
        We help create and complete bounties on Farcaster. I'm the CTO and co-founder of Bountycaster.
        `,
        duration: 'Oct/2023 - Today',
        imageUrl: '/images/logos/bcaster3.png',
    },
    {
        employer: 'Phantom Technologies',
        employerUrl: 'https://phantom.app',
        description: `
        Working with a world class team of Backend and Infrastructure engineers to provide the best wallet UX without ever having to compromise on security
        `,
        duration: 'Feb/2022 - Aug/2023',
        imageUrl: '/images/logos/phantom-125.png',
    },
    {
        employer: 'ZeroEx Inc.',
        employerUrl: 'https://0x.org',
        description: `
        I am the Tech Lead on our Maker team, I collaborate with market makers and build open source infrastructure on Ethereum for the 0x Decentralized Exchange
        `,
        duration: 'Mar/2019 - Feb/2022',
        imageUrl: '/images/logos/0x.png',
    },
    {
        employer: 'Coffee meets Bagel',
        employerUrl: 'https://coffeemeetsbagel.com/',
        description: `
        I worked on the matching algorithms for online dating using rule-based systems, linear models, 
        and collaborative filtering.
        `,
        duration: 'Sep/2015 - Mar/2019',
        imageUrl: '/images/logos/cmb.png',
    },
    {
        employer: 'Skimlinks',
        employerUrl: 'https://skimlinks.com/',
        description: `
        I worked on dynamic client-side user interfaces and Chrome extensions for the Skimlinks Publisher Hub
        `,
        duration: 'Sep/2013 - Jun/2013',
        imageUrl: '/images/logos/skimlinks.png',
    },
    {
        employer: 'Gnammo',
        employerUrl: 'https://gnammo.com/',
        description: `
        I started Gnammo at the age of 17 with 3 other team-members that I met over Skype! The first time we met all 
        together was on the day of our public launch in Milan!
        `,
        duration: 'Sep/2012 - Jun/2013',
        imageUrl: '/images/logos/gnammo.png',
    },
]

export const MEDIA: Media<Date>[] = [
    {
        date: new Date(2025, 0, 19), // January 19, 2025
        location: 'Paragraph',
        title: 'Farcaster is not just for crypto',
        type: MediaType.Article,
        url: 'https://paragraph.xyz/@pirosb3/farcaster-is-not-just-for-crypto',
    },
    {
        date: new Date(2022, 11, 7),
        location: "Lisbon, Portugal",
        title: "Breakpoint 2022: Write Your First Anchor Program: Building a Vesting Schedule",
        type: MediaType.Video,
        url: "https://www.youtube.com/watch?v=aWIULtXsPjM",
    },
    {
        date: new Date(2021, 11, 16),
        location: 'Medium',
        title: 'Using PDAs and SPL Token in Anchor',
        type: MediaType.Article,
        url: 'https://medium.com/@pirosb3/using-pdas-and-spl-token-in-anchor-and-solana-df05c57ccd04',
    },
    {
        date: new Date(2019, 1, 1),
        location: 'AWS Blog guest post',
        title: 'Powering recommendation models using Amazon ElastiCache for Redis at Coffee Meets Bagel',
        type: MediaType.Article,
        url: 'https://aws.amazon.com/blogs/database/powering-recommendation-models-using-amazon-elasticache-for-redis-at-coffee-meets-bagel/',
    },
    {
        date: new Date(2020, 3, 1),
        location: 'Medium',
        title: 'How SF Python hosted a remote meetup during the times of COVID-19',
        type: MediaType.Article,
        url: 'https://medium.com/@pirosb3/how-sf-python-hosted-a-remote-meetup-during-the-times-of-covid-19-b6ac10ba4cb8',
    },
    {
        date: new Date(2019, 1, 30),
        location: 'Kite',
        title: 'Practical Machine Learning with Python and Keras',
        type: MediaType.Article,
        url: 'https://www.kite.com/blog/python/python-machine-learning-keras/',
    },
    {
        date: new Date(2016, 8, 30),
        location: 'DZone',
        title: "How We Developed the Official Chatbot for SF's Outside Lands Music Festival",
        type: MediaType.Article,
        url: 'https://www.kite.com/blog/python/python-machine-learning-keras/',
    },
    {
        date: new Date(2020, 5, 2),
        url: 'https://www.crowdcast.io/e/defi-discussions/35',
        title: 'Consuming liquidity from the 0x API',
        location: 'DeFi Discussions',
        type: MediaType.Video,
    },
    {
        date: new Date(2021, 9, 30),
        url: 'https://www.crowdcast.io/e/playfulsummit/19',
        title: 'Gasless Trading w/ 0x Protocol / Matcha',
        location: 'Playful: A NFT & DeFi Summit',
        type: MediaType.Video,
    },
];

export const PROJECTS: Project[] = [
    {
        url: 'https://cycletoken.me/',
        title: 'CycleToken',
        description: (
            <span>
                CycleToken is a unique collection of 7 cryptocurrency tokens (ERC721) that I built to raise money for <a target="_blank" className="underline" href="https://www.aidslifecycle.org/">AIDS LifeCycle</a>.
            </span>
        ),
    },
    {
        url: 'https://angry-pasteur-b9e877.netlify.app/',
        title: '0x Doc',
        description: (
            <span>
                0x Doc was created to serve technically-savvy users such as market-makers, 0x API integrators, and RFQ providers that want experiment, simulate, and trade 0x V3 orders. 
            </span>
        ),
    },
    {
        title: 'Django model meta contributions',
        description: (
            <span>
                Designed, tested, and released Django's Meta API, already in use by many developers in production. Planned the strategy for deprecation and backwards-compatibility: Old API 100% backwards-compatible.
                My code can be found <a className="underline" target="_blank" href="https://github.com/django/django/commit/fb48eb05816b1ac87d58696cdfe48be18c901f16">Here</a>
            </span>
        ),
    },
]

export const VOLUNTEERING: Project[] = [
    {
        title: 'SF Python and PyBay',
        description: (
            <span>
                Since 2015, I've been on the leadership team for <a target="_blank" href="http://pybay.com/" className="underline">PyBay</a> (the annual flaghip conference) and <a target="_blank" href="https://www.sfpythonmeetup.com/" className="underline">SF Python</a> (the monthly meetup).
                Aside from lining up talks for SF Python and helping out with PyBay, I've also been helping attendees find jobs and encourage
                bootcamp students to become first-time speakers.
            </span>
        ),
    },
    {
        title: 'Techtonica',
        description: (
            <span>
                I've been a volunteer for Techtonica's 2019 cohort. <a target="_blank" href="https://techtonica.org/" className="underline">Techtonica</a> provides aspirational Bay Area women and non-binary adults with low incomes a pathway to careers in software engineering, 
                and serves the recruitment needs of tech companies committed to diversity and inclusion in the workplace. I'm proud to say that 2 of the students that I've been directly mentoring have been chosen for an internship opportunity, and both of them
                have also given talks at SF Python!
            </span>
        ),
    },
]
