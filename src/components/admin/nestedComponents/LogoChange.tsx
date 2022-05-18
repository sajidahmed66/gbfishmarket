import React, { useState, useEffect } from "react";
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

export interface ILogoData {
  id: number;
  file_link: string;
  file_name: string;
}

const LogoChange = () => {
  const classes = useStyles();
  const [logoData, setLogoData] = useState<ILogoData>();
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect((): void => {
    getLogo()
      .then((res) => res.data)
      .then((data) => {
        setLogoUrl(`http://localhost:5000/${data.data.file_link}`);
        setLogoData(data.data);
      })
      .catch((err) => console.log(err.data.message));
  }, []);

  const fileUploadProp: FileUploadProps = {
    accept: "image/*",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files !== null && event.target?.files?.length > 0) {
        console.log(event.target.files[0]);
        // console.log(`Saving ${event.target.value}`);
        setFile(event.target.files[0]);
        console.log(file);
        setIsButtonDisable(false);
      }
    },
    onDrop: (event: React.DragEvent<HTMLElement>) => {
      // console.log(`Drop ${event.dataTransfer.files[0].name}`);
      // console.log(event.dataTransfer.files);
      // file = event.dataTransfer.files[0];
      setFile(event.dataTransfer.files[0]);

      setIsButtonDisable(false);
    },
  };

  const handleSubmit = async (file: File | null) => {
    const fileData = new FormData();
    // console.log(file);
    // console.log(logoData);
    if (file !== null) {
      console.log("ifblock", file);
      fileData.append("file", file, file.name);
      fileData.append("name", file.name);
    }

    // const res = await axios.post(`${API_URL}/admin/home/logo`, fileData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    if (logoData) {
      setIsLoading(true);
      console.log(fileData);
      updateLogo(fileData, logoData.id)
        .then((res) => res.data)
        .then((data) => {
          setSuccessMessage(data.message);
          setIsButtonDisable(true);
          setIsLoading(false);
          setLogoData(data.result);
          console.log(data.result);
          console.log(data.message);
        })
        .catch((err) => {
          setErrorMessage(err.data.message);
          setIsButtonDisable(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      addLogo(fileData)
        .then((res) => res.data)
        .then((data) => {
          setSuccessMessage(data.message);
          setIsButtonDisable(true);
          setIsLoading(false);
          // setLogoData(data.result);
          console.log(data.result);
        })
        .catch((err) => {
          console.log(err.data.message);
          setErrorMessage(err.data.message);
          setIsButtonDisable(true);
          setIsLoading(false);
        });
    }
  };

  // console.log(logoUrl);

  const renderFileUploadComponent = () => {
    if (logoData !== undefined) {
      return (
        <FileUpload {...fileUploadProp} imageButton image={{ url: logoUrl }} />
      );
    } else {
      return <FileUpload {...fileUploadProp} imageButton />;
    }
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

      {renderFileUploadComponent()}
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
      {/* <img
        src={`http://localhost:5000/${logoUrl}`}
        alt="current-logo"
        width="600px"
        height="100px"
      /> */}
    </Box>
  );
};

export default LogoChange;
