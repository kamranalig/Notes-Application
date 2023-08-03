import { useState } from 'react';
import './App.css'
import Note from './components/Note/Note'
import { Notes } from './components/Note/data';
import { NoteType } from './components/Note/note-type';
import AddNote from './components/add-note/add-note';
function App() {
   const [notes, setNotes] = useState(Notes);
   const [editMode, setEditMode] = useState(false);
   const [noteToBeEditted, setNoteToBeEditted] = useState<NoteType | null>(null);

   const addNote = (note:NoteType) => {
         setNotes([note,...notes])
   }
   
   const updateNote = (updatedNote:NoteType) => {
    const index = notes.findIndex(note=>note.id===updatedNote.id);
    let editedNotes = [...notes];
    editedNotes.splice(index,1, updatedNote);
    setNotes(editedNotes);
    setEditMode(false);
   } 

   const editNote = (id:string) => {
    const note = notes.find(note=>note.id===id);
     setEditMode(true);
     if(note){
       setNoteToBeEditted(note)
     }
}

const deleteNote = (id:string) => {
  const index = notes.findIndex(note=>note.id===id);
  let editedNotes = [...notes];
  editedNotes.splice(index,1);
  setNotes(editedNotes);
}
  return (
    <div className='App'>
      <h2>Notes App [{notes.length}]</h2>
      <AddNote
       addNote={addNote}
       editMode={editMode}
       noteToBeEditted={noteToBeEditted} 
       updateNote={updateNote}/>
      <div>
        {
          notes.map(
            note => <Note
             priorities={note.priorities}
             text={note.text}
             key={note.id} 
             editNote={editNote}
             deleteNote={deleteNote}
             id={note.id}
             />
          )
        }

      </div>
    </div>
  )
}

export default App
