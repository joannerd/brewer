const fetchSearchBreweries = () => (
  $.ajax({
    url: '/api/breweries',
    method: 'GET',
  })
);

export default fetchSearchBreweries;
