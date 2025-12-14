import { date } from './../../node_modules/zod/src/v4/core/regexes';
// Content data migrated from legacy content.json
// This can be enhanced to use Astro Content Collections for Markdown-based content

export const profile = {
    name: "David Breuer",
    title: "Solution Architect",
    tagline: "I am <span>David Breuer</span>, a hungarian-born <span>Solution Architect</span> based in Budapest, specialised in Aviation Ecommerce systems and enterprise solutions and integrations.",
    twitter: "szunyog83",
    github: "dbreuer83mpro",
};

export const services = {
    intro: {
        title: "Our Services",
        content: "I am passionate about architecting <span>scalable and innovative</span> enterprise solutions that transform aviation ecommerce and integrate complex business systems."
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
        name: ".NET & VueJS",
        value: 95,
    },
    {
        name: "AWS & Azure Cloud",
        value: 90,
    },
    {
        name: "Terraform & IaC",
        value: 85,
    },
    {
        name: "Enterprise Architecture",
        value: 92,
    },
    {
        name: "NIS2 & PCI-DSS Compliance",
        value: 88,
    },
    {
        name: "AI Technologies",
        value: 83,
    }
];

export interface Project {
    id: number;
    title: string;
    description: string;
    date?: string;
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
    },
    {
        id: 1411,
        title: "Stag Shoot",
        date: "2020-05-15",
        description: "Stag shoot event management and booking website",
        image: "/images/stagshoot_com_t.png",
        images: ["/images/stagshoot_com.png"],
        link: "http://stagshoot.com/",
        keywords: ["wordpress", "service", "responsive"]
    },
    {
        id: 1417,
        title: "Focus Press Agency",
        description: "Professional press agency and media services platform",
        image: "/images/fpa_t.png",
        images: ["/images/focuspressagency.com.png"],
        link: "https://focuspressagency.com/",
        keywords: ["media", "press", "agency", "enterprise"]
    },
    {
        id: 1418,
        title: "Dragon Post Production",
        description: "Professional video post-production and editing services",
        image: "/images/dragon_t.png",
        images: ["/images/www.dragonpostproduction.com.png"],
        link: "https://www.dragonpostproduction.com/",
        keywords: ["video", "production", "media", "creative"]
    },
    {
        id: 1419,
        title: "NGBSH",
        description: "Hungarian national organization website with comprehensive information system",
        image: "/images/ngbs_t.png",
        images: ["/images/www.ngbsh.hu_hu.png"],
        link: "https://www.ngbsh.hu/hu/",
        keywords: ["organization", "enterprise", "cms"]
    },
    {
        id: 1420,
        title: "City & Guilds Hungary",
        description: "Educational institution and certification provider website",
        image: "/images/city_and_guild_t.png",
        images: ["/images/city_and_guild_t.png"],
        link: "http://www.cityandguilds.hu/",
        keywords: ["education", "certification", "enterprise"]
    },
    {
        id: 1421,
        title: "Lada Valesova",
        description: "Personal portfolio and creative showcase website",
        image: "/images/ladi_valesova_t.png",
        images: ["/images/lai_valesova_big.png"],
        link: "https://ladavalesova.com/",
        keywords: ["portfolio", "creative", "personal"]
    },
    {
        id: 1422,
        title: "Bitrise",
        description: "Mobile CI/CD platform for building, testing and deploying mobile apps",
        image: "/images/bitrise_io_t.png",
        images: ["/images/bitrise_io_big.png", "/images/bitrise_io_big_2.png"],
        link: "https://bitrise.io",
        keywords: ["devops", "ci/cd", "mobile", "platform"]
    },
    {
        id: 1423,
        title: "Lavard",
        description: "Fashion e-commerce platform for men's clothing",
        image: "/images/lavard_t.png",
        images: ["/images/lavard_hu_big.png"],
        link: "https://lavard.hu",
        keywords: ["ecommerce", "fashion", "retail"]
    },
    {
        id: 1424,
        title: "Evenemen",
        description: "Event management and planning platform",
        image: "/images/eveneman_t.png",
        images: ["/images/evenemen.hu.png", "/images/evenemen.hu_2.png", "/images/evenemen.hu_3.png", "/images/evenemen.hu_3_2.png"],
        link: "https://evenemen.hu",
        keywords: ["events", "management", "platform"]
    }
];
