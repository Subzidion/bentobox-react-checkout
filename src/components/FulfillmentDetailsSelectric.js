import React, { Component } from 'react'

class FulfillmentDetails extends Component {
  render() {
    return (
      <div className='delivery-details'>
        <fieldset>
          <div className='split'>
            <div className='split-left'>
              <input className='required datepicker' placeholder='Delivery/Pickup Date' type='text' id='pickup_only-date' aria-label='Use the arrow keys to pick a date' />
            </div>
            <div className='split-right'>
              <div className='selectric-wrapper selectric-timepicker selectric-required'><div className='selectric-hide-select'>
                <select className='timepicker required' id='pickup_only-time' tabIndex='-1'>
                  <option defaultValue=''>Delivery/Pickup Time</option>
                  <option data-metric-time='08:00' value='08:00 AM'>8:00 AM</option>
                  <option data-metric-time='08:30' value='08:30 AM'>8:30 AM</option>
                  <option data-metric-time='09:00' value='09:00 AM'>9:00 AM</option>
                  <option data-metric-time='09:30' value='09:30 AM'>9:30 AM</option>
                  <option data-metric-time='10:00' value='10:00 AM'>10:00 AM</option>
                  <option data-metric-time='10:30' value='10:30 AM'>10:30 AM</option>
                  <option data-metric-time='11:00' value='11:00 AM'>11:00 AM</option>
                  <option data-metric-time='11:30' value='11:30 AM'>11:30 AM</option>
                  <option data-metric-time='12:00' value='12:00 PM'>12:00 PM</option>
                  <option data-metric-time='12:30' value='12:30 PM'>12:30 PM</option>
                  <option data-metric-time='13:00' value='01:00 PM'>1:00 PM</option>
                  <option data-metric-time='13:30' value='01:30 PM'>1:30 PM</option>
                  <option data-metric-time='14:00' value='02:00 PM'>2:00 PM</option>
                  <option data-metric-time='14:30' value='02:30 PM'>2:30 PM</option>
                  <option data-metric-time='15:00' value='03:00 PM'>3:00 PM</option>
                  <option data-metric-time='15:30' value='03:30 PM'>3:30 PM</option>
                  <option data-metric-time='16:00' value='04:00 PM'>4:00 PM</option>
                  <option data-metric-time='16:30' value='04:30 PM'>4:30 PM</option>
                  <option data-metric-time='17:00' value='05:00 PM'>5:00 PM</option>
                  <option data-metric-time='17:30' value='05:30 PM'>5:30 PM</option>
                  <option data-metric-time='18:00' value='06:00 PM'>6:00 PM</option>
                  <option data-metric-time='18:30' value='06:30 PM'>6:30 PM</option>
                  <option data-metric-time='19:00' value='07:00 PM'>7:00 PM</option>
                  <option data-metric-time='19:30' value='07:30 PM'>7:30 PM</option>
                  <option data-metric-time='20:00' value='08:00 PM'>8:00 PM</option>
                </select>
              </div>
              <div className='selectric'>
                <span className='label'>Delivery/Pickup Time</span>
                <b className='button'>▾</b>
              </div>
              <div className='selectric-items' tabIndex='-1'>
                <div className='selectric-scroll'>
                  <ul>
                    <li data-index='0' className='selected'>Delivery/Pickup Time</li>
                    <li data-index='1' className=''>8:00 AM</li>
                    <li data-index='2' className=''>8:30 AM</li>
                    <li data-index='3' className=''>9:00 AM</li>
                    <li data-index='4' className=''>9:30 AM</li>
                    <li data-index='5' className=''>10:00 AM</li>
                    <li data-index='6' className=''>10:30 AM</li>
                    <li data-index='7' className=''>11:00 AM</li>
                    <li data-index='8' className=''>11:30 AM</li>
                    <li data-index='9' className=''>12:00 PM</li>
                    <li data-index='10' className=''>12:30 PM</li>
                    <li data-index='11' className=''>1:00 PM</li>
                    <li data-index='12' className=''>1:30 PM</li>
                    <li data-index='13' className=''>2:00 PM</li>
                    <li data-index='14' className=''>2:30 PM</li>
                    <li data-index='15' className=''>3:00 PM</li>
                    <li data-index='16' className=''>3:30 PM</li>
                    <li data-index='17' className=''>4:00 PM</li>
                    <li data-index='18' className=''>4:30 PM</li>
                    <li data-index='19' className=''>5:00 PM</li>
                    <li data-index='20' className=''>5:30 PM</li>
                    <li data-index='21' className=''>6:00 PM</li>
                    <li data-index='22' className=''>6:30 PM</li>
                    <li data-index='23' className=''>7:00 PM</li>
                    <li data-index='24' className=''>7:30 PM</li>
                    <li data-index='25' className='last'>8:00 PM</li>
                  </ul>
                </div>
              </div>
              <input className='selectric-input' tabIndex='0' />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default FulfillmentDetails
