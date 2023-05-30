'use client'

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter , usePathname} from "next/navigation"

const PromptCard = ({ post,handleTagClick,handleEdit,handleDelete}) => {

  console.log("PromptCard" )
  const {data:session} =useSession()
  console.log(session?.user.id )
  const pathName = usePathname() 
  const router = useRouter() 
  const [copy, setCopy] = useState('')
  const handleCopy =()=>{
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>{
      setCopy("")
    },3000)

  }
  return (
    <div className="prompt_card ">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center cursor-pointer gap-3 ">
          <Image 
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain block"
          />
          <div className="flex flex-col items-start ">
            <h3 className="font-semibold font-satoshi text-sm   ">{post.creator.username}</h3>
            <p className="font-semibold font-satoshi text-sm text-gray-600 ">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image 
            src={copy=== post.prompt ?('assets/icons/tick.svg') :('assets/icons/copy.svg') }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="font-normal text-lg text-start mt-3 text-black ">{post.prompt}</p>
      <p className="font-semibold  text-lg text-start mt-2 blue_gradient  cursor-pointer "
      onClick={()=>{ handleTagClick && handleTagClick}}
      >{post.tag}</p>
      {session?.user.id === post.creator._id && pathName ==='/profile' &&(<div className="mt-3 flex justify-between">
          <p
            className="font-inter text-base font-semibold green_gradient cursor-pointer "
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-base font-semibold orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
      </div>) }
    </div>
  )
}

export default PromptCard
