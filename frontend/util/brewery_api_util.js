export const fetchBreweries = () => (
  $.ajax({
    url: '/api/breweries',
    method: 'GET',
  })
);

export const fetchBrewery = (breweryId) => (
  $.ajax({
    url: `/api/breweries/${breweryId}`,
    method: 'GET',
  })
);
