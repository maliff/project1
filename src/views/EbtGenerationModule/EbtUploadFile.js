import React, { useState, useRef } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../App.css";

const EbtUploadFile = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;

    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      // Check if the file type is not an image
      if (files[i].type.split("/")[0] === "image") continue;

      // Add the file to the images state
      setImages((prevImages) => [
        ...prevImages,
        {
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        },
      ]);
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function getFileIcon(file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (fileExtension === "xlsx" || fileExtension === "xls") {
      return faFileExcel;
    }
    return faFile;
  }

  function handleDragEnter(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;

    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] === "image") continue;

      setImages((prevImages) => [
        ...prevImages,
        {
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        },
      ]);
    }
  }

  return (
    <>
      <LteContentHeader title="Upload File" />
      <LteContent>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card card-default">
              <div className="card-header">
                <div>
                  <h2
                    className="card-title"
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                  >
                    Energy Balance List
                  </h2>
                  <div className="main-search">
                    <div>
                      <label className=" mr-2" htmlFor="year">
                        Year{" "}
                      </label>
                      <select id="year">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>

                    <div>
                      <label className=" mr-2" htmlFor="year">
                        Quarter{" "}
                      </label>
                      <select id="Quarter">
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>
                  The EBT Final will be made after all four quarters' forms are
                  uploaded*
                </h6>
              </div>
              {/* /.card-header */}

              {/* Upload File*/}

              <div className="card card-zone">
                <div
                  className="drag-area"
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {isDragging ? (
                    <span className="select"> Drop File Here</span>
                  ) : (
                    <>
                      Drag & Drop File here or {""}
                      <span
                        className="btn btn-primary"
                        role="button"
                        onClick={selectFiles}
                        style={{ height: "40px", marginLeft: "10px" }}
                      >
                        Browse
                      </span>
                    </>
                  )}

                  <input
                    name="file"
                    type="file"
                    className="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileSelect}
                  ></input>
                </div>
                <div className="container">
                  <div className="dragged-files">
                    {images.map((image, index) => (
                      <div
                        className="image"
                        key={index}
                        style={{
                          width: "100%",
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          className="delete"
                          onClick={() => deleteImage(index)}
                        >
                          &times;
                        </span>
                        <FontAwesomeIcon
                          icon={getFileIcon(image)}
                          className="file-icon"
                        />
                        <p style={{ marginLeft: "5px" }}>{image.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3 mb-3">
              <Button color="link" className="mr-2">
                Cancel
              </Button>
              <Button color="primary">Save</Button>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
      </LteContent>
    </>
  );
};

export default EbtUploadFile;
