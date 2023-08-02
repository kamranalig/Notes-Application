export type Priority = 'high' | 'medium' | 'low';
export type NoteProps = {
    text:string,
    priorities : Priority
}

export type NoteType = {
    id:string,
    text:string,
    priorities : Priority
}
export enum Color{
   high='rgb(50, 87, 11)',
   medium='rgb(224, 205, 0)',
   low='rgb(236, 137, 0)'
}