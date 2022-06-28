import * as React from "react";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AddCompany from "./nestedComponents/Company/AddCompany";

const AdminCompany = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h5">Company Profile Customaization</Typography>
      <Typography variant="h6" className="py-4">
        Add edit Company Profile and Team
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Company Profile" value="1" />
              <Tab label="About Us" value="2" />
              <Tab label="History" value="3" />
              <Tab label="Teams" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1"><AddCompany/></TabPanel>
          <TabPanel value="2">About Us</TabPanel>
          <TabPanel value="3">History</TabPanel>
          <TabPanel value="4">Teams</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
export default AdminCompany;
