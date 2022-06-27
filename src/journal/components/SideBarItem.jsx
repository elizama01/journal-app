import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { setActiveNote } from '../../store/journal'
export const SideBarItem = ({ title = '', body, id, date, imageUrl = [] }) => {
    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title;
    }, [title]);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setActiveNote({ id: id, title: title, body: body, date: date, imageUrl: imageUrl }));
    }

    return (
        <ListItem key={id} disablePadding >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>

        </ListItem>
    )
}
