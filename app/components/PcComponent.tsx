'use client'
import { Flex, Space, AspectRatio } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'
import Projects from "./Projects"

const PcComponent: React.FC = () => {
    return (
        <div className="mx-36 my-10 min-w-0">
            <div className='w-full'>
                <Flex direction={'row'} gap={200} className='h-full'>
                    <div className='w-2/5 h-full sticky top-0'>
                        <section className='pt-20'>
                            <h1 className="text-5xl mb-3 font-bold tracking-tighter text-white">
                                Wataru Takamine
                            </h1>
                            <h2 className='mb-4 text-2xl text-white'>Software Engineer/ Entrepreneur</h2>
                            <h3 className='text-lg text-slate-400 w-3/4'>I continue creating products as naturally as I breathe throughout my life.</h3>

                            <div className='my-20'>
                                <InternalGuide title="ABOUT" id="#about" />
                                <Space h="20" />
                                <InternalGuide title="EXPERIENCE" id="#experience" />
                                <Space h="20" />
                                <InternalGuide title="EDUCATION" id="#education" />
                                <Space h="20" />
                                <InternalGuide title="PROJECTS" id="#projects" />
                                <Space h="20" />
                                <ExternalGuide title="CHECKLIST" link="https://0xwata.notion.site/57b63aade5a245799877ef94e6b9c88d?v=d628db32357542f0879887aaafee4894" />
                            </div>
                        </section>
                    </div>
                    <div className='fixed bottom-20'>
                        <SocialIcons />
                    </div>
                    <div className='w-3/5 flex-grow overflow-y-auto'>
                        <section id='about' className='py-20'>
                            <div>
                                <p className='text-xl mb-5 text-slate-400'>
                                    I made the decision to fully immerse myself in coding and web development. Since then, I’ve been building software for <span className='text-white'>large enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company </span>.
                                </p>
                                <p className='text-xl mb-5 text-slate-400'>
                                    I find great joy in creating valuable software while crossing boundaries between <span className='text-white'>design</span>, <span className='text-white'>engineering</span>, and <span className='text-white'>business</span>.
                                </p>
                                <p className='text-xl text-slate-400'>
                                    Outside of work, I enjoy swimming, reading, spending time with my girlfriend, and studying <span className='text-white'>English</span>.
                                </p>
                            </div>
                        </section>
                        <section id='experience'>
                            <div className='py-20'>
                                <ExperienceTimeline isSp={false} />
                                <Space h="20" />
                                <div>
                                </div>
                            </div>
                        </section>
                        <section id='education'>
                            <div className='py-20'>
                                <EducationTimeline isSp={false} />
                            </div>
                        </section>
                        <section id='projects'>
                            <div className='py-20'>
                                <Projects isSp={false} />
                            </div>
                        </section>
                        <section >
                            <div>
                                <p className='text-base mb-20 text-slate-400 w-3/4'>
                                    Loosely coded in <span className='text-white'>Visual Studio Code</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>Mantine UI</span>, and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
                                </p>
                            </div>
                        </section>
                        <section >
                            <div className="w-full flex justify-end">
                                <div className="w-1/4">
                                    <AspectRatio ratio={1600 / 900} maw={200} >
                                        <img
                                            src={'./icon-transparent.png'}
                                            alt="project image"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </section>
                    </div>
                </Flex>
            </div>
        </div>
    )
}

export default PcComponent