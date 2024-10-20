
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
    isSp: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isSp }) => {

    return (
        <div className="flex flex-col gap-8">
            <ProjectCard
                isSp={isSp}
                title="ONIGIRI Chain"
                affiliation="Associated with SARAH, Inc."
                imageURL="./onigirichain.png"
                description="
A Blockchain Specialized in Food and Healthcare.
ONIGIRI Chain is a blockchain dedicated to collecting and storing information on food and healthcare. By centralizing a wide range of consumer behavior data on the blockchain, it aims to become the protocol for food and healthcare data, serving as a foundation for creating new value."
                tags={["Blockchain", "Avalanche", "AvaCloud", "SubQuery", "AWS CDK", "AWS ECS", "AWS ECR"]}
            />
            <ProjectCard
                isSp={isSp}
                title="AI Product Report"
                affiliation="Associated with Leapify, Inc."
                imageURL="./aiproductreport.png"
                description="The AI Trend Report is a website that provides the latest trends and information about artificial intelligence in Japanese. This project comprehensively covers domestic and international AI news, trend analyses, and practical use cases, regularly updating content. It aims to offer opportunities for technicians, business professionals, researchers, and AI enthusiasts to deepen their understanding of AI technological advancements and their impacts."
                tags={["Python", "Supabase", "Google App Script", "ChatGPT", "Substack", "Stripe"]}
            />
            <ProjectCard
                isSp={isSp}
                title="AceJob"
                affiliation="Associated with Forward, Inc."
                imageURL="./acejob.png"
                description="AceJob is a platform that helps companies optimize their recruiting processes by automating and streamlining various tasks. It offers solutions for managing job posts, candidate screening, and application tracking, reducing manual work and improving efficiency in the hiring pipeline. The service integrates seamlessly with existing tools and aims to enhance the overall recruitment experience for both employers and candidates"
                tags={["Typescript", "ChatGPT", "Claude", "AWS CDK", "AWS ECS", "AWS Lambda", "Next.js", "React", "Prisma"]}
            />
            <ProjectCard
                isSp={isSp}
                title="DMM TV"
                affiliation="Associated with DMM.com LLC"
                imageURL="./dmmtv.png"
                description="
DMM TV
DMM TV
Jul 2021 - Jul 2023Jul 2021 - Jul 2023

Associated with DMM.com Group
Associated with DMM.com Group
DMM TV is a video streaming service by DMM.com, offering a wide range of content including anime, movies, dramas, and variety shows. It's known for its strong anime selection, including exclusive titles. Users can stream or download content on various devices, and it operates on a subscription model with a monthly fee for unlimited access.
I was responsible for developing the content details screen in the DMM TV Android app using Jetpack Compose. This screen was the most complex in the app, requiring me to lead the mapping of fields from the GraphQL schema to UI elements alongside other client-side engineers. On the web, I also handled the implementation to retrieve necessary data via Apollo.

During development, I addressed performance issues, including slow API response times and high query complexity. I tackled this by splitting the queries into FirstView-required data and eliminating over-fetching, reducing query complexity from 1500 to 750 and halving response times. Since this was a video streaming app, my focus was on improving the user experience leading up to video playback, ensuring smooth performance for users."
                tags={["Android", "KMM", "Jetpack Composer", "GraphQL", "Google Play Billing Library", "Firebase", "Looker Studio", 'Performance Optimization']}
            />
            <ProjectCard
                isSp={isSp}
                title="Inwofumu | multi-lingua-body"
                affiliation="Associated with Manabe Minori"
                imageURL="./inwofumu.png"
                description="
Inwofumu | multi-lingua-body
Inwofumu | multi-lingua-body
Jan 2019 - Dec 2019Jan 2019 - Dec 2019
The experience is mainly for two persons, but the audience also goes through a new aural experience.’Inwofumu’ is a project conceptualized by my friend and talented artist, Minori Manabe. This project combines the two meanings of the Japanese word ’fumu’ (to step and to rhyme), offering a unique experience where participants physically engage with rhymes. By stepping on phrases projected onto the ground, participants can see words that rhyme with the chosen phrase, allowing them to enjoy the rhythmic pleasure of poetry and rap.

Building upon this,’multi-lingua-body’ was born. Based on Minori's vision, this work expands the concept to break language barriers by introducing multilingual support. When participants select a word in their native language, a rhyming phrase in another language is read aloud, enabling cross-linguistic communication through rhyme. In this project, I was primarily responsible for extracting rhyming phrases from Aozora Bunko, establishing relationships between phrases, and handling the multilingual integration.

’Multi-lingua-body’ was also exhibited at SIGGRAPH ASIA 2022, where it received much recognition for its innovative approach."
                tags={["Interactive Art", "NLP", "Python"]}
            />
        </div>
    );
}

export default Projects


