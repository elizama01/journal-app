import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";
export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
      <NothingSelectedView />
      <NoteView />
      <IconButton size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          '&:hover': {
            backgroundColor: 'error.dark', opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
          
        }}
        onClick={onClickNewNote}
        >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
