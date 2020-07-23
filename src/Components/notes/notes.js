import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Context from "../../Context"
import './Notes.css'


export default function Notes(props) {
    const { folderID } = useParams();
    return (
        <Context.Consumer>
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

