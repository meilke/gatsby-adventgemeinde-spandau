import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Link from "../components/Link"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    paper: {
      backgroundImage: "url(/back.jpg)",
      padding: theme.spacing(8),
      fontSize: 20,
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: 300,
      backgroundSize: "cover",
      square: true,
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
    <Container maxWidth="md">
      <Paper className={classes.paper}>{data.site.siteMetadata.title}</Paper>
      <List className={classes.list}>
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
      {children}
    </Container>
  )
}
