
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
VALUES('furby_master420', 'bingo'),
('furbo', 'bop');

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES('Bad Furby','https://upload.wikimedia.org/wikipedia/en/7/70/Furby_picture.jpg',1),
('Sleepy Furby','https://upload.wikimedia.org/wikipedia/en/7/70/Furby_picture.jpg',1),
('Sneezy Furby','https://upload.wikimedia.org/wikipedia/en/7/70/Furby_picture.jpg',1),
('Dopey Furby','https://upload.wikimedia.org/wikipedia/en/7/70/Furby_picture.jpg',2);