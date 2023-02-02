import { CiSearch } from 'react-icons/ci'

export const Filter = () => {
    return (
        <div className='filterArea'>
        <div className='filterItem'>
          <input className='input' type='text' placeholder='Street, City, State or Zip' />
          <span className='searchButton'><CiSearch /></span>
        </div>
        <div className='filterItem'>

          <select className='input-select input bg-white' name='size' id='size'>
            <option value=''>All statuses</option>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </div>
        <div className='filterItem'>
          <select className='input-select input bg-white' name='sort' id='sort'>
            <option value=''>All cities</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>

        <div className='filterItem'>
          <select className='input-select input bg-white' name='sort' id='sort'>
            <option value=''>All zipcodes</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>

        {/* <div className='filterItem'>
          <select className='input-select input bg-white' name='sort' id='sort'>
            <option value=''>Newest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div> */}

        <div className='filterItem'>
          <button type="submit" className='input btn-primary'>Search</button>
        </div>

        <div className='filterItem'>
          <button type="submit" className='input btn-secondary'>MORE</button>
        </div>
      </div>
    )
}