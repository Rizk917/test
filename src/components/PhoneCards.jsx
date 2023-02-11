import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import PhoneDetails from './PhoneDetails';
import DeskFooter from './deskfooter';

function PhonePage(props) {
  const [phones, setPhones] = useState([]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    loadphones();
  }, []);

  const loadphones = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setPhones(sortedphones);
  };

  return (
    <div className="hiii" onClick={() => props.setOpen(true)}>
      <h4>Your First Phones Page</h4>
      <div className="grid-container">
        {phones.map((phone) => (
          <Link to={`/phones/${phone._id}`} key={phone._id}>
            <div className="grid-item">
              <h3>{phone.phoneModel}</h3>
              <img src={`https://mobilixbackend.onrender.com/${phone.image}`} alt={phone.phoneModels} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhonePage;