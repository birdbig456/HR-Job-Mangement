import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RoomIcon from '@material-ui/icons/Room';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./HomePage.css";

import { longdo, map, LongdoMap } from "./LongdoMap/LongdoMap";

const useStyles = makeStyles((theme) => ({
  DialogWrapper: {
    background:"none",
    padding: theme.spacing(0),
    paddingTop: theme.spacing(0),
    borderRadius: 20,
  },
  DialogContent:{
    height:"60vh",
   backgroundImage:"url('https://sv1.picz.in.th/images/2021/04/10/ABabM0.jpg')",
   backgroundSize: "cover",
backgroundPosition: "center top",
   
    }

}));

const mapkey = "a552c00673d239dac04f173966e3a398";
export default function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const initMap = () => {
    map.Layers.setBase(longdo.Layers.GRAY);
  };

  return (
    <Grid style={{ background: "#ffff" }}>
      <Grid container className="HomePaper1">
        <Grid
          item
          xs={12}
          sm={12}
          className="Paper1Content"
          style={{ background: "" }}
        >
          {/* <img src="https://sv1.picz.in.th/images/2021/04/09/AzFOUf.png" /> */}
          <p
            className="TextTitle"
            title="Job & Workforce Management"
          >
            Job<a style={{ color: "#fec566" }}> & </a>Workforce Management
          </p>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            style={{ background: "#13b5ea" }}
          >
            <InfoOutlinedIcon fontSize="small" style={{color:"#ffff",marginRight:6,padding:2}}/>
            <a style={{ fontFamily: "Montserrat", color: "#ffff"}}>
              More Info
            </a>
            
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            classes={{ paper: classes.DialogWrapper }}
            maxWidth="md"
          >
            <div className="DialogTitle">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontFamily: "Pattaya" ,color:"#31b5ea",fontWeight:"normal",marginLeft:20}} variant="h6">
                  เอสซีจี โฮมโซลูชั่น ระยอง
                </Typography>
                <Typography style={{ fontFamily: "Kanit"}} variant="subtitle2">
                  <div style={{display:"flex",alignItems:"flex-start" }}>
                  <RoomIcon fontSize="small" style={{color:"#fec566",padding:2}}/>
                  <a  style={{color:"#e5e5e5"}}>486 ถนนสุขุมวิท ต.เนินพระ อ.เมืองระยอง จ.ระยอง 21000</a> 
                  </div>
                
                </Typography>
              </div>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon style={{color:"#ffff"}}/>
              </IconButton>
            </div>

            <DialogContent  classes={{ root: classes.DialogContent }} >
              <div className="TypoContent">
              <Typography style={{ fontFamily: "Kanit",fontSize:"18px" ,color:"#444444",paddingInline:40,padding:20,borderRadius:"20px 0px 20px 0px"}}  >
                 <a style={{fontFamily:"Lobster",color:"#666666",fontWeight:"normal"}}>SCG Home Solution&nbsp;</a>
                ศูนย์บริการและจำหน่ายสินค้าวัสดุก่อสร้างพร้อมสินค้าตกแต่งครบวงจร
                สำหรับการสร้างบ้านใหม่ ปรับปรุง ต่อเติมและซ่อมแซม
                พร้อมตอบโจทย์ด้วยบริการ ที่เป็นมิตรจากผู้เชี่ยวชาญ ของเอสซีจี
                ตั้งแต่ให้คำปรึกษาฟรี ขึ้นภาพ3 มิติจากแบบบ้านของ
                ลูกค้าเพื่อให้เห็นภาพเสมือนจริงก่อนการ ก่อสร้าง ออกแบบห้องน้ำ
                ห้องครัว และพื้นที่รอบบ้าน
                ช่วยประมาณราคาค่าใช้จ่ายไม่ให้งบบานปลาย และยังมี
                บริการติตตั้งโดยทีมช่างมืออาชีพ ครอบคลุมองค์ประกอบสำคัญของบ้าน
                เช่น หลังคา, ฝ้าเพดาน, ผนัง, ห้องน้ำ, ห้องครัว,วัสดุปูพื้นผนัง
                ประตูหน้าต่าง, ภูมิทัศน์ภายนอก, ระแนง, โรงจอดรถ,
                ปั๊มน้ำและถังน้ำพร้อมเดินท่อ, เครื่องทำน้ำอุ่น, เครื่องปรับอากาศ
                และต่อเติม ครัว เพื่อรองรับทุกความต้องการ สำหรับลูกค้า
                ทั้งช่างและเจ้าของบ้านให้ได้รับทั้งความสุข ความคุ้ม
                จากสินค้าและบริการ ที่ครบครันอย่างแท้จริง
              </Typography>
              </div>
              
              {/* <img src="https://sv1.picz.in.th/images/2021/04/10/ANM96P.jpg" width="50%" height="40%" style={{borderRadius:20,margin:"auto",display:"block"}}  /> */}
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
      <Grid container>

        <Grid item xs={12} sm={12} style={{background:"url(https://sv1.picz.in.th/images/2021/04/06/AW3cKa.png)"}}>
        <div className="MapWrapper">
        <a title="On Map" className="MapTitle"><MapRoundedIcon fontSize="medium" style={{color:"#13b5ea",marginRight:4}}/>แผนที่การเดินทาง</a>
        <LongdoMap  id="longdo-map" mapKey={mapkey} callback={initMap} />

        </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
