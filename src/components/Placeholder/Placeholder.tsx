import React, { Component } from 'react';
import './Placeholder.css';

export interface PlaceholderProps {
  type?:
    | 'animal'
    | 'bacon'
    | 'beard'
    | 'bear'
    | 'cat'
    | 'food'
    | 'city'
    | 'nature'
    | 'people';
  width?: number;
  height?: number;
}

export default class Placeholder extends Component<PlaceholderProps> {
  /**
   * Default properties
   * @static
   * @type {PlaceholderProps}
   * @memberof Placeholder
   */
  static defaultProps: PlaceholderProps;

  /**
   * @private
   * @returns {string}
   * @memberof Placeholder
   */
  getImageUrl(): string {
    const { type, width, height } = this.props;
    const types = {
      animal: `http://placeimg.com/${width}/${height}/animals`,
      bacon: `http://baconmockup.com/${width}/${height}`,
      bear: `http://www.placebear.com/${width}/${height}`,
      beard: `http://placebeard.it/${width}/${height}`,
      cat: `http://lorempixel.com/${width}/${height}/cats`,
      city: `http://lorempixel.com/${width}/${height}/city`,
      food: `http://lorempixel.com/${width}/${height}/food`,
      nature: `http://lorempixel.com/${width}/${height}/nature`,
      people: `http://lorempixel.com/${width}/${height}/people`,
    };
    return types[type!];
  }

  /**
   * @private
   * @returns
   * @memberof Placeholder
   */
  render() {
    const { width, height } = this.props;
    return (
      <img
        className="placeholder"
        src={this.getImageUrl()}
        width={width}
        height={height}
      />
    );
  }
}

Placeholder.defaultProps = {
  type: 'animal',
  width: 150,
  height: 150,
};
