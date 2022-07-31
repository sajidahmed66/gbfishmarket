import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { IAnnouncement } from "../nestedComponents/AdminAnnouncement";
import { BASE_URL } from "../../../utils/config";
import { useNavigate } from "react-router-dom";

interface IAnnCardProp {
  item: IAnnouncement;
  deleteAnnouncement(id: number): void;
}

const AnnouncementCard = ({ item, deleteAnnouncement }: IAnnCardProp) => {
  const navigation = useNavigate();
  const [announcements, setAnnouncements] = useState<IAnnouncement>(item);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFeatured = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("from announcement Card");
  };
  return (
    <Grid key={announcements.id} item xs={12} md={6} lg={4}>
      <Paper>
        <div className="card">
          <div className="card-header">{announcements.title}</div>
          <div className="card-body">
            <img
              src={`${announcements.image_link}`}
              alt=""
              className="w-full h-48"
            />
            {announcements.short_description}
          </div>
          <div className="items-center justify-around card-footer">
            <button
              className="btn btn-link btn-sm"
              onClick={() => {
                //   navigation(`details/${announcements.id}`);
              }}
            >
              View details
            </button>
            <button
              className="btn btn-light-primary btn-sm"
              onClick={() => {
                //   navigation(`edit/${announcements.id}`);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-link btn-outline-danger btn-sm"
              onClick={() => {
                deleteAnnouncement(announcements.id);
              }}
            >
              Delete
            </button>
            <label className="flex flex-row items-center justify-between">
              <span className="ml-2 mr-2">Featured</span>
              <input
                type="checkbox"
                checked={announcements.show_on_home}
                className="border-indigo-500 form-checkbox "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(item.id, e.target.checked);
                  //   setProduct({ ...product, show_on_home: e.target.checked });
                  //   // console.log(product);
                  //   handleFeatured(e);
                }}
              />
            </label>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default AnnouncementCard;
