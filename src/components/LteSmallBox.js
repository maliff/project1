import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const defaultProps = {
  tag: 'div',
  color: '',
};

const LteSmallBox = ({ tag: Tag, color, title, message, icon, href }) => {
  const bgColor = color === '' ? undefined : `bg-${color}`;
  const classes = classNames('small-box', bgColor);
  return (
    <Tag className={classes}>
      <div className='inner'>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} className='fa-5x' style={{ position: 'absolute', right: '15px', top: '20px' }} />
      </div>
      <Link className='small-box-footer' to={href}>
        <span>More Info </span>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Link>
    </Tag>
  );
};

LteSmallBox.defaultProps = defaultProps;

export default LteSmallBox;
