import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const defaultProps = {
  tag: 'div',
  iconColor: '',
  bgColor: '',
};

const LteInfoBox = ({ tag: Tag, icon, text, number, iconColor, bgColor }) => {
  const bgClass = bgColor === '' ? undefined : `bg-${bgColor}`;
  const boxClasses = classNames('info-box', bgClass);

  const iconClass = iconColor === '' ? undefined : `elevation-1 bg-${iconColor}`;
  const iconClasses = classNames('info-box-icon', iconClass);

  return (
    <Tag className={boxClasses}>
      <span className={iconClasses}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className='info-box-content'>
        <span className='info-box-text'>{text}</span>
        <span className='info-box-number'>{number}</span>
      </div>
    </Tag>
  );
};

LteInfoBox.defaultProps = defaultProps;

export default LteInfoBox;
