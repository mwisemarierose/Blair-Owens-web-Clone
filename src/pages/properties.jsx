import React from 'react'
import NavBar from '../Components/NavBar'
import { CiSearch } from 'react-icons/ci'
import  PropertyCard  from '../Components/ListingCard'
import { Filter } from '../Components/FilterP'
import LoginForm from './login'
export default function Properties() {
  const data = [
  {
    'price': '1,200,000',
    'bed': '1-3',
    'bath': '1-2',
    'btn' :'view',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/7ad6d1b4-b42b-4f37-a34b-21dfb0837faf/xl/2.jpg'
  }, {
    'price': '200,000',
    'bed': '42',
    'bath': '12',
    'square': '12',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg'
  }, {
    'price': '400,000',
    'bed': '32',
    'bath': '12',
    'square': '12',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/681213e0-48c5-4f7a-a28f-c3c421abb209/xl/70.jpg'
  }, {
    'price': '1,200,000',
    'bed': '42',
    'bath': '92',
    'square': '82',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/7ad6d1b4-b42b-4f37-a34b-21dfb0837faf/xl/2.jpg'
  }, {
    'price': '200,000',
    'bed': '42',
    'bath': '12',
    'square': '12',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg'
  }, {
    'price': '400,000',
    'bed': '32',
    'bath': '12',
    'square': '12',
    'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/681213e0-48c5-4f7a-a28f-c3c421abb209/xl/70.jpg'
  },
];
return (

  <div>
    <LoginForm />
    <NavBar />
    <Filter/>
    
    <div className='banner-area'>
      <div className='banner-item flex-1'>
        <h5>Blair Owens</h5>
        <h1>Our Properties</h1>
      </div>

      <div className='banner-item flex-2'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
        </p>
      </div>

    </div>

    <div className='container'>
      <div className='properties'>
        {data.map((item, index) => {
          return (
            <PropertyCard  price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
          );
        })
      }
      </div>
    </div>
  </div>

)

}
  
