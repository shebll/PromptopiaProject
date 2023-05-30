'use client'
import Feed from "@components/Feed";
import Lottie from 'lottie-react'
import animation from '@public/assets/animation/landing.json'
export default function Home() {
  return(
    <section className='w-full flex flex-center flex-col' >
      <Lottie className="w-52" animationData={animation} />
      <h1 className="head_text text-center">
        Discover & Share { }
        <br className="md:hidden"/>
        <span className="orange_gradient">
          AI-Powered Prompts
        </span>
        <p className="w-fit m-auto desc text-center font-normal ">
          Promptopia is an open-source AI prompting tool for modern world to discover  ,create ,edited and for sure share it with other 
        </p>
        {/* Feed component */}
        <Feed />
      </h1>
    </section>
    );
}
