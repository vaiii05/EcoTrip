import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
  const locationRef = useRef('');
  const interestRef = useRef('');
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const interest = interestRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || interest === '' || maxGroupSize === '') {
      return alert('All fields are required!');
    }

    // Handle your search logic here
    console.log('Searching for:', location, interest, maxGroupSize);
  };

  return (
    <Col lg='12'>
      <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
          {/* Location input */}
          <FormGroup className='d-flex gap-3 form__group form__group__group-fast'>
            <span>
              <i className='ri-map-pin-line'></i>
              <div>
                <h6>Location</h6>
                <input type='text' placeholder='Where are you Going?' ref={locationRef} />
              </div>
            </span>
          </FormGroup>

          {/* Interest dropdown */}
          <FormGroup className='d-flex gap-3 form__group form__group__group-fast'>
            <span>
              <i className='ri-heart-line'></i>
              <div>
                <h6>Interest</h6>
                <select ref={interestRef}>
                  <option value=''>Select Interest</option>
                  <option value='beach'>Beach</option>
                  <option value='mountain'>Mountain</option>
                  <option value='culture'>Culture</option>
                  <option value='adventure'>Adventure</option>
                  <option value='wildlife'>Wildlife</option>
                  <option value='city'>City</option>
                  <option value='history'>History</option>
                  <option value='romantic'>Romantic</option>
                </select>
              </div>
            </span>
          </FormGroup>

          {/* Max Group Size input */}
          <FormGroup className='d-flex gap-3 form__group form__group__group-last'>
            <span>
              <i className='ri-group-line'></i>
              <div>
                <h6>Max people</h6>
                <input type='number' placeholder='Max group size' ref={maxGroupSizeRef} />
              </div>
            </span>
          </FormGroup>

          {/* Search icon */}
          <span className='search__icon' type='submit' onClick={searchHandler}>
            <i className='ri-search-line'></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
