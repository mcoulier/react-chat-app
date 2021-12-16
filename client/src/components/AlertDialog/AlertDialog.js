import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({ open, setShowDialog }) {
  const handleClose = () => {
    setShowDialog(false);
  };

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle>Woah there!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Look's like you didn't fill out every field.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
  );
}
