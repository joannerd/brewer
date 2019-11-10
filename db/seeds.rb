# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "DemoUser", password: "123456", email: "demo@email.com"})

City.create({name: "Asheville", state: "North Carolina", lat: 35.5951, lng: -82.5515})
City.create({name: "Austin", state: "Texas", lat: 30.2672, lng: -97.7431})
City.create({name: "Boston", state: "Massachusetts", lat: 42.3601, lng: -71.0589})
City.create({name: "Cincinnati", state: "Ohio", lat: 39.1031, lng: -84.5120})
City.create({name: "Denver", state: "Colorado", lat: 39.7392, lng: -104.9903})
City.create({name: "Grand Rapids", state: "Michigan", lat: 42.9634, lng: -85.6681})
City.create({name: "Indianapolis", state: "Indiana", lat: 39.7684, lng: -86.1581})
City.create({name: "Kalamazoo", state: "Michigan", lat: 42.2917, lng: -85.5872})
City.create({name: "Oakland", state: "California", lat: 37.8044, lng: -122.2712})
City.create({name: "Portland", state: "Maine", lat: 45.5051, lng: -122.6750})
City.create({name: "Richmond", state: "Virginia", lat: 37.5407, lng: -77.4360})
City.create({name: "San Diego", state: "California", lat: 32.7157, lng: -117.1611})
City.create({name: "Seattle", state: "Washington", lat: 47.6062, lng: -122.3321})


# Test Breweries

Brewery.create({
  name: "Lord Hobo Brewing Company",
  lat: 42.476323,
  lng: -71.128895,
  address: "5 Draper St, Woburn, MA 01801",
  website: "https://www.lordhobobrewing.com",
  city_id: 1,
  description: "With beer on a pedestal and adventure up our sleeve, we set out to craft style-defining New England beers that highlight paramount traits of quality ingredients. Like us, our beers are elegant yet raw, free-spirited yet sophisticated. Beer has a unique ability to bring all kinds of people together, from the Lords that only enjoy the finer things in life, to the Hobos that work hard to earn their small pleasures, great beer is an accessible luxury. Proudly brewed in Massachusetts, we’re bringing the New England beer experience to thirsty fans everywhere. We relish in the connection and find sanctuary in the beers that unite us. — Lords and Hobos alike, we all deserve to drink like royalty."
})
Brewery.create({
  name: "Bell's Brewery",
  lat: 42.295153,
  lng: -85.578998,
  address: "355 E Kalamazoo Ave, Kalamazoo, MI 49007",
  website: "https://www.bellsbeer.com",
  city_id: 3,
  description: "Bell's Brewery, Inc. is a family-owned brewing company with operations in Comstock and Kalamazoo, Michigan. Bell's brews acclaimed beers such as Hopslam Ale, Oberon Ale, and Two-Hearted Ale. It operates a brewpub and a store selling merchandise and homebrewing supplies at its Kalamazoo location."
})
Brewery.create({
  name: "Lamplighter Brewing Co.",
  lat: 42.368241,
  lng: -71.097918,
  address: "284 Broadway, Cambridge, MA 02139",
  website: "https://www.lamplighterbrewing.com",
  city_id: 1,
  description: "We are a brewery and taproom located in downtown Cambridge. Our focus is on aroma-packed and flavor-driven beers, with an emphasis on New England IPAs, barrel-aged sours, and special seasonals. We brew a variety of one-off batches that allow us to pursue our various whims, and we don’t shy away from funk, twists on tradition, and unique ingredients."
})


# Asheville Breweries

