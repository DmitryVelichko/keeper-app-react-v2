import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Note key={1} title='title' content='content' />
      <Footer />
    </div>
  );
}

export default App;
