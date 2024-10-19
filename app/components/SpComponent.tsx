'use client'
import { Flex, Space } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'

const SpComponent: React.FC = () => {
    return (
        <div className='mx-5'>
            <div className='h-full'>
                <section className='pt-10'>
                    <h1 className="text-4xl mb-3 font-bold tracking-tighter text-white">
                        Wataru Takamine
                    </h1>
                    <h2 className='mb-4 text-xl text-white'>Software Engineer/ Entrepreneur</h2>
                    <h3 className='text-lg text-slate-400 w-3/4'>I build user-friendly and functional digital experiences.</h3>
                </section>
            </div>
            <div>
                <SocialIcons />
            </div>
            <div className=' flex-grow overflow-y-auto'>
                <section id='about' className='py-20'>
                    <div className="text-lg text-white font-bold mb-8">ABOUT</div>
                    <div>
                        <p className='text-lg mb-3 text-slate-400 '>
                            I made the decision to fully immerse myself in coding and web development. Since then, I’ve been building software for <span className='text-white'>large enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company </span>.
                        </p>
                        <p className='text-lg mb-3 text-slate-400'>
                            I find great joy in creating valuable software while crossing boundaries between <span className='text-white'>design</span>, <span className='text-white'>engineering</span>, and <span className='text-white'>business</span>.
                        </p>
                        <p className='text-lg text-slate-400'>
                            Outside of work, I enjoy swimming, reading, spending time with my girlfriend, and studying <span className='text-white'>English</span>.
                        </p>
                    </div>
                </section>
                <section id='experience'>
                    <div className="text-base text-white font-bold mb-7">EXPERIENCE</div>
                    <div className=''>
                        <ExperienceTimeline isSp={true} />
                        <Space h="20" />
                        <div>
                        </div>
                    </div>
                </section>
                <section id='education'>
                    <div className="text-base text-white font-bold mb-7">EDUCATION</div>
                    <div className=''>
                        <EducationTimeline isSp={true} />
                    </div>
                </section>
                <section id='projects'>
                </section>
                <section >
                    <div>
                        <p className='text-sm mb-20 text-slate-400 w-3/4'>
                            Loosely coded in <span className='text-white'>Visual Studio Code</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>Mantine UI</span>, and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SpComponent