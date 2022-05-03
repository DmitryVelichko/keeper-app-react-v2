import React, { useState } from 'react';

const CreateArea = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange() {

  }

  return (
    <div>
      <form>
        <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
        <textarea
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note...'
          rows='3'
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
