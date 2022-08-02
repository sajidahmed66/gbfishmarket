import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { IAnnouncement } from "../AdminAnnouncement";
import { useNavigate } from "react-router-dom";
import AnnouncementCard from "../../components/AnnouncementCard";
import {
  deleteAnnouncementsById,
  getAnnouncements,
} from "../../../../api/apiAdminDashboard";
import { userInfo } from "../../../../utils/auth";
import { CircularProgress } from "@mui/material";

const AllAnncouncements = () => {
  const navigation = useNavigate();
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [reload, setReload] = useState({});

  const handeleDeleteAnnouncement = (id: number) => {
    const token: string = userInfo().token;
    deleteAnnouncementsById(id, token)
      .then((res) => res.data)
      .then((data) => {
        console.log("delete announcement", data);
        setReload({});
      })
      .catch((err) => {
        console.log("handledelete", err); // genarate error to see what happens
      });
  };

  useEffect(() => {
    getAnnouncements()
      .then((res) => res.data)
      .then((data) => {
        setAnnouncements(data.announcements);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoadingData(false);
      setAnnouncements([]);
    };
  }, [reload]);

  return (
    <Container>
      <div className="bg-slate-50">
        <div className="flex flex-col items-start justify-between w-full p-4 my-4 h-36 ">
          <Typography variant="h5">Create a new announcement Card </Typography>
          <button
            className="w-48 btn btn-outline-primary ring-transparent"
            onClick={() => navigation("/admin/announcement/add-announcement")}
          >
            Create
          </button>
        </div>
      </div>
      <Divider />
      <div className="w-full mt-4">
        {!loadingData ? (
          <Grid container spacing={2}>
            {announcements.map((item) => (
              <AnnouncementCard
                key={item.id}
                item={item}
                deleteAnnouncement={(id: number) =>
                  handeleDeleteAnnouncement(id)
                }
              />
            ))}
          </Grid>
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-8">
            <CircularProgress />
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllAnncouncements;
