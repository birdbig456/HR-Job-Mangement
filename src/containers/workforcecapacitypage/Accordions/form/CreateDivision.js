import React ,{useState,useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import * as CreateAction from "../../../../actions/CreateJob.action";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(3),
    },
}));

export default function CreateDivision() {
    const [nameDivision, setNameDivision] = useState()
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <div style={{margin:50}}>
            <form>
        
          <Grid container>
            
            <Grid container style={{ marginTop: 30 }}>
              <Grid item xs={12} sm={5}>
                <TextField disabled label="Division Name :" />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  color="primary"
                  label="Enter Division Name"
                  fullWidth
                  id="CreateDivision"
                  name="CreateDivision"
                  onChange={ e => {(setNameDivision(e.target.value))}} 
                />
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{ display: "flex", justifyContent: "center", margin: 25 }}
          >
            <Button
              type="submit"
              className={classes.palette}
              color="primary"
              variant="contained"
              size="small"
              style={{ margin: 7 }}
              onSubmit={() => {
                
                dispatch(CreateAction.CreateDivision(nameDivision));
                
              }}
            >
              Save
            </Button>
            <Button
              
              variant="contained"
              size="small"
              style={{ margin: 7 }}
            >
              Cancel
            </Button>
          </div>
        
      </form>
        </div>
    )
}
