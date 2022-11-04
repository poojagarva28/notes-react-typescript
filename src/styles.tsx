import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  outerdiv: {
    height: "100vh",
    color: "#fff",
    padding: "30px 50px 0px",
  },
  notebox: {
    color: "#fff",
    "::after": {
      borderBottom: "1px solid red",
    },
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "200px",
    position: "relative",
  },
  button: {
    backgroundColor: "#000",
    color: "#fadb5f",
    minWidth: "0px",
    boxShadow: "none",
    border: "none",
    padding: "5px 5px 2px 5px",
    transition: "0.2s ease-in",
    borderRadius: "5px",
    position: "absolute",
    top: "5px",
    right: "5px",
    zIndex: "1",
    "&:hover": {
      backgroundColor: "#fadb5f",
      color: "#000",
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
  middlecomp: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "80vh",
  },
  inputclass: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff !important",
    border: "1px solid rgba(255,255,255,0.7) !important",
    borderRadius: "5px",
    width: "70%",
  },
  input: {
    color: "#fff !important",
  },
});
