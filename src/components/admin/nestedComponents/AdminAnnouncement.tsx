import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Outlet, useNavigate } from "react-router-dom";

export interface IAnnouncement {
  id: number;
  title: string;
  short_description: string;
  image_name: string;
  image_link: string;
  show_on_home: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const AdminAnnouncement = () => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};

export default AdminAnnouncement;
