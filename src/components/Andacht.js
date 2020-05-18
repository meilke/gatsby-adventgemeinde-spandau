import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
      display: "block",
    },
    below: {},
    iframe: {
      position: "absolute",
      top: "0px",
      right: "0px",
      left: "0px",
      width: "200px",
      height: "200px",
      border: "none",
    },
  })
)

export default function Andacht() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.below}>
        <iframe
          title="andacht"
          src="https://www.stimme-der-hoffnung.de/podcast/iframe/pc///aHR0cDovL2xvY2FsaG9zdDo4MDAw/"
          className={classes.iframe}
        ></iframe>
      </div>
    </div>
  )
}
