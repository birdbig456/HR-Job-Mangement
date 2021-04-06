import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container style={{}}>
      <Grid
        item
        xs={12}
        sm={12}
        style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="HomeImage"
      >
        <Grid className="HomeTitle">
          <h3
            style={{
              fontSize: 36,
              color: "#385a7c",
              fontFamily: "Oswald",
              textAlign: "center",
              margin: 0,
            }}
          >
            <a style={{ color: "#6A8F38" }}>SCG</a> Home Solution
          </h3>
          <h3
            style={{
              fontSize: 28,
              color: "#ffff",
              fontFamily: "Oswald",
              textAlign: "center",
              margin: 0,
            }}
          >
            Job<a style={{ color: "#ffff" }}> & </a>Workforce Management
          </h3>
        </Grid>
      </Grid>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        style={{
          margin: "auto",
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: "#82b440",
        }}
      >
        <ExpandMoreIcon fontSize="small" style={{ color: "#ffff" }} />
      </IconButton>
      <Grid item xs={12} sm={12} className="HomeCardbg">
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          style={{ marginInline: "20%" }}
        >
          <Grid
            style={{ fontFamily: "Kanit", padding: 30 }}
            className="HomeCard"
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#13d5ea",
                margin: 0,
                fontSize: 24,
              }}
            >
              เอสซีจี โฮมโซลูชั่น ระยอง
            </p>
            <p
              style={{
                color: "#ffff",
                fontSize: 20,
                marginTop: 2,
                fontWeight: "bold",
              }}
            >
              486 ถนนสุขุมวิท ต.เนินพระ อ.เมืองระยอง จ.ระยอง 21000
            </p>
            <a style={{ fontSize: 18, color: "#ffff" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SCG HOME SOLUTION
              ศูนย์บริการและจำหน่ายสินค้าวัสดุก่อสร้างพร้อมสินค้าตกแต่งครบวงจร
              สำหรับการสร้างบ้านใหม่ ปรับปรุง ต่อเติมและซ่อมแซม
              พร้อมตอบโจทย์ด้วยบริการ ที่เป็นมิตรจากผู้เชี่ยวชาญ ของเอสซีจี
              ตั้งแต่ให้คำปรึกษาฟรี ขึ้นภาพ3 มิติจากแบบบ้านของ
              ลูกค้าเพื่อให้เห็นภาพเสมือนจริงก่อนการ ก่อสร้าง ออกแบบห้องน้ำ
              ห้องครัว และพื้นที่รอบบ้าน ช่วยประมาณราคาค่าใช้จ่ายไม่ให้งบบานปลาย
              และยังมี บริการติตตั้งโดยทีมช่างมืออาชีพ
              ครอบคลุมองค์ประกอบสำคัญของบ้าน เช่น หลังคา, ฝ้าเพดาน, ผนัง,
              ห้องน้ำ, ห้องครัว,วัสดุปูพื้นผนัง ประตูหน้าต่าง, ภูมิทัศน์ภายนอก,
              ระแนง, โรงจอดรถ, ปั๊มน้ำและถังน้ำพร้อมเดินท่อ, เครื่องทำน้ำอุ่น,
              เครื่องปรับอากาศ และต่อเติม ครัว เพื่อรองรับทุกความต้องการ
              สำหรับลูกค้า ทั้งช่างและเจ้าของบ้านให้ได้รับทั้งความสุข ความคุ้ม
              จากสินค้าและบริการ ที่ครบครันอย่างแท้จริง
            </a>
          </Grid>
        </Collapse>
      </Grid>
      {/* <Grid item xs={12} sm={12} style={{textAlign:"center"}}>MAP</Grid> */}
    </Grid>
  );
}
