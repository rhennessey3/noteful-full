import React from "react"
import Context from '../../Context'


export default function Addnote(props) {
    return (

        <Context.Consumer>
            {value => {
                return (
                    <form onSubmit={value.addNote}>
                        <label>Note Name</label>
                        <input name="name" />
                        <button >add a note</button>
                    </form>
                )
            }}
        </Context.Consumer>
    )
}