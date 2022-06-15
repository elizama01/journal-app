// import { MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat harum ipsa, unde tempore ipsum recusandae fuga mollitia laborum maiores quia repudiandae cum suscipit saepe, quas commodi enim eveniet, nulla voluptate.

      </Typography> */}
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
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
