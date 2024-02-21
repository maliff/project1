import React from 'react';
import {
  faArrowUp,
  faBars,
  faChartPie,
  faCloudDownloadAlt,
  faCog,
  faComments,
  faDownload,
  faMinus,
  faRedo,
  faShoppingBasket,
  faShoppingCart,
  faTag,
  faThumbsUp,
  faTimes,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
} from 'reactstrap';
import LteContent from '../../components/LteContent';
import LteContentHeader from '../../components/LteContentHeader';

const CreateNewDataProvider = () => {
  return (
    <>
    <LteContentHeader title='Create New Data Provider' />
    <LteContent>
    <div className="card card-default">
    <div className="card-header">
        <h3 className="card-title">bs-stepper</h3>
    </div>
    <div className="card-body p-0">
        <div className="bs-stepper">
        <div className="bs-stepper-header" role="tablist">
            {/* your steps here */}
            <div className="step" data-target="#logins-part">
            <button type="button" className="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Logins</span>
            </button>
            </div>
            <div className="line" />
            <div className="step" data-target="#information-part">
            <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Various information</span>
            </button>
            </div>
        </div>
        <div className="bs-stepper-content">
            {/* your steps content here */}
            <div id="logins-part" className="content" role="tabpanel" aria-labelledby="logins-part-trigger">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button className="btn btn-primary" onclick="stepper.next()">Next</button>
            </div>
            <div id="information-part" className="content" role="tabpanel" aria-labelledby="information-part-trigger">
            <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="exampleInputFile" />
                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                </div>
                <div className="input-group-append">
                    <span className="input-group-text">Upload</span>
                </div>
                </div>
            </div>
            <button className="btn btn-primary" onclick="stepper.previous()">Previous</button>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
        </div>
    </div>
    {/* /.card-body */}
        <div className="card-footer">
            Visit <a href="https://github.com/Johann-S/bs-stepper/#how-to-use-it">bs-stepper documentation</a> for more examples and information about the plugin.
        </div>
    </div>

    </LteContent>
  </>
  )
}

export default CreateNewDataProvider