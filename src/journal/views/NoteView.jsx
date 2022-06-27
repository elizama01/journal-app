import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveNote, startDeleteNote, startSaveNote, startUpLoadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { title, body, onInputChange, formState, date } = useForm(note);

    const dateString = useMemo(() => {

        const newDate = new Date(date);

        return newDate.toUTCString();

    }, [date])

    const onFileInputChange = (e) => {
        if (e.target.files.length === 0) return;
        const files = e.target.files;
        dispatch(startUpLoadingFiles(files));

    }
    const fileInputRef = React.createRef();

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onDeleteNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                dispatch(startDeleteNote());
            }
        }).catch(err => {
            console.log(err);
        }
        )
    }
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            return Swal.fire('Nota actualizada', messageSaved, 'success');
        }

    }, [messageSaved])



    return (
        <Grid container direction='row' alignItems={'center'} justifyContent='space-between' sx={{ mb: 1, padding: 4 }}
        >
            <Grid item>

                <Typography fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>

                <input type='file' onChange={onFileInputChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    multiple
                    display='none'
                />
                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />


                </IconButton>

                <Button color='primary'
                    onClick={onSaveNote}
                >
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
                    value={title}
                    onChange={onInputChange}
                    name='title'
                />
                <TextField
                    type="text"
                    fullWidth
                    placeholder='Que sucedio hoy?'
                    multiline
                    variant="filled"
                    sx={{ border: 'none', mb: 1 }}
                    value={body}
                    onChange={onInputChange}
                    name='body'
                />
            </Grid>
            <ImageGallery images={note.imageUrl} />
            <Grid
                container
                justifyContent={'end'}
            >
                <Button
                    onClick={onDeleteNote}
                    sx={{ mt: 2 }}
                    color='error'
                >
                    <DeleteOutline />

                </Button>
            </Grid>

        </Grid>

    )
}
