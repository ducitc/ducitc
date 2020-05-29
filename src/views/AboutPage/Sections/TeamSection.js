import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const executives = [
  {
    name: 'Samir Hossain (Sir)',
    avatar: '/assets/img/faces/p1.jpg',
    role: 'Moderator',
    bio: '',
    socials: {
      fb: '',
      ig: '',
      tw: '',
    }
  },
  {
    name: 'Minhaj Siam',
    avatar: '/assets/img/faces/Siam.png',
    role: 'President',
    bio: '',
    socials: {
      fb: 'minhaj.siam.7',
      ig: '',
      tw: '',
    }
  },
  {
    name: 'Ashiq  Iqbal Rashed',
    avatar: '/assets/img/faces/Rashed.png',
    role: 'Vice President',
    bio: '',
    socials: {
      fb: 'db.rashed',
      ig: '',
      tw: '',
    }
  },
  {
    name: 'Mehedi Hasan',
    avatar: '/assets/img/faces/mehedi.png',
    role: 'General Secretary',
    bio: '',
    socials: {
      fb: 'mhimranhossain97',
      ig: 'mhimranhossain97',
      tw: 'ElPro_MH',
    }
  },
  {
    name: 'Mohammad Masum',
    avatar: '/assets/img/faces/Masum.png',
    role: 'Event Mangement Executive',
    bio: '',
    socials: {
      fb: '',
      ig: '',
      tw: '',
    }
  },
  {
    name: 'Md. Abdur Rahim Sarkar',
    avatar: '/assets/img/faces/abdur.png',
    role: 'Software Development Executive',
    bio: 'I am a 12th class student and tech enthusiast',
    socials: {
      fb: 'abdurrahim.official',
      ig: 'abdurrahimlive',
      tw: 'abdurrahimlive',
    }
  },
  {
    name: 'Nurul Huda',
    avatar: '/assets/img/faces/p3.jpg',
    role: 'Web Development Executive',
    bio: 'I am a 12th class student and tech enthusiast',
    socials: {
      fb: 'nurulhudaapon',
      ig: 'nurulhudaapon',
      tw: 'nurulhudaapon',
    }
  },
  {
    name: 'Azizul Abedin Azmi',
    avatar: '/assets/img/faces/azizul.png',
    role: 'Cyber Secuurity Executive',
    bio: 'I am a 12th class student and tech enthusiast',
    socials: {
      fb: '',
      ig: '',
      tw: '',
    }
  },
]


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Executive Panel</h2>
      <div>
        <GridContainer>
          {
            executives.map(executive => (

              <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={executive.avatar} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                {executive.name}
                <br />
                <small className={classes.smallTitle}>{executive.role}</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  {executive.bio}
                </p>
              </CardBody>
              { <CardFooter className={classes.justifyCenter}>
                {executive.socials.tw && <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a href={"https://twitter.com/"+executive.socials.tw}><i className={classes.socials + " fab fa-twitter"} /> </a>
                </Button>}
                {executive.socials.ig && <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a href={"https://instagram.com/"+executive.socials.ig}><i className={classes.socials + " fab fa-instagram"} /> </a>
                </Button>}
                {executive.socials.fb && <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a href={"https://facebook.com/"+executive.socials.fb}><i className={classes.socials + " fab fa-facebook"} /> </a>
                </Button>}
              </CardFooter> }
            </Card>
          </GridItem>

          ))}

        </GridContainer>
      </div>
    </div>
  );
}
