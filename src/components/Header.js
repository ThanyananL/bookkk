import React from 'react';
import './style.css';

export default function Header(){
   return (
      <div className="navBar">
         <nav>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/manga-list">List Manga</a>
         </nav>
      </div>
   );
};
