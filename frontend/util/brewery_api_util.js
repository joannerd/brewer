export const fetchBreweries = () => (
  $.ajax({
    url: `/api/breweries`,
    method: 'GET'
  })
)

export const fetchBrewery = (brewery) => (
  $.ajax({
    url: `/api/breweries/${brewery.id}`,
    method: 'GET',
    data: { brewery }
  })
)