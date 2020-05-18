import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

function Text({ children }) {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      component="div"
      align="center"
    >
      <Box mb={1} variant="div">
        {children}
      </Box>
    </Typography>
  )
}

export default function MainCard() {
  return (
    <Card>
      <CardContent>
        <Text>
          Sie interessieren sich für Glauben und Leben in der heutigen Zeit?
        </Text>
        <Text>
          Sie sehnen sich danach, Ihren Glauben Tag für Tag aktiv zu leben?
        </Text>
        <Text>
          Sie suchen Gleichgesinnter, mit denen Sie Erfahrungen und Erkenntnisse
          austauschen können?
        </Text>
        <Text>
          Dann hoffen wir, Ihnen mit diesen Seiten weiterhelfen zu können.
        </Text>
        <Text>
          Sie finden hier vielfältige Informationen und Anregungen, wie
          christliches Leven heute Wirklichkeit sein kann - eine Brücke ins
          Leben!
        </Text>
      </CardContent>
    </Card>
  )
}
