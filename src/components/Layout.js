import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Link from "../components/Link"
import back from "./back.crop.jpg"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    paper: {
      backgroundImage: `url(${back})`,
      padding: theme.spacing(8),
      fontSize: 20,
      textAlign: "center",
      height: 300,
      backgroundSize: "cover",
      square: true,
      color: "#fff",
    },
    heading1: {
      fontSize: "36px",
    },
    heading2: {
      fontSize: "20px",
    },
    list: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
    },
  })
)

export default function Layout({ children }) {
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Typography className={classes.heading1}>
          {data.site.siteMetadata.title}
        </Typography>
        <Typography className={classes.heading2}>
          Herzlich willkommen auf unserer Homepage
        </Typography>
      </Paper>
      <List className={classes.list}>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
      {children}
    </Container>
  )
}
