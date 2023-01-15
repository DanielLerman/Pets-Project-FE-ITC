import React, { useState, useContext } from "react";

import petsAdoptingContext from "../context/context";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const PetFormPhoto = () => {
  const { setPetProfileInfo, petProfileInfo } = useContext(petsAdoptingContext);
  const [file, setFile] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      setFile(
        acceptedFile.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
      // setPetProfileInfo({...petProfileInfo , image:file})
      console.log(acceptedFile);
    },
  });

  const images = file.map((file) => (
    // console.log(file.preview),
    // setPetProfileInfo({...petProfileInfo , image:file.preview}),
    <img
      key={file.name}
      src={file.preview}
      alt="img"
      style={{ width: "200px", height: "200px" }}
    />
  ));
  return (
    <>
      <div className="form-photo-box">
        <div className="drop-area" {...getRootProps()}>
          <input {...getInputProps()} />
          <span className="d-flex flex-column align-items-center p-3 ">
            {file.length > 0 ? (
              images
            ) : (
              <FontAwesomeIcon
                style={{ width: "30px", height: "30px" }}
                className="rounded-circle camera-icon my-3"
                icon={faCameraRetro}
              />
            )}
            Drag and Drop File or Click here to upload
          </span>
        </div>
      </div>
      {/* <div>{images}</div> */}
    </>
  );
};

export default PetFormPhoto;
