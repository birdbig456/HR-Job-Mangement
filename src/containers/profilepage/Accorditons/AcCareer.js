import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Block: {
    border: "solid 1px #e5e5e5",
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 5,
  },
}));

export default function AcCareer() {
  const classes = useStyles();
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Grid container>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <p>Under Successor</p>
        <List className={classes.Block}>
          <ListItem>
            <ListItemAvatar>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "checkbox" }}
              />
            </ListItemAvatar>
            <ListItemText>
              <p>Pongsakorn Bird</p>
              <p>Developer</p>
            </ListItemText>
          </ListItem><hr/>

          <ListItem>
            <ListItemAvatar>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "checkbox" }}
              />
            </ListItemAvatar>
            <ListItemText>
              <p>Pongsakorn Bird</p>
              <p>Developer</p>
            </ListItemText>
          </ListItem><hr/>

          <ListItem>
            <ListItemAvatar>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "checkbox" }}
              />
            </ListItemAvatar>
            <ListItemText>
              <p>Pongsakorn Bird</p>
              <p>Developer</p>
            </ListItemText>
          </ListItem><hr/>
        </List>
        {/* <Grid className={classes.levelBlock} style={{alignItems:"center"}}>
            <Grid item xs={4} sm={4} style={{alignItems:"center"}}>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'checkbox' }}
            />
            </Grid>
            <Grid item xs={8} sm={8}>
                <p>Name</p>
                <p>Position</p>
            </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <p>xxxxxxxx</p>
        <div></div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        style={{ textAlign: "center", borderLeft: "solid 1px #e5e5e5" }}
      >
        <p>Carreer xxxxxxxx</p>
        <div></div>
      </Grid>
    </Grid>
  );
}

{
  /* <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'checkbox' }}
        /> */
}
