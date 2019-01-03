c
CREATE DATABASE tableit;

USE tableit;

CREATE TABLE metros (
  id int NOT NULL AUTO_INCREMENT,
  metro varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  city varchar(50) NOT NULL UNIQUE,
  metroId int NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE dates (
--   id int NOT NULL UNIQUE AUTO_INCREMENT,
--   selectedDate varchar(50) NOT NULL UNIQUE,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE reservations (
--   id int NOT NULL UNIQUE AUTO_INCREMENT,
--   reservationTime varchar(50) NOT NULL UNIQUE,
--   dateId int NOT NULL UNIQUE,
--   currentStatus varchar(50) NOT NULL UNIQUE default 0,
--   partyCount int NOT NULL UNIQUE,
--   PRIMARY KEY (id)
-- );

CREATE TABLE restaurants (
  id int NOT NULL UNIQUE AUTO_INCREMENT,
  restaurantName varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE cuisines (
  id int NOT NULL UNIQUE AUTO_INCREMENT,
  cuisineName varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);


