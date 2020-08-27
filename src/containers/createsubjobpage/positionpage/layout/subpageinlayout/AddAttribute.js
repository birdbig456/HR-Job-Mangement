import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as CreateAction from "../../../../../actions/CreateJob.action";

const useStyles = makeStyles((theme) => ({
  namePosition: {
    marginTop: 9,
    fontSize: 16,
  },
}));
export default function AddAttribute() {
  const classes = useStyles();
    const dispatch = useDispatch()
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(true);
  };

  const handleHide = () => {
    setIsShow(false);
  };

  const [newAttribute, setNewAttribute] = useState({
    Attribute: "",
    Description: "",
  });

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    touched,
    errors,
    handleBlur,
    handleReset,
  }) => {
    return (
        
        <Grid container>
        {isShow === false && (
          <Grid
            item
            xs={12}
            sm={12}
            style={{ textAlign: "right", fontSize: 14, marginRight: 5 }}
          >
            <div
              style={{ marginTop: 20, color: "#5CBF4C" }}
              onClick={() => {
                handleShow();
              }}
            >
              <h4>
                <u>Add Attribute</u>
              </h4>
            </div>
          </Grid>
        )}
        {isShow === true && (
          <div>
            
          <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <TextField required
                label="Attribute Name :"
                fullWidth
                id="Attribute"
                name="Attribute"
                value={values.Attribute}
                onChange={handleChange}
                onBlur={handleBlur} />
            </Grid>
            <Grid item  sm={1}></Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                required
                label="Enter Description"
                fullWidth
                id="Description"
                name="Description"
                value={values.Description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={12} style={{ textAlign: "right" }}>
              <Button
              type="submit"
              color="primary"
              variant="contained"
              size="small"
              style={{margin:7}}
              >
                Save
              </Button>
            </Grid>
          </Grid>
          </form>
          </div>
        )}
      </Grid>
    );
};

  return (
    <div>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          dispatch(CreateAction.CreateAttribute(values));
          handleHide();
        }}
        initialValues={newAttribute}
      >
        {(props) => showForm(props)}
      </Formik>
    </div>
  );
}
