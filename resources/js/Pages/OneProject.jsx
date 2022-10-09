import { Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
export default function OneProject(props) {
  console.log(props);
  return (
    <Container>
      <Typography variant="h4">{props.project.title}</Typography>
    </Container>
  );
}
