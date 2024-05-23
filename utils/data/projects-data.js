import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Pixel Perfect AI, Image Transformation Saas Product',
        description: "Integrated AI capabilities like generative fill, restoration, recoloring, object removal, and background extraction. -Developed secure authentication with Clerk and implemented responsive design for seamless navigation across all devices. - Designed a secure credit purchase system via Stripe coupled with a personalized profile page for users. - Created a dynamic community image showcase with pagination and advanced search functionalities, enhancing user interaction and content discoverability.",
        tools: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS', 'Cloudinary', 'Stripe', 'Clerk'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Emotion Recognition Web App,',
        description: '– Utilized the power of ReactJS to create an engaging user interface, ensuring a seamless and intuitive experience – Collaborated with M.Tech students, seamlessly integrating a sophisticated machine learning model into the web app. Demonstrated strong teamwork and interdisciplinary skills to bring together front-end and machine learning expertise for a comprehensive solution. – Utilized Flask to handle backend operations, including video uploading and storage, ensuring data integrity while main- taining smooth user interactions.',
        tools: ['Javascript', 'React.Js', 'Flask', 'Node.Js', 'Bootstrap', 'Python', 'Machine Learning'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Weather Seeker, Web App',
        description: '– Crafted a weather app that dynamically adjusts its background to match the searched location, seamlessly merging functionality with visual appeal. – Successfully integrated two distinct APIs, OpenWeatherMap and UnsplashImages, into a unified, responsive web application.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Replit', 'API', 'OpenWeatherMap API', 'UnsplashImages API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'WebEstateHarvester, Web Scrapper',
        description: "•Implemented a Web Scraperthat extracted comprehensive real estate data from over 800 webpages on Makaan.com, totaling more than 15,800 houses. •Leveraged Python’s Beautiful Soup library to efficiently navigate and scrape diverse data attributes highlighting data management skills ",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Web Developer',
    },
    {
        id: 5,
        name: 'PYGAME: ZAVIOUR',
        description: "• Made a pygame named Zaviour with 2 partners for a game jam competition and got 7/12 rank • Included three levels in the game which are covering 3 different types of versions like Space invasion, Mario, and Car Racing",
        tools: ['pygame, python', 'game development', 'game jam'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Game Developer',
    },
    {
        id: 6,
        name: 'A Neural Network Based Head Tracking System, Paper Analysis',
        description: "• Did in depth research followed by critical analysis of the results, giving some advantages, disadvantages and suggestions ",
        tools: ['python, machine learning, neural network, paper analysis'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Machine Learning Student',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },