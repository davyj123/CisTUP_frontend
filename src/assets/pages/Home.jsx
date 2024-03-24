import axios from "axios";
import {
  Files,
  MainContainer,
  Page,
  UploadBtn,
  UploadContainer,
  UploadStatus,
  UploadWrapper,
} from "../components/Elements";
import { useState } from "react";
import Nav from "../components/Nav";

function Home() {

  const [file, setFile] = useState()
  const [status,SetStatus] = useState("Select files to upload.")

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    SetStatus("Uploading ...")
    const url = 'http://127.0.0.2:5000/api/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    
    axios.post(url, formData, config).then((response) => {
      console.log(response.data)
      SetStatus("Select files to upload")
    });

  }
  return (
    <Page>
      <Nav></Nav>
      <MainContainer>
        <UploadWrapper >
          <UploadContainer onSubmit={handleSubmit}>
            <Files
              type="file"
              onChange={handleChange}
            ></Files>
            <UploadBtn type="submit">Upload Files</UploadBtn>
            <UploadStatus>{status}</UploadStatus>
          </UploadContainer>
        </UploadWrapper>
      </MainContainer>
    </Page>
  );
}

export default Home;
