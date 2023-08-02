import { useState } from 'react';
import './App.css'
import Note from './components/Note/Note'
import { Notes } from './components/Note/data';
import { NoteType } from './components/Note/note-type';
import AddNote from './components/add-note/add-note';
function App() {
   const [notes, setNotes] = useState(Notes);

   const addNote = (note:NoteType) => {
         setNotes([note,...notes])
   }
  return (
    <div className='App'>
      <h2>Notes App</h2>
      <AddNote addNote={addNote}/>
      <div>
        {
          notes.map(
            note => <Note priorities={note.priorities} text={note.text} key={note.id} />
          )
        }

      </div>
    </div>
  )
}

export default App
