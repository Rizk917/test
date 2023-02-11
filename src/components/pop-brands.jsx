import React from "react";

function Brands(props) {
  return <div className="pop-brands" onClick={() => props.setShow(false)}>
    <h2>Popular brands</h2>
    <div className="brands-container">
      <div className="apple brands">
        <a href="https://www.apple.com/" className="brand-link" onClick={sendLinksToNewWindow}>Apple</a>
      </div>
      <div className="samsung brands">
        <a href="https://www.samsung.com/lb/smartphones/galaxy-s23-ultra/?page=home" className="brand-link" onClick={sendLinksToNewWindow}>Samsung</a>
      </div>
      <div className="oppo brands">
        <a href="https://www.oppo.com/" className="brand-link" onClick={sendLinksToNewWindow}>Oppo</a>
      </div>
    </div>
  </div>
}
export default Brands;

function sendLinksToNewWindow(event) {
  if (!(event.target instanceof HTMLElement))
    return;
  const anchor = event.target.closest('a');
  if (anchor !== null) {
    anchor.target = '_blank';
    anchor.rel = 'noopener';
  }
}