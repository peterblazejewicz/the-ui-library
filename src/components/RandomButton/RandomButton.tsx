import React, { Component, MouseEvent } from 'react';
import './RandomButton.css';
import sample from 'lodash.sample';

export interface RandomButtonProps {
  labels?: string[];
}

export interface RandomButtonState {
  label?: string;
}

export default class RandomButton extends Component<
  RandomButtonProps,
  RandomButtonState
> {
  static defaultProperties: RandomButtonProps;

  constructor(props: RandomButtonProps) {
    super(props);
    this.state = {
      label: sample(this.props.labels)!,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: MouseEvent<HTMLButtonElement>) {
    this.setState({
      label: sample(this.props.labels)!,
    });
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.handleClick}
      >
        {this.state.label}
      </button>
    );
  }
}
