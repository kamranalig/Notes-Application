export type Priority = 'high' | 'medium' | 'low';
export type NoteProps = {
    text:string,
    priorities? : Priority
}

export type NoteType = {
    id:string,
    text:string,
    priorities : Priority
}