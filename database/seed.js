const { connection } = require('./index.js');
// const { Cities, Restaurants, Cuisines } = require('./dbHelpers.js')

let metroList = ['Atlanta/Georgia', 'Boston/New_England', 'Chicago/Illinois', 'Dallas', 'Denver/Colorado', 'Houston', 'Las_Vegas', 'Los_Angeles', 'Miami/South_Florida', 'New Orleans/Louisiana', 'New_York_Area', 'Orange_County', 'San_Francisco_Area', 'San_Diego', 'Seattle_Area']

let laCities = ['Alameda', 'Alhambra', 'Altadena', 'Anza', 'Arcadia', 'Bakersfield', 'Bellflower', 'Belmont', 'Big Sur', 'Calabasas', 'Canoga Park', 'Capistrano Beach', 'Carson', 'Cerritos', 'Commerse', 'Compton', 'Costa Mesa', 'Cupertino', 'Dana Point', 'Diamond Bar', 'Downey', 'Encino', 'Fairfax', 'Fremont', 'Fullerton', 'Gilroy', 'Glendora', 'Hawthorne', 'Hollywood', 'Humbolt', 'Irvine', 'Joshua Tree', 'La Canada', 'Laguna Beach', 'Lake Forest', 'Lake Tahoe', 'Malibu', 'Mendocino', 'Napa', 'Newport', 'Newport Beach', 'Oakland', 'Oxnard', 'Orange', 'Ojai', 'Palm Springs', 'Palo Alto', 'Pasadena', 'Playa del Rey', 'Pomona', 'Ramona', 'Rancho Dominguez', 'Redondo Beach', 'Rosemead', 'San Bruno', 'San Diego', 'Santa Fe Springs', 'Santa Monica', 'South Pasadena', 'Temecula', 'Topanga', 'Torrance', 'Tustin', 'Universal City', 'Van Nuys', 'Venice', 'Ventura', 'West Covina', 'West Hollywood', 'Westminister', 'Whittier', 'Woodland Hills', 'Yorba Linda', 'Yucca Valley']

let atlCities = ["Decatur", "East Atlanta", "East Lake", "Edgewood", "Inman Park", "Kirkwood", "Lake Claire", "Lindridge‑Martin Manor", "Morningside‑Lenox Park", "Old Fourth Ward", "Ormewood Park", "Piedmont Heights", "Poncey-Highland", "Reynoldstown", "Sweet Auburn", "Virginia-Highland"]

let bosCities = ["Melrose", "Brookline", "Newton", "Arlington", "Winchester", "Westborough", "Needham", "Wellesley", "Franklin Town", "Hingham", "Lexington", "Northborough", "Reading", "Dedham", "Norwood", "Kingston", "South Lancaster"]

let chiCities = ["Near North Side", "Lincoln Park", "Lake View", "Near South Side", "West Town", "North Center", "Edison Park", "Lincoln Square", "Near West Side", "Beverly"]

let cuisines = ['Italian', 'Japanese', 'Sushi', 'Mexican', 'Taco', 'Burger', 'Pasta', 'Pizza', 'Burrito', 'Ramen', 'Chinese', 'Dumpling', 'Indian', 'Fried Rice', 'Curry', 'Fusion', 'Cajun', 'Soul', 'Greek', 'Thai', 'Lebanese', 'American', 'French', 'Mediterranean', 'Spanish', 'German', 'Korean', 'Korean BBQ', 'BBQ', 'Vietnamese', 'Pho', 'Eggroll', 'Fried Chicken', 'Sandwich', 'Brazillian', 'Yakitori', 'Salad', 'Vegan', 'Vegetarian', 'Peruvian', 'Chicken', 'Dessert', 'Ice Cream', 'Cake', 'Fries', 'Teriyaki', 'Gyro', 'Ribs']

