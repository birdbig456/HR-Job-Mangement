import React, { useState, useEffect } from "react";

// Components
import MaterialTable from "material-table";
import {
  TableContainer,
  Card,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  TextField,
  Button,
  Switch,
  Grid,
  Box,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { lighten, withStyles, makeStyles } from "@material-ui/core/styles";
import OrganizationChart from "@dabeng/react-orgchart";
import JSONDigger from "json-digger";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DragItem from "../../workforcemanagementpage/component/drag-item";
import DropItem from "../../workforcemanagementpage/component/drop-item";
import CardHeader from "@material-ui/core/CardHeader";
import "./style.css";
// Icons
import { Flag, Edit, Visibility } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  BG: {
    background: "#fff",
    color: "#385a7c",
    marginTop: 10,
  },
}));

const todos = {};

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#82b440", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#82b440",
  },
})(LinearProgress);

const TransactionTable = ({ columns, data, error }) => {
  return (
    <div>
      {columns && data ? (
        <TableContainer component={Card}>
          <MaterialTable
            title=""
            columns={columns}
            data={data}
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
            detailPanel={[
              {
                tooltip: "Detail",
                render: (rowData) => {
                  return (
                    <ul className="py-3 px-5 list-group list-group-flush">
                      {rowData.keyResult.map((value, index) => {
                        return (
                          <li key={index} className="list-group-item">
                            • {value}
                          </li>
                        );
                      })}
                    </ul>
                  );
                },
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#f1f3f4",
                fontSize: "105%",
              },
              pageSizeOptions: [5],
            }}
            localization={{
              body: {
                emptyDataSourceMessage: error,
              },
            }}
          />
        </TableContainer>
      ) : (
        <div>
          {/* <Skeleton width="100%" animation="wave" />
              <Skeleton variant="rect" width="100%" height={50} animation="wave" />
              <Skeleton width="100%" animation="wave" />
              <Skeleton variant="rect" width="100%" height={350} animation="wave" /> */}
        </div>
      )}
    </div>
  );
};

//dialog popup when clicked----start
const ShowDetail = ({ data, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    open && (
      <Dialog open={open} onClose={() => setOpen(false)} className="p-2">
        <DialogTitle
          style={{
            background:"#262626",
            alignItems: "center",
          }}
          onClose={handleClose}
        >
          <a
            style={{
              color: "#FFFF",
              fontFamily: "Oswald",
              fontWeight: "bold",
            }}
          >
            Planning detail
          </a>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            size="small"
            style={{ float: "right", marginTop: 3 }}
          >
            <CloseIcon style={{ color: "#82B440" }} fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#ffff",paddingTop:""}}>
          <CardHeader
          style={{paddingTop:0}}
            avatar={
              <img
                src={data[0].img}
                alt="img"
                style={{ width: 50, borderRadius: "50%" }}
              />
            }
            title={data[0].name}
            subheader={data[0].position}
          />
          <div>
            <a style={{color:"#fec566"}}>Objective :</a>
            <p style={{marginTop:0}}>{data[0].objective}</p>
          </div>
          <div>
            <a style={{color:"#fec566"}}>Key Result :</a>
            {data[0].keyResult.map((value, index) => {
              return (
                <p style={{marginTop:0}} key={index}>
                  {value}
                </p>
              );
            })}
          </div>
          {data[0].crossTeam && (
            <div className="py-3 text-center">
              Work with{" "}
              {data[0].crossTeam.map((value, index) => {
                return index === 0 ? value : ", " + value;
              })}
            </div>
          )}
          {data[0].score && (
            <div className="py-3 text-center">
              {data[0].score * 100}%
              <BorderLinearProgress
                variant="determinate"
                color="secondary"
                value={data[0].score * 100}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    )
  );
};
//dialog popup when clicked---------end

//organizeCard-----start
const MyNode = ({ nodeData, color }) => {
  const [todoValues, setValue] = useState(todos);
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: color ? color : "#FFF2E6" }}>
      <Grid container style={{width:200 }}>
        <Grid item xs={8} sm={8} style={{ padding: 4 }}>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "Oswald",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color:"#385a7c"
            }}
          >
            {nodeData.position}
          </p>
          <div
            style={{
              fontWeight: "",
              fontFamily: "",
              color:"#385a7c"
            }}
          >
            {nodeData.name}
          </div>
          <img
            src={nodeData.img}
            alt="img"
            style={{ width: 60, borderRadius: "50%" }}
          />

          <div>{nodeData.objective}</div>

          <Grid
            item
            container
            style={{
              textAlign: "center",
              justifyContent: "space-between",
              marginBottom: 8,
              marginTop: 8,
            }}
          >
            <Grid item xs={3} sm={3}>
              <Box>PL</Box>
              <Box className={classes.BG}>{nodeData.pl}</Box>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Box>Age</Box>
              <Box className={classes.BG}>{nodeData.age}</Box>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Box>TIP</Box>
              <Box className={classes.BG}>{nodeData.tip}</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4} style={{ backgroundColor: "#fafafa" }}>
          <DropItem
            onDrop={(id) => {
              const currentTodo = { ...todoValues[id] };
              currentTodo.state = "box3";
              setValue({ ...todoValues, ...{ [id]: currentTodo } });
            }}
          >
            {Object.keys(todoValues)
              .map((key) => ({ id: key, ...todoValues[key] }))
              .filter((todo) => todo.state === "box3")
              .map((todo) => (
                <DragItem id={todo.id} data={todo} key={todo.id} />
              ))}
          </DropItem>
        </Grid>
      </Grid>
    </div>
  );
};
//organizeCard-----end

