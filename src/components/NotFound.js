import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container">
    <h1 className="fs-1 text-center">Chyba zabłądziłes wędrowcze !</h1>
    <Link to="/">
      Wracaj na stronę główną !
    </Link>
  </div>
);

export default NotFound;