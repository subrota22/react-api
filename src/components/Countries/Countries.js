import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Countries.css" ;
const Countries = () => {
useEffect( ()  => {
try {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))   
} catch (error) {
alert("You have an error" + error) ;
}
} , [])

const [countries , setCountries] = useState([]) ;
return (
 <>
<div className='gridCountry'>
 {
countries.map(
 country =>
  <Display key={country.cca2} name={country.name.common} flags={country.flags.png}
 area={country.area} capital={country.capital} maps={country.maps.googleMaps} />
) 
 }
    </div>
    </>
)
}

function Display(props) {
return (
<div className='countyInfo'> 
<h2> Country name :  { props.name } </h2>
<h2> Capital  : {props.capital} </h2>
<h2>Area : {props.area} </h2>
<a href={props.maps} target="blank" id='anchorAnimation'> Google maps </a>
    <img src={props.flags} alt="flags" className='flags'/>
</div>
)
}
export default Countries;