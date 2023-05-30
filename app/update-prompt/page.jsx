'use client'
import {useEffect, useState} from 'react'
import { useRouter ,useSearchParams} from 'next/navigation'
import { useSession } from 'next-auth/react'
import Form from '@components/Form'
const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId =searchParams.get('id')
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false)

  const [post, setPost] = useState({
    prompt:"",
    tag:''
  })
  useEffect(()=>{
    const getPromptDetails = async()=>{
      const response = await fetch(`/api/prompt/${promptId}`)
      const data = await response.json()
      setPost({
        prompt: data.prompt,
        tag: data.tag
      })
    }
    if( promptId ) getPromptDetails()
  },[promptId])
  const updatePrompt = async (e)=>{
    e.preventDefault();
    setSubmitting(true);
    try{
      const response = await fetch(`/api/prompt/${promptId}`,{
        method:"PATCH",
        body:JSON.stringify({
          prompt: post.prompt,
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
    <Form
      type='Edit'
      submitting ={submitting}
      post={post}
      setPost ={setPost}
      setSubmitting ={setSubmitting}
      handleSubmit ={updatePrompt}

    />
  )
}

export default EditPrompt
