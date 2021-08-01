
import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import AppRouter from './AppRouter'
import NoteCard from './Components/NoteCard'




//json-server --watch data/db.json --port 8000


// this we use to overwrite the material ui css

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33eaff'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
                <AppRouter/>
    </ThemeProvider>
     </>
  );
}

export default App;

















