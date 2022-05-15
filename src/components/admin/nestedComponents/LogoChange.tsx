import { API_URL } from "../../../utils/config";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import FileUpload, { FileUploadProps } from "../components/FileUpload";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LogoChange = () => {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "50px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          marginY: "20px",
          marginX: "20px",
          // border: "1px solid #ccc",
        }}
      >
        <Typography variant="h5" className="skModernistBold">
          Change Your Logo here{" "}
        </Typography>
      </Box>
      <FileUpload {...fileUploadProp} imageButton />
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
