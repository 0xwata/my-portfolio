'use client'
import { Flex, Space, AspectRatio } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'
import Projects from "./Projects"
import ResumeButton from "./ResumeButton"

const SpComponent: React.FC = () => {
    return (
        <div className='mx-5'>
            <div className='h-full'>
                <section className='pt-10'>
                    <h1 className="text-4xl mb-3 font-bold tracking-tighter text-white">
                        Wataru Takamine
                    </h1>
                    <h2 className='mb-4 text-xl text-white'>Software Engineer/ Entrepreneur</h2>
                    <h3 className='text-lg text-slate-400 w-3/4'>I continue creating products as naturally as I breathe throughout my life.</h3>
                </section>
            </div>
            <div>
                <SocialIcons />
            </div>
            <div className=' flex-grow overflow-y-auto'>
                <section id='about' className='py-20'>
                    <div className="text-lg text-white font-bold mb-8">ABOUT</div>
                    <div>
                        <p className="text-lg mb-3 text-slate-400">
                            <span className='text-white text-3xl mr-3 '>1994</span>, The year I was born, was actually a very important year for <span className='text-white'>the internet</span> and <span className='text-white'>technology</span> in general. It was the year when the information revolution truly started to go mainstream. Netscape launched its browser, Jeff Bezos quit his job to start Amazon, the White House in the United States created its very first website, and, Lionel Messi was just 7 years old at the time, beginning his journey in football.
                        </p>
                        <p className='text-lg mb-3 text-slate-400 '>
                            I made the decision to fully immerse myself in internet and technology. Since then, I’ve been building software for <span className='text-white'>large enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company</span>, occasionally seeking comfort while continuously pushing the boundaries of my potential.                        </p>
                        <p className='text-lg mb-3 text-slate-400'>
                            I find great joy in creating valuable software while crossing boundaries between <span className='text-white'>design</span>, <span className='text-white'>engineering</span>, and <span className='text-white'>business</span>.
                        </p>
                        <p className='text-lg text-slate-400'>
                            Outside of work, I enjoy swimming, reading, Listening to radio and studying <span className='text-white'>English</span>.
                        </p>
                    </div>
                </section>
                <section id='experience'>
                    <div className="text-base text-white font-bold mb-10">EXPERIENCE</div>
                    <div className=''>
                        <ExperienceTimeline isSp={true} />
                        <ResumeButton />
                        <Space h="40" />
                    </div>
                </section>
                <section id='education'>
                    <div className="text-base text-white font-bold mb-7">EDUCATION</div>
                    <div className=''>
                        <EducationTimeline isSp={true} />
                    </div>
                </section>
                <section id='projects'>
                    <div className="text-base text-white font-bold mb-7">PROJECTS</div>
                    <div className=''>
                        <Projects isSp={true} />
                    </div>
                </section>
                <section >
                    <div>
                        <p className='text-sm mb-10 text-slate-400 w-3/4'>
                            Loosely coded in <span className='text-white'>Visual Studio Code</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>Mantine UI</span>, and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="w-full flex justify-end mb-10">
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
        </div >
    )
}

export default SpComponent