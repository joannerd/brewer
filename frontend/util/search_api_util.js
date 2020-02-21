export const fetchSearchBreweries = () => (
  $.ajax({
    url: `/api/breweries`,
    method: 'GET'
  })
)