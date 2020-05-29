/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const linklist = [
  {
    name: 'Home',
    url: '/',
},
{
  name: 'About',
  url: '/about',
},
]

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {
        linklist.map(links =>(
        <ListItem className={classes.listItem}>
                <Link
                  to={links.url}
                  color="transparent"
                  // target="_blank"
                  className={classes.navLink}
                >
                  {links.name}
                </Link>
              </ListItem>
        ))
      }

<ListItem className={classes.listItem}>
                <a
                  href="http://member.ducitc.team"
                  color="transparent"
                  // target="_blank"
                  className={classes.navLink}
                >
                  Member
                </a>
              </ListItem>
      
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/itcduc"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
