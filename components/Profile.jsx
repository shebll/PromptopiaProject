import React from 'react'
import PromptCard from './PromptCard'
import Lottie from 'lottie-react'
import animation from '@public/assets/animation/ai2.json'
const Profile = ({name,  desc,  data,  handleEdit,  handleDelete}) => {
  return (

      <section className="w-full">
        <div className="flex flex-col lg:flex-row"> 
          <div className="flex-2">
              <h1 className='head_text text-left !text-4xl md:!text-6xl'>
                <span className='blue_gradient'>{name} </span>
                Profile
              </h1>
              <p className='desc text-left' >{desc}</p>
          </div>
          <Lottie className='flex-1' animationData={animation} />         
        </div>
        <div className="mt-10 prompt_layout">
          {data.map((post)=>{
            return (
            <PromptCard 
              key={post._id}
              post={post}
              handleEdit={ ()=> handleEdit && handleEdit(post) }
              handleDelete={ ()=> handleDelete && handleDelete(post) }
            />)
          })}
        </div>
      </section>
  )
}

export default Profile
