import React from 'react'
import './HomeFeed.css'
import { supabase } from '../../client'
import FeedCard from '../FeedCard/FeedCard'

function HomeFeed() {

    const [feed, setFeed] = React.useState([])

    React.useEffect(() => {
        const run = async() => {
            const {data} = await supabase
            .from('snackhub')
            .select();

            setFeed(data);
        }

        run()
    }, [])

  return (
    <div className='home-feed'>
        {
            feed
            ?
            feed.map( (element, idx) => {
                return (
                <FeedCard props={element} key={idx}/>
                )
            })
            :
            <h1> No Snacks yet. Add some </h1>
        }
    </div>
  )
}

export default HomeFeed