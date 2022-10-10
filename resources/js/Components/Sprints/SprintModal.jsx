import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm, Head } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function NewProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    title: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("sprints.store"), { onSuccess: () => reset() });
    handleClose();
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <CreateNewFolderIcon></CreateNewFolderIcon>
        New Sprint
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create a new sprint
            </Typography>
            <form onSubmit={submit}>
              <TextField
                value={data.title}
                placeholder="Enter the name of your sprint"
                className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                onChange={(e) => setData("title", e.target.value)}
              ></TextField>
              <InputError message={errors.message} className="mt-2" />
              <Button
                variant="contained"
                onClick={submit}
                disabled={processing}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
