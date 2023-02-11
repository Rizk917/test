import '../App.css';
import DeskHeader from './deskheader';
import { useState } from 'react';
import AboutExtended from './AboutExtended';


function About() {
  const [open, setOpen] = useState(true);
  return (
    <div className="abt-container">
      <DeskHeader open={open} setOpen={setOpen} />
      <AboutExtended setOpen={setOpen} />
    </div >
  );
}

export default About;