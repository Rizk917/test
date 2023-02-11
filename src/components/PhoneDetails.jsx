import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeskFooter from './deskfooter';
import DeskHeader from './deskheader';

function PhoneDetails(props) {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    loadPhone();
  }, []);

  const loadPhone = async () => {
    const result = await axios.get(`https://mobilixbackend.onrender.com/phones/${id}`);
    setPhone(result.data);
  };

  return (
    <div className="phone-details">
      <DeskHeader open={open} setOpen={setOpen} />
      <div className='details-div'>
        <img className="detailed-img" src={`https://mobilixbackend.onrender.com/${phone.image}`} alt={phone.phoneModel} />
        <div className='inform'>
          <h3>{phone.phoneModel}</h3>
          <h3>{phone.vendor}</h3>
          <p><span>description:</span> {phone.description}</p>
          <p><span>Camera:</span> {phone.camera}</p>
          <p><span>body:</span>{phone.body}</p>
          <p><span>Release date:</span> {phone.prodDate}</p>
          <a href="/phones" className='whity-btn'>Back</a>
        </div>
      </div>
      <DeskFooter setOpen={setOpen} />
    </div>
  );
}

export default PhoneDetails;