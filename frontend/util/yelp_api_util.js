const apiKey =
  "vzh1i1hR4yfOuZoRB02e9ghzooAJOsjV43aGqbRBPxcPnHjdgqxIDs2CKif2Olrlgqnpue0D0-VzsBu4w70EvDQbT3o0zlOsssBTu8nc8DvFe6HIM8YXN4SYNTdSXnYx";

export const fetchYelp = (term, address, city, state) =>
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/matches\?name=${term}&address1=${address}&city=${city}&state=${state}&country=US`,
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    method: 'GET'
  })
    // .then(res => res.businesses[0].id)
    // .then(id => {
    //   yelpInfo["id"] = id;
    //   return fetchYelpInfo(id);
    // })
    // .then(res => {
    //   let { hours, price, rating, review_count } = res;
    //   yelpInfo["hours"] = hours;
    //   yelpInfo["price"] = price;
    //   yelpInfo["rating"] = rating;
    //   yelpInfo["reviewCount"] = review_count;
    // }).then(() => fetchYelpReviews(yelpInfo["id"]))
    //   .then(res => {
    //     yelpInfo["reviews"] = res.reviews;
    //   })
    
  // return yelpInfo;

export const fetchYelpInfo = yelpId =>
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${yelpId}`,
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    method: 'GET'
  })

export const fetchYelpReviews = yelpId =>
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${yelpId}/reviews`,
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    method: 'GET'
  })

// fetchYelp("Archetype", "265 Haywood Rd, Asheville, North Carolina, 28806");