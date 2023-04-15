import React from 'react'
import './SnackPost.css'
import { useParams } from 'react-router-dom'
import { supabase } from '../../client';
import moment from 'moment'

function SnackPost() {

    const {id} = useParams()
    const [snack ,setSnack] = React.useState({
        "calories": 0,
        "content" : "",
        "created_at" : "",
        "id" : 0,
        "imageUrl" : "" ,
        "title" : ""
        })

    React.useEffect(() => {
        const run = async() => {

            const result = await supabase
            .from('snackhub')
            .select()
            .eq('id', id);

            if (result.error) console.error(result?.error?.message);
            else{
                setSnack(result.data[0])
            }
        }

        run()

    }, [])


  return (
    <div className='snack-view'>
        <div className='snack-container'>
            <figure>
                <img src={snack.imageUrl} alt={snack.title} />
                <figcaption>{snack.title}</figcaption>
            </figure>
            <section>
                <h1>{snack.title}</h1>
                <h2>{snack.calories}Kcal</h2>
            </section>
            <span>
                {snack.content}
            </span>
            <div>
                posted :<i>{moment.utc(snack.created_at).format('LL')}</i>
            </div>
        </div>
    </div>
  )
}

export default SnackPost