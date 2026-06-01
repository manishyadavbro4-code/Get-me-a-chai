import React from 'react'

const About = () => {
  return (
    <div className='md:w-[85vw] mx-auto px-8 md:px-4'>
        <div>
        <h1 className='text-2xl font-bold my-4'>About Get me a Chai</h1>
        <div className='my-4'>
            Get me a Chai is a crowdfunding platform that allows creators to raise funds for their projects by accepting donations from their fans. The platform provides an easy and convenient way for creators to connect with their audience and receive financial support for their work.
            </div>
            </div>
            <div>
                <h2 className='text-xl font-bold'>How It Works</h2>
                <div className='flex flex-col md:flex-row justify-around'>
                <div className='my-4 flex gap-4 items-center md:w-1/2'>
                    <img className='rounded-full' src="man.gif" alt="" width={100} />
                    <div>
                    <div className='font-bold text-xl'>
                        Fans wants to help you
                    </div>
                    <div>
                        Your fans are available to support you
                    </div>
                    </div>
                </div>
                <div className='my-4 flex gap-4 items-center md:w-1/2'>
                    <img className='rounded-full' src="coin.gif" alt="" width={100} />
                    <div>
                    <div className='font-bold text-xl'>
                        Support Through Chai
                    </div>
                    <div>
                        Receive support from your fans in form of chai purchases,directly contributing to your projects funding.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='my-4'>
                <h2 className='font-bold text-xl'>Benefits for Creators</h2>
                <ul className='list-disc list-inside my-4'>
                    <li>Direct financial support from your fanbase</li>
                    <li>Engage with your fans on more personal levels</li>
                    <li>Access to a platform tailored for creative projects</li>
                </ul>
            </div>
            <div className='my-4'>
                <h2 className='font-bold text-xl'>Benefits for Fans</h2>
                <ul className='list-disc list-inside my-4'>
                    <li>Support your favorite creators directly</li>
                    <li>Receive exclusive rewards and updates from creators</li>
                    <li>Be part of a community of like-minded individuals</li>
                </ul>
            </div>
            <div className='my-4'>
                <h2 className='font-bold text-xl'>Benefits for Collaborators</h2>
                <ul className='list-disc list-inside my-4'>
                    <li>Opportunity to collaborate with talented creators</li>
                    <li>Access to a network of creative professionals</li>
                    <li>Enhanced visibility for collaborative projects</li>
                </ul>
            </div>
            <div className='my-4'>
                <h2 className='font-bold text-xl'>Community Engagement</h2>
                <ul className='list-disc list-inside my-4'>
                    <li>Join a vibrant community of creators and fans</li>
                    <li>Participate in discussions, events, and collaborations</li>
                    <li>Share your projects and receive feedback from the community</li>
                </ul>
            </div>
        </div>
    
  )
}
  
    

export default About
export const metadata = {
  title: 'About - Get me a Chai',
  description: 'Learn more about Get me a Chai and how it helps creators connect with their fans and raise funds for their projects.',
}