Brewery.create({name: "Archetype Brewing", lat: 35.578240, lng: -82.574930, address: "265 Haywood Rd, Asheville, North Carolina, 28806", website: "http://www.archetypebrewing.com", city_id: 1, description: "Archetype Brewing was founded in 2017, serving up American and Belgian-style beers with a focus on creating complex, mindful, living beer. Offering a wide range of brews, there’s a beer for everyone, from straight forward lagers to intricate barrel-aged saisons. The taproom and brewery are nestled on the corner of Beacham’s Curve in East West Asheville, and provides an open space for the Asheville community to gather and enjoy good company and great beer. Archetype offers a variety of regular events in the taproom including trivia, live music, and sports viewing parties. Archetype beer can be found at restaurants and taprooms throughout the Asheville area, and packaged beers can be found in select craft beer retailers throughout the state."})
Brewery.create({name: "Asheville Brewing Co", lat: 35.5917763, lng: -82.5553054474744, address: "77 Coxe Ave, Asheville, North Carolina, 28801", website: "http://www.ashevillepizza.com", city_id: 1, description: "Asheville’s third brewery opened in 1998 as a mash-up pizza joint, second-run movie theater, and brewpub, all wrapped up in a bright, happy, family-friendly space on Merrimon Avenue in North Asheville. A second brewpub, in downtown Asheville’s hip South Slope area, opened in 2006. That location now houses both our 15-barrel and 7-barrel brewhouses, plus plenty of shiny fermentation tanks from which some of Asheville’s most well-loved, creative, award-winning brews emerge. Our third location, a pizza and beer delivery and pick-up kitchen, opened in South Asheville in 2012. Our mission is great food, quality craft beer, excellent service and fun for all ages (kids, kids-at-heart, and canines). Keeping Asheville Hoppy since 1998!"})
Brewery.create({name: "Ben's Tune-Up / Ben's Beer", lat: 35.5912756, lng: -82.5557931, address: "195 Hilliard Ave, Asheville, North Carolina, 28801", website: "http://www.benstuneup.com", city_id: 1, description: "Ben's Tune-Up is an American sake brewery and Asian-American fusion restaurant with an urban beer garden that's uniquely Asheville."})
Brewery.create({name: "Bhramari Brewhouse", lat: 35.5916676262246, lng: -82.55191879386, address: "101 S Lexington Ave, Asheville, North Carolina, 28801", website: "http://www.bhramaribrewing.com", city_id: 1, description: "Bhramari Brewing Company hasn’t always been our name. As many have found out in this brewing industry, it is hard to find a name that isn’t already taken, but that doesn’t mean it stops being who we are. “Hive Mind” was more than just the original name for our unique brew pub when it was conceived -- it was its founding core. It was dreamt up to be a creative collection of artists sharing their knowledge with each other to build something bigger than any could build by themselves, and the reality has become even better than the dream! There are always challenges to opening any business, but our mission has remained true as Bhramari Brewing Co. is built by the individual talents of our team everyday. Not only has it become a fun place to work, but it has become a place for team members to grow and feel like they’re a part of something bigger than themselves. With passions celebrated and shared freely, our beer, food, and business have become the better and more unique for it…and so it is a more unique name that suits us today: Bhramari Brewing Co. The world’s first word for black bees and the Hindu Goddess of bees, we celebrate this world’s infinite offerings of flavor inspirations to play with and create something completely unique and special just for you. Culinary inspired, locally and globally infused, and experimental at its heart – we at Bhramari Brewing Co. want to always create what inspires us so that you might be inspired as well. Find balance, find whimsy, and discover something completely new in every sip of a Bhramari brew!"})
Brewery.create({name: "Biltmore Brewing Company", lat: 35.595220, lng: -82.551360, address: "1 N Pack Sq C/O Biltmore Winery Estates, Asheville, North Carolina, 28801", website: "http://www.biltmore.com", city_id: 1, description: "Established in 1895, Biltmore is America's largest home, located in the majestic Blue Ridge Mountains of Asheville, NC. Unless otherwise noted, photos are © The Biltmore Company. Just as first envisioned, Biltmore is all about home – welcoming and celebrating family and friends, and extending the spirit of Biltmore beyond our 8,000 acres. It was true in 1895, and it remains true today."})
"Brewery.create({name: ""Burial Beer Co Forestry Camp"", lat: 35.588070, lng: -82.553760, address: ""40 Collier Ave, Asheville, North Carolina, 28803-2719"", website: ""https://burialbeer.com/"", city_id: 1, description: ""Residing in and revitalizing the South Slope District of Asheville, NC, the brewery began its life in summer 2013 as a one-barrel system that grew to a ten-barrel in just over a year. It is now fed from our production facility, barrelhouse and taproom brewery.