//inside info-----start
const Dashboard = () => {
  const [successQuery, setSuccessQuery] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  // Base
  const [organization, setOrganization] = useState(null);
  const [team, setTeam] = useState(null);
  const [manager, setManager] = useState(null);
  const [member, setMember] = useState(null);

  // Compare
  const [allDepartment, setAllDepartment] = useState(null);
  const [departmentToCompare, setDepartmentToCompare] = useState("");
  const [organizationCompare, setOrganizationCompare] = useState(null);
  const [teamCompare, setTeamCompare] = useState(null);
  const [managerCompare, setManagerCompare] = useState(null);

  // Base
  const queryOrganization = async () => {
    setOrganization({
      id: "1",
      objective: "Organization Objective",
      keyResult: [
        "1st Organization key result",
        "2nd Organization key result",
        "3nd Organization key result",
      ],
      img:
        "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208051/96119229-beautiful-girl-face-cartoon-vector-illustration-graphic-design.jpg",
      name: "Alicia Lee",
      position: "Manager Director",
      pl: "M2",
      age: "52/7",
      tip: "6/7",
    });
  };

  const queryTeam = async () => {
    setTeam({
      id: "2",
      objective: "Team Objective",
      keyResult: [
        "1st Team key result",
        "2nd Team key result",
        "3nd Team key result",
      ],
      crossTeam: ["HR", "Security"],
      img:
        "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
      name: "Isabelle Cerys",
      position: "Manager",
      pl: "S4",
      age: "50/3",
      tip: "2/3",
    });
  };

  const queryManager = async () => {
    setManager([
      {
        id: "3",
        objective: "Manager Objective",
        keyResult: [
          "1st Manager key result",
          "2nd Manager key result",
          "3nd Manager key result",
        ],
        img:
          "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
        name: "Isabelle Cerys",
        position: "Manager",
        score: 0.75,
        pl: "O5",
        age: "35/7",
        tip: "6/7",
      },
      {
        id: "4",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208043/96119220-cute-boy-face-cartoon-vector-illustration-graphic-design.jpg",
        name: "Darren Ryan",
        position: "Asst. Manager",
        score: 0.67,
        pl: "O5",
        age: "35/7",
        tip: "6/7",
      },
      {
        id: "5",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://image.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg",
        name: "Xavier Musa",
        position: "Asst. Manager",
        score: 0.8,
        pl: "O5",
        age: "35/7",
        tip: "6/7",
      },
      {
        id: "6",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://previews.123rf.com/images/farhad73/farhad731807/farhad73180700006/104271850-man-cartoon-face-with-glasses-vector-illustration-.jpg",
        name: "Chris Otis",
        position: "Asst. Manager",
        score: 0.78,
        pl: "O5",
        age: "35/7",
        tip: "6/7",
      },
    ]);
  };

  const queryMember = async () => {
    setMember([
      {
        id: 1,
        image: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
        name: "David",
        score: 0.76,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeeJdW5xbhUyeG-UDCzSr_SrNKbds_L82XbXo_18zvOi_QEkbs&usqp=CAU",
        name: "Joseph",
        score: 0.86,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 3,
        image:
          "https://img.clipartlook.com/face-clip-art-faces-clipart-710_800.png",
        name: "William",
        score: 0.84,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx_0uLdwP-EgU6ksQQyEgWOVAzpL004KLUDNt11Yh7V-5BJTt-&usqp=CAU",
        name: "Matthew",
        score: 0.75,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHYF25OBKV7z8odPHgSpirRIoIs3gr6r231-HKwbrsWm8bBEBJ&usqp=CAU",
        name: "James",
        score: 0.86,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 6,
        image:
          "https://www.how-to-draw-funny-cartoons.com/image-files/how-to-draw-a-person-004.jpg",
        name: "Davis",
        score: 0.9,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 7,
        image:
          "https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170713437/82546151-cute-cartoon-senior-avatar-female-old-people-face-vector-illustration.jpg",
        name: "Wilson",
        score: 0.69,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
    ]);
  };

  const queryAllDepartment = async () => {
    setAllDepartment(["Security", "Procedure"]);
  };

  // Compare
  const queryOrganizationCompare = async (department) => {
    setOrganizationCompare({
      id: "1",
      objective: "Organization Objective",
      keyResult: [
        "1st Organization key result",
        "2nd Organization key result",
        "3nd Organization key result",
      ],
      img:
        "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208051/96119229-beautiful-girl-face-cartoon-vector-illustration-graphic-design.jpg",
      name: "Alicia Lee",
      position: "Director Manager",
    });
  };

  const queryTeamCompare = async (department) => {
    setTeamCompare({
      id: "21",
      objective: "Team Objective",
      keyResult: ["1st Team key result", "2nd Team key result"],
      crossTeam: ["Security"],
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
      name: "Maisy Chick",
      position: "Manager",
    });
  };

  const queryManagerCompare = async (department) => {
    setManagerCompare([
      {
        id: "22",
        objective: "Team Objective",
        keyResult: [
          "1st Manager key result",
          "2nd Manager key result",
          "3nd Manager key result",
        ],
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
        name: "Maisy Chick",
        position: "Manager",
        score: 0.89,
      },
      {
        id: "23",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
        ],
        img:
          "https://d23caqvf47xv7y.cloudfront.net/buyers_guide/glasses-for-your-face-shape/oval/illustration-new.png",
        name: "Libby  Hana",
        position: "Asst. Manager",
        score: 0.79,
      },
    ]);
  };

  useEffect(() => {
    queryOrganization();
    queryTeam();
    queryManager();
    queryMember();
    queryAllDepartment();
    setSuccessQuery(true);
  }, []);

  const handleChooseCompare = (e) => {
    setDepartmentToCompare(e.target.value);
    queryOrganizationCompare(e.target.value);
    queryTeamCompare(e.target.value);
    queryManagerCompare(e.target.value);
    setIsEditMode(false);
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      render: (rowData) => (
        <div>
          <img
            src={rowData.image}
            alt="img"
            style={{ width: 40, borderRadius: "50%" }}
          />
          &nbsp;&nbsp;{rowData.name}
        </div>
      ),
    },
    { title: "Objective", field: "objective" },
    {
      title: "Score",
      field: "score",
      render: (rowData) => (
        <BorderLinearProgress
          variant="determinate"
          color="secondary"
          value={rowData.score * 100}
        />
      ),
    },
    {
      title: "",
      field: "score",
      render: (rowData) => <div>{rowData.score * 100}%</div>,
    },
  ];

  const [isEdited, setIsEdited] = useState(false);
  const [refresh, setRefrest] = useState(true);

  var chartSource = successQuery && organization;
  if (successQuery && !isEdited) {
    var tmp = team;
    tmp["children"] = manager;
    chartSource["children"] = [];
    chartSource["children"].push(tmp);
    console.log("Hi");
  }

  var chartSourceCompare = departmentToCompare && organizationCompare;
  if (departmentToCompare) {
    var tmp = teamCompare;
    tmp["children"] = managerCompare;
    chartSourceCompare["children"] = [];
    chartSourceCompare["children"].push(tmp);
  }

  // Chart Manager
  const dsDigger = new JSONDigger(chartSource, "id", "children");
  const [isEditMode, setIsEditMode] = useState(false);

  // Chart Manager
  const getNewNode = () => {
    // query
    var node = {
      id: String(Math.random()),
      objective: "Objective",
      keyResult: ["1st key result", "2nd key result"],
      crossTeam: ["Security"],
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
      name: "Maisy Chick",
      position: "Employee",
    };

    return node;
  };

  const addChildNode = async () => {
    await dsDigger.addChildren(selectedNode.id, getNewNode());
    chartSource = dsDigger.ds;
    setIsEdited(true);
    setRefrest(!refresh);
  };

  const remove = async () => {
    await dsDigger.removeNodes(selectedNode.id);
    chartSource = dsDigger.ds;
    setIsEdited(true);
    setRefrest(!refresh);
  };

  return (
    successQuery && (
      <div className="BigLeftPaper">
        <div className="row justify-content-center px-5 pb-4">
          <div
            className={
              ("px-0 text-center",
              departmentToCompare ? "col-6 pl-5 pr-1" : "col-12 px-md-5")
            }
          >
            <OrganizationChart
              datasource={chartSource}
              chartClass="orgChart"
              collapsible={false}
              NodeTemplate={MyNode}
              onClickNode={
                !isEditMode
                  ? (nodeData) => {
                      setSelectedNode([nodeData, "#FFF2E6"]);
                      setOpen(true);
                    }
                  : (nodeData) => {
                      setSelectedNode(nodeData);
                    }
              }
              pan={true}
            />
          </div>

          {departmentToCompare && (
            <div className="col-6 px-0 pr-5 text-center">
              <OrganizationChart
                datasource={chartSourceCompare}
                chartClass="orgChart"
                collapsible={false}
                NodeTemplate={(nodeData) => (
                  <MyNode nodeData={nodeData.nodeData} color="#E6FFF8" />
                )}
                onClickNode={
                  !isEditMode
                    ? (nodeData) => {
                        setSelectedNode([nodeData, "#E6FFF8"]);
                        setOpen(true);
                      }
                    : null
                }
                pan={true}
              />
            </div>
          )}

          <ShowDetail data={selectedNode} open={open} setOpen={setOpen} />
        </div>
      </div>
    )
  );
};
//inside info-----end

export default Dashboard;
