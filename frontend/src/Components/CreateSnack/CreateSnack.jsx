import React from 'react'
import './CreateSnack.css'
import { supabase } from '../../client';
const API_KEY = import.meta.env.VITE_APP_SUPABASE_CLIENT_API_KEY;

function CreateSnack() {
    
    // create form on state 
    const [post, setPost] = React.useState({
        "title" :"",
        "content" : "",
        "image" : "",
        "calories" : 0
    })
    const [error, setError] = React.useState("");

    const handleOnChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        setPost({...post, [name] : value})
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        if ( post.title.trim() == "" || post.title.trim() == " " ) {
            setError("Post needs a Title")
            return 
        }
        if ( post.content.trim() == "" || post.content.trim() == " " ) {
            setError("Post needs a content")
            return
        }
        if ( post.image.trim() == "" || post.image.trim() == " " ) {
            setError("Please find an image URL")
            return
        }

        // send it to supabase
        const error = await supabase
        .from('snackhub')
        .insert({title: post.title, content: post.content, imageUrl : post.image, calories : post.calories})
        .select();

        setError(error?.error?.message);

        // clear the form 
        setPost({
            "title" :"",
            "content" : "",
            "image" : "",
            "calories" : 0
        })

        setError("")
        
        // redirect back to the home page
        window.location = "/";
    }



  return (
    <div>
        <div>
            {
                error === "" 
                ? 
                <></>
                :
                <p className='error'>{error}</p>
            }
             <form action="" onSubmit={handleOnSubmit}>
                <input type="text" placeholder='Title' onChange={handleOnChange} name="title" value={post.title}/>
                <textarea name="content" id="" cols="30" rows="10" placeholder='Tell me about your snack' onChange={handleOnChange} value={post.content}></textarea>
                <input type="text" placeholder='Image URL' onChange={handleOnChange} name="image" value={post.image}/>
                <input type='number' onChange={handleOnChange} name="calories" value={post.calories}/>
                <button > post snack </button>
             </form>
        </div>
    </div>
  )
}

export default CreateSnack