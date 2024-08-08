
import { useParams } from 'react-router-dom';
import countriesData from './countries.json';

const Details = () => {
  const { value: countryName } = useParams();

  if (countryName === "usa") {
    return(
        <section></section>
    )
  }else if(countryName === "uk"){
    return (
        <section></section>
      )
  }else if (countryName === "australia") {
    return (
        <section></section>
      )
  }else if(countryName === "sweden"){
    return (
        <section></section>
      )
  }else if(countryName === "denmark") {
    return (
        <section></section>
      )
  }else if(countryName === "hungary") {
    return (
        <section></section>
      )
  }else{
    return (
        <section></section>
      )
  }
  
};

export default Details;

// i want this stucture of coponents using if else or swich case which better 
// but i want all the json data visible incloude nasting map and all the country data show and no mising any details and the nasting maping also 