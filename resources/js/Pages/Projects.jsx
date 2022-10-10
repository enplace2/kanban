import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "@inertiajs/inertia-react";
import ProjectModal from "@/Components/Projects/ProjectModal";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Projects(props) {
  console.log(props);
  const { post, setData } = useForm({
    title: "",
  });
  return (
    <>
      <AuthenticatedLayout auth={props.auth} errors={props.errors}>
        <Container>
          <ProjectModal></ProjectModal>
          {props.projects[0]
            ? props.projects.map((project) => {
                return (
                  <Card sx={{}} key={project.id}>
                    <Link href={`projects/${project.id}`}>
                      <CardActionArea
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <FolderIcon></FolderIcon>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                );
              })
            : null}
        </Container>
      </AuthenticatedLayout>
    </>
  );
}
