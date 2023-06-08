'use client'
import {useState ,useEffect} from 'react'
import PromptCard from './PromptCard'
const PromptCardList = ({data ,handleTagClick}) =>{
  // console.log(data)
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>{
        return (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />)
      })}
    </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchPosts =async ()=>{
      const response = await fetch('/api/prompt')
      const data = await response.json();
      console.log("data")
      setPosts(data)
    }
    fetchPosts()
  },[])
  const handleSubmitting = (e)=>{
    e.preventDefault()
  }
  const handleSearchText = (e)=>{
    setSearchText(e.target.value)
  }
  return (
    <section className='feed'>
      <form className='relative w-full flex justify-center' /* onSubmit={handleSubmitting(e)} */>
        <input
          type="text"
          placeholder='Search for prompts or tags or username '
          value={searchText}
          onChange={handleSearchText}
          required
          className='p-2 search_input peer md:!p-4'
          />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={()=>{}}
      />

      
    </section>
  )
}

export default Feed
