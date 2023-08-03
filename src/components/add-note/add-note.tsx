import { useState, useEffect } from 'react';
import { NoteType, Priority } from '../Note/note-type';
import { v4 as uuidv4 } from 'uuid';
import './add-note.css';
import Card from '../card/card';

// added type of props
type AddNoteProps = {
    addNote: (note: NoteType) => void,
    editMode:boolean,
    noteToBeEditted : NoteType | null, 
    updateNote: (updatedNote: NoteType) => void,
}

// main function
function AddNote(props: AddNoteProps) {

// states of the main function componenet
    const [text, setText] = useState("");
    const [priorities, setPriorities] = useState<Priority>('low')

// handleChange function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const setNoteContent = (note:NoteType) => {
        setText(note.text);
        setPriorities(note.priorities);
    }

    useEffect(() => {
        if(props.noteToBeEditted && props.editMode){
            setNoteContent(props.noteToBeEditted);
        }
    
    }, [props.noteToBeEditted, props.editMode])
    

// handleClick function
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if(props.editMode){
         props.noteToBeEditted &&  props.updateNote({
                text,
                priorities,
                id: props.noteToBeEditted.id
            })
        }
        else{
     //  adding props to addNotes funtion
            props.addNote({
                text,
                priorities,
                id: uuidv4()
            })
    
        }

       
// reset the value of input and select box
        setText("");
        setPriorities("low");
    }

// handleSellect function
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriorities(e.target.value as Priority);
    }

// return jsx of main function
    return (
        <Card
        height='2'
        padding='1'>
            <form className="add_note">
                <input type="text" onChange={handleChange} value={text}/>
                <select onChange={handleSelect} value={priorities}>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                </select>
                <button onClick={handleClick}>{props.editMode ? 'Edit' : 'Add'}</button>
            </form>
        </Card>
    )
}
export default AddNote;