import { faChartBar, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
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
import React from 'react';
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
import LteContent from '../components/LteContent';
import LteInfoBox from '../components/LteInfoBox';
import LteContentHeader from '../components/LteContentHeader';

export default function Dashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <Row>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faCog} text='CPU Traffic' number='10%' iconColor='info' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faThumbsUp} text='Likes' number='41,410' iconColor='danger' />
          </Col>
          <div className='clearfix hidden-md-up' />
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faShoppingCart} text='Sales' number='760' iconColor='success' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faUsers} text='New Members' number='2,000' iconColor='warning' />
          </Col>
        </Row>
      </LteContent>
    </>
  )
};