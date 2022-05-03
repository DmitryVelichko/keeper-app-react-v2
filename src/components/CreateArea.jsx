import React from 'react'

const CreateArea = () => {
  return (
    <div>
        <form>
            <input name="title" placeholder='Title' />
            <textarea name="content" placeholder='Take a note...' rows='3'></textarea>
        </form>
    </div>
  )
}

export default CreateArea