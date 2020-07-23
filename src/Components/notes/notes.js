import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Context from "../../Context"
import './Notes.css'


export default function Notes(props) {

    const noteitem = props.notes.length
        ? props.notes.map(item => (
            <div key={item.id} className="noteDiv1">
                <h3>
                    <Link to={`/note/${item.id}`}>{item.name}</Link>
                </h3>
            </div>
        ))
        : [];
    console.log(noteitem.length)


    const { folderID } = useParams();
    return (
        <Context.Consumer>
            <div className="noteDiv"> {noteitem}</div>
            {value => {
                const note = value.notes.map(note => {
                    if (note.folderId === folderID || !folderID) {
                        return (
                            <div className="notediv1">
                                <h3 className="notetitle">
                                    <Link to={"/note/" + note.id}>{note.name}</Link>
                                </h3>
                                <p className="notecontent">{note.content}</p>
                            </div>
                        );
                    }
                });
                return (
                    <div className="notediv">{note}</div>
                ) 
            }}
        </Context.Consumer>
    )
}

