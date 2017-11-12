import React, { SFC, MouseEvent } from 'react';

/**
 * Available Button font sizes
 *
 * @enum {number}
 */
export enum ButtonFontSize {
  Small = '10px',
  Normal = '14px',
  Large = '18px',
}

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
   * The font size for the button
   * @type {ButtonFontSize}
   * @memberof ButtonProps
   */
  size?: ButtonFontSize;
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
    fontSize: ButtonFontSize[size!],
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
  size: ButtonFontSize.Normal,
  onClick: event => {
    // eslint-disable-next-line no-console
    // tslint:disable-next-line:no-console
    console.log('You have clicked me!', event.target);
  },
};

export default Button;
