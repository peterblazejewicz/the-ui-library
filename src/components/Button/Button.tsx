import React, { SFC, MouseEvent } from 'react';

const sizes: { [id: string]: string } = {
  small: '10px',
  normal: '14px',
  large: '18px',
};

/**
 * Button properties.
 */
export interface ButtonProps {
  /**
   * Button label
   * @type {string}
   * @memberof ButtonProps
   */
  color?: string;
  /**
   * The color for the button
   * @type {('small' | 'normal' | 'large')}
   * @memberof ButtonProps
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Disable button
   * @type {boolean}
   * @memberof ButtonProps
   */
  disabled?: boolean;
  /**
   * Gets called when the user clicks on the button
   * @type {()=> void}
   * @memberof ButtonProps
   */
  // tslint:disable-next-line:no-any
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * The button
 * @param {ButtonProps} props
 * @returns
 */
export const Button: SFC<ButtonProps> = ({
  color,
  size,
  onClick,
  disabled,
  children,
}) => {
  const styles = {
    color,
    fontSize: sizes[size!],
  };
  return (
    <button
      className="btn btn-primary"
      style={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: '#333',
  size: 'normal',
  onClick: event => {
    // eslint-disable-next-line no-console
    // tslint:disable-next-line:no-console
    console.log('You have clicked me!', event.target);
  },
};
