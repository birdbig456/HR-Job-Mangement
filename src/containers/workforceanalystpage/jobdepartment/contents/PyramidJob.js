import React from "react";
import { CreateJob } from "../../../../actions/CreateJob.action";
import CreateJobReducer from "../../../../reducers/CreateJob.reducer";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function PyramidJob() {
  const classes = useStyles();
  const CreateJobReducer = useSelector(
    ({ CreateJobReducer }) => CreateJobReducer
  );
  return (
    <div style={{ margin: 100 }}>
      {CreateJobReducer.JobFamily.map((item, index) => (
        <div
          style={{
            width: `${10 * (index + 2)}%`,
            border: "solid",
            margin: "auto",
            padding: 10,
            textAlign: "center",
          }}
          key={index}
        >
          <AvatarGroup max={4}>
            {item.Employee.map((itemEmp, index) => (
              <Avatar
                alt={itemEmp}
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            ))}
          </AvatarGroup>
        </div>
      ))}
    </div>
  );
}
