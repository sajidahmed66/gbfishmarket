import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileUpload, { FileUploadProps } from "../components/FileUpload";
import axios from "axios";
import { API_URL } from "../../../utils/config";
import { getLogo, addLogo, updateLogo } from "../../../api/apiAdminDashboard";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

const LogoChange = () => {
  const classes = useStyles();
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);
  console.log(logoUrl);
  useEffect((): void => {
    getLogo()
      .then((res) => res.data)
      .then((data) => {
        console.log(data.data);
        setLogoUrl(data.data.file_link);
      })
      .catch((err) => console.log(err.data.message));
  }, []);

  let file: File | null;
  const fileUploadProp: FileUploadProps = {
    accept: "image/*",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files !== null && event.target?.files?.length > 0) {
        // console.log(`Saving ${event.target.value}`);
        file = event.target.files[0];
        setIsButtonDisable(false);
      }
    },
    onDrop: (event: React.DragEvent<HTMLElement>) => {
      // console.log(`Drop ${event.dataTransfer.files[0].name}`);
      // console.log(event.dataTransfer.files);
      file = event.dataTransfer.files[0];
      setIsButtonDisable(false);
    },
  };

  const handleSubmit = async (file: File | null) => {
    const fileData = new FormData();

    if (file !== null) {
      fileData.append("file", file, file.name);
      fileData.append("name", file.name);
    }

    const res = await axios.post(`${API_URL}/admin/home/logo`, fileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // height: "50px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          marginY: "20px",
          marginX: "20px",
          // border: "1px solid #ccc",
        }}
      >
        <Typography variant="h5" className="py-4 skModernistBold">
          Change Your Logo here{" "}
        </Typography>
        <Typography variant="body1" className="py-4 skModernistRegular">
          Drag and drop your logo here or click to upload
        </Typography>
      </Box>
      <FileUpload
        {...fileUploadProp}
        imageButton
        image={{ url: `http://localhost:5000/${logoUrl}` }}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          // alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          disabled={isButtonDisable}
          onClick={() => handleSubmit(file)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default LogoChange;
