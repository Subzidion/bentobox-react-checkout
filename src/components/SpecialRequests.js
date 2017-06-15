import React, { Component } from 'react'

class SpecialRequests extends Component {
  render() {
    return (
      <div className='delivery-details'>
          <h2>Special Requests</h2>
          <fieldset>
            <textarea name='special_requests' className='special_requests'></textarea>
          </fieldset>
      </div>
    )
  }
}

export default SpecialRequests
