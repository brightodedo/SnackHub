import React from 'react'
import './UpdateSnack.css'
import { supabase } from '../../client'
import { useParams } from 'react-router-dom'

function UpdateSnack() {

    const {id} = useParams()
    const [snack, setSnack] = React.useState({
        "title" :"",
        "content" : "",
        "imageUrl" : "",
        "calories" : 0}
        )
    const [error, setError] = React.useState("")

    React.useEffect (() => {
        const run = async () => {
            const result = await supabase
            .from('snackhub')
            .select()
            .eq('id', id)

            if (result.error) console.error(result.error.message);
            else{
                setSnack(result.data[0])
            }
        }

        run()
    }, [])

    const handleOnChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        setSnack({...snack, [name] : value})
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        if ( snack.title.trim() == "" || snack.title.trim() == " " ) {
            setError("Post needs a Title")
            return 
        }
        if ( snack.content.trim() == "" || snack.content.trim() == " " ) {
            setError("Post needs a content")
            return
        }
        if ( snack.imageUrl.trim() == "" || snack.imageUrl.trim() == " " ) {
            setError("Please find an image URL")
            return
        }

        // send it to supabase
        const error = await supabase
        .from('snackhub')
        .update({title: snack.title, content: snack.content, imageUrl : snack.imageUrl, calories : snack.calories})
        .match({'id':id});

        setError(error?.error?.message);

        // clear the form 
        setSnack({
            "title" :"",
            "content" : "",
            "imageUrl" : "",
            "calories" : 0
        })

        setError("")
        
        // redirect back to the home page
        window.location = "/";
    }

  return (
    <div>
        <div className='post-details'>
            {
                error === "" 
                ? 
                <></>
                :
                <p className='error'>{error}</p>
            }
             <form action="" onSubmit={handleOnSubmit} className='post-form'>
                <input className='post-input' type="text" placeholder='Title' onChange={handleOnChange} name="title" value={snack.title}/>
                <textarea name="content" id="" cols="30" rows="10" placeholder='Tell me about your snack' onChange={handleOnChange} value={snack.content} className='post-textArea'></textarea>
                <input className='post-input' type="text" placeholder='Image URL' onChange={handleOnChange} name="imageUrl" value={snack.imageUrl}/>
                <input className='post-input' type='number' onChange={handleOnChange} name="calories" value={snack.calories}/>
                <button className='post-button'> update snack </button>
             </form>
        </div>
    </div>
  )
}

export default UpdateSnack