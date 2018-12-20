DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

CREATE TABLE metros (
  id int NOT NULL AUTO_INCREMENT,
  metro varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  city varchar(50) NOT NULL,
  metroId int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE dates (
  id int NOT NULL AUTO_INCREMENT,
  selectedDate varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  dateId int NOT NULL,
  currentStatus boolean NOT NULL default 0,
  partyCount int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  restaurantId int NOT NULL,
  restaurantName varchar(50) NOT NULL,
  cuisineId int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cuisines (
  id int NOT NULL AUTO_INCREMENT,
  cuisineName varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE stops (
--   id int NOT NULL AUTO_INCREMENT,
--   line_id int NOT NULL,
--   station_id int NOT NULL,
--   is_transfer boolean NOT NULL default 0,
--   PRIMARY KEY (id),
--   CONSTRAINT line_station UNIQUE(line_id, station_id)
-- );



INSERT INTO metros (metro)
  VALUES ('Los Angeles');

INSERT INTO cities (city, metroId)
  VALUES (Whittier, 1);

INSERT INTO cities (city, metroId)
  VALUES (Whittier, 2);

INSERT INTO dates (selectedDate)
  VALUES ('12/1/2018');
INSERT INTO dates (selectedDate)
  VALUES ('12/2/2018');
INSERT INTO dates (selectedDate)
  VALUES ('12/3/2018');

['Atlanta/Georgia', ]

['Alameda', 'Alhambra', 'Altadena', 'Anza', 'Arcadia', 'Bakersfield', 'Bellflower', 'Belmont', 'Big Sur', 'Calabasas', 'Canoga Park', 'Capistrano Beach', 'Carson', 'Cerritos', 'Commerse', 'Compton', 'Costa Mesa', 'Cupertino', 'Dana Point', 'Diamond Bar', 'Downey', 'Encino', 'Fairfax', 'Fremont', 'Fullerton', 'Gilroy', 'Glendora', 'Hawthorne', 'Hollywood', 'Humbolt', 'Irvine', 'Joshua Tree', 'La Canada', 'Laguna Beach', 'Lake Forest', 'Lake Tahoe', 'Malibu', 'Mendocino', 'Napa', 'Newport', 'Newport Beach', 'Oakland', 'Oxnard', 'Orange', 'Ojai', 'Palm Springs', 'Palo Alto', 'Pasadena', 'Playa del Rey', 'Pomona', 'Ramona', 'Rancho Dominguez', 'Redondo Beach', 'Rosemead', 'San Bruno', 'San Diego', 'Santa Fe Springs', 'Santa Monica', 'South Pasadena', 'Temecula', 'Topanga', 'Torrance', 'Tustin', 'Universal City', 'Van Nuys', 'Venice', 'Ventura', 'West Covina', 'West Hollywood', 'Westminister', 'Whittier', 'Woodland Hills', 'Yorba Linda', 'Yucca Valley']

['Italian', 'Japanese', 'Sushi', 'Mexican', 'Taco', 'Burger', 'Pasta', 'Pizza', 'Burrito', 'Ramen', 'Chinese', 'Dumpling', 'Indian', 'Fried Rice', 'Curry', 'Mediterranean', 'Cajun', 'Soul', 'Greek', 'Thai', 'Lebanese', 'American', 'French', 'Mediterranean', 'Spanish', 'German', 'Korean', 'Korean BBQ', 'BBQ', 'Vietnamese', 'Pho', 'Eggroll', 'Fried Chicken', 'Sandwich', 'Brazillian', 'Yakitori', 'Salad', 'Vegan', 'Vegetarian', 'Peruvian', 'Chicken', 'Dessert', 'Ice Cream', 'Cake', 'Fries', 'Teriyaki', 'Gyro', 'Ribs']

['TKB Bakery & Deli', 'Little Miss BBQ', 'Katsuya', 'Burger Boss', 'Aruns Indian Kitchen', 'Pizza Company', 'Poke Express', 'Falafelle', 'Saigon Beach Restaurant', 'Yoshinoya', 'Howlin Rays', 'Makai Sushi', 'Sushi House', '786 Degrees Pizza', 'Donuts Hut', 'Fratellino', 'Halls Chophouse', 'Oto Oto Japanese Izakaya', 'The Flinderstreet Cafe', 'Saigon Beach Restaurant', 'Yoshinoya', 'The Red Dot Vegetarian Kitchen', 'Porkys', 'Maple Street Biscuit Company', 'Adobo Taco Grill', 'T Deli', 'Sunny Side Kitchen', 'Sultan Bakery', 'Afghan Bistro', 'Ninis Deli', 'Juana La Cubana Cafe', 'Empa Mundo', 'Bogarts Smokehouse', 'Bite Into Maine', 'Calhouns Texas BBQ', 'Poke Wave', 'Aomori Ramen', 'Tatsu Ramen', 'Hummus Factory', 'Islands Burgers', 'Kabuki Sushi', 'Taco Mexico', 'Los Tacos', 'Joes Kansas City BBQ', 'The Factory Kitchen', 'Bestia', 'Blacksmiths', 'Officine BRERA', 'Terroni', 'Perch', 'Otium', 'Faith & Flower', 'Little Sister', 'Broken Spanish', 'Badmaash', 'Osteria La Buca', 'Ramen Go', 'Ramen Yamadaya', 'Pasta Sisters', 'Mortons SteakHouse', 'Bar Ama', 'Rock N Fish LA Live', 'Sage Vegan Bistro', 'Veggie Grill', 'Tsujita Ramen', 'Hatch Yakitori', 'Atrium', 'Wokcano', 'Wolfgang Puck Bar & Grill', 'Manpuku BBQ', 'Ojiya Japanese', 'Anjin BBQ', 'The Backhouse', 'Benihana', 'Cafe Birdie', 'Harold and Belles Creole Restaurant', 'Gaucho Grill', 'Black Angus', 'PF Changs', 'Romanos Macaroni Grill', 'Buffalo Wild Wings', 'El Torito', 'La Pescadora', 'Taco Guys', 'Sonoras Tacos']

Sandwich House – Cypress, Calif.
Papa’s Best Sandwiches & More – San Dimas, Calif.
Bite Into Maine – Cape Elizabeth, Maine
Calhoun’s Texas Barbeque – Murietta, Calif.
Big Al’s Pizzeria – Maywood, Calif.
Poke Wave – Mission Viejo, Calif.
Beyer Deli –  San Diego
Kenko Sushi – Lincoln, N.J.
Bangers & Brews – Bend, Ore.
Joe Benny’s – Baltimore
Bunz – Huntington Beach, Calif.
Appu’s Cafe – Long Beach, Calif.
Gino’s Deli Stop N Buy – San Antonio, Texas
Prunedale Market – Salinas, Calif.
Carlillos Cocina – Sparks, Nev.
The Melon Seed Deli & Frozen Yogurt – Tacoma, Wash.
Joe’s Kansas City BBQ – Kansas City, Kan.
Barracuda Deli Cafe – St Pete Beach, Fla.
Rainbeau Jo’s – Lihue, Hawaii
FOB Poke Bar – Seattle
Yoyo’s Hot Dog – Houston
Hefty Gyros – Sacramento, Calif.
Yardie Spice – Homestead, Fla.
Los Tacos No.1 – New York
Dar Essalam – Wilsonville, Ore.
Meraki Greek Grill – Las Vegas
Sierra Subs and Salads – Three Rivers, Calif. 
The Alcove – Sunnyside, N.Y.
Chadd’s Bistro – Rochester Hills, Mich.
Cafe La Maude – Philadelphia
The House of Gyros – Mesquite, Texas
Sal, Kris, & Charlie’s Deli – Astoria, N.Y.
Green Corner Restaurant – Mesa
Boteco – Austin, Texas
Pizzamaniac – Vista, Calif.
Un Bien – Seattle
Social – Fort Collins, Colo.
Mini Kabob – Glendale, Calif.
Mr Mamas – Las Vegas
Gaucho Parrilla Argentina – Pittsburgh
Extreme Hummus – Citrus Heights, Calif.
Fox Smokehouse Bbq – Boulder City, Nev.
Classics Malt Shop – San Diego
NoHo Cafe – North Hollywood, Calif.
PDX Sliders – Portland, Ore.
Smiling With Hope Pizza – Reno, Nev.
Sweet Dogs – Miami
Ten Handcrafted American Fare & Spirits – Phoenix]