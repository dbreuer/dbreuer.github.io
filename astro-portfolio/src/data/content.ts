// Content data migrated from legacy content.json
// This can be enhanced to use Astro Content Collections for Markdown-based content

export const profile = {
    name: "David Breuer",
    title: "Front-End Web Developer",
    tagline: "I am <span>David Breuer</span>, a hungarian-born Front-End <span>Web Developer</span> based in London. I have a deep passion to create good UX websites, applications and games.",
    twitter: "szunyog83",
    github: "dbreuer83mpro",
};

export const services = {
    intro: {
        title: "Our Services",
        content: "I am absolutely passionate about <span>simple yet sophisticated</span> user experience and designs that myself, and my clients, are very proud of."
    },
    items: [
        {
            icon: "efficiency",
            title: "Efficiency",
            content: "I use a well-proven process to deliver a tailor made UX to our Clients. Every project has clear goals, precise timing, and flawless management."
        },
        {
            icon: "design",
            title: "Design",
            content: "Design for coders and don't waste precious time in design first, check later. I work side by side with designers."
        },
        {
            icon: "innovation",
            title: "Innovation",
            content: "I do not simply make websites. I create digital experiences to make the web come alive."
        }
    ]
};

export const skills = [
    {
        name: "HTML5/CSS3",
        value: 99,
    },
    {
        name: "JavaScript/Angular JS",
        value: 99,
    },
    {
        name: "PHP 5.x",
        value: 70,
    },
    {
        name: "API",
        value: 84,
    },
    {
        name: "Graphic/Responsive",
        value: 85,
    },
    {
        name: "Version Control",
        value: 90,
    }
];

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    images: string[];
    link?: string;
    keywords: string[];
    client?: string;
    skills?: string[];
}

export const projects: Project[] = [
    {
        id: 1415,
        title: "AAT",
        description: "Accounting technology Drupal website with well structured AngularJS and Node.js Front-end",
        image: "/images/aat_t.png",
        images: ["/images/aat.png"],
        link: "https://www.aat.org.uk/",
        keywords: ["drupal", "angularjs", "nodejs", "accounting"]
    },
    {
        id: 1416,
        title: "Wieger.hu",
        description: "A great Hungarian artist personal website with paint catalog, full responsive WordPress based project",
        image: "/images/wieger_t.png",
        images: ["/images/wieger.png"],
        link: "https://www.wieger.hu/",
        keywords: ["wordpress", "art", "responsive", "php"]
    },
    {
        id: 1411,
        title: "Marcus Wareing",
        description: "Celebrity chef restaurant website with elegant design and booking integration",
        image: "/images/marcus-wareing_t.png",
        images: ["/images/marcus-wareing.png"],
        link: "http://marcus-wareing.com/",
        keywords: ["wordpress", "restaurant", "booking"]
    },
    {
        id: 1405,
        title: "Bree",
        description: "Beautiful flowers and interior design personal website and blog",
        image: "/images/bree_t.png",
        images: ["/images/bree.png"],
        link: "http://bree.hu/",
        keywords: ["wordpress", "responsive", "flat design"]
    },
    {
        id: 1406,
        title: "SeoSem",
        description: "Search engine optimizer company website, simple business design",
        image: "/images/centralmarketing_t.png",
        images: ["/images/centralmarketing.png", "/images/seosem_responsive.png"],
        link: "http://www.centralmarketing.hu/",
        client: "Web Steel Kft.",
        skills: ["HTML5", "CSS3", "Wordpress", "jQuery"],
        keywords: ["wordpress", "seo", "html5", "jquery"]
    },
    {
        id: 1413,
        title: "Select",
        description: "Professional recruitment agency website with job listings",
        image: "/images/select_t.png",
        images: ["/images/select.png"],
        link: "http://select.hu/",
        keywords: ["wordpress", "recruitment", "responsive"]
    },
    {
        id: 1407,
        title: "Autouvegfoliazas",
        description: "Car foil, car wrap simple full responsive retina design website",
        image: "/images/autouvegfoliazas_t.png",
        images: ["/images/autouvegfoliazas.png"],
        link: "http://autouvegfoliazas.hu/",
        keywords: ["wordpress", "responsive", "flat design"]
    },
    {
        id: 1409,
        title: "Le Baron",
        description: "Luxury lifestyle and events portal with news and portfolio",
        image: "/images/lebaron_t.png",
        images: ["/images/lebaron.png"],
        link: "http://lebaron.hu/",
        keywords: ["joomla", "news", "portfolio"]
    },
    {
        id: 1410,
        title: "Viharkar Elharitas",
        description: "Storm damage repair service website with contact forms",
        image: "/images/viharkarelharitas_t.png",
        images: ["/images/viharkarelharitas_big.png"],
        link: "http://viharkarelharitas.hu/",
        keywords: ["wordpress", "service", "responsive"]
    }
];
