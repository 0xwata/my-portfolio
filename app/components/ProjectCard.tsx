
import { Flex, Badge, AspectRatio } from "@mantine/core";

type ProjectCardProps = {
    isSp: boolean;
    title: string;
    affiliation: string;
    imageURL: string;
    description: string;
    tags: string[];
};

const ProjectCard = ({ isSp, title, affiliation, imageURL, description, tags }: ProjectCardProps) => {
    if (isSp) {
        return (
            <Flex
                direction={"column"}
                align={"flex-start"}
                gap={"50"}
                className="mb-8 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4 group"
            >
                <div className="">
                    <h3 className="font-semibold text-white group-hover:text-[#5CE6D1] mb-1">{title}</h3>
                    <p className="text-sm font-light text-slate-200 mb-3">{affiliation}</p>
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
                <div className="">
                    <AspectRatio ratio={1600 / 900} maw={300} mx="auto">
                        <img
                            src={imageURL}
                            alt="project image"
                        />
                    </AspectRatio>
                </div>
            </Flex>
        );
    } else {
        return (
            <Flex
                direction={"row"}
                align={"flex-start"}
                gap={"50"}
                className="mb-8 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4 group"
            >
                <div className="w-1/4">
                    <AspectRatio ratio={1600 / 900} maw={300} mx="auto">
                        <img
                            src={imageURL}
                            alt="project image"
                        />
                    </AspectRatio>
                </div>
                <div className="w-3/4">
                    <h3 className="font-semibold text-white group-hover:text-[#5CE6D1] mb-1">{title}</h3>
                    <p className="text-sm font-light text-slate-200 mb-3">{affiliation}</p>
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

    }
};

export default ProjectCard;