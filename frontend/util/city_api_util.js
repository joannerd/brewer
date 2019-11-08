export const fetchCities = () => (
  $.ajax({
    url: `/api/cities`,
    method: 'GET',
  })
)

export const fetchCity = (city) => (
  $.ajax({
    url: `/api/cities/${city.id}`,
    method: 'GET',
    data: { city }
  })
)