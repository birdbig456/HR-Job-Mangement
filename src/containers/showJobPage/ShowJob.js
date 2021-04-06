import React, { useState } from "react";

//import modules
import mockData from "./data";
import mockData2 from "./data2";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import JobTable from "./Components/JobTable";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width: "100%",
  },
  content: {
    marginTop: theme.spacing(0),
  },
}));

export default function ShowJob() {
  const classes = useStyles();
  const [users] = useState(mockData);
  const [users2] = useState(mockData2);

  return (
    <div>
       <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <JobTable users={users} users2={users2} />
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}
