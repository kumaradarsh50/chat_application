import React from 'react';

const Aside = ({ data, asideLinkHandler, isActive }) => {
  return (
    <div className='aside__contaier'>
      {data?.map((li, idx) => {
        return (
          <div
            className={
              idx === isActive
                ? 'aside__container-link active'
                : 'aside__container-link'
            }
            key={idx}
            onClick={(e) => asideLinkHandler(e, idx, li)}
          >
            {li}
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
