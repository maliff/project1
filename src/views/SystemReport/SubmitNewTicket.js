import React, { useEffect, useRef, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import axios from "axios";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileExcel } from "@fortawesome/free-solid-svg-icons";

function SubmitNewTicket() {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function getFileIcon(file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (fileExtension === "xlsx" || fileExtension === "xls") {
      return faFileExcel;
    }
    return faFile;
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
      <LteContentHeader title="Submit New Ticket" />
      <LteContent>
        <div className="card">
          <div class="card-header">
            <h4>
              <b>Submit New Ticket</b>
            </h4>
            <small className="form-text text-muted">
              Please fill in details <span className="text-danger">*</span>
            </small>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div className="form-group">
                        <label htmlFor="title">
                          Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          aria-describedby="title"
                          placeholder="Type..."
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          class="form-control"
                          id="description"
                          placeholder="Type..."
                          rows="6"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-12 col-lg-4 order-1 order-md-2 bg-light"
                style={{ borderRadius: "20px" }}
              >
                <h3 className="text-primary">Requester's Details</h3>
                <div className="text-muted">
                  <p className="text-sm">
                    REQUESTER
                    <b className="d-block">Julian Cassablancas</b>
                  </p>
                  <p className="text-sm">
                    EMAIL
                    <b className="d-block">julianassablancas@tnb.com</b>
                  </p>
                  <p className="text-sm">
                    DATE CREATED
                    <b className="d-block">12 Dec 2023 09:30</b>
                  </p>
                  <p className="text-sm">
                    DIVISION
                    <b className="d-block">Power Supply</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white col-lg-8">
            <form className="form-horizontal">
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Upload File <span className="text-danger">*</span>
                </label>
                <div className="card-zone" style={{ padding: "0px" }}>
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
            </form>
          </div>
          <div class="text-center p-1 mt-3 mb-3 d-flex justify-content-end">
            <div className="btn btn-outline-primary mr-2">Cancel</div>
            <div className="btn btn-primary">Submit</div>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default SubmitNewTicket;
