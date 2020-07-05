import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGuide, fetchNewGuide, clearNewGuide } from '../../actions/guide_actions';
import { clearErrors } from '../../actions/session_actions';

const GuideForm = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.session.id);
  const cities = useSelector((state) => Object.values(state.entities.cities));
  const breweries = useSelector((state) => Object.values(state.entities.breweries));
  const errors = useSelector((state) => state.errors.session);
  const [numberOfBreweryInputs, setNumberOfBreweryInputs] = useState([1]);
  const [guideBreweries, setGuideBreweries] = useState([]);
  const [selectedBreweryIDs, setSelectedBreweryIDs] = useState({});
  const [cityId, setCityId] = useState(-1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    dispatch(fetchNewGuide());
    if (errors.length) dispatch(clearErrors());

    return () => dispatch(clearNewGuide());
  }, []);

  const submitGuide = (e) => {
    e.preventDefault();
    const newGuide = {
      title,
      body,
      city_id: cityId,
      user_id: currentUserId,
      breweries: selectedBreweryIDs,
    };
    dispatch(createGuide(newGuide));
  };

  const updateCity = (e) => {
    const id = parseInt(e.target.value, 10);
    const cityBreweries = breweries.filter(brewery => brewery.cityId === id);
    setCityId(id);
    setGuideBreweries(cityBreweries);
  };

  const createBreweryInput = () => {
    if (numberOfBreweryInputs.length < 5) {
      const inputs = [...numberOfBreweryInputs];
      inputs.push(numberOfBreweryInputs.length + 1);
      setNumberOfBreweryInputs(inputs);
    }
  };

  const deleteBreweryInput = () => {
    if (numberOfBreweryInputs.length > 1) {
      const inputs = numberOfBreweryInputs.slice(0, numberOfBreweryInputs.length - 1);
      setNumberOfBreweryInputs(inputs);
    }
    const selectedBreweries = { ...selectedBreweryIDs };
    delete selectedBreweries[numberOfBreweryInputs.length];
    setSelectedBreweryIDs(selectedBreweries);
  };

  const updateTitle = (e) => setTitle(e.target.value);

  const updateBody = (e) => setBody(e.target.value);

  const updateSelectedBreweryIDs = (idx, e) => {
    const id = parseInt(e.target.value, 10);
    const selectedBreweries = { ...selectedBreweryIDs };
    selectedBreweries[idx + 1] = id;
    setSelectedBreweryIDs(selectedBreweries);
  };

  const createBreweryInputFields = (idx) => (
    <select
      required
      key={idx}
      defaultValue="Choose a favorite brewery"
      name="brewery"
      onChange={(e) => updateSelectedBreweryIDs(idx, e)}
    >
      <option disabled>Choose a favorite brewery</option>
      {guideBreweries.map((brewery) => {
        if (Object.values(selectedBreweryIDs).includes(brewery.id)) {
          return (
            <option disabled key={`${idx}-${brewery.id}`}>
              {brewery.name}
            </option>
          );
        }
        return (
          <option value={brewery.id} key={`${idx}-${brewery.id}`}>
            {brewery.name}
          </option>
        );
      })}
    </select>
  );

  return (
    <form className="guide-form" onSubmit={submitGuide}>
      <h1>Create Guide</h1>
      <div className="breweries-select">
        <select
          required
          defaultValue="Choose a city"
          name="city"
          onChange={updateCity}
        >
          <option disabled>Choose a city</option>
          {cities.map((city) => (
            <option value={city.id} key={city.id}>
              {city.name}
              ,&nbsp;
              {city.state}
            </option>
          ))}
        </select>
      </div>
      <input
        required
        value={title}
        onChange={updateTitle}
        placeholder="Title"
      />
      <textarea
        required
        value={body}
        onChange={updateBody}
        placeholder="Body"
      />
      <div className="breweries-select">
        {numberOfBreweryInputs.map((_, idx) => (
          createBreweryInputFields(idx)
        ))}
      </div>
      <div className="guide-form-errors">
        {errors.map((err, i) => (
          <div className="user-auth-errors" key={i}>
            {err}
          </div>
        ))}
      </div>
      <button
        className="submit"
        type="button"
        onClick={createBreweryInput}
      >
        Add Brewery
      </button>
      <button
        className="submit"
        type="button"
        onClick={deleteBreweryInput}
      >
        Remove Brewery
      </button>
      <input className="submit" type="submit" value="Create Guide" />
    </form>
  );
};

export default GuideForm;
