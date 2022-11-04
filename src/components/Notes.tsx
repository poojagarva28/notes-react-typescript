import { Note } from "../models/note.model";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import { useStyles } from "../styles";
import CloseIcon from "@mui/icons-material/Close";

type NotesProps = {
  note: Note;
  handleDelete: (id: string) => void;
};

const Notes = ({ note, handleDelete }: NotesProps) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ backgroundColor: "transparent" }}>
        <CardActions
          className={classes.notebox}
          sx={{ borderBottomRightRadius: "20px", float: "right" }}
        >
          <button
            className={classes.button}
            onClick={() => handleDelete(note.id)}
          >
            <CloseIcon />
          </button>
        </CardActions>
        <CardContent className={classes.notebox}>
          <Typography
            sx={{
              mb: 1.5,
              backgroundColor: "#fadb5f",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            {note.date}
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fadb5f",
              textTransform: "capitalize",
            }}
            gutterBottom
          >
            {note.title}
          </Typography>

          <Typography variant="body2">{note.text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Notes;
