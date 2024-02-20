import React from 'react';
import classNames from 'classnames';


const defaultProps = {
  color: '',
  tag: 'p',
  className: '',
  size: '',
  children: null,
};

const LteText = (props) => {
  const { tag: Tag, color, className, children, size } = props;

  const textColor = color === '' ? undefined : `text-${color}`;
  const sizeClass = size === '' ? undefined : `text-${size}`;
  const classes = classNames(className, textColor, sizeClass);

  return <Tag className={classes}>{children}</Tag>;
};

LteText.defaultProps = defaultProps;

export default LteText;