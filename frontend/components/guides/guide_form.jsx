import React, { useState, useEffect } from 'react';

const GuideForm = ({ cities, breweries, authorId, createGuide, fetchBreweries, fetchCities }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [cityId, setCity] = useState();

  useEffect(() => {
    fetchCities()
      .then(() => fetchBreweries())
  }, [])

  function submitGuide(e) {
    e.preventDefault();
    createGuide({ title, body, city_id: cityId, user_id: authorId });
  }

  return (
    <form className="guide-form" onSubmit={submitGuide}>
      <h1>Create Guide</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Body"
      />

      <div className="breweries-select">
        <select
          defaultValue="City"
          name="city"
          onChange={e => setCity(e.target.value)}>
          <option disabled>City</option>
          {cities.map((city, i) => (
            <option value={city.id} key={i}>
              {city.name}, {city.state}
            </option>
          ))}
        </select>

        {[...Array(5).keys()].map((breweryNum, i) => (
          <select
            defaultValue={`Brewery #${breweryNum + 1}`}
            name={`brewery-${breweryNum + 1}`}
            onChange={e => setCity(e.target.value)}
            key={i}>
            <option disabled>Brewery #{breweryNum + 1}</option>
            {breweries
              .map((brewery, i) => (
                <option value={brewery.id} key={i}>
                  {brewery.name}
                </option>
            ))}
          </select>
        ))}
      </div>

      <input className="submit" type="submit" value='Create Guide' />
    </form>
  );
}

export default GuideForm;