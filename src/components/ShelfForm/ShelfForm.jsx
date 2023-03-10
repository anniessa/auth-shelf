import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, TextField } from "@mui/material";

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
                <TextField label="Image URL" color="secondary" size="small" 
                value={imageUrl}
                onChange = { e =>{setImageUrl(e.target.value)}}
                />
                <TextField label="Description" color="secondary" size="small" 

                value = {description}
                onChange = {e =>{setDiscription(e.target.value)}}/>
                <Button
                variant="contained"
                color="secondary" size="normal"    
                type="submit"
                value= "Submit">Submit</Button>
            </form>
        </div>
    )

}

export default ShelfForm;