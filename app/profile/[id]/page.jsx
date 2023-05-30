"use client" ;


import { useRouter , useSearchParams } from 'next/navigation';
import {useEffect , useState} from 'react'

import Profile from '@components/Profile';

const page = () => {
  const searchParams = useSearchParams()
  const userName = searchParams.get('name')
  const router =useRouter()
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    console.log("progile fetching")
    const fetchPosts =async ()=>{
      const response = await fetch(`/api/users/${searchParams.get('id')}/posts`)
      const data = await response.json();
      setPosts(data);
      console.log(data)
    }
    fetchPosts()
  },[])
  return (
    <div>
      <Profile
        name= {userName}
        desc= {`welcome to ${userName} page`}
        data={posts}
        handleEdit={()=>{}}
        handleDelete={()=>{}}
      />
    </div>
  )
}

export default page
