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
  
  const successor = [
    {
      name: "Bird Pongsakorn",
      position: "Developer 1"
    },
    {
      name: "Thanuch M",
      position: "Developer 2"
    },
    {
      name: "Nay chaitong",
      position: "Developer 3"
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <p>Under Successor</p>
        {successor.map((item,index) => (
          <List key={index} className={classes.Block}>
          <ListItem>
            <ListItemAvatar>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "checkbox" }}
              />
            </ListItemAvatar>
            <ListItemText>
              <h4 style={{color:"#385a7c",fontFamily:"Oswald",letterSpacing:1,fontSize:16}}>{item.name}</h4>
              <p>{item.position}</p>
            </ListItemText>
          </ListItem>
        </List>
        ))}
        
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
