import Entrepreneurship from "../Images/Entrepreneurship.webp";
import DigitalMarketing from "../Images/DigitalMarketing.webp";
import ProductManagement from "../Images/ProductManagement.webp";
import WebDevelopment from "../Images/WebDevelopment.webp";
import Entrepreneuship_1 from "../Images/Entrepreneurship_1.webp";
import DigitalMarketing_1 from "../Images/DigitalMarketing_1.webp";
import ProductManagement_1 from "../Images/ProductManagement_1.webp";
import WebDevelopment_1 from "../Images/WebDevelopment_1.webp";
const digitalMarketingDetails = [
    {
        summaryHeading: " Introduction",
        summaryDescription: "In this section, the course is introduced by explaining the objectives and structure of the course. Additionally, the purpose and process of digital marketing is also talked about."
    },
    {
        summaryHeading: "Market Research ",
        summaryDescription: "In this section, you would be taught on How to Find a Hungry-to-Buy Audience with 3 Simple Questions."
    },
    {
        summaryHeading: "Make a Website ",
        summaryDescription: " The section instructs the candidates on how to build a basic functional website."
    },
    {
        summaryHeading: "Email Marketing  ",
        summaryDescription: "After going through this section you will be enlightened on the need of marketing a business with email?"
    },
    {
        summaryHeading: "Copywriting ",
        summaryDescription: " In this section you would be taught how to create attractive headlines."
    },
    {
        summaryHeading: "Search Engine Optimization (SEO) ",
        summaryDescription: "This section will assist you on the use of SEO metrics to measure SEO performance."
    },
    {
        summaryHeading: "YouTube Marketing",
        summaryDescription: " In this section, you`ll learn to drive traffic & sales with sample videos."
    },
    {
        summaryHeading: "Social Media Marketing",
        summaryDescription: "This section enables you to learn why there is a need to market your business on social media platforms such as Instagram, Facebook, Twitter, Pinterest & Quora"
    },
    {
        summaryHeading: "LinkedIn Marketing ",
        summaryDescription: "This section teaches you how to go viral on LinkedIn and multiply your connections to more than 400 times the original number."
    },
    {
        summaryHeading: "App Marketing",
        summaryDescription: "This section will help discover 43 Ways to Promote Your App."
    }, {
        summaryHeading: "Google Ad-words",
        summaryDescription: " This section will make you avoid common mistakes and set up profitable campaigns for the first time."
    }, {
        summaryHeading: "Facebook Ads ",
        summaryDescription: " This section focuses on making money with Facebook Ads without spending a fortune."
    }
]
const webDevelopmentDetails = [{
    summaryHeading: "Introduction",
    summaryDescription: "In this section, the course is introduced by explaining the objectives and structure of the course. Additionally, the purpose and process of web development is also talked about."
},
{
    summaryHeading: "Web Foundations",
    summaryDescription: "HTML, CSS, Git, JavaScript and UI Principles"
},
{
    summaryHeading: "Application Development ",
    summaryDescription: " ‍React, Redux, React Router, HTTP/Ajax, and Functional Programming Techniques"
},
{
    summaryHeading: "Advanced Web Development",
    summaryDescription: ' ‍Advanced React, State Management and Web Applications'
},
{
    summaryHeading: "Back End Development",
    summaryDescription: " Node.js Web APIs, Data Persistence, Authentication and Testing"
},
{
    summaryHeading: "Project ",
    summaryDescription: " In this section, you`ll be taught about how to clone the amazon website"
},
{
    summaryHeading: "Deployment",
    summaryDescription: " This section will teach you how to deploy the application on Heroku"
},

]
const productManagementDetails = [
    {
        summaryHeading: "Introduction",
        summaryDescription: "The course is given an introduction at a basic level in this section, along with a high-level explanation on the purpose and process of product management."
    },
    {
        summaryHeading: "Market Intelligence",
        summaryDescription: "In this lecture, we talk about market analysis and identifying market segments"
    },
    {
        summaryHeading: "Strategy",
        summaryDescription: " In this section, you are acquainted with the importance of developing a product strategy and the process of creating a strategy including product vision and objectives."
    },
    {
        summaryHeading: "New Product Development:",
        summaryDescription: "This section discusses the need for developing the product in line with the objectives and strategy involved in the previous section."
    },
    {
        summaryHeading: "Lifecycle Management",
        summaryDescription: "Through this section, we look at the value propositions for our product and how we use them to identify our key benefits and create a competitive distinction."
    },
    {
        summaryHeading: "Wrap-Up",
        summaryDescription: "The course is concluded in this section with a recap to all the preceding sections."
    }
]
const entrepreneurshipDetails=[
    {
        summaryHeading:"Introduction",
        summaryDescription:"You are introduced to Entrepreneurship at a nascent level."
    },{
        summaryHeading:"Entrepreneurship and Critical thinking",
        summaryDescription:" This section provides deeper details on entrepreneurship and how an entrepreneur should think in any situation."
    },
    {
        summaryHeading:"Innovation",
        summaryDescription:"This section emphasizes on the need to constantly innovate one’s business model."
    },
    {
        summaryHeading:"Culture and Communication Breakdown",
        summaryDescription:" This part focuses on the importance of having excellent communication skills and holistic work environment."
    },
    {
        summaryHeading:"Innovation Practice and Methods",
        summaryDescription:"This section encapsulates the different manners or ways in which innovation can be exercised and achieved in a venture."
    }
]
const CourseData = [
    {
        image: Entrepreneurship,
        altText: "Entrepreneurship",
        courseTitle: "Entrepreneurship",
        link: "/Entrepreneurship",
        courseOverview: "If you want to learn to think like an innovator, this is place for you! This quest teaches you how to think research, analyze, innovate and strategize. The content present in this course will help you visualize business ideas in a holistic way by putting together patterns of varying complexity into a single perspective for practice.",
        anotherImage: Entrepreneuship_1

    },
    {
        image: DigitalMarketing,
        altText: "Digital Marketing",
        courseTitle: "Digital Marketing",
        link: "/DigitalMarketing",
        courseOverview: "This course summarizes the concept of Digital Marketing at expert level wherein the candidate would get an opportunity to learn to create how to market content using social media to amplify outgoing messages, making content discoverable in search, running advertisement campaigns and advertising on Facebook.",
        anotherImage: DigitalMarketing_1
    },
    {
        image: ProductManagement,
        altText: "Product Management",
        courseTitle: "Product Management",
        link: "/ProductManagement",
        courseOverview: "This module is prepared with special emphasis given on both current and new product managers working digitally who want to apply for a portfolio of modern practices to develop their products and teams. It comprises of five sub-courses through which one can cover product design, hypothesis-driven development and agile, all at the heart of modern product management.",
        anotherImage: ProductManagement_1
    },
    {
        image: WebDevelopment,
        altText: "web Development",
        courseTitle: "Web Development",
        link: "webDevelopment",
        courseOverview: "This course summarizes the concept of Web Development at expert level wherein the candidate would get an opportunity to learn to create how to create the full Stack website , additionally it  teaches  you how to make the clone of Amazon and also teaches how to deploy the website ",
        anotherImage: WebDevelopment_1
    },
    {
        courseTitle: "Digital Marketing Course",
        details: digitalMarketingDetails
    },
    {
        courseTitle: "Web Development Course",
        details: webDevelopmentDetails
    },
    {
        courseTitle: "Product Management Course",
        details: productManagementDetails
    }

]
export default CourseData;