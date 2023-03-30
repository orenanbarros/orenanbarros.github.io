import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to={`/techs`}>Tecnologias</Link>
    </>
  )
}

export default Navbar