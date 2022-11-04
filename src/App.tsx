import { useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";
import { Typography, Grid, Box } from "@mui/material";
import CreateNotes from "./components/CreateNotes";
import { useStyles } from "./styles";

function App() {
  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  const [notes, setNotes] = useState<Note[]>([
    // {
    //   id: "1",
    //   title: "note title",
    //   text: "note text note textnote textnote textnote textnote textnote textnote textnote textnote textnote textnote text",
    //   date: `${new Date().getDate().toString()} ${month[
    //     new Date().getMonth()
    //   ].slice(0, 3)}, ${new Date().getFullYear()}`,
    // },
  ]);
  const classes = useStyles();
  return (
    <div className={classes.outerdiv}>
      <Box pt={2}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "20px",
            position: "absolute",
            top: 20,
            left: 0,
            borderLeft: "10px solid #fadb5f",
            color: "#fadb5f",
            padding: "5px 20px",
            fontWeight: "bold",
          }}
        >
          Notes
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CreateNotes notes={notes} setnotes={setNotes} />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <NotesList notes={notes} setNotes={setNotes} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
