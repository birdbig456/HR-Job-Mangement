import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import clsx from "clsx";
import { makeStyles, responsiveFontSizes, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import BuildIcon from '@material-ui/icons/Build';
import AirplayIcon from '@material-ui/icons/Airplay';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivityOutlined';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CreateJobPage from "./containers/CreateJobPage";
import CreateSubJobPage from "./containers/createsubjobpage/CreateSubJobPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Profile from "./containers/profilepage/Profile";
import ShowJob from "./containers/showJobPage/ShowJob";
import PositionPage from "./containers/createsubjobpage/positionpage/PositionPage";
import PositionCrate from "./containers/createsubjobpage/positionpage/PositionCrate";
import WorkforceCapacity from "./containers/workforcecapacitypage/WorkforceCapacity"
import WorkforceAnalyst from "./containers/workforceanalystpage/WorkforceAnalyst"
import JobDepartment from "./containers/workforceanalystpage/jobdepartment/JobDepartment"
import JobClassified from './containers/JobClassifiedpage/JobClassified'
import JobClassDisplay from './containers/JobClassifiedpage/JobClassDisplay/JobClassDisplay';
import WorkforceManagement from "./containers/workforcemanagementpage/WorkforceManagement"
import JobclassDisplay from "./containers/jobclassdisplaypage/JobclassDisplay"
import SuccessionPlan from "./containers/successionplanpage/SuccessionPlan"
import FormInfo from "./containers/forminfopage/FormInfo"

const drawerWidth = 240;
const outerTheme = createMuiTheme({
  palette: {

    primary: {
      main: '#262626',

    secondary: {
      main: green[500],
    },
  },
}
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none",
    color:'#13b5ea',
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  BackG: {
    height: theme.spacing(100),
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <div className={classes.root} style={{backgroundImage:"linear-gradient(to bottom right, #ffff,#ffffff )"}}>
        
          <CssBaseline />
          <ThemeProvider theme={outerTheme}>
          <AppBar
            position="fixed"
            className={classes.palette}
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
              style={{color:"#82b440"}}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap style={{fontFamily:"Oswald",color:"#ffff"}}>
                J&WF Management
              </Typography>
            </Toolbar>
          </AppBar>
          </ThemeProvider>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton
              style={{color:"#385a7c"}}
                className={classes.palette}
                onClick={handleDrawerClose}
              >
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>

            <List style={{ boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.25);",
                border: "1px solid #e5e5e5", borderRight:""}}>

              <Link
                to="/CreateJob"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <LibraryAddOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Job Display"}/>
                </ListItem>
              </Link>

              <Link
                to="/Profile"
                
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"My Profile"} />
                </ListItem>
              </Link>

              <Link
                to="/ShowJob"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <StorageOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Show Job"} />
                </ListItem>
              </Link>

              <Link
                to="/WorkforceCapacity"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <GroupOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Workforce Capacity"} />
                </ListItem>
              </Link>

              <Link
                to="/WorkforceAnalyst"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <EqualizerOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Workforce Analyst"} />
                </ListItem>
              </Link>
                  
              {/* <Link
                to="/JobDepartment"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Job & Department"} />
                </ListItem>
              </Link>  */}

              <Link
                to="/JobClassified"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <FormatListBulletedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Job Classified"} />
                </ListItem>
              </Link>

              <Link
                to="/WorkforceManagement"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <BuildIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Workforce Manage"} />
                </ListItem>
              </Link>

              {/* <Link
                to="/JobclassDisplay"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <AirplayIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Jobclass Display"} />
                </ListItem>
              </Link> */}

              <Link
                to="/SuccessionPlan"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <LocalActivityOutlinedIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Succession Plan"} />
                </ListItem>
              </Link>

              <Link
                to="/FormInfo"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <FormatAlignLeftIcon style={{color:"#385A7C"}}/>
                  </ListItemIcon>
                  <ListItemText primary={"Form Information"} />
                </ListItem>
              </Link>

            </List>
            
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />

            <Switch>
              <Route exact path="/CreateJob" component={CreateJobPage} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/ShowJob" component={ShowJob} />
              <Route exact path="/WorkforceCapacity" component={WorkforceCapacity} />
              <Route exact path="/WorkforceAnalyst" component={WorkforceAnalyst}/>
              <Route exact path="/JobDepartment" component={JobDepartment} />
              <Route exact path="/JobClassified" component={JobClassified} />
              <Route exact path="/WorkforceManagement" component={WorkforceManagement}/>
              <Route exact path="/JobclassDisplay" component={JobclassDisplay}/>
              <Route exact path="/SuccessionPlan" component={SuccessionPlan}/>
              <Route exact path="/FormInfo" component={FormInfo}/>
              <Route exact path="/:JobName" component={CreateSubJobPage} />
              <Route exact path="/:JobName/:SubJobName" component={PositionCrate} />
              <Route exact path="/:JobName/:SubJobName/:Position" component={PositionPage} />
            </Switch>
          </main>
        
      </div>
    </BrowserRouter>
  );
}