Burial’s taproom also houses a full-service kitchen focusing on Asheville terroir in comfortable American dishes. Our menu is designed by Brian Canipelli, owner of Cucina 24 and James Beard Nominee. The Kitchen is open at all hours that the taproom is open and Sundays often being Brunch with a jazz band, when the weather permits. The offerings revolve with seasonal availability of produce, though staples like our grain-fed double cheeseburger and house fermented hot wings always remain.""})"
Brewery.create({name: "Catawba Brewing Co - Asheville", lat: 35.566640, lng: -82.540800, address: "63 Brook St Ste 1, Asheville, North Carolina, 28803", website: "http://www.catawbavalleybrewingcompany.com", city_id: 1, description: "The roots for Catawba Brewing Company are strongly held in the mountains of western North Carolina, more specifically, the Catawba River for which we are named. The river is formed where the Pyatt boys grew up and winds down through Morganton, where the production brewery is located. It was important to us that our new logo and branding reflect that heritage, while also demonstrating our continued expansion beyond the region."})
"Brewery.create({name: ""Green Man Brewing Co"", lat: 35.5886248998363, lng: -82.5536715280212, address: ""27 Buxton Ave, Asheville, North Carolina, 28801"", website: ""http://www.greenmanbrewery.com"", city_id: 1, description: ""The legendary Green Man has existed for centuries but it’s no myth that he’s been brewing great beer in Asheville since 1997. As one of North Carolina’s original breweries, Green Man has been producing some of the beer scene’s most iconic ales. Our offerings are consistently recognized for quality and loyalty to traditional English styles. Additionally, our brewers strive to bring innovative and exciting new flavors to beer-loving folks.

Continuing our evolution we have constructed a 3 story, 20,000 square ft., packaging hall, a “brewtique”, and an indoor/outdoor top floor taproom that overlooks production and the Blue Ridge Mountains! It is right here on the South Slope, next to “Dirty Jack’s” (which is still open) and our production brewery.""})"
Brewery.create({name: "Habitat Brewing Co", lat: 35.5986648, lng: -82.5533973, address: "174 Broadway St, Asheville, North Carolina, 28801", website: "http://www.habitatbrewing.com", city_id: 1, description: "We are a neighborhood brewery on the north end of downtown Asheville providing a warm, inviting space in which to create community around classic craft ales and conversation. "})
"Brewery.create({name: ""Hi-Wire Brewing Big Top Production Facility"", lat: 35.5702055141848, lng: -82.5456631071331, address: ""2 Huntsman Pl, Asheville, North Carolina, 28803-2600"", website: ""http://www.hiwirebrewing.com"", city_id: 1, description: ""At our core, we brew beer we want to drink on a regular basis, beer we can sit down and have multiple pints with friends. Our flagship and seasonal offerings are brewed to be balanced and approachable, how brewers have been striving to brew beers for thousands of years.

Brewing beers with a connection to the past is important to us. We love to brew traditional styles that honor the heritage of our craft and pay respect to those who have crafted beer before us. Yet, as an American craft brewer, we are elated to participate in the culture of experimentation that has developed here. With the opening of the Big Top Production Brewery & Taproom, our South Slope Specialty Brewery has become an experimental hub for creating exciting barrel-aged sour and wild ales in addition to housing our pilot system for recipe development and fun small-batch creations.""})"
Brewery.create({name: "Hillman Beer", lat: 35.5139103, lng: -82.520631, address: "25 Sweeten Creek Rd, Asheville, North Carolina, 28803", website: "http://www.hillmanbeer.com", city_id: 1, description: "Hillman Beer is a small, family-owned business located in Asheville, NC. Brothers Brad and Greig Hillman, and Greig's wife Brandi Hillman, have come together to bring the pub style back to the brewery experience. With an emphasis on quality beer and a focus on classics and comfort,  we hope that our beer and pub atmosphere keep you coming back to Hillman Beer. "})
"Brewery.create({name: ""New Belgium Brewing Co"", lat: 35.5879302, lng: -82.571942933736, address: ""21 Craven St, Asheville, North Carolina, 28806"", website: ""http://www.newbelgium.com"", city_id: 1, description: ""New Belgium Brewing Company, a 100% employee-owned craft brewery located in Fort Collins, Colorado and Asheville, North Carolina, is the maker of Fat Tire Amber Ale and many other craft beers. It was opened in 1991 by Jeff Lebesch and Kim Jordan. In 2016, it produced 957,968 barrels of its various labels. As of 2017, it was the fourth-largest craft brewery and eighth-largest overall brewery in the United States.

