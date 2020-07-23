import React from 'react'
import Context from '../../Context'


export default function Note(props) {
    return (
        <Context.Consumer>
            {value => {
                return  (
                    <section>
                        <h2>{props.note.name}</h2>
                        <p>{props.note.content}</p>
                        <button onClick={e => {
                        value.removeNote(props.note.id);
                        props.history.push("/")
                        }}>delete note</button>    
                    </section>
                )
            }}
        </Context.Consumer>
    )
}