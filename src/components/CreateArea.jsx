import React, { useState } from 'react'

const CreateArea = () => {

    const [note, setNote] = useState();

  return (
    <div>
        <form>
            <input name="title" placeholder='Title' />
            <textarea name="content" placeholder='Take a note...' rows='3'></textarea>
            <button>Add</button>
        </form>
    </div>
  )
}

export default CreateArea