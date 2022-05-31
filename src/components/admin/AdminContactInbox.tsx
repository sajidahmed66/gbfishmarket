import { useState, useEffect } from "react";
import { allContactData } from "../../api/apiContactUs";
import { userInfo } from "../../utils/auth";
import { Container, Box, Typography, Paper, Divider } from "@mui/material";

type IContactData = {
  id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
  created_at: string;
  updated_at: string;
};
const AdminContactInbox = () => {
  const [contactData, setContactData] = useState<IContactData[]>([]);
  const token: string = userInfo().token;
  useEffect(() => {
    allContactData(token)
      .then((res) => {
        console.log(res.data);
        setContactData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={4} className="p-4 ">
        <Typography variant="h4" component="h1" gutterBottom>
          Contacts
        </Typography>
        <Divider />
        <Box className="p-4">
          {contactData.map((contact) => (
            <Paper
              key={contact.id}
              className="flex flex-row items-center justify-around p-4 my-2 "
            >
              <Typography variant="h6" component="h2">
                {contact.name}
              </Typography>
              <Typography variant="body1" component="p">
                {contact.message}
              </Typography>
              <Typography variant="body1" component="p">
                {contact.email}
              </Typography>
              <Typography variant="body1" component="p">
                {contact.phone}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminContactInbox;
