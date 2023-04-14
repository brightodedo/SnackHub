import React from 'react'
import './FeedCard.css'
import { Link } from 'react-router-dom';

function FeedCard({props}) {


  return (
    <div>
        <Link to={`view/${props.id}`}>
            <div>
                <p className='feed-title'>{props.title}</p>
                <p className='feed-content'>{props.content}</p>
                <p className='feed-calories'>{props.calories} Kcal</p>
                <figure>
                    <img src={props.imageUrl} alt={props.title} />
                    <figcaption></figcaption>
                </figure>
            </div>
        </Link>
        <button>delete</button>
        <Link to={`/update/${props.id}`}>edit</Link>
    </div>
  )
}

export default FeedCard