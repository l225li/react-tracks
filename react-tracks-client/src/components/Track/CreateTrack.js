import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const CreateTrack = ({ classes }) => {
  return (
    <>
    {/* Create Track Button */}
    <Button variant="fab" className={classes.fab} color="secondary">
      <AddIcon />
    </Button>

    {/* Create Track Dialog */}

    <Dialog open={true} className={classes.dialog}>
      <form>
        <DialogTitle>Create Track</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a Title, Description & Audio File
          </DialogContentText>
          <FormControl fullWidth>
            <TextField 
              label="Title"
              placeholder="Add Title"
              className={classes.textField}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField 
              label="Description"
              placeholder="Add Description"
              className={classes.textField}
            />
          </FormControl>
          <FormControl>
            <input
              id="audio"
              required
              type="file"
              className={classes.input}
            />
            <label htmlFor="audio">
              <Button variant="outlined" color="inherit" component="span" className={classes.button}>
                Audio File
                <LibraryMusicIcon className={classes.icon} />
              </Button>
            </label>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button className={classes.cancel}>
            Cancel
          </Button>
          <Button type="submit" className={classes.save}>
            Add Track
          </Button>
        </DialogActions>
      </form>

    </Dialog>
    </>

  )
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
