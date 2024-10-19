
import { Flex, Badge, Image } from "@mantine/core";

type ProjectCardProps = {
    title: string;
    affiliation: string;
    imageURL: string;
    description: string;
    tags: string[];
};

const ProjectCard = ({ title, affiliation, imageURL, description, tags }: ProjectCardProps) => {
    return (
        <Flex
            direction={"row"}
            align={"flex-start"}
            gap={"50"}
            className="mb-8 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4 group"
        >
            <div className="w-1/4">
                <Image src={imageURL} alt={title} className="rounded-lg" />
            </div>
            <div className="w-3/4">
                <h3 className="font-semibold text-white group-hover:text-[#5CE6D1] mb-2">{title}・{affiliation}</h3>
                <p className="text-sm font-light text-slate-200 mb-2">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            color="#5CE6D1"
                            variant="light"
                            className="mt-2 transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </Flex>
    );
};

export default ProjectCard;