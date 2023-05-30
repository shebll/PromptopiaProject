'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Lottie from 'lottie-react'
import animation from '@public/assets/animation/ai2.json'
import Form from '@components/Form'
const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt:"",
    tag:''
  })
  const createPrompt = async (e)=>{
    e.preventDefault();
    setSubmitting(true);
    try{
      const response = await fetch('/api/prompt/new' ,{
        method:"POST",
        body:JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id ,
          tag: post.tag
        })
      })
      if(response.ok){
        router.push('/')
      }
    }catch(e){
      console.log(e)
    }finally{
      setSubmitting(false)
    }
    

  }
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center">

      <Form
        type='create'
        submitting ={submitting}
        post={post}
        setPost ={setPost}
        setSubmitting ={setSubmitting}
        handleSubmit ={createPrompt}
  
      />
      <Lottie  animationData={animation}  /> 
    </div>
  )
}

export default CreatePrompt
