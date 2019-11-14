require 'open-uri'

ActiveRecord::Base.transaction do
  User.delete_all
  City.delete_all
  Brewery.delete_all
  Guide.delete_all
  BreweryGuide.delete_all
  # Favorite.delete_all

  User.create({username: "DemoUser", password: "123456", email: "demo@email.com"})
  User.create({username: "DemoUser2", password: "123456", email: "demo2@email.com"})

  City.create({name: "Asheville", state: "North Carolina", lat: 35.5951, lng: -82.5515}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/asheville.jpg"), filename: "asheville.jpg")

  City.create({name: "Austin", state: "Texas", lat: 30.2672, lng: -97.7431}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/austin.jpg"), filename: "austin.jpg")

  City.create({name: "Boston", state: "Massachusetts", lat: 42.3601, lng: -71.0589}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/boston.jpg"), filename: "boston.jpg")

  City.create({name: "Cincinnati", state: "Ohio", lat: 39.1031, lng: -84.5120}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/cincinatti.jpg"), filename: "cincinatti.jpg")

  City.create({name: "Denver", state: "Colorado", lat: 39.7392, lng: -104.9903}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/denver.jpg"), filename: "denver.jpg")

  City.create({name: "Grand Rapids", state: "Michigan", lat: 42.9634, lng: -85.6681}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/grandrapids.jpg"), filename: "grandrapids.jpg")

  City.create({name: "Indianapolis", state: "Indiana", lat: 39.7684, lng: -86.1581}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/indianapolis.jpg"), filename: "indianapolis.jpg")

  City.create({name: "Kalamazoo", state: "Michigan", lat: 42.2917, lng: -85.5872}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/kalamazoo.jpg"), filename: "kalamazoo.jpg")

  City.create({name: "Portland", state: "Maine", lat: 45.5051, lng: -122.6750}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/portland.jpg"), filename: "portland.jpg")

  City.create({name: "San Diego", state: "California", lat: 32.7157, lng: -117.1611}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/sandiego.jpg"), filename: "sandiego.jpg")

  City.create({name: "San Francisco", state: "California", lat: 37.8044, lng: -122.2712}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/oakland2.jpg"), filename: "oakland2.jpg")

  City.create({name: "Seattle", state: "Washington", lat: 47.6062, lng: -122.3321}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/seattle.jpg"), filename: "seattle.jpg")




  Brewery.create({name: "Archetype Brewing", lat: 35.578240, lng: -82.574930, address: "265 Haywood Rd, Asheville, North Carolina, 28806", website: "http://www.archetypebrewing.com", city_id: 1, description: "Archetype Brewing was founded in 2017, serving up American and Belgian-style beers with a focus on creating complex, mindful, living beer. Offering a wide range of brews, there’s a beer for everyone, from straight forward lagers to intricate barrel-aged saisons. The taproom and brewery are nestled on the corner of Beacham’s Curve in East West Asheville, and provides an open space for the Asheville community to gather and enjoy good company and great beer. Archetype offers a variety of regular events in the taproom including trivia, live music, and sports viewing parties. Archetype beer can be found at restaurants and taprooms throughout the Asheville area, and packaged beers can be found in select craft beer retailers throughout the state."})
  Brewery.create({name: "Asheville Brewing Co", lat: 35.5917763, lng: -82.5553054474744, address: "77 Coxe Ave, Asheville, North Carolina, 28801", website: "http://www.ashevillepizza.com", city_id: 1, description: "Asheville’s third brewery opened in 1998 as a mash-up pizza joint, second-run movie theater, and brewpub, all wrapped up in a bright, happy, family-friendly space on Merrimon Avenue in North Asheville. A second brewpub, in downtown Asheville’s hip South Slope area, opened in 2006. That location now houses both our 15-barrel and 7-barrel brewhouses, plus plenty of shiny fermentation tanks from which some of Asheville’s most well-loved, creative, award-winning brews emerge. Our third location, a pizza and beer delivery and pick-up kitchen, opened in South Asheville in 2012. Our mission is great food, quality craft beer, excellent service and fun for all ages (kids, kids-at-heart, and canines). Keeping Asheville Hoppy since 1998!"})
  Brewery.create({name: "Ben's Tune-Up / Ben's Beer", lat: 35.5912756, lng: -82.5557931, address: "195 Hilliard Ave, Asheville, North Carolina, 28801", website: "http://www.benstuneup.com", city_id: 1, description: "Ben's Tune-Up is an American sake brewery and Asian-American fusion restaurant with an urban beer garden that's uniquely Asheville."})
  Brewery.create({name: "Bhramari Brewhouse", lat: 35.5916676262246, lng: -82.55191879386, address: "101 S Lexington Ave, Asheville, North Carolina, 28801", website: "http://www.bhramaribrewing.com", city_id: 1, description: "Bhramari Brewing Company hasn’t always been our name. As many have found out in this brewing industry, it is hard to find a name that isn’t already taken, but that doesn’t mean it stops being who we are. “Hive Mind” was more than just the original name for our unique brew pub when it was conceived -- it was its founding core. It was dreamt up to be a creative collection of artists sharing their knowledge with each other to build something bigger than any could build by themselves, and the reality has become even better than the dream! There are always challenges to opening any business, but our mission has remained true as Bhramari Brewing Co. is built by the individual talents of our team everyday. Not only has it become a fun place to work, but it has become a place for team members to grow and feel like they’re a part of something bigger than themselves. With passions celebrated and shared freely, our beer, food, and business have become the better and more unique for it…and so it is a more unique name that suits us today: Bhramari Brewing Co. The world’s first word for black bees and the Hindu Goddess of bees, we celebrate this world’s infinite offerings of flavor inspirations to play with and create something completely unique and special just for you. Culinary inspired, locally and globally infused, and experimental at its heart – we at Bhramari Brewing Co. want to always create what inspires us so that you might be inspired as well. Find balance, find whimsy, and discover something completely new in every sip of a Bhramari brew!"})
  Brewery.create({name: "Biltmore Brewing Company", lat: 35.595220, lng: -82.551360, address: "1 N Pack Sq C/O Biltmore Winery Estates, Asheville, North Carolina, 28801", website: "http://www.biltmore.com", city_id: 1, description: "Established in 1895, Biltmore is America's largest home, located in the majestic Blue Ridge Mountains of Asheville, NC. Unless otherwise noted, photos are © The Biltmore Company. Just as first envisioned, Biltmore is all about home – welcoming and celebrating family and friends, and extending the spirit of Biltmore beyond our 8,000 acres. It was true in 1895, and it remains true today."})
  Brewery.create({name: "Burial Beer Co Forestry Camp", lat: 35.588070, lng: -82.553760, address: "40 Collier Ave, Asheville, North Carolina, 28803-2719", website: "https://burialbeer.com/", city_id: 1, description: "Residing in and revitalizing the South Slope District of Asheville, NC, the brewery began its life in summer 2013 as a one-barrel system that grew to a ten-barrel in just over a year. It is now fed from our production facility, barrelhouse and taproom brewery.

  Burial’s taproom also houses a full-service kitchen focusing on Asheville terroir in comfortable American dishes. Our menu is designed by Brian Canipelli, owner of Cucina 24 and James Beard Nominee. The Kitchen is open at all hours that the taproom is open and Sundays often being Brunch with a jazz band, when the weather permits. The offerings revolve with seasonal availability of produce, though staples like our grain-fed double cheeseburger and house fermented hot wings always remain."})
  Brewery.create({name: "Catawba Brewing Co - Asheville", lat: 35.566640, lng: -82.540800, address: "63 Brook St Ste 1, Asheville, North Carolina, 28803", website: "http://www.catawbavalleybrewingcompany.com", city_id: 1, description: "The roots for Catawba Brewing Company are strongly held in the mountains of western North Carolina, more specifically, the Catawba River for which we are named. The river is formed where the Pyatt boys grew up and winds down through Morganton, where the production brewery is located. It was important to us that our new logo and branding reflect that heritage, while also demonstrating our continued expansion beyond the region."})
  Brewery.create({name: "Green Man Brewing Co", lat: 35.5886248998363, lng: -82.5536715280212, address: "27 Buxton Ave, Asheville, North Carolina, 28801", website: "http://www.greenmanbrewery.com", city_id: 1, description: "The legendary Green Man has existed for centuries but it’s no myth that he’s been brewing great beer in Asheville since 1997. As one of North Carolina’s original breweries, Green Man has been producing some of the beer scene’s most iconic ales. Our offerings are consistently recognized for quality and loyalty to traditional English styles. Additionally, our brewers strive to bring innovative and exciting new flavors to beer-loving folks.

  Continuing our evolution we have constructed a 3 story, 20,000 square ft., packaging hall, a “brewtique”, and an indoor/outdoor top floor taproom that overlooks production and the Blue Ridge Mountains! It is right here on the South Slope, next to “Dirty Jack’s” (which is still open) and our production brewery."})
  Brewery.create({name: "Habitat Brewing Co", lat: 35.5986648, lng: -82.5533973, address: "174 Broadway St, Asheville, North Carolina, 28801", website: "http://www.habitatbrewing.com", city_id: 1, description: "We are a neighborhood brewery on the north end of downtown Asheville providing a warm, inviting space in which to create community around classic craft ales and conversation. "})
  Brewery.create({name: "Hi-Wire Brewing Big Top Production Facility", lat: 35.5702055141848, lng: -82.5456631071331, address: "2 Huntsman Pl, Asheville, North Carolina, 28803-2600", website: "http://www.hiwirebrewing.com", city_id: 1, description: "At our core, we brew beer we want to drink on a regular basis, beer we can sit down and have multiple pints with friends. Our flagship and seasonal offerings are brewed to be balanced and approachable, how brewers have been striving to brew beers for thousands of years.

  Brewing beers with a connection to the past is important to us. We love to brew traditional styles that honor the heritage of our craft and pay respect to those who have crafted beer before us. Yet, as an American craft brewer, we are elated to participate in the culture of experimentation that has developed here. With the opening of the Big Top Production Brewery & Taproom, our South Slope Specialty Brewery has become an experimental hub for creating exciting barrel-aged sour and wild ales in addition to housing our pilot system for recipe development and fun small-batch creations."})
  Brewery.create({name: "Hillman Beer", lat: 35.5139103, lng: -82.520631, address: "25 Sweeten Creek Rd, Asheville, North Carolina, 28803", website: "http://www.hillmanbeer.com", city_id: 1, description: "Hillman Beer is a small, family-owned business located in Asheville, NC. Brothers Brad and Greig Hillman, and Greig's wife Brandi Hillman, have come together to bring the pub style back to the brewery experience. With an emphasis on quality beer and a focus on classics and comfort,  we hope that our beer and pub atmosphere keep you coming back to Hillman Beer. "})

  Brewery.create({name: "New Belgium Brewing Co", lat: 35.5879302, lng: -82.571942933736, address: "21 Craven St, Asheville, North Carolina, 28806", website: "http://www.newbelgium.com", city_id: 1, description: "New Belgium Brewing Company, a 100% employee-owned craft brewery located in Fort Collins, Colorado and Asheville, North Carolina, is the maker of Fat Tire Amber Ale and many other craft beers. It was opened in 1991 by Jeff Lebesch and Kim Jordan. In 2016, it produced 957,968 barrels of its various labels. As of 2017, it was the fourth-largest craft brewery and eighth-largest overall brewery in the United States. Fat Tire, an Amber ale, is the company's flagship beer. The brewery is also one of the largest producers of wood-aged sour beer in the United States; its sour beer flagship is La Folie Sour Brown Ale."})

  Brewery.create({name: "One World Brewing", lat: 35.594720, lng: -82.552270, address: "10 Patton Ave Ste 002, Asheville, North Carolina, 28801", website: "http://www.oneworldbrewing.com", city_id: 1, description: "One World is an idea of acceptance, respect, and connection. It’s a philosophy of community involvement, environmental protection and social equality that ties us all together. One World means family. It means culture, good vibes, and love, and we strive to put this intention into every craft beer that we brew. Our two locations are gathering places where we come together to share experiences and share our gifts! We place importance in supporting each other and our creativity and celebrating life through our work and play. We collaborate, and partner with one another, as well as host monthly benefits, so that we can all grow and prosper together. We just really enjoy doing this over a great beer or two and we hope that you can join us on this journey. Swing on by and sip some finely crafted brews with us soon."})

  Brewery.create({name: "Twin Leaf Brewery", lat: 35.58942485, lng: -82.5545418535317, address: "144 Coxe Ave, Asheville, North Carolina, 28801", website: "http://www.twinleafbrewery.com", city_id: 1, description: "Twin Leaf Brewery will spare no expense to make high quality, world-class beer. We value the do it yourself attitude in all of its aspects and are meticulous and driven to seek perfection in all that we do.With a deep apprecaiton for the Western North Carolina Mountains and a love of all things outdoors,  we are on a quest to minimize our footprint while protecting and advocating for environmental conservation."})

  Brewery.create({name: "UpCountry Brewing", lat: 35.581500, lng: -82.604200, address: "1042 Haywood Rd, Asheville, North Carolina, 28806-2639", website: "http://upcountrybrewing.com/", city_id: 1, description: "UpCountry Brewing’s mission is to create awesome experiences while sharing our passion for craft beer, local music, and for getting outside. We accomplish this by focusing on the Carolina mountain region where we live and play.

  As a community oriented brewery, our West Asheville taproom is the perfect spot to plan your next adventure while catching up with family and friends. With a large backyard, intimate indoor seating, and a generous space for live local music, UpCountry Brewing serves a wide variety of craft beer styles while providing a full brewpub food menu for locals and visitors alike.

  UpCountry Brewing was founded in 2016 by John Cochran, a craft beer industry veteran since the mid-1990’s. John has worked many beer-related jobs in his 20+ years in brewing (including co-founding Terrapin Beer Company), and he is excited to get back to his roots by offering a small, local brewery with a spotlight on fun times, good friends, and great beers."})

  Brewery.create({name: "Wedge Brewing Co", lat: 35.5865571, lng: -82.5665920052359, address: "37 Paynes Way Ste 100, Asheville, North Carolina, 28801", website: "http://www.wedgebrewing.com", city_id: 1, description: "Brewed at the Wedge and sold at the Wedge. This is not a distribution brewery. Malt, hops & adjunct ingredients are of the highest quality and each beer is given the time it needs. Two small Specific Mechanical brewhouses, 10bbl and 7bbl, afford the Wedge the ability to consistently brew small batch beers for customers to enjoy."})

  Brewery.create({name: "Wedge Brewing Co", lat: 35.5865571, lng: -82.5665920052359, address: "37 Paynes Way Ste 100, Asheville, North Carolina, 28801", website: "http://www.wedgebrewing.com", city_id: 1, description: "Brewed at the Wedge and sold at the Wedge. This is not a distribution brewery. Malt, hops & adjunct ingredients are of the highest quality and each beer is given the time it needs. Two small Specific Mechanical brewhouses, 10bbl and 7bbl, afford the Wedge the ability to consistently brew small batch beers for customers to enjoy."})














  Brewery.create({name: "Jester King Brewery", lat: 30.2547264, lng: -98.0824692, address: "13187 Fitzhugh Rd, Austin, Texas, 78736-6510", website: "http://www.jesterkingbrewery.com", city_id: 2, description: "Jester King is a farmhouse brewery committed to mixed culture and spontaneous fermentation. Our beers incorporate well water, local grains, fruits and vegetables, foraged plants, and native yeast and bacteria so as to make beer uniquely tied to a time, place, and people. Our inspiration comes from the classic farmhouse breweries of Europe that embrace principles of subtlety, restraint, patience, full attenuation and interesting fermentation character."})

  Brewery.create({name: "Oasis Texas Brewing Company", lat: 30.043267, lng: -98.151206, address: "6548 Comanche Trl Ste 301, Austin, Texas, 78732-1210", website: "http://www.otxbc.com", city_id: 2, description: "We are a Brewery and fast casual restaurant, producing iconic, rustic session beers. Our restaurant creates delicious, well-crafted food using the best ingredients available. Sitting at the very top of the Oasis Texas Development, we provide breathtaking views of Lake Travis and the Texas Hill Country to enjoy over a cold one.

  Since opening in 2014, OTXBC has won two medals at the Great American Beer Fest for their year-round beers. Our beers can be found throughout Texas and are now available in Alabama and Florida."})

  Brewery.create({name: "Barking Armadillo Brewing", lat: 30.633263, lng: -97.677986, address: "Austin, Texas, 78723-3342", website: "https://barkingarmadillo.com/", city_id: 2, description: "We are a family owned operation committed to brewing quality beer using carefully selected ingredients to bring you fresh and tasty pours. We started brewing as a team in 2013 and have evolved our craft over the years. Our offerings will include our staple brews as well as rotating guest taps, hand-selected wines, and non-alcoholic beverages. We look forward to bringing our community together through taproom events and plan to support local members of the community in any way we can. Our hope is that our taproom is your local neighborhood gathering space for all. Follow our progress here and say hi – we’d love to meet you! Thanks in advance for all your support!"})

  Brewery.create({name: "Barrel Assembly", lat: 30.2672, lng: -97.7431, address: "Austin, Texas, 78751-3019", website: "http://www.barrelassembly.com", city_id: 2, description: "Our goal is to help Texas breweries create the most exciting beers ever. We are just getting started and have a long way to go before we are fully functional, but we’ll keep you posted as we walk this journey."})

  Brewery.create({name: "(512) Brewing Co", lat: 30.223230, lng: -97.768590, address: "407 Radam Ln Ste F200, Austin, Texas, 78745-1197", website: "http://www.512brewing.com", city_id: 2, description: "(512) Brewing Company is a microbrewery located in the heart of Austin, brewing for the community using as many local, domestic and organic ingredients as possible. The original practice of small breweries supplying their immediate community has been nearly lost, and with it, the quality that is possible from small handcrafted batches. Our beers are built on old world English and Belgian recipes, but enhanced to celebrate bold domestic ingredients. Made with Austin’s mineral rich water, the (512) beers taste like none other."})

  Brewery.create({name: "4th Tap Brewing Cooperative", lat: 30.3852024, lng: -97.7118913, address: "10615 Metric Blvd, Austin, Texas, 78758-4520", website: "https://www.4thtap.coop/", city_id: 2, description: "4th Tap is a small, worker-owned brewery located in north Austin. A couple of Austin-natives banded together with a few transplants from Houston, San Antonio, and Corpus Christi to build the 4th Tap brewery in their old stomping grounds of north/central Austin. After 6 years of work, they finally opened their doors to the public in late 2015 with a focus on inspired ingredients to make honest beer.

  The taproom was designed to bring together their neighborhood community - those who live and work in the vicinity - to share in 4th Tap's love of beer, art, music, and much more."})

  Brewery.create({name: "Adelbert's Brewery LLC", lat: 30.3826286, lng: -97.7201589, address: "2314 Rutland Dr Ste 100, Austin, Texas, 78758-5273", website: "http://www.adelbertsbeer.com", city_id: 2, description: "Since its founding in 2011, Adelbert’s Brewery has grown to become an award-winning microbrewery in Austin, Texas. We believe excellent beer requires quality ingredients and hands-on brewing. We use non-GMO Bohemian floor malted barley, Noble hops, and fresh yeast propagated at the brewery. While brewing, we utilize a multi-temperature decoction mash to extract a more complex flavor from our grains.

  Adelbert’s Brewery is a tribute to our founder Scott Hovey’s brother, George Adelbert “Del” Hovey. Del always took time to enjoy a beer with family and friends, recounting his travels from around the world. Our mainstay beers are named after stories Del loved to tell. We took his spirit of adventure and put it into each beer. With our vast array of beer styles, you’re sure to find a brew that suits you.

  Scott, founder and brewmaster of Adelbert’s Brewery, believes in brewing the beer he likes to drink.
  A passionate homebrewer for many years, he found his calling when sampling aged Belgian beers at his first Craft Brewer’s Conference (CBC). In 2010, he completed the Master Brewers Association of the Americas’ Malting and Brewing Science Course."})

  Brewery.create({name: "Batch Craft Beer and Kolaches", lat: 30.310260, lng: -97.687870, address: "Austin, Texas, 78723", website: "http://www.batchatx.com", city_id: 2, description: "Batch Craft Beer and Kolaches is an Austin, family-owned and operated kolache bakery, taproom, and retail craft beer shop. Our pastry chefs elevate the classic Central Texas Czech pastry to gourmet status through creative variations on the traditional dish and by teaming up with local vendors for fresh, high quality ingredients.

  The curated beer selection features the best of local breweries, the exploding domestic craft beer scene, and the newest and oldest breweries in Europe and beyond. Batch offers a full espresso and coffee program through a partnership with Greater Goods Roasting."})

  Brewery.create({name: "Austin Beerworks", lat: 30.3795705, lng: -97.729844442969, address: "3001 Industrial Ter, Austin, Texas, 78758-7609", website: "http://www.austinbeerworks.com", city_id: 2, description: "Austin, these are the folks who brew your beer. We’ve got backgrounds ranging from military, hair styling, pro disc golf, corporate finance, and some it’s probably best not to discuss publicly. The one thing we all have in common? A deep love and knowledge of craft beer. That and seeing people trip. We know it's mean, but it makes us laugh.

  There’s nothing like drinking our beers fresh out of the tank. Sure it’s 103 degrees and you’re standing on a concrete floor next to a hot tank and velvet painting of Sloth from the Goonies – but don’t forget that drinking out of the tank thing. It’s more than worth it. You’ll see. To see our hours and what's currently on tap, head over here."})

  Brewery.create({name: "Black Star Co-op", lat: 30.3383262, lng: -97.718977, address: "7020 Easy Wind Dr Ste 100, Austin, Texas, 78752-2373", website: "http://www.blackstar.coop", city_id: 2, description: "Here at Black Star, we like to brew interesting, creative and flavorful beers that are still clean and drinkable for the Texas heat. Outside of the traditional 4 main ingredients in beer(malt, water, yeast and hops) we love to experiment with new and interesting ingredients and processes. Seasonality is the name of the game, and with our portfolio of over 55 recipes we are constantly brewing something new.

  Black Star Co-op is the world’s first cooperatively-owned and worker self-managed brewpub. We are owned by a community of more than 3,000 individuals and organizations, and democratically managed by our Workers' Assembly."})
  Brewery.create({name: "Celis Brewery", lat: 30.380220, lng: -97.715860, address: "10001 Metic Blvd., Austin, Texas, 78758", website: "http://www.celisbeers.com", city_id: 2, description: "In the Spring of 1992, my father, Pierre Celis, flew from Belgium to the United States to start a new brewery in the great state of Texas.  No one suspected that he carried something very precious, concealed in his tube socks.  It was the original yeast strain Pierre had been using to brew his world-famous Belgian-style Wit beer for the past 30 years.  And there was no way he was going to brew without it.

  The first Celis Brewery opened on July 11th in 1992.  It was an immediate success.  Turns out Texans really liked our beer! Before we “crazy Belgians” arrived, most Texans were drinking one of “the big three” brands on the market. The small craft breweries that we all know and love today simply did not exist. When Pierre Celis started brewing his beloved beer, he created a craft beer that changed everything.

  Exactly 25 years to the day it first opened, the legendary beer is back, better than ever at Celis Brewery 2.0. Along the way in the Spring of 2011, we lost my Dad.  But Pierre’s spirit and his commitment to quality lives on—along with his original yeast strain."})

  Brewery.create({name: "Circle Brewing Company", lat: 30.391030, lng: -97.720860, address: "2340 W Braker Ln Ste B, Austin, Texas, 78758-4542", website: "http://www.circlebrewing.com", city_id: 2, description: "In 2010, Circle Brewing Co. was founded by childhood friends, Ben Sabel and Judson Mulherin. We began with little money and an over-abundance of passion. With some help from our friends and family, we pooled the money to retain a lease and start construction on the brewery in March of that year. After a long and grueling buildout, a few equipment delays, and a peppering of a little good and a little bad luck, we brewed our first batch of beer on December 9th, 2010, our ENVY Amber. "})








  Brewery.create({name: "Boston Bowl", lat: 42.2948560502166, lng: -71.047997482376, address: "820 William T Morrissey Blvd, Boston, Massachusetts, 02122", website: "http://www.deadwoodbrewery.com", city_id: 3, description: "Boston Bowl, a Phillips Family company, offers fresh beer brewed on the premises with the opening of Deadwood Café and Brewery. With its bright contemporary décor highlighted by a trio of stainless steel brewing tanks, Deadwood is both a stand-alone destination and a welcome addition to Boston Bowl's dining and entertainment complex."})

  Brewery.create({name: "Boston Beer Works", lat: 42.364473, lng: -71.0603412, address: "112 Canal St, Boston, Massachusetts, 02114", website: "http://www.beerworks.net", city_id: 3, description: "Since 1992...yes 1992...we have been brewing great beers and serving great food in a fun and friendly atmosphere. We’ve grown from our original location across from Fenway Park to locations North, South and West of Boston and greatly appreciate you, our loyal patrons.

  Throughout 2017, to celebrate 25 years and with a look to the next 25, we will be rolling out many new things....from new menu items to new beers.  We welcome your input, whether that be for new beer names or new ingredients you’d like to see on the menu."})
  Brewery.create({name: "Backlash Beer Co", lat: 42.327641, lng: -71.074791, address: "152 Hampden St, Boston, MA 02119", website: "http://backlashbeer.com/", city_id: 3, description: "Backlash Beer was born curious. We were tired of conventional mass-produced, tasteless beer and wondered: Why settle for this crap? So, July of 2011 we set out to create beer with backbone.

  After contract brewing at various locations for years, a series of hazy decisions led us to buy our first fermenter and put down roots in Roxbury, MA -- opening the doors to our taproom in September of 2018.

  While we’ve grown since those early days, we still brew in small batches that defy the corporatization of craft. With curiosity at our core, we brew in defiance."})
  Brewery.create({name: "Cheeky Monkey Brewing Co", lat: 42.34729, lng: -71.0946215, address: "3 Lansdowne St, Boston, Massachusetts, 02215", website: "http://www.cheekymonkeyboston.com", city_id: 3, description: "Cheeky Monkey is a person containing incredible amounts of awesomeness through use of sarcasm. Cheeky Monkey Brewing Co. is excited to bring sarcasm and freshly brewed beers to Lansdowne Street. Going far beyond your average brewery, Cheeky Monkey creates a one of a kind experience in Boston, featuring cross cultured street food and entertainment classics.

  Brian Watson has been brewing the highest quality products for decades and is one of the most highly respected and celebrated BrewMasters on the planet. As a globally respected BrewMaster, Brian has won more than 100 international medals and set up breweries in North America, China, the UK, Ireland and Australia.

  Jason McCloud is our on site Brewery Manager. Jason’s passion for craft beer developed while working at a liquor store. He continues to research and learn more about the history of craft beer, the brewing process and where the future of craft beer is headed. He loves what he does and is ready to help create one of a kind brews for Cheeky Monkey.

  Brian brings his world renowned brews to Boston with the collaboration of Jason and our team using local ingredients and area trends. The end result is a world class beer made right on Lansdowne Street."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/cheekymonkey1.jpg"), filename: "cheekymonkey1.jpg")

  Brewery.create({name: "Democracy Brewing", lat: 42.3552962282976, lng: -71.0623157813541, address: "35 Temple Pl, Boston, Massachusetts, 02111", website: "http://www.democracybrewing.com", city_id: 3, description: "Democracy Brewing is a brewery and restaurant located at Downtown Crossing in Boston, MA. committed to demonstrating that a successful business can be democratically governed and worker-operated. Located at 35 Temple Place, serving fresh craft beer and a full menu daily from our 100% scratch kitchen.  The brewery is a perfect gathering place in the tradition of the meeting places and town halls that shaped the fight for democracy."})
  Brewery.create({name: "Harpoon Brewery", lat: 42.3465637, lng: -71.0348293, address: "306 Northern Ave Ste 2, Boston, Massachusetts, 02210", website: "http://www.harpoonbrewery.com", city_id: 3, description: "Harpoon Brewery is an American brewery, with plants in Boston, Massachusetts, and Windsor, Vermont. Founded in 1986, the brewery was the first company to obtain a permit to manufacture and sell alcohol in the Commonwealth of Massachusetts in more than 25 years. In 2000, it purchased the former Catamount Brewery plant in Windsor. As of 2013, it was the twelfth-largest craft brewery and 19th-largest overall brewery in the United States.

  The brewery is best known for its Harpoon India Pale Ale. It brews multiple other year-round beers including the award-winning Dark, UFO Hefeweizen, UFO Raspberry Hefeweizen, UFO White, and Boston Irish Stout. It also brews several house beers at Boston bars, including 'Sevens Ale' for The Seven's Ale House in Beacon Hill.

  Harpoon has seasonal beers, including an Octoberfest Marzen style Ale and Harpoon Camp Wannamango Another line of beers from Harpoon is its '100 Barrel Series', which consists of a number of one of a kind batches.

  Locally, Harpoon has become famous for their annual festivals that they hold at the brewery. Their St. Patrick's Day, Harpoonfest and Octoberfest festivals have become a staple in the Boston party scene. These events include music, food, and beer. Harpoon also organizes an annual 5-mile run to benefit The Angel Fund and the Harpoon Point to Point to benefit the Vermont Food Bank."})

  Brewery.create({
    name: "Lord Hobo Brewing Company",
    lat: 42.476323,
    lng: -71.128895,
    address: "5 Draper St, Woburn, MA 01801",
    website: "https://www.lordhobobrewing.com",
    city_id: 3,
    description: "With beer on a pedestal and adventure up our sleeve, we set out to craft style-defining New England beers that highlight paramount traits of quality ingredients. Like us, our beers are elegant yet raw, free-spirited yet sophisticated. Beer has a unique ability to bring all kinds of people together, from the Lords that only enjoy the finer things in life, to the Hobos that work hard to earn their small pleasures, great beer is an accessible luxury. Proudly brewed in Massachusetts, we’re bringing the New England beer experience to thirsty fans everywhere. We relish in the connection and find sanctuary in the beers that unite us. — Lords and Hobos alike, we all deserve to drink like royalty."
  }).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/lordhobo-b.jpg"), filename: "lordhobo-b.jpg")

  Brewery.create({
    name: "Lamplighter Brewing Co.",
    lat: 42.368241,
    lng: -71.097918,
    address: "284 Broadway, Cambridge, MA 02139",
    website: "https://www.lamplighterbrewing.com",
    city_id: 3,
    description: "We are a brewery and taproom located in downtown Cambridge. Our focus is on aroma-packed and flavor-driven beers, with an emphasis on New England IPAs, barrel-aged sours, and special seasonals. We brew a variety of one-off batches that allow us to pursue our various whims, and we don’t shy away from funk, twists on tradition, and unique ingredients."
  }).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/lamplighter-b.jpg"), filename: "lamplighter-b.jpg")

  Brewery.create({name: "Mighty Squirrel", lat: 42.3502282, lng: -71.0569929, address: "411 WAVERLEY OAKS RD,
  WALTHAM, MA 02452", website: "http://www.mightysquirrel.com", city_id: 3, description: "We don’t have our own brewery yet, so we have partnered with the von Trapp family who has a state-of-the-art craft brewery at their Trapp Family Lodge in beautiful Stowe, Vermont. The Lodge is situated in the mountains and is designed in the European tradition by the family that inspired “The Sound of Music.” They have a lot of fun outdoor activities on their property from cross-country skiing to yoga, tennis, hiking, fitness classes, and swimming.

  Someday we hope to build our own brewery, and in the meantime, Mighty Squirrel is having fun swimming in the shiny fermentation tanks at the von Trapp Brewery!"})

  Brewery.create({name: "Night Shift Brewing", lat: 42.406040, lng: -71.067940, address: "87 Santilli Hwy, Everett, MA 02149", website: "https://nightshiftfamily.com/", city_id: 3, description: "Night Shift Brewing has its roots in a small kitchen on Josephine Ave in Somerville, MA. In 2007, Co-Founders Rob, Mike, and Michael began homebrewing at night, making beers for friends and family that they hoped were more interesting and flavorful than the commercial options on shelves. 

  In 2012, the trio moved their hobby to a small Everett warehouse and launched the the business. They relied on a “create better” mindset and their passionate community of loyal customers to quickly grow their staff, production, and distribution in the local market. Today, Night Shift Brewing operates locations in Everett and Boston MA, and distributes beer throughout MA, as well as in select areas of NY. "}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/nightshift1.jpg"), filename: "nightshift1.jpg")

  Brewery.create({name: "Samuel Adams Brewery", lat: 42.314330, lng: -71.103400, address: "30 Germania St Ste 1, Boston, Massachusetts, 02130", website: "http://www.samueladams.com", city_id: 3, description: "Samuel Adams is the flagship brand of the Boston Beer Company. The brand name (often shortened to Sam Adams) was chosen in honor of Founding Father of the United States Samuel Adams. Adams inherited his father's brewery on King Street (modern day State Street). Some histories say he was a brewer, while others describe him as a maltster. The Samuel Adams brewery is located in Boston, Massachusetts, United States, where visitors can take a tour, and shop beers and merchandise. Samuel Adams beer is brewed by the Boston Beer Company, which was founded by Jim Koch and Rhonda Kallman in Cincinnati, Ohio. Koch comes from a long line of Cincinnati brewers, and Samuel Adams beer was started using a recipe now known as the Samuel Adams Boston Lager.

  The Boston Brewery is where all our beers get their start, with the exception of Boston Lager, which was born in our founder Jim Koch's kitchen. It is the smallest of our three breweries, but it is the most important. At Sam Adams, each year we travel to Germany to select the world's best Heirloom aroma hops for our Boston Lager. Big Industrial beers are made with bittering hops purchased on the global commodity markets. While these provide a lot of bitter they do not have great aroma. Samuel Adams Boston Lager."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/samadams-b.jpg"), filename: "samadams-b.jpg")

  Brewery.create({
    name: "Bell's Brewery",
    lat: 42.295153,
    lng: -85.578998,
    address: "355 E Kalamazoo Ave, Kalamazoo, MI 49007",
    website: "https://www.bellsbeer.com",
    city_id: 8,
    description: "Bell's Brewery, Inc. is a family-owned brewing company with operations in Comstock and Kalamazoo, Michigan. Bell's brews acclaimed beers such as Hopslam Ale, Oberon Ale, and Two-Hearted Ale. It operates a brewpub and a store selling merchandise and homebrewing supplies at its Kalamazoo location."
  })



  Brewery.create({name: "Ale Industries", lat: 37.7761111, lng: -122.2281897, address: "3096 E 10th St, Oakland, California, 94601", website: "http://www.aleindustries.com", city_id: 11, description: "In 2009 Ale Industries set out with a rebellious spirit, an environmentally-conscious endeavor striving to spread the blissful experience of a craft. We unapologetically refuse to let our beers be categorized into styles, types, or profiles because we believe it relegates our vision of craft beer from a verb to a noun, from a spirit to a product.

  We pioneer brewing technologies to save energy and reduce waste because we understand that investing in the environment will nurture the communities we care about, allowing them to flourish and grow. Oakland, California is our home, where we aim to foster connections with our neighbors and friends.

  Ale Industries is not just in the business of producing craft beer. Ale Industries is for the preservation of craft beer and its founding principals: challenging both your and our notion of what beer is, can, or should be."})

  Brewery.create({name: "Diving Dog Brewhouse", lat: 37.807739, lng: -122.2698881, address: "1802 Telegraph Ave, Oakland, California, 94612", website: "http://www.divingdogbrew.com", city_id: 11, description: "Diving Dog Brewhouse is a craft beer bar with 30 taps and brew-on-premises equipment which allow individuals to brew their own beer on-site. The Brewhouse is located directly across the street from the Fox Theatre."})

  Brewery.create({name: "Ghost Town Brewing", lat: 37.8139174766419, lng: -122.284439629224, address: "1960 Adeline St, Oakland, California, 94607", website: "http://www.ghosttownbrewing.com", city_id: 11, description: "Ghost Town Brewing is a craft brewery founded in West Oakland, CA.  Our  beers  are served in our West Oakland taproom and at the finest craft beer-focused joints throughout  Northern California.

  EL-D-50 Juicy IPA has passed its clinical trials and is ready for consumption. El-D-50 is a pernicious 6.5% ABV with 50 IBUs of El Dorado and a touch of Citra. The heavy dose of El Dorado is paired with an expressive yeast strain to help maximize the fruitiness of the hop, with its prominent notes of nectarines, pears, and orange rind. El-D-50 is a small, experimental batch, but it's to die for.⁠"}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/ghosttown.jpg"), filename: "ghosttown.jpg")

  Brewery.create({name: "Novel Brewing Company", lat: 37.837819, lng: -122.282003, address: "6510 San Pablo Ave, Oakland, California, 94608", website: "http://novelbrewing.com", city_id: 11, description: "Novel Brewing Company is a narrative about who we are, where we've been, and what the future holds. The story is told through the art and science of brewing beer, and the careful curation of artisan snack foods for our local community. Within the pages of Novel Brewing Company are chapters that will be written by our taproom patrons. These chapters will provide nourishment for new stories and the development of new characters. The scenes will extend beyond the boundaries of the brewery and spill into the surrounding neighborhoods, quenching the thirsts of long time friends, sidekicks, and newly discovered cohorts. It is the mission of Novel Brewing Company to help sustain a sense of connectedness through beer, food, and community."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/novelbrewing.jpg"), filename: "novelbrewing.jpg")

  Brewery.create({name: "Old Kan Beer & Co", lat: 37.7995945, lng: -122.2879928, address: "95 Linden St, Oakland, California, 94607", website: "http://www.old-kan.com", city_id: 11, description: "Adam and his wife Alice first found this place in March of 2005. Despite the dirt floors with no plumbing, and their complete lack of experience and money, they knew that this was where they wanted to share their vision for what a community-focused brewery could look like in Oakland. Finally, after years of persistence and resilience, they were able to open Oakland’s first production brewery in 50 years called Linden Street Brewery. Linden Street quickly became a valuable and integral part of the social fabric that helped spawn the incredible growth we see in Oakland’s beer scene today. Linden Street Brewery has since moved to a new location, but Adam and Alice remain where they feel most inspired and most capable of continuing with their mission for the community.

  Now, in partnership with James Syhabout, Adam is excited to offer beers under the “Old Kan” flag! While Adam is proud for the way Linden Street Brewery defined this place, now he gets to make beers that define a lifestyle. Oakland deserves a beer that’s primary purpose is to serve as social currency, with the power to remind people of what they they love about their town and the ability to contribute to its success. Adam isn’t interested in being considered one of Oakland’s most creative or most awarded brewers, as much as he strives to be known for giving Oaklanders something to be proud of."})

  Brewery.create({name: "Original Pattern Brewing Company", lat: 37.796075, lng: -122.2718245, address: "292 4th St, Oakland, California, 94607", website: "http://www.originalpatternbeer.com", city_id: 11, description: "Original Pattern Brewing Company is an award winning employee owned brewery and tasting room in Oakland, California. Our mission is to build a brewery and tasting room that focuses meticulously on quality and freshness, where we can personally share our beers directly with the local community.  With a love for the science and art of fermentation, you will always find something new and interesting on tap.

  We are pleased to announce that we took home a Silver Medal at the 2018 Great American Beer Festival for our Belgian Dubbel, Call of the Void in the other Belgian-Style Ale category."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/originalpattern.jpg"), filename: "originalpattern.jpg")

  Brewery.create({name: "Roses' Taproom", lat: 37.8143551, lng: -122.2683709, address: "4930 Telegraph Ave, Oakland, California, 94609", website: "http://www.rosestaproom.com", city_id: 11, description: "Family-friendly neighborhood beer bar for housemade pints & upscale snacks in sleek quarters.

  Rose’s Taproom opened on the first day of July in the Temescal neighborhood of Oakland, bringing to life the community-driven vision of husband-and-wife team Hillary Huffard, and Luke Janson. It’s a small brewery and taproom, the result of the duo’s passion for homebrewing, and desire for a place that wasn’t “just another beer place.” And don’t call Rose’s a beer garden— there are no picnic benches (or even outdoor space) at this spot."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/rosestaproom.jpg"), filename: "rosestaproom.jpg")

  Brewery.create({name: "Temescal Brewing", lat: 37.8303644, lng: -122.2645038, address: "4115 Telegraph Ave, Oakland, California, 94609", website: "http://www.temescalbrewing.com", city_id: 11, description: "We know that good beer brings people together—and we started Temescal Brewing in 2016 to do just that. 
  We craft vibrant and delicious beer for our neighborhood and our pals and we’ve created a welcoming space full of Temescal vibes for everyone to enjoy.

  We brew uncompromisingly delicious beer and take pride in bringing a softer, lighter, thoughtful approach to everything we do. We believe beer is fuel for community, and strive to be a welcoming place for folx from all walks of life."}).photo.attach(io: open("https://brewer-dev.s3-us-west-1.amazonaws.com/guides/temescal.jpg"), filename: "temescal.jpg")

  Brewery.create({name: "Woods Bar & Brewery", lat: 37.8069575, lng: -122.2704253, address: "1701 Telegraph Ave, Oakland, California, 94612", website: "http://www.woodsbeer.com", city_id: 11, description: "Woods Beer & Wine Co. is a family of bars, brewpubs, and wineries around the Bay Area.  We make creative, small-batch beer and wine inspired by nature, place, and tradition."})



  Guide.create({
    title: "Best Breweries in Boston",
    body: "In the farm-to-table food industry today, it only makes sense that beer lovers are gravitating towards local brewers. Craft beer has exploded to the point where some are even questioning if there are too many brewers in the United States. For now, beer lovers can rejoice in Boston where there’s plenty of options from both near and far.",
    city_id: 3,
    user_id: 1
  })

  Guide.create({
    title: "Best Oakland Brews",
    body: "Oakland is all but immune to the advance of Karl the Fog, making it the best place to soak up the sun with a beer in hand. Head to one of these beer gardens, restaurants, and bars for a day or night of outdoor fun. Many of them are cool with both kids and dogs — and all of them are cool. Check out these spots for a weekend (or weekday, if you’re lucky) of fun in the sun.",
    city_id: 11,
    user_id: 1
  })

  Guide.create({
    title: "Joe's San Francisco Picks",
    body: "There's never been a better time to have a beer in San Francisco. Now home to as many breweries as there were before prohibition, the city hosts an impressive, fast-paced brewing culture. As beer booms, there have been plenty of acquisitions and stumbling blocks, but locally, the business continues grow and evolve. Right now, right here in SF, these 20 breweries with tap rooms are making and serving the most interesting beers you're likely to see anywhere.",
    city_id: 11,
    user_id: 1
  })

  BreweryGuide.create({brewery_id: 35, guide_id: 1, order: 1})
  BreweryGuide.create({brewery_id: 36, guide_id: 1, order: 2})
  BreweryGuide.create({brewery_id: 38, guide_id: 1, order: 3})
  BreweryGuide.create({brewery_id: 39, guide_id: 1, order: 4})
  BreweryGuide.create({brewery_id: 32, guide_id: 1, order: 5})


  BreweryGuide.create({brewery_id: 44, guide_id: 2, order: 1})
  BreweryGuide.create({brewery_id: 47, guide_id: 2, order: 2})
  BreweryGuide.create({brewery_id: 43, guide_id: 2, order: 3})
  BreweryGuide.create({brewery_id: 48, guide_id: 2, order: 4})
  BreweryGuide.create({brewery_id: 46, guide_id: 2, order: 5})

  BreweryGuide.create({brewery_id: 44, guide_id: 3, order: 1})
  BreweryGuide.create({brewery_id: 47, guide_id: 3, order: 2})
  BreweryGuide.create({brewery_id: 43, guide_id: 3, order: 3})
  BreweryGuide.create({brewery_id: 48, guide_id: 3, order: 4})
  BreweryGuide.create({brewery_id: 46, guide_id: 3, order: 5})

  Favorite.create({user_id: 1, brewery_id: 36})
end