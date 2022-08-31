import React, { useState } from "react";
import SearchIcon from '../searchIcon.svg';

function SearchBar({movieSearch}){
    const [searchItem,setSearchItem] = useState('');
    return(
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search for movies" onChange={(e) => setSearchItem(e.target.value)}/>
                <img src={SearchIcon} alt="Search" onClick={() => movieSearch(searchItem)}/>
            </div>
        </div>
    )
}

export default SearchBar;