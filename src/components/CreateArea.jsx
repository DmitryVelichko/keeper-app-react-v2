import React, { useState } from 'react';

const CreateArea = () => {
  const [note, setNote] = useState({
    title: 'vv',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    
  }

  return (
    <div>
      <form>
        <input
          name='title'
          onChange={handleChange}
          value={note.title}
          placeholder='Title'
        />
        <textarea
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note...'
          rows='3'
        ></textarea>
        <button onClick={}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
