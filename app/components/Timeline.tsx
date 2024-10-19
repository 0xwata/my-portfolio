
import TimelineCard from "./TimelineCard";
import { Flex } from "@mantine/core";


interface ExperienceTimelineProps {
    isSp: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ isSp }) => {

    return (
        <Flex direction={"column"}>
            <TimelineCard
                isSp={isSp}
                title={'Co-Founder & CTO'}
                affiliation={'Leapify, Inc.'}
                date={'2024 - Present'}
                description={`Co-founded Leapify Inc. as the CTO, developing the automated trend report service using Python, ChatGPT API,
                    Supabase, and Google Apps Script. Led the tech team in creating monthly AI product reports for sale preparation, 
                    showcasing expertise in automation and AI technologies. Sole member of the development team, handling all implementation independently.`}
                tags={['Python', 'Supabase', 'ChatGPT', 'Google App Script', 'Substack', 'Stripe']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Blockchain Engineer'}
                affiliation={'SARAH, Inc.'}
                date={'2023 - Present'}
                description={`Developed Onigiri Chain and Omochi Chain on Avalanche, pioneering blockchain solutions in Japan.
Led a web3 engineering team, focusing on app development, particularly in infrastructure and backend.
Built a Blockchain Indexer using Subquery and AWS CDK to efficiently manage and index blockchain data.`}
                tags={['TypeScript', 'Avalanche', 'AvaCloud', 'SubQuery', 'AWS CDK', 'AWS ECS', 'AWS ECR', 'EVM']}
            />
            <TimelineCard
                isSp={isSp}
                title={'FullStack Engineer'}
                affiliation={'Forward, Inc.'}
                date={'2023 - 2024'}
                description={`Developed automation for scout emails sent by recruitment consultants to job seekers in recruitment
                    industry using TypeScript, React, Next.js, and Prisma. Collaborated with the team to launch and optimize automation processes for efficiency.
                    Developed a backend system for a Slack Integration tool that registers contracting companies using AWS CDK and Lambda.`}
                tags={['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS Lambda', 'AWS ECS', 'AWS CDK']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Android Engineer'}
                affiliation={'DMM.com, LLC'}
                date={'2020 - 2023'}
                description={`Developed the detailed view screen for DMM TV using Jetpack Compose, implementing the UI and retrieving data via Apollo GraphQL.
                    Collaborated with cross-functional teams to ensure seamless integration and user-friendly experience.
                    Reduced API query complexity and response times for DMM TV, optimizing user experience during video playback.
                    Implemented ExoPlayer into a video streaming app, focusing on analytics event tracking and player settings UI.
                    Led the introduction of new metrics and developed an automated system for quality monitoring using Redash, Slack,
                    and Firebase. Developed in-app purchase functionalities using Google Play Billing Library, ensuring compliance with financial
                    regulations.`}
                tags={['Kotlin', 'Android', 'Jetpack Compose', 'GraphQL', 'KMM', 'GraphQL', 'Redash', 'Firebase', 'Looker Studio', 'Google Play Billing Library']}
            />
        </Flex>
    );
}

interface EducationTimelineProps {
    isSp: boolean;
}



export const EducationTimeline: React.FC<EducationTimelineProps> = ({ isSp }) => {

    return (
        <Flex direction={"column"}>
            <TimelineCard
                isSp={isSp}
                title={'Master of Engineering / Technology Management for Innovation'}
                affiliation={'The University of Tokyo '}
                date={'2018 - 2020'}
                description={`Grade: 3.8 | \n Majored in technology management and data science, focusing on research in text mining, natural language processing, and machine learning. My master’s thesis was titled: 
                    "Query-Oriented Multi-Document Summarization with a Focus on Causality for Economic Reports. Produced the digital art piece "韻を踏む" (Rhyming), where I was responsible for collecting rhyming phrases and conducting linguistic processing. I received the Wacoal Study Hall Kyoto Encouragement Award at SICF20. 
                    Placed in the top 10% in the Signate J-League Attendance Forecasting Competition, using Ridge regression for time series tasks.
                    Developed a career path visualization tool using Rails, MySQL, and Cytoscape.js. The project is available on CareerCompass.`}
                tags={['Python', 'NLP', 'BERT', 'Text Mining', 'Finance', 'ProtoTyping']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Bachelor of Engineering / Mechanical and Aerpospace Engineering'}
                affiliation={'Tohoku University'}
                date={'2014 - 2018'}
                description={`Grade: 3.5| \n Activities and societies: Research Lab: Yoshida Laboratory (One of Japan’s leading research labs in space exploration engineering) Club: 
                    Human-Powered Aircraft Club (Contributed to winning the national championship in my second year)
                    Activities and societies: Research Lab: Yoshida Laboratory (One of Japan’s leading research labs in space exploration engineering) 
                    Club: Human-Powered Aircraft Club (Contributed to winning the national championship in my second year)
                    Majored in Mechanical and Aerospace Engineering and was part of a research lab focused on space exploration engineering.
                    Awarded the Global Hagi Overseas Study Encouragement Award, which is given to outstanding students for studying abroad at international universities.
                    Thesis Topic: "Obstacle Recognition Based on Distance Imaging for Lunar and Planetary Exploration Robots"`}
                tags={['Python', 'Image Processing', 'Robotics', 'Space Exploration', 'Mechanical Engineering']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Bachelor of Engineering / Mechanical and Aerpospace Engineering'}
                affiliation={'University of California, Irvine'}
                date={'2016 - 2017'}
                description={`Participated in an exchange program where I spent a year studying aerospace and mechanical engineering. 
                    During this time, I also actively joined the university’s soccer club, 
                    balancing my academic pursuits with team sports and building strong collaborative and leadership skills`}
                tags={['Study Abroad', 'Aerospace Engineering', 'Mechanical Engineering', 'Soccer']}
            />
        </Flex>
    );
}