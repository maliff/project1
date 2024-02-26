import React from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const EbtUploadFile = () => {
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
              <div className="card-body">
                <Form>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input id="exampleFile" name="file" type="file" />
                    <FormText>
                      This is some placeholder block-level help text for the
                      above input. It‘s a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </FormGroup>
                </Form>
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
