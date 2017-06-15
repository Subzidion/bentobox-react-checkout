import React, { Component } from 'react'

let stateItemStyles = {
  width: '172px',
  height: '302px'
}

class AddressForm extends Component {
  render() {
    return (
      <div>
          <input type='text' id='customer_name' name='customer_name' placeholder='Name' />
          <input type='text' name='billing_street_address_1' placeholder='Billing Address 1' />
          <input type='text' name='billing_street_address_2' placeholder='Billing Address 2' />
          <input type='text' name='billing_city' placeholder='City' />
          <div className='split'>
            <div className='split-left billing_state_container'>
              <div className='selectric-wrapper selectric-placeholder'>
                <div className='selectric-hide-select'>
                  <select name='billing_state' placeholder='State' id='billing_state' className='' tabIndex='-1'>
                    <option value='' defaultValue='' disabled=''>State</option>
                    <option value='AL'>Alabama</option>
                    <option value='AK'>Alaska</option>
                    <option value='AZ'>Arizona</option>
                    <option value='AR'>Arkansas</option>
                    <option value='CA'>California</option>
                    <option value='CO'>Colorado</option>
                    <option value='CT'>Connecticut</option>
                    <option value='DE'>Delaware</option>
                    <option value='DC'>District Of Columbia</option>
                    <option value='FL'>Florida</option>
                    <option value='GA'>Georgia</option>
                    <option value='HI'>Hawaii</option>
                    <option value='ID'>Idaho</option>
                    <option value='IL'>Illinois</option>
                    <option value='IN'>Indiana</option>
                    <option value='IA'>Iowa</option>
                    <option value='KS'>Kansas</option>
                    <option value='KY'>Kentucky</option>
                    <option value='LA'>Louisiana</option>
                    <option value='ME'>Maine</option>
                    <option value='MD'>Maryland</option>
                    <option value='MA'>Massachusetts</option>
                    <option value='MI'>Michigan</option>
                    <option value='MN'>Minnesota</option>
                    <option value='MS'>Mississippi</option>
                    <option value='MO'>Missouri</option>
                    <option value='MT'>Montana</option>
                    <option value='NE'>Nebraska</option>
                    <option value='NV'>Nevada</option>
                    <option value='NH'>New Hampshire</option>
                    <option value='NJ'>New Jersey</option>
                    <option value='NM'>New Mexico</option>
                    <option value='NY'>New York</option>
                    <option value='NC'>North Carolina</option>
                    <option value='ND'>North Dakota</option>
                    <option value='OH'>Ohio</option>
                    <option value='OK'>Oklahoma</option>
                    <option value='OR'>Oregon</option>
                    <option value='PA'>Pennsylvania</option>
                    <option value='RI'>Rhode Island</option>
                    <option value='SC'>South Carolina</option>
                    <option value='SD'>South Dakota</option>
                    <option value='TN'>Tennessee</option>
                    <option value='TX'>Texas</option>
                    <option value='UT'>Utah</option>
                    <option value='VT'>Vermont</option>
                    <option value='VA'>Virginia</option>
                    <option value='WA'>Washington</option>
                    <option value='WV'>West Virginia</option>
                    <option value='WI'>Wisconsin</option>
                    <option value='WY'>Wyoming</option>
                  </select>
                </div>
                <div className='selectric'><span className='label'>Alabama</span><b className='button'>▾</b></div>
                <div className='selectric-items' tabIndex='-1' style={stateItemStyles}>
                  <div className='selectric-scroll'>
                    <ul>
                      <li data-index='0' className='disabled'>State</li>
                      <li data-index='1' className='selected highlighted'>Alabama</li>
                      <li data-index='2' className=''>Alaska</li>
                      <li data-index='3' className=''>Arizona</li>
                      <li data-index='4' className=''>Arkansas</li>
                      <li data-index='5' className=''>California</li>
                      <li data-index='6' className=''>Colorado</li>
                      <li data-index='7' className=''>Connecticut</li>
                      <li data-index='8' className=''>Delaware</li>
                      <li data-index='9' className=''>District Of Columbia</li>
                      <li data-index='10' className=''>Florida</li>
                      <li data-index='11' className=''>Georgia</li>
                      <li data-index='12' className=''>Hawaii</li>
                      <li data-index='13' className=''>Idaho</li>
                      <li data-index='14' className=''>Illinois</li>
                      <li data-index='15' className=''>Indiana</li>
                      <li data-index='16' className=''>Iowa</li>
                      <li data-index='17' className=''>Kansas</li>
                      <li data-index='18' className=''>Kentucky</li>
                      <li data-index='19' className=''>Louisiana</li>
                      <li data-index='20' className=''>Maine</li>
                      <li data-index='21' className=''>Maryland</li>
                      <li data-index='22' className=''>Massachusetts</li>
                      <li data-index='23' className=''>Michigan</li>
                      <li data-index='24' className=''>Minnesota</li>
                      <li data-index='25' className=''>Mississippi</li>
                      <li data-index='26' className=''>Missouri</li>
                      <li data-index='27' className=''>Montana</li>
                      <li data-index='28' className=''>Nebraska</li>
                      <li data-index='29' className=''>Nevada</li>
                      <li data-index='30' className=''>New Hampshire</li>
                      <li data-index='31' className=''>New Jersey</li>
                      <li data-index='32' className=''>New Mexico</li>
                      <li data-index='33' className=''>New York</li>
                      <li data-index='34' className=''>North Carolina</li>
                      <li data-index='35' className=''>North Dakota</li>
                      <li data-index='36' className=''>Ohio</li>
                      <li data-index='37' className=''>Oklahoma</li>
                      <li data-index='38' className=''>Oregon</li>
                      <li data-index='39' className=''>Pennsylvania</li>
                      <li data-index='40' className=''>Rhode Island</li>
                      <li data-index='41' className=''>South Carolina</li>
                      <li data-index='42' className=''>South Dakota</li>
                      <li data-index='43' className=''>Tennessee</li>
                      <li data-index='44' className=''>Texas</li>
                      <li data-index='45' className=''>Utah</li>
                      <li data-index='46' className=''>Vermont</li>
                      <li data-index='47' className=''>Virginia</li>
                      <li data-index='48' className=''>Washington</li>
                      <li data-index='49' className=''>West Virginia</li>
                      <li data-index='50' className=''>Wisconsin</li>
                      <li data-index='51' className='last'>Wyoming</li>
                    </ul>
                  </div>
                </div>
                <input className='selectric-input' tabIndex='0' />
              </div>
            </div>
            <input className='split-right' type='text' id='billing_postal_code' name='billing_postal_code' placeholder='Zip Code' />
          </div>
      </div>
    )
  }
}

export default AddressForm
