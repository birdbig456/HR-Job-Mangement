import React, { useState, useEffect } from "react";
import { CreateJob } from "../../../../actions/CreateJob.action";
import CreateJobReducer from "../../../../reducers/CreateJob.reducer";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
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
  const [result, setResult] = useState([]);
  useEffect(() => {
    let resultJob = [];
    // map ข้อมูลเพื่อเอามาดู employee เพื่อเทียบกัน
    CreateJobReducer.JobFamily.map((element) => {
      // เพิ่มเข้าไปอันนีึงถ้า resultJob ยังไม่มีค่า
      if (resultJob.length == 0) {
        resultJob.push(element);
      } else {
        // หาว่า array ยาวกว่าอันไหนใน resultJob แล้วยัดต่ออันนั้น
        for (let i = 0; i < resultJob.length; i++) {
          if (element.Employee.length >= resultJob[i].Employee.length) {
            resultJob.splice(i, 0, element);
            break;
          }
        }
      }
    });
    resultJob = resultJob.reverse();
    setResult(resultJob);
    console.log(resultJob, result);
  },[]);

  return (
    <div style={{ marginLeft:250,marginRight:250,marginTop:40}}>
      
        {result.map((item, index) => (   
          <div
          style={{
            width: `${10 * (index + 2)}%`,
            border: "solid 1px #e5e5e5",
            background:"#ffff",
            boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.25)",
            margin: "auto",
            marginBottom:3,
            borderRadius:20,    
            padding: 7,
            textAlign: "center",
            display:"flex",
            justifyContent:"center"
          }}
          key={index}
        >   
              <AvatarGroup max={result.length} >
                
                {item.Employee.map((itemEmp, index) => (
                  
                  <Avatar
                    alt={itemEmp}
                    src="/static/images/avatar/1.jpg"
                    style={{ background: "#ff3019", marginLeft:"auto",marginRight:"auto" }}
                  />
                  
                ))}
                
              </AvatarGroup>   
              </div>
        ))}
      
    </div>
  );
}
