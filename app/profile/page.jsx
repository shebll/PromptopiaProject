"use client" ;

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {useEffect , useState} from 'react'

import Profile from '@components/Profile';

const page = () => {
  const {data:session} =useSession()
  console.log(session?.user.id )
  
  const router =useRouter()
  const [posts, setPosts] = useState([])

  const handleEdit = (post)=>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async (post)=>{
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
    console.log(hasConfirmed)
    if(hasConfirmed){
      try{
        let re = await fetch(`/api/prompt/${post._id}`,{
          method:"DELETE"
        })
        console.log(re)
        const filterPosts =posts.filter((p)=>{post._id !== p._id});
        setPosts(filterPosts);
      }catch(error){
        console.log(error)
      }
    }
  }

  useEffect(()=>{
    console.log("progile fetching")
    const fetchPosts =async ()=>{
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json();
      setPosts(data);
      console.log(data)
    }
    if (session?.user.id) fetchPosts()
    console.log(session?.user.id)
  },[session?.user.id])
  return (
    <div>
      <Profile
        name= {session?.user.name}
        desc= 'welcome to your Profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default page
