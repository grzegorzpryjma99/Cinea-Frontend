import React, { Component } from 'react';
import { LazyLoadImage } from '@tjoskar/react-lazyload-img'

export class MyImage extends Component {
    defaultImage = null
    delayTime = 1000
  images = [
    'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
    ];
  render() {
    return this.images.map(image => (
      <LazyLoadImage
        key={image}
        className='galery-image'
        delayMethod="debounce"
        delayTime={this.delayTime}
        defaultImage={this.defaultImage}
        image={image}
      />
    ))
  }
}