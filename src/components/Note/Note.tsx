import './note.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { NoteProps, Color } from './note-type';
import Card from '../card/card';


type NoteProps = {
  id:string,
  text:string,
  priorities: Priority,
  editNote:(id: string) => void,
  deleteNote:(id: string) => void
}

function Note(props: NoteProps) {
  return (
    <Card
      bgColor={Color[props.priorities]}
      height='2'
      padding='1'
    >
      <>
      <div>
        {props.text}
      </div>
      <div className='right_corner'>
        <FaEdit onClick={()=>props.editNote(props.id)}></FaEdit>
        <FaTrash onClick={()=>props.deleteNote(props.id)}></FaTrash>
      </div>
      </>
    </Card>
  )
}

export default Note;