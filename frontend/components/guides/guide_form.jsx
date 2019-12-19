import React, { useState, useEffect } from 'react';

const GuideForm = props => {
  const { match, guide, formType, cities, breweries, formAction, fetchGuide, fetchBreweries, fetchCities } = props;

  const [title, setTitle] = useState(guide.title);
  const [body, setBody] = useState(guide.body);
  const [cityId, setCity] = useState(guide.cityId);

  useEffect(() => {
    if (formType === 'Update Form') fetchGuide(match.params.guideId);
    fetchCities()
      .then(() => fetchBreweries())
  }, [formType, match, guide])

  function submitGuide(e) {
    e.preventDefault();
    formAction(formGuide);
  }

  return (
    <form className="guide-form" onSubmit={submitGuide}>
      <h1>{formType}</h1>
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
            {breweries.filter(brewery => brewery.cityId === cityId)
              .map((brewery, i) => (
                <option value={brewery.id} key={i}>
                  {brewery.name}
                </option>
              ))}
          </select>
        ))}
      </div>

      <input className="submit" type="submit" value={formType} />
    </form>
  );
}

export default GuideForm;