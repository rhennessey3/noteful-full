import React from "react"
import Context from '../../Context'
import './AddFolder.css'


export default function AddFolder(props) {
    return (
        <Context.Consumer>
            {value => {
                return (
            <form onSubmit={value.addFolder}>
                <label>Folder Name</label>
                <input name="name" />
                <button >add a folder</button>
            </form>
                )
            }}
        </Context.Consumer>        
    )
}

