
import ProjectCard from "./ProjectCard";


const Projects = () => {


    return (
        <div className="flex flex-col gap-8">
            <ProjectCard
                title="Project 1"
                affiliation="Affiliation 1"
                imageURL="https://via.placeholder.com/150"
                description="Description 1"
                tags={["tag1", "tag2", "tag3"]}
            />
            <ProjectCard
                title="Project 2"
                affiliation="Affiliation 2"
                imageURL="https://via.placeholder.com/150"
                description="Description 2"
                tags={["tag1", "tag2", "tag3"]}
            />
            <ProjectCard
                title="Project 3"
                affiliation="Affiliation 3"
                imageURL="https://via.placeholder.com/150"
                description="Description 3"
                tags={["tag1", "tag2", "tag3"]}
            />
        </div>
    );
}

export default Projects


