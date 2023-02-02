import React from 'react'
import  PropertyCard  from '../components/listingCard'

import { Filter } from '../components/filter'
import NavBar from '../components/NavBar'


function Mls() {
  const data = [
    {
      'price': '200,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg'
    }, {
      'price': '400,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://www.akageranationalparkrwanda.org/wp-content/uploads/2022/02/volcanoes-national-park-gorillas.jpg'
    },
  ];
  return (<div>
    <NavBar />
    <Filter />
    <div className='mls-cOntainer'>
      <div className='map-container'>map</div>
      <div className='w-full'>
      <p><b>Searching: For Sale</b>, Cardiff, Carlsbad, Del Mar, La Jolla, North Park San Diego, Ramona, Rancho Santa Fe</p>
        <div className='left-properties'>
          
          {data.map((item, index) => {
            return (
              <PropertyCard price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
            );
          })
          }
        </div>
      </div>
    </div>
  </div>

  )
}
export default Mls