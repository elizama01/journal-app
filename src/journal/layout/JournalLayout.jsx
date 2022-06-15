import { Box } from '@mui/material'
import React from 'react'
import { NavBar, Silidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} >
            <NavBar drawerWidth={drawerWidth} />
            
            <Silidebar drawerWidth={drawerWidth} />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                {children}
            </Box>
        </Box>
    )
}
