import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const Search = ({result, setResult}) => {
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(false)
  const [category, setCategory] = useState("")
  const [searchID, setSearchID] = useState("")
  const [blinking, setBlinking] = useState(false)

  // Set blinking errors
  useEffect(() => {
    setTimeout(() => {
      setBlinking(!blinking)
    }, 250)
  }, [blinking])

  const handleSearchChange = (e) => {
    // this event handler will be used to grab the search category and store in state
    e.preventDefault();
    console.log('Event Target from Category: ', e.target.value)
    setCategory(e.target.value)
  };

  const handleInputChange =(e) => {
  // grab the ID input and setInput
    e.preventDefault();
    console.log('Event Target from ID Input: ', e.target.value)
    setSearchID(e.target.value)
  }

  useEffect(() => {
    if (fetching) {
      axios.get(`https://swapi.dev/api/${category}/${searchID}`)
      .then(response => {
        setResult(response.data)
        setFetching(false)
      }).catch(err => {
        setError("These aren't the droids you're looking for!")
        setResult(null)
      })


      console.log('Done fetching!')
      navigate(`/${category}/${searchID}`);
    }
  }, [fetching])

  const handleClick = (e) => {
    // bring in SW API here?
    // https://swapi.dev/api/ + category + id
    // when form is submitted, through onClick ...
      // fetch from API and search for corresponding category AND id
        // after fetch, display the right info & change path to match the search items

    // useEffect(() => {
      // axios.get(`https://swapi.dev/api/${category}/${searchID}`)
      // .then(response => setResult(response.data))
      // // .then(console.log)
      // // .catch(err => setErroror("These aren't the droids you're looking for!")


      // console.log('Done fetching!')
      // navigate(`/${category}/${searchID}`);
    // }, []);
    setFetching(true)
  }
  console.log('Result', result)
  // console.log(typeof result)

  const displayError = () => {
    if (error) {
      return (
        <div>
          <img src="/obiwan.jpg" style={{ width: 1000, padding: 25 }}/>
          <p style={{
            color: "red",
            fontSize: 42,
            fontWeight: "bold",
            fontStyle: "italic",
            textTransform: "uppercase",
            visibility: blinking ? "visible" : "hidden"
          }}>{error}</p>
        </div>
      )
    } else {
      return null
    }
  }

  return(
    <>
      <form className="form-inline-block">
        <div></div>
        <label htmlFor="search" className="search-field-label" >Search For: </label>
        <select id="search" className="search-field" name="search" onChange={handleSearchChange} value={category}>
          <option value=""></option>
          <option value="films" defaultValue>Films</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="spaceships">Spaceships</option>
          <option value="species">People</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <label className="ID-label" htmlFor="ID">ID: </label>
        <input type="text" className="ID-search-field" name="searchID" onChange={handleInputChange} value={searchID}></input>
        <button type="button" className="btn btn-warning" onClick={handleClick}>Search</button>
      </form>
      {displayError()}
    </>

  );
};

export default Search;