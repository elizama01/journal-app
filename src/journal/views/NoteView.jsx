import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
export const NoteView = () => {
    return (
        <Grid container direction='row' alignItems={'center'} justifyContent='space-between' sx={{ mb: 1, padding:4 }}
        >
            <Grid item>

                <Typography fontSize={39} fontWeight='light'>
                    20 de agosto 2022
                </Typography>
            </Grid>

            <Grid item>
                <Button color='primary'>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    fullWidth
                    placeholder='Ingrese un titulo'
                    variant="filled"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    fullWidth
                    placeholder='Que sucedio hoy?'
                    multiline
                    variant="filled"
                    sx={{ border: 'none', mb: 1 }}
                />
            </Grid>
            <ImageGallery />

        </Grid>

    )
}
