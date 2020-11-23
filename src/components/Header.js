import React from 'react';
import Link from './Link';

const Header = (navId) => {
  console.log(navId);
  
    return (
      
    <div id={`${navId.navId}`}><nav className={`navbar navbar-expand-lg navbar-${navId.navColor} bg-${navId.navColor}`}>
    <a className="navbar-brand" href="/">Nathan Rawson</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
         <Link href="/" className="nav-link">
          Home
          </Link>
         </li>
         <li className="nav-item active">
         <Link href="/resume" className="nav-link">
          About Me
          </Link>
         </li>
         <li className="nav-item active">
         <Link href="/videos" className="nav-link">
          You Tube API
          </Link>
         </li>
       </ul>
       <form className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
   </nav></div>
    );
};

export default Header;