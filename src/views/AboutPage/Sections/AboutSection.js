import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Dania University College</h2>
          <h5 className={classes.description}>
          Dania University College (DUC) (Bengali: দনিয়া বিশ্ববিদ্যালয় কলেজ) is one of the oldest colleges in Bangladesh. 
          It is located at Jatrabari, Dhaka.
          It offers graduation course in majors and Higher Secondary (School) Certificate (HSC) under Dhaka Board. 
          The college is affiliated with the National University.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mission"
              description="Our mission is to make the students use IT in the best possible manner and also be updated with the latest trends in IT by conducting regular events and programs."
              icon={GolfCourseIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Vision"
              description="To promote and encourage the student community in technical skill development and to make use of it in their development by safe use of technology."
              icon={RemoveRedEyeIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Objectives"
              description="Acquisition of knowledge through various workshops, seminars, presentations, competitions and gaming sessions.
              Safe surfing on the internet."
              icon={TrackChangesIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
