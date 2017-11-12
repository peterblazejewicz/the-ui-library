import React, { Component, MouseEvent } from 'react';
import './CounterButton.css';

/**
 * CounterButton properties
 * @export
 * @interface CounterButtonProps
 */
export interface CounterButtonProps {
  /**
   * Value of the button
   * @type {number}
   * @memberof CounterButtonProps
   */
  value: number;
}

/**
 * State of this component
 * @export
 * @interface CounterButtonState
 */
export interface CounterButtonState {
  /**
   * Value of this button
   * @type {number}
   * @memberof CounterButtonState
   */
  value: number;
}

/**
 * The Counter Button component
 * @export
 * @class CounterButton
 * @extends {Component<CounterButtonProps, CounterButtonState>}
 */
export default class CounterButton extends Component<
  CounterButtonProps,
  CounterButtonState
> {
  static defaultProps: CounterButtonProps = {
    value: 0,
  };
  /**
   * Creates an instance of CounterButton.
   * @param {CounterButtonProps} props
   * @memberof CounterButton
   */
  constructor(props: CounterButtonProps) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.increment = this.increment.bind(this);
  }

  /**
   * @public
   * @since 1.0.5
   * @param {number} value
   * @memberof CounterButton
   */
  set(value: number): void {
    this.setState({
      value,
    });
  }
  /**
   * @private
   * @param {MouseEvent<HTMLButtonElement>} event
   * @memberof CounterButton
   */
  increment(event: MouseEvent<HTMLButtonElement>) {
    this.set(this.state.value + 1);
  }

  /**
   * @private
   * @returns
   * @memberof CounterButton
   */
  render() {
    return (
      <button className="button" onClick={this.increment}>
        {this.state.value}
      </button>
    );
  }
}
