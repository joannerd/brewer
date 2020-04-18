export const fetchGuides = () => (
  $.ajax({
    url: '/api/guides',
    method: 'GET',
  })
);

export const fetchGuide = (guideId) => (
  $.ajax({
    url: `/api/guides/${guideId}`,
    method: 'GET',
  })
);

export const createGuide = (guide) => (
  $.ajax({
    url: '/api/guides',
    method: 'POST',
    data: { guide },
  })
);

export const updateGuide = (guide) => (
  $.ajax({
    url: `/api/guides/${guide.id}`,
    method: 'PATCH',
    data: { guide },
  })
);

export const deleteGuide = (guideId) => (
  $.ajax({
    url: `/api/guides/${guideId}`,
    method: 'DELETE',
  })
);
