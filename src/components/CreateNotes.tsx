import { useState } from "react";
import { Note } from "../models/note.model";
import { Alert, Typography, TextField, Button } from "@mui/material/";
import { useStyles } from "../styles";
import { useForm, SubmitHandler } from "react-hook-form";

type CreateNotesProps = {
  notes: Note[];
  setnotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

type Inputs = {
  title: string;
  desc: string;
};

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CreateNotes = ({ notes, setnotes }: CreateNotesProps) => {
  const [error, setError] = useState<string>("");

  const classes = useStyles();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setError("");
    setnotes([
      ...notes,
      {
        id: Math.random().toString(),
        title: data.title,
        text: data.desc,
        date: `${new Date().getDate().toString()} ${month[
          new Date().getMonth()
        ].slice(0, 3)}, ${new Date().getFullYear()}`,
      },
    ]);
  };

  return (
    <div className={classes.middlecomp}>
      <Typography
        variant="h5"
        component="h3"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        Create Notes
      </Typography>
      {error && (
        <Alert variant="filled" severity="warning">
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("title")}
          className={classes.inputclass}
          inputProps={{ className: classes.input }}
          multiline
          rows={1}
        />
        <br />
        <br />
        <TextField
          {...register("desc")}
          className={classes.inputclass}
          multiline
          rows={4}
          inputProps={{ className: classes.input }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#fadb5f",
            color: "#000",
            fontWeight: "bold",
            border: "2px solid transparent",
            borderRadius: "5px",
            transition: "0.2s ease-in",
            width: "70%",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fadb5f",
              border: "2px solid #fadb5f",
              transform: "scale(1.05)",
            },
          }}
        >
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default CreateNotes;
