import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import {Container} from '@mui/material'


const NavBar = () => {
    return (
    <AppBar position='static' >
      <Container >
        <Toolbar>
          <Typography variant="h6" component="a" >
            ShooterCrow
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar