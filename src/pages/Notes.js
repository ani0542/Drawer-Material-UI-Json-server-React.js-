import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import NoteCard from '../Components/NoteCard'

export default function Notes() {

  const [notes,setNotes]  = useState([])

  useEffect(()=>{
         fetch(`http://localhost:8000/notes`)
         .then(res=>res.json())
         .then(data=> setNotes(data))
  },[notes])


  const handleDelete = async(id)=>{
       await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
       })

       const newNotes  = notes.filter(note => note.id !== id)
       setNotes(newNotes)
  }  


//jsx abstraction----------------------------------
  const rendermap=(values)=>{
    return (
      <>
                 <Grid item  md={6} lg={4} xs={12} key={values.id}>
                       <NoteCard note={values} handleDelete={handleDelete}/>
                 </Grid>
      </>
    )
  }

  //jsx---------------------------
  return (
    <Container>
        <Grid container spacing={3}>
             {notes.map(rendermap)}
        </Grid> 
    </Container>
  )
}
