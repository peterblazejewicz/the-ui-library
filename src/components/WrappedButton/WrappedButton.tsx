import React, { SFC, MouseEvent } from 'react';
import './WrappedButton.css';

interface WrappedButtonProps {
  /**
   * The color for the button
   * @type {string}
   * @memberof WrappedButtonProps
   * @see Check [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
   */
  color?: string;
  /**
   * The width of the button
   * @deprecated Do not use! Use size instead!
   * @type {number}
   * @memberof WrappedButtonProps
   */
  width?: number;
  /**
   * Gets called when the user clicks on the button
   * @param { MouseEvent } event The react `MouseEvent`
   * @memberof WrappedButtonProps
   */
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  /**
   * A prop that should not be visible in the doc.
   * @ignore
   * @type {boolean}
   * @memberof WrappedButtonProps
   */
  ignoredProp?: boolean;
  /**
   * The size of the Button
   * @since Version 1.0.1
   * @type {('small' | 'normal' | 'large')}
   * @memberof WrappedButtonProps
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Button label.
   * @type {string}
   * @memberof WrappedButtonProps
   */
  label?: string;
}
const sizes = {
  small: '10px',
  normal: '14px',
  large: '16px',
};

/**
 * A button wrapped by a Decorator/Enhancer
 *
 * @version 1.0.1
 * @author [Jeremy Gayed](https://github.com/tizmagik)
 * @deprecated Use the [only true button](#button) instead
 */
export const WrappedButton: SFC<WrappedButtonProps> = ({ color, size, label }) => {
  const styles = {
    color,
    fontSize: sizes[size!],
  };
  return (
    <div className="btn btn-primary" style={styles}>
      {label}
    </div>
  );
};

WrappedButton.defaultProps = {
  color: '#333',
  size: 'normal',
};

export default WrappedButton;
