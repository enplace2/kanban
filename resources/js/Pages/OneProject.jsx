import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "@inertiajs/inertia-react";
import ProjectModal from "@/Components/Projects/ProjectModal";
import SprintModal from "@/Components/Sprints/SprintModal";
import Typography from "@mui/material/Typography";

import { useForm, Head } from "@inertiajs/inertia-react";
export default function OneProject(props) {
  console.log(props);
  return (
    <Container>
      <Typography variant="h4">{props.project.title}</Typography>
      <SprintModal></SprintModal>
      {props.sprints[0]
        ? props.sprints.map((sprint) => {
            return (
              <Card sx={{}} key={sprint.id}>
                <CardActionArea
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <FolderIcon fontSize="large"></FolderIcon>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {sprint.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      Start Date: {sprint.start_date}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      End Date: {sprint.end_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        : null}
    </Container>
  );
}
