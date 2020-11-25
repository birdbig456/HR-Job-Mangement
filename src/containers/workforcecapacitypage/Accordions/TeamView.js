import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../actions/CreateJob.action";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function MinusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 20, height: 20, background: "#FF3019", color: "white" }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 20, height: 20, background: "#FF3019", color: "white" }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon 
      className="close"
      fontSize="inherit"
      style={{ width: 20, height: 20, background: "#FF3019", color: "white" }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    marginTop: 20,
  },
  label: {
    textTransform: "capitalize",
    fontSize: 16,
    background: "#ffffff",
    color: "#36a69a",
    fontWeight: "medium",
    marginLeft: 15,
    border: "1px solid #e5e5e5",
    borderRadius: 3,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    textAlign: "center",
  },
  expanded: {
    marginTop: 0,
  },
  content: {
    marginTop: 10,
  },
  root: {},
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const StyledTreeItem2 = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    marginTop: 10,
  },
  label: {
    textTransform: "capitalize",
    fontSize: 16,
    background: "#ffffff",
    color: "black",
    fontWeight: "medium",
    marginLeft: 15,
    border: "1px solid #e5e5e5",
    borderRadius: 3,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    textAlign: "center",
  },
  expanded: {
    marginTop: 0,
  },
  content: {
    marginTop: 10,
  },
  root: {},
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const StyledTreeView = withStyles({
  root: {
    margin: 50,
  },
  label: {
    textTransform: "capitalize",
  },
})(TreeView);

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: "100%",
  },
});

export default function TeamView() {
  const [nameDivision, setNameDivision] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [divisionName, setDivisionName] = useState("Create Division");
  const CreateDivisionReducer = useSelector(
    ({ CreateDivisionReducer }) => CreateDivisionReducer
  );
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };
  

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const [state, setState] = React.useState({
    JobGroup: '',
    SubJobGroup: '',
    JobPosition:'',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <StyledTreeView
        className={classes.root}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >
        {CreateDivisionReducer.NameDivision.map((item, index) => (
          <StyledTreeItem key={index} onClick={handleClickOpen} nodeId="1" label={item}>
            <StyledTreeItem2
              nodeId="2"
              label="Workforce Create"
              onClick={handleClickOpen2}
            />
            <StyledTreeItem nodeId="3" label="Create Department">
              <StyledTreeItem2 nodeId="4" label="Workforce Create" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="5" label="Create Section">
              <StyledTreeItem2 nodeId="6" label="Workforce Create" />
            </StyledTreeItem>
          </StyledTreeItem>
        ))}
      </StyledTreeView>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Division</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            required
            color="primary"
            label="Enter Division Name"
            style={{width:500}}
            id="CreateDivision"
            name="CreateDivision"
            onChange={(e) => {
              setNameDivision(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(CreateAction.CreateDivision(nameDivision));
              handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Workforce</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="JobGroup">Job Group</InputLabel>
            <Select
              native
              value={state.age}
              style={{width:250}}
              onChange={handleChange}
              inputProps={{
                name: "JobGroup",
                id: "JobGroup",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Job1"}>Job 1</option>
              <option value={"Job2"}>Job 2</option>
              <option value={"Job3"}>Job 3</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="JobGroup" style={{marginLeft:20}}>Sub Job Group</InputLabel>
            <Select
              native
              value={state.age}
              style={{width:250,marginLeft:20}}
              onChange={handleChange}
              inputProps={{
                name: "JobGroup",
                id: "JobGroup",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Job1"}>Job 1</option>
              <option value={"Job2"}>Job 2</option>
              <option value={"Job3"}>Job 3</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} style={{marginTop:20}}>
            <InputLabel htmlFor="JobGroup">Job Position</InputLabel>
            <Select
              native
              value={state.age}
              style={{width:250}}
              onChange={handleChange}
              inputProps={{
                name: "JobGroup",
                id: "JobGroup",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Job1"}>Job 1</option>
              <option value={"Job2"}>Job 2</option>
              <option value={"Job3"}>Job 3</option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} style={{marginTop:20}}>
            <InputLabel htmlFor="JobGroup" style={{marginLeft:20}}>Job Seat</InputLabel>
            {/* <Select
              native
              value={state.age}
              style={{width:250,marginLeft:20}}
              onChange={handleChange}
              inputProps={{
                name: "JobGroup",
                id: "JobGroup",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Job1"}>Job 1</option>
              <option value={"Job2"}>Job 2</option>
              <option value={"Job3"}>Job 3</option>
            </Select> */}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(CreateAction.CreateDivision(nameDivision));
              handleClose2();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
