import React from 'react'
import './CreatePost.css'
import { Button, Chip, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

function CreatePost() {

  const listOfStacks = [
    {title: 'React.js'},
    {title: 'Node.js'},
    {title: 'Express.js'},
    {title: 'Adonis.js'},
    {title: 'Firebase'},
    {title: 'Firebase Hosting'},
    {title: 'Heroku'},
    {title: 'Open Stree Maps'},
  ]
  return (
    <div className="createPost">
      <form className="createPost__form">
        <TextField label="Name" variant="outlined" />
        <TextField label="Description" variant="outlined" />
        <TextField label="Live Link" variant="outlined" />
        <TextField label="Github Link" variant="outlined" />
        <Autocomplete
          id="combo-box-demo"
          multiple
          options={listOfStacks.map((option) => option.title)}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Technology Used" variant="outlined" />}
        />
        <Button type="submit">Done</Button>
      </form>
    </div>
  )
}

export default CreatePost
