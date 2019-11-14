export const fetchCities = () => (
  $.ajax({
    url: `/api/cities`,
    method: 'GET',
  })
)

export const fetchCity = (cityId) => (
  $.ajax({
    url: `/api/cities/${cityId}`,
    method: 'GET'
  })
)