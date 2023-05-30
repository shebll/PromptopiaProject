import Link from "next/link"

const Form = ({type,post,setPost,setSubmitting,submitting ,handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex flex-col items-center justify-center lg:items-start" >
      <h1 className="head_text text-left blue_gradient"> {type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world , and let your imagination run wild wth any AI-powered platform.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full  max-w-xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700"> Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e)=>{
              setPost({...post , prompt:e.target.value})
            }}
            placeholder="Write your prompt here ..."
            required
            className="form_textarea"
          />
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
              Prompt Tag{" "}
              <span className="font-normal text-gray-500">(#product , #web ,...)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e)=>{
              setPost({...post , tag:e.target.value})
            }}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex justify-end mx-3 mc-5 gap-4" >
          <Link href='/' className="text-gray-600 text-sm px-5 py-1.5">
            Cancel
          </Link>
          <button 
            type="submit"
            disabled ={submitting}
            className="px-5 py-1.5 font-semibold bg-primary-orange rounded-full text-sm ">
            {submitting? `${type}...`:type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
