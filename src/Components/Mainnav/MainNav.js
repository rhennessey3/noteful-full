import React from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

export default function MainNav(props) {
    
    const folderitem = props.folders.length
        ? props.folders.map(item => (
            <div key={item.id} className="folderDiv1">
                <h3>
                    <Link to={`/folder/${item.id}`}>{item.name}</Link>
                </h3>
            </div>
        ))
        : [];
    
    const noteitem = props.notes.length
        ? props.notes.map(item => (
            <div key={item.id} className="noteDiv1">
                <h3>
                    <Link to={`/note/${item.id}`}>{item.name}</Link>
                </h3>
            </div>
        ))
        : [];
    
    return (
        <aside className="nav-aside">
            <div className="folderDiv">{folderitem}</div>
            <div className="noteDiv"> {noteitem}</div>
            <Link to="/addfolder">create new folder</Link>
            <Link to="/addnote">create new note</Link>
        </aside>

        
    )
}


