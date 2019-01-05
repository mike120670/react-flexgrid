import React from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';
  import '../css/footer.css';
  

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <div class="footer">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <p>CopyRight © 2018 Digital All Rights Reserved</p>
        </Navbar>
        
        </div>
      </div>
    );
  }
}    