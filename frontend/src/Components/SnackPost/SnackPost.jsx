import React from 'react'
import './SnackPost.css'
import { useParams } from 'react-router-dom'
import { supabase } from '../../client';

function SnackPost() {

    const {id} = useParams()
    const [snack ,setSnack] = React.useState({})

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
    <div>
        view a snack post
    </div>
  )
}

export default SnackPost