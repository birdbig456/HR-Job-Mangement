import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import TaskInFo from "./formStep/TaskInFo";
import FormAvg from "./formStep/FormAvg";
import FormProject from "./formStep/FormProject";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}



function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FormInfo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Form Infomation
          </h3>
        </Grid>
        <div className={classes.root}>
          <Paper elevation={1} position="static" style={{background:"#ffff",color:"#13b5ea"}}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              indicatorColor="primary"
              style={{fontFamily:"Oswald",fontSize:16,}}
            >
              <LinkTab  label="Task InFo" href="/drafts" {...a11yProps(0)} />
              <LinkTab  label="Form Avg" href="/trash" {...a11yProps(1)} />
              <LinkTab  label="Form Project" href="/spam" {...a11yProps(2)} />
            </Tabs>
          </Paper >

          <TabPanel value={value} index={0}>
            <TaskInFo />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormAvg />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FormProject />
          </TabPanel>
        </div>
      </Grid>
    </div>
  );
}
