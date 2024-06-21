import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShooterCrow
          </Typography>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default NavBar