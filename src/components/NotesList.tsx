import { Note } from "../models/note.model";
import { Grid } from "@mui/material";
import Notes from "./Notes";

type NotesListProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = ({ notes, setNotes }: NotesListProps) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <>
      <Grid item xs={12}>
        {notes.length === 0 && <p>Add some note!</p>}
      </Grid>
      {renderNotes()}
    </>
  );
};

export default NotesList;