Fat Tire, an Amber ale, is the company's flagship beer. The brewery is also one of the largest producers of wood-aged sour beer in the United States; its sour beer flagship is La Folie Sour Brown Ale.""})"
Brewery.create({name: "One World Brewing", lat: 35.594720, lng: -82.552270, address: "10 Patton Ave Ste 002, Asheville, North Carolina, 28801", website: "http://www.oneworldbrewing.com", city_id: 1, description: "One World is an idea of acceptance, respect, and connection. It’s a philosophy of community involvement, environmental protection and social equality that ties us all together. One World means family. It means culture, good vibes, and love, and we strive to put this intention into every craft beer that we brew. Our two locations are gathering places where we come together to share experiences and share our gifts! We place importance in supporting each other and our creativity and celebrating life through our work and play. We collaborate, and partner with one another, as well as host monthly benefits, so that we can all grow and prosper together. We just really enjoy doing this over a great beer or two and we hope that you can join us on this journey. Swing on by and sip some finely crafted brews with us soon."})
Brewery.create({name: "Twin Leaf Brewery", lat: 35.58942485, lng: -82.5545418535317, address: "144 Coxe Ave, Asheville, North Carolina, 28801", website: "http://www.twinleafbrewery.com", city_id: 1, description: "Twin Leaf Brewery will spare no expense to make high quality, world-class beer. We value the do it yourself attitude in all of its aspects and are meticulous and driven to seek perfection in all that we do.With a deep apprecaiton for the Western North Carolina Mountains and a love of all things outdoors,  we are on a quest to minimize our footprint while protecting and advocating for environmental conservation."})
"Brewery.create({name: ""UpCountry Brewing"", lat: 35.581500, lng: -82.604200, address: ""1042 Haywood Rd, Asheville, North Carolina, 28806-2639"", website: ""http://upcountrybrewing.com/"", city_id: 1, description: ""UpCountry Brewing’s mission is to create awesome experiences while sharing our passion for craft beer, local music, and for getting outside. We accomplish this by focusing on the Carolina mountain region where we live and play.

As a community oriented brewery, our West Asheville taproom is the perfect spot to plan your next adventure while catching up with family and friends. With a large backyard, intimate indoor seating, and a generous space for live local music, UpCountry Brewing serves a wide variety of craft beer styles while providing a full brewpub food menu for locals and visitors alike.

UpCountry Brewing was founded in 2016 by John Cochran, a craft beer industry veteran since the mid-1990’s. John has worked many beer-related jobs in his 20+ years in brewing (including co-founding Terrapin Beer Company), and he is excited to get back to his roots by offering a small, local brewery with a spotlight on fun times, good friends, and great beers.""})"
Brewery.create({name: "Wedge Brewing Co", lat: 35.5865571, lng: -82.5665920052359, address: "37 Paynes Way Ste 100, Asheville, North Carolina, 28801", website: "http://www.wedgebrewing.com", city_id: 1, description: "Brewed at the Wedge and sold at the Wedge. This is not a distribution brewery. Malt, hops & adjunct ingredients are of the highest quality and each beer is given the time it needs. Two small Specific Mechanical brewhouses, 10bbl and 7bbl, afford the Wedge the ability to consistently brew small batch beers for customers to enjoy."})
Brewery.create({name: "Wedge Brewing Co", lat: 35.5865571, lng: -82.5665920052359, address: "37 Paynes Way Ste 100, Asheville, North Carolina, 28801", website: "http://www.wedgebrewing.com", city_id: 1, description: "Brewed at the Wedge and sold at the Wedge. This is not a distribution brewery. Malt, hops & adjunct ingredients are of the highest quality and each beer is given the time it needs. Two small Specific Mechanical brewhouses, 10bbl and 7bbl, afford the Wedge the ability to consistently brew small batch beers for customers to enjoy."})



Guide.create({
  title: "Best Craft Beer Bars in Cambridge",
  body: "In the farm-to-table food industry today, it only makes sense that beer lovers are gravitating towards smaller, local brewers. Craft beer has exploded to the point where some are even questioning if there are too many brewers in the United States. For now, craft beer lovers can rejoice in Cambridge where there’s plenty of options from both near and far.",
  city_id: 1
})


BreweryGuide.create({brewery_id: 1, guide_id: 1})
BreweryGuide.create({brewery_id: 3, guide_id: 1})

Favorite.create({user_id: 1, brewery_id: 1})
Favorite.create({user_id: 1, brewery_id: 2})
Favorite.create({user_id: 1, brewery_id: 3})