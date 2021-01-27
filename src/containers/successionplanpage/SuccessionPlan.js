import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/Card";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Dashboard from "./organized/organizeChart"
const useStyles = makeStyles((theme) => ({
  CandidateCard: {
    background: "#ffff",
    border: 0,
    borderRadius: 2,
    width: "100%",
    margin: 15,
    marginBottom: 0,
    padding: 8,
    paddingBottom: 0,
    height: 190,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
  },
  CreateButton: {
    background: "#ff3019",
    color: "#ffff",
  },
  CancelButton: {
    background: "#385a7c",
    color: "#ffff",
  },
  SubmitButton: {
    background: "#ff3019",
    color: "#ffff",
  },
  FormControl: {
    width: "250px",
    margin: theme.spacing(1),
  },
}));

export default function SuccessionPlan() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [division, setDivision] = React.useState("");
  const divisionselect = (event) => {
    setDivision(event.target.value);
  };
  const [jobgroup, setJobgroup] = React.useState("");
  const jobgroupselect = (event) => {
    setJobgroup(event.target.value);
  };
  const [subjobgroup, setSubjobgroup] = React.useState("");
  const subjobgroupselect = (event) => {
    setSubjobgroup(event.target.value);
  };
  const [jobposition, setJobposition] = React.useState("");
  const jobpositionselect = (event) => {
    setJobposition(event.target.value);
  };


  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Grid container>
        <Grid item sm={12} xs={12} style={{ marginBottom: 5 }}>
          <h3
            style={{
              fontSize: 28,
              color: "#385A7C",
              fontFamily: "Oswald",
              marginTop: 0,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Succession Planning
          </h3>
          <Button
            variant="contained"
            className={classes.CreateButton}
            onClick={handleClickOpen}
          >
            Create
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ textAlign: "center" }}>
              <Typography style={{fontWeight:"bold",color:"#ff3019",fontFamily:"Oswald"}}>PLEASE SELECT</Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                style={{ marginLeft:10, marginRight:10, }}
              >
                <FormControl className={classes.FormControl}>
                  <InputLabel>Division</InputLabel>
                  <Select value={division} onChange={divisionselect}>
                    <MenuItem value={1}>Division 1</MenuItem>
                    <MenuItem value={2}>Division 2</MenuItem>
                    <MenuItem value={3}>Division 3</MenuItem>
                    <MenuItem value={4}>Division 4</MenuItem>
                    <MenuItem value={5}>Division 5</MenuItem>
                    <MenuItem value={6}>Division 6</MenuItem>
                    <MenuItem value={7}>Division 7</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Job Group</InputLabel>
                  <Select value={jobgroup} onChange={jobgroupselect}>
                    <MenuItem value={1}>Job Group 1</MenuItem>
                    <MenuItem value={2}>Job Group 2</MenuItem>
                    <MenuItem value={3}>Job Group 3</MenuItem>
                    <MenuItem value={4}>Job Group 4</MenuItem>
                    <MenuItem value={5}>Job Group 5</MenuItem>
                    <MenuItem value={6}>Job Group 6</MenuItem>
                    <MenuItem value={7}>Job Group 7</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Sub Job Group</InputLabel>
                  <Select value={subjobgroup} onChange={subjobgroupselect}>
                    <MenuItem value={1}>Sub Job Group 1</MenuItem>
                    <MenuItem value={2}>Sub Job Group 2</MenuItem>
                    <MenuItem value={3}>Sub Job Group 3</MenuItem>
                    <MenuItem value={4}>Sub Job Group 4</MenuItem>
                    <MenuItem value={5}>Sub Job Group 5</MenuItem>
                    <MenuItem value={6}>Sub Job Group 6</MenuItem>
                    <MenuItem value={7}>Sub Job Group 7</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Job Position</InputLabel>
                  <Select value={jobposition} onChange={jobpositionselect}>
                    <MenuItem value={1}>Job Position 1</MenuItem>
                    <MenuItem value={2}>Job Position 2</MenuItem>
                    <MenuItem value={3}>Job Position 3</MenuItem>
                    <MenuItem value={4}>Job Position 4</MenuItem>
                    <MenuItem value={5}>Job Position 5</MenuItem>
                    <MenuItem value={6}>Job Position 6</MenuItem>
                    <MenuItem value={7}>Job Position 7</MenuItem>
                  </Select>
                </FormControl>
               
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                size="small"
                onClick={handleClose}
                className={classes.CancelButton}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={handleClose}
                className={classes.SubmitButton}
                autoFocus
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid
          item
          sm={8}
          xs={8}
          style={{
            border: "solid 2px #e5e5e5",
            background: "#FFF6E6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#385a7c",
          }}
        >
          <Dashboard/>
        </Grid>

        <Grid item sm={4} xs={4}>
          <Grid
            container
            style={{ background: "#e5e5e5", width: "95%", paddingBottom: 15 }}
          >
            <Grid
              item
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Oswald",
                background: "#ff3019",
                color: "#ffff",
              }}
            >
              <h3 style={{ marginLeft: 20 }}>TALENT POOL</h3>
              <p style={{ marginRight: 10 }}>
                <ChevronRightOutlinedIcon />
              </p>
            </Grid>

            {/* card1 */}
            <div className={classes.CandidateCard}>
              <Grid
                item
                sm={3}
                xs={3}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    height: "60%",
                    width: "100%",
                    paddingRight: 5,
                    paddingLeft: 5,
                    display: "flex",
                  }}
                  src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png"
                  alt="lPt88Z.png"
                  border="0"
                />
                <h4 style={{ height: "10%", marginBottom: 0, marginTop: 15 }}>
                  Candidate
                </h4>
                <StarIcon
                  style={{
                    height: "10%",
                    marginBottom: 0,
                    color: "#fec566",
                    marginTop: 0,
                    marginInline: "auto",
                  }}
                ></StarIcon>
              </Grid>
              <Grid item sm={6} xs={6}>
                <h3
                  style={{
                    color: "#ff3019",
                    marginLeft: 23,
                    fontFamily: "Oswald",
                  }}
                >
                  Amad Diallo Traore
                </h3>
                <p style={{ marginLeft: 23 }}>HDPE 4 Production Section..</p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <lebel>PL</lebel>
                  <lebel>Age</lebel>
                  <lebel>TIP</lebel>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    fontFamily: "Oswald",
                    color: "#36a69a",
                    fontWeight: "bold",
                  }}
                >
                  <p>S4</p>
                  <p>19/1</p>
                  <p>0/0</p>
                </div>
              </Grid>
              <Grid item sm={3} xs={3} style={{ textAlign: "center" }}>
                <h4 style={{ color: "#36a69a" }}>Matched</h4>
                <p>95%</p>
              </Grid>
            </div>

            {/* card2 */}
            <div className={classes.CandidateCard}>
              <Grid
                item
                sm={3}
                xs={3}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    height: "60%",
                    width: "100%",
                    paddingRight: 5,
                    paddingLeft: 5,
                    display: "flex",
                  }}
                  src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png"
                  alt="lPt88Z.png"
                  border="0"
                />
                <h4 style={{ height: "10%", marginBottom: 0, marginTop: 15 }}>
                  Candidate
                </h4>
                <StarIcon
                  style={{
                    height: "10%",
                    marginBottom: 0,
                    color: "#fec566",
                    marginTop: 0,
                    marginInline: "auto",
                  }}
                ></StarIcon>
              </Grid>
              <Grid item sm={6} xs={6}>
                <h3
                  style={{
                    color: "#ff3019",
                    marginLeft: 23,
                    fontFamily: "Oswald",
                  }}
                >
                  Jack Grealish
                </h3>
                <p style={{ marginLeft: 23 }}>HDPE 4 Production Section..</p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <lebel>PL</lebel>
                  <lebel>Age</lebel>
                  <lebel>TIP</lebel>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    fontFamily: "Oswald",
                    color: "#36a69a",
                    fontWeight: "bold",
                  }}
                >
                  <p>S4</p>
                  <p>24/6</p>
                  <p>0/0</p>
                </div>
              </Grid>
              <Grid item sm={3} xs={3} style={{ textAlign: "center" }}>
                <h4 style={{ color: "#36a69a" }}>Matched</h4>
                <p>35%</p>
              </Grid>
            </div>

            {/* card3 */}
            <div className={classes.CandidateCard}>
              <Grid
                item
                sm={3}
                xs={3}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    height: "60%",
                    width: "100%",
                    paddingRight: 5,
                    paddingLeft: 5,
                    display: "flex",
                  }}
                  src="https://sv1.picz.in.th/images/2021/01/20/lPt88Z.png"
                  alt="lPt88Z.png"
                  border="0"
                />
                <h4 style={{ height: "10%", marginBottom: 0, marginTop: 15 }}>
                  Candidate
                </h4>
                <StarIcon
                  style={{
                    height: "10%",
                    marginBottom: 0,
                    color: "#fec566",
                    marginTop: 0,
                    marginInline: "auto",
                  }}
                ></StarIcon>
              </Grid>
              <Grid item sm={6} xs={6}>
                <h3
                  style={{
                    color: "#ff3019",
                    marginLeft: 23,
                    fontFamily: "Oswald",
                  }}
                >
                  Jadon Sancho
                </h3>
                <p style={{ marginLeft: 23 }}>HDPE 4 Production Section..</p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <lebel>PL</lebel>
                  <lebel>Age</lebel>
                  <lebel>TIP</lebel>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    fontFamily: "Oswald",
                    color: "#36a69a",
                    fontWeight: "bold",
                  }}
                >
                  <p>S4</p>
                  <p>20/4</p>
                  <p>0/0</p>
                </div>
              </Grid>
              <Grid item sm={3} xs={3} style={{ textAlign: "center" }}>
                <h4 style={{ color: "#36a69a" }}>Matched</h4>
                <p>75%</p>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
