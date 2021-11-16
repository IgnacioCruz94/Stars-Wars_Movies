import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddMovieForm from "./AddMovieForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal({ AddNewMovieFn }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add films</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new Star Wars Movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please fill all fields required.
          </Typography>
          <br />
          <div>
            <AddMovieForm AddNewMovieFn={AddNewMovieFn} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
