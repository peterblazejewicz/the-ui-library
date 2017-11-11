import React, { SFC, MouseEvent } from 'react';

export interface WrappedButtonProps {
  color?: string;
  width?: number;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  ignoredProp?: boolean;
  size?: 'small' | 'normal' | 'large';
  label?: string;
}
const sizes = {
  small: '10px',
  normal: '14px',
  large: '16px',
};

const WrappedButton: SFC<WrappedButtonProps> = ({ color, size, label }) => {
  const styles = {
    color,
    fontSize: sizes[size!],
  };
  return (
    <button className="btn btn-primary" style={styles}>
      {label}
    </button>
  );
};

WrappedButton.defaultProps = {
  color: '#333',
  size: 'normal',
};

export default WrappedButton;
