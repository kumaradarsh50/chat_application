import React, { useContext } from 'react';
import { UserListContext } from './App';

const Demo = () => {
  return <div>Demo</div>;
};

export default Demo;

<div className='profile__body-content'>
<div className='profile__body-content--left'>
  <div className='profile__body-content--left_img'>
    <img
      src='https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      alt=''
    />
    <div className='profile__body-content--left_heading-title'>
      {currentUser.name}
    </div>
  </div>

  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      Username
    </span>
    <span className='profile__body-content--left-form_value'>
      Bret
    </span>
  </div>
  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      e-mail
    </span>
    <span className='profile__body-content--left-form_value'>
      Sincere@april.biz
    </span>
  </div>
  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      Phone
    </span>
    <span className='profile__body-content--left-form_value'>
      9999999999
    </span>
  </div>
  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      Website
    </span>
    <span className='profile__body-content--left-form_value'>
      leannegraham.com
    </span>
  </div>
  <div className='border'></div>
  <h2 className='profile__body-content--left-heading'>Company</h2>

  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      Name
    </span>
    <span className='profile__body-content--left-form_value'>
      Romaguera-Crona
    </span>
  </div>
  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>
      catchphrase
    </span>

    <span className='profile__body-content--left-form_value'>
      Multi-layered <br /> client-server neural
    </span>
  </div>
  <div className='profile__body-content--left-form'>
    <span className='profile__body-content--left-form_label'>bs</span>
    <span className='profile__body-content--left-form_value'>
      harness real-time <br /> e-markets
    </span>
  </div>
</div>

</div>

<div className='profile__body-content--right'>
  <h2>Address:</h2>
  <div className='profile__body-content--right-form'>
    <span className='profile__body-content--right-form_label'>Street</span>
    <span className='profile__body-content--right-form_value'>Kulas Light</span>
  </div>
  <div className='profile__body-content--right-form'>
    <span className='profile__body-content--right-form_label'>Suite</span>
    <span className='profile__body-content--right-form_value'>Apt. 556</span>
  </div>
  <div className='profile__body-content--right-form'>
    <span className='profile__body-content--right-form_label'>City</span>
    <span className='profile__body-content--right-form_value'>Gwenborough</span>
  </div>
  <div className='profile__body-content--right-form'>
    <span className='profile__body-content--right-form_label'>Zipcode</span>
    <span className='profile__body-content--right-form_value'>92998-3874</span>
  </div>
  <div className='profile__body-content--right-form'>
    <img
      src='https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      alt=''
    />
  </div>
  <div className='profile__body-content--right-form-map'>
    <div>
      <span className='profile__body-content--right-form-map_label'>Lat:</span>
      <span className='profile__body-content--right-form-map_value'>
        -37.3159
      </span>
    </div>

    <div>
      {' '}
      <span className='profile__body-content--right-form-map_label'>Long:</span>
      <span className='profile__body-content--right-form-map_value'>
        81.1496
      </span>
    </div>
  </div>
</div>;