let restaurantNames = ['TKB Bakery & Deli', 'Little Miss BBQ', 'Katsuya', 'Burger Boss', 'Aruns Indian Kitchen', 'Pizza Company', 'Poke Express', 'Falafelle', 'Pho 44 Restaurant', 'Omega Burger', 'Howlin Rays', 'Makai Sushi', 'Sushi House', '786 Degrees Pizza', 'Donuts Hut', 'Fratellino', 'Halls Chophouse', 'Oto Oto Japanese Izakaya', 'The Flinderstreet Cafe', 'Saigon Beach Restaurant', 'Yoshinoya', 'The Red Dot Vegetarian Kitchen', 'Porkys', 'Maple Street Biscuit Company', 'Adobo Taco Grill', 'T Deli', 'Sunny Side Kitchen', 'Sultan Bakery', 'Afghan Bistro', 'Ninis Deli', 'Juana La Cubana Cafe', 'Empa Mundo', 'Bogarts Smokehouse', 'Bite Into Maine', 'Calhouns Texas BBQ', 'Poke Wave', 'Aomori Ramen', 'Tatsu Ramen', 'Hummus Factory', 'Islands Burgers', 'Kabuki Sushi', 'Taco Mexico', 'Los Tacos', 'Joes Kansas City BBQ', 'The Factory Kitchen', 'Bestia', 'Blacksmiths', 'Officine BRERA', 'Terroni', 'Perch', 'Otium', 'Faith & Flower', 'Little Sister', 'Broken Spanish', 'Badmaash', 'Osteria La Buca', 'Ramen Go', 'Ramen Yamadaya', 'Pasta Sisters', 'Mortons SteakHouse', 'Bar Ama', 'Rock N Fish LA Live', 'Sage Vegan Bistro', 'Veggie Grill', 'Tsujita Ramen', 'Hatch Yakitori', 'Atrium', 'Wokcano', 'Wolfgang Puck Bar & Grill', 'Manpuku BBQ', 'Ojiya Japanese', 'Anjin BBQ', 'The Backhouse', 'Benihana', 'Cafe Birdie', 'Harold and Belles Creole Restaurant', 'Gaucho Grill', 'Black Angus', 'PF Changs', 'Romanos Macaroni Grill', 'Buffalo Wild Wings', 'El Torito', 'La Pescadora', 'Taco Guys', 'Sonoras Tacos', 'Sweet Dogs', 'Marios Peruvian Restaurant', 'Ruths Chris Steak House', 'Pho Ha', 'Pho 55', 'NoHo Cafe']

// let reservations = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const mapSingleItem = (arr) => {
    return arr.map(el => {
        return [el];
    })
}

const mapCities = (arr, mId) => {
    return arr.map(location => {
        return [location, mId]
    })
}

// const mapReservations = (arr, dId) => {
//     return arr.map(el => {
//         const row = {
//             reservationTime: el, dateId: dId, currentStatus: 'F', partyCount: 0
//         };
//         return row
//     })
// }

// Metro populating

let metroArr = mapSingleItem(metroList);
connection.query("INSERT INTO metros (metro) VALUES ?", [metroArr], function (err, result) {
    if (err) { console.log('err', err) };
    console.log('result', result);
});

// Cities populating

let laArr = mapCities(laCities, 8);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [laArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let atlArr = mapCities(atlCities, 1);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [atlArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let bosArr = mapCities(bosCities, 2);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [bosArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let chiArr = mapCities(chiCities, 3);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [chiArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});


// Populating Restaurants 

let restaurantList = mapSingleItem(restaurantNames);
connection.query("INSERT INTO restaurants (restaurantName) VALUES ?", [restaurantList], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

// Populating Cuisines

let cuisinesList = mapSingleItem(cuisines);
connection.query("INSERT INTO cuisines (cuisineName) VALUES ?", [cuisinesList], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

// // Populating Reservations
//     let metro = mapSingleItem(cities);
//     connection.query("INSERT INTO reservations (reservationTime, dateId, currentStatus, partyCount) VALUES ?", [city], function (err, result) {
//     //         if (err) throw err;
//     //         console.log(result);
//     });


connection.end();