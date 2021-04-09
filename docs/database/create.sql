/************************
 * DATABASE CREATION
 ************************/

SET TIMEZONE TO 'America/Sao_Paulo';

CREATE TABLE USERS (
  id varchar PRIMARY KEY,
  name varchar NOT NULL,
  login varchar NOT NULL,
  password varchar NOT NULL
);

CREATE TABLE EVENTS (
  id varchar PRIMARY KEY,
  name varchar NOT NULL,
  description varchar,
  userId varchar,
  startAt timestamp WITH TIME ZONE DEFAULT now(),
  endsAt timestamp WITH TIME ZONE DEFAULT (now() + INTERVAL '1 hour')
);

ALTER TABLE EVENTS ADD FOREIGN KEY (userId) REFERENCES USERS (id);
