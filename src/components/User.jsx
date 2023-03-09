import React from 'react';
import Map from './Map';

const User = ({ currentUser }) => {
  const {
    name,
    profilepicture,
    username,
    email,
    phone,
    website,
    company: { bs: bs, catchPhrase },
    address: { city, geo, street, suite, zipcode },
  } = currentUser;

  const catchPhraseArr = catchPhrase.split(' ');
  const bsArr = bs.split(' ');

  return (
    <>
      <div className='profile__body-content'>
        <div className='profile__body-content--left'>
          <div className='profile__body-content--left_img'>
            <img src={profilepicture} alt='profilepicture' />
            <div className='profile__body-content--left_heading-title'>
              {name}
            </div>
          </div>

          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>
              Username
            </span>
            <span className='profile__body-content--left-form_value'>
              {username}
            </span>
          </div>
          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>
              e-mail
            </span>
            <span className='profile__body-content--left-form_value'>
              {email}
            </span>
          </div>
          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>
              Phone
            </span>
            <span className='profile__body-content--left-form_value'>
              {phone}
            </span>
          </div>
          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>
              Website
            </span>
            <span className='profile__body-content--left-form_value'>
              {website}
            </span>
          </div>
          {/* <div className='border'></div> */}
          <h2 className='profile__body-content--left-heading border'>
            Company
          </h2>

          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>Name</span>
            <span className='profile__body-content--left-form_value'>
              {currentUser.company.name}
            </span>
          </div>
          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>
              catchphrase
            </span>

            <span className='profile__body-content--left-form_value'>
              {catchPhraseArr[0]} <br />
              {catchPhraseArr.slice(1).join(' ')}
            </span>
          </div>
          <div className='profile__body-content--left-form'>
            <span className='profile__body-content--left-form_label'>bs</span>
            <span className='profile__body-content--left-form_value'>
              {bsArr.slice(0, 2).join('')}
              <br /> {bsArr[bsArr.length - 1]}
            </span>
          </div>
        </div>
        <div className='profile__body-content--right'>
          <h2>Address:</h2>
          <div className='profile__body-content--right-form'>
            <span className='profile__body-content--right-form_label'>
              Street
            </span>
            <span className='profile__body-content--right-form_value'>
              {street}
            </span>
          </div>
          <div className='profile__body-content--right-form'>
            <span className='profile__body-content--right-form_label'>
              Suite
            </span>
            <span className='profile__body-content--right-form_value'>
              {suite}
            </span>
          </div>
          <div className='profile__body-content--right-form'>
            <span className='profile__body-content--right-form_label'>
              City
            </span>
            <span className='profile__body-content--right-form_value'>
              {city}
            </span>
          </div>
          <div className='profile__body-content--right-form'>
            <span className='profile__body-content--right-form_label'>
              Zipcode
            </span>
            <span className='profile__body-content--right-form_value'>
              {zipcode}
            </span>
          </div>
          <div className='profile__body-content--right-form-map'>
            <Map geo={geo} />
          </div>
          <div className='profile__body-content--right-form-mapinfo'>
            <div>
              <span className='profile__body-content--right-form_label'>
                Lat:
              </span>
              <span className='profile__body-content--right-form-mapinfo_value'>
                {geo.lat}
              </span>
            </div>

            <div>
              {' '}
              <span className='profile__body-content--right-form_label'>
                Long:
              </span>
              <span className='profile__body-content--right-form-mapinfo_value'>
                {geo.lng}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
