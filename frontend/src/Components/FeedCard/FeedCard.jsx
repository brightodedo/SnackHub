import React from 'react'
import './FeedCard.css'
import { Link } from 'react-router-dom';
import { supabase } from '../../client';

function FeedCard({props}) {

    const [deleteMe, setDeleteMe] = React.useState(false)

    const handleDelete = () => {
        setDeleteMe(true)
    }
    
    const onClickNo = () => {
        setDeleteMe(false)
    }

    const onClickYes = async(id) => {
        const result = await supabase
        .from('snackhub')
        .delete()
        .eq('id', id)

        if (result?.data?.error) console.error(result.data.error);
        window.location = "/"
    }

  return (
    <div className='feedy'>
        <Link to={`view/${props.id}`}>
            <div className='feed-card'>
                <figure className='feed-image'>
                    <img src={props.imageUrl} alt={props.title} />
                    <figcaption></figcaption>
                </figure>
                <div className='feed-sameline'>
                    <p className='feed-title'>{props.title}</p>
                    <p className='feed-calories'>{props.calories} Kcal</p>
                </div>
                <p className='feed-content'>{props.content}</p>
            </div>
        </Link>
        <div className='feed-sameline'>
            <button className='delete-button' onClick={() => {handleDelete(props.id)}}>delete</button>
            <Link to={`/update/${props.id}`} className='edit-button'>edit</Link>
        </div>

        {
            deleteMe
            ? 
            <div className='delete-overview'>
                <h3>Are you sure you want to delete <b>{props.title}</b>?</h3>
                <div className='delete'>
                    <button className='delete-button' onClick={ () => {onClickYes(props.id)}}>yes</button>
                    <button className='delete-button' onClick={onClickNo}>no</button>
                </div>
            </div>
            :
            <></>
        }

    </div>
  )
}

export default FeedCard