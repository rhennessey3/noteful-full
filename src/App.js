import React from 'react'
// import React, { Component } from 'react';
import './App.css';
import dataStore from './dataStore'
import Notes from './Components/Notes/Notes'
import AddFolder from './Components/Addfolders/AddFolder'
import MainNav from './Components/Mainnav/MainNav';
import { Route, Switch } from 'react-router-dom'
import Note from './Components/Notes/Notes'
import Context from './Context'

export default class App extends React.Component{

state = {
  folders: dataStore.folders,
  notes: dataStore.notes
};
  addFolder = e => {
    e.preventDefault()
    const { name } = e.target
    const folder =
    {
      name: name.value,
    }
    this.setState({
      folders:this.state.folders.concat(folder)
    })
  }

  addNote = e => {
    e.preventDefault()
    const { name } = e.target
    const note =
    {
      name: name.value,
    }
    this.setState({
      notes: this.state.notes.concat(note)
    })
  }

  removeNote = id => {
    this.setState({
    notes: this.state.notes.filter(note => note.id !==id )
  })
}

render() {
  const { folders, notes } = this.state;

  const value = {
    folders, notes,
    removeNote:this.removeNote,
    addFolder:this.addFolder
  }



    return (
      <Context.Provider value={value}>
        <MainNav folders={folders} notes={notes} / >
          
    
        <main>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>

            <Route
              path="/note/:noteID"
              render={routerProps => (
                <Note
                  history={routerProps.history}
                  note={this.state.notes.find(
                    note => note.id === routerProps.match.params.noteID
                  )}
                />
              )}
            />

            <Route path="/folder/:folderID">
              <Notes notes={this.state.notes} />
            </Route>

            <Route path="/addfolder">
              <AddFolder />
            </Route>
          </Switch>
        </main>
      </Context.Provider>
    );
  }
}




