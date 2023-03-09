import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"

function ShelfForm () {

const dispatch = useDispatch();

const [description,setDiscription] = useState('')
const [imageUrl,setImageUrl] = useState('')

const user = useSelector(store => store.user);

const handleSubmit = event => {
    event.preventDefault()
    dispatch ({
        type: 'ADD_ITEM',
        payload : {
            description : description,
            image_url : imageUrl,
            user_id : user.id,
        }
    })
    setDiscription('')
    setImageUrl('')
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Image Url"
                value={imageUrl}
                onChange = { e =>{setImageUrl(e.target.value)}}
                />
                <input 
                placeholder="Description"
                value = {description}
                onChange = {e =>{setDiscription(e.target.value)}}/>
                <input 
                type="submit"
                value= "submit" />
            </form>
        </div>
    )

}

export default ShelfForm;