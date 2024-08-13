import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      <div>
        <p className>{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.state},{address?.streetAddress},{address?.zipCode}</p>
        <div>
          <p>Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
