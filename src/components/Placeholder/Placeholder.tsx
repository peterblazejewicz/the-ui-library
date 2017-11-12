import React, { Component } from 'react';
import './Placeholder.css';

/**
 * Possible placeholder type
 * @enum {string}
 */
enum PlacolderTypes {
  Animal = 'animal',
  Bacon = 'bacon',
  Bear = 'bear',
  Beard = 'beard',
  Cat = 'cat',
  Food = 'food',
  City = 'city',
  Nature = 'nature',
  People = 'people',
}
interface PlaceholderProps {
  /**
   * @property type of the placeholder
   * @type {PlacolderTypes}
   * @memberof PlaceholderProps
   */
  type?: PlacolderTypes;
  /**
   * @property width of the placeholder
   * @type {number}
   * @memberof PlaceholderProps
   */
  width?: number;
  /**
   * @property height of the placeholder
   * @type {number}
   * @memberof PlaceholderProps
   */
  height?: number;
}

export default class Placeholder extends Component<PlaceholderProps> {
  /**
   * Default properties
   * @static
   * @type {PlaceholderProps}
   * @memberof Placeholder
   */
  static defaultProps: PlaceholderProps = {
    type: PlacolderTypes.Animal,
    width: 150,
    height: 150,
  };

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
