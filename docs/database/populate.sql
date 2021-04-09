/************************
 * POPULATE DATABASE
 ************************/

INSERT INTO USERS(id, name, login, password)
VALUES ('94cb05e9', 'John Doe', 'johndoe@mail.com', 'm3N5&U');

INSERT INTO EVENTS(id, name, description, userId, startAt, endsAt)
VALUES
  ('66fbec12', 'Interview', 'Interview for fullstack developer at Token Lab company', '94cb05e9', '2021-04-15 08:00:00', '2021-04-15 09:00:00'),
  ('ab72bddc', 'Chess Championship', 'Magnus Carlsen Invitational Tournament online in Chess.com', '94cb05e9', '2021-02-05 12:00:00', '2021-02-05 14:00:00'),
  ('90cefc65', 'Hackathon', 'Online NASA hackathon', '94cb05e9', '2020-11-10 18:00:00', '2020-11-15 18:00:00'),
  ('941d9664', 'Street League', 'Street League Skateboarding in Tampa', '94cb05e9', '2022-11-20 12:00:00', '2022-11-27 12:00:00'),
  ('f9c8585b', 'Guitar Duel', 'Guitar duel against Steve Vai in London', '94cb05e9', '2021-05-08 15:00:00', '2021-05-08 20:00:00'),
  ('76ed75e1', 'JavaScript Meetup', 'JavaScript meeting in São Paulo', '94cb05e9', '2021-12-14 13:30:00', '2021-12-14 18:30:00'),
  ('ef2df35f', 'React Conf', 'Online React Conference', '94cb05e9', '2023-01-25 08:00:00', '2023-01-25 18:00:00'),
  ('915472a0', 'Live BrazilJS', 'BrazilJS Live in YouTube', '94cb05e9', '2021-04-27 10:00:00', '2021-04-27 11:00:00'),
  ('861c8eb6', 'Company Happy Hour', 'Company Happy Hour at the restaurant in São Paulo', '94cb05e9', '2022-06-07 18:00:00', '2022-06-07 00:00:00'),
  ('1b0f42d0', 'Trip to Waterfall', 'Trip to Lavras Novas, MG', '94cb05e9', '2021-04-28 08:00:00', '2021-05-05 12:00:00')
;

INSERT INTO EVENTS
VALUES ('ee85fc6c', 'Begin Backend Development', 'Begin development of the API with NodeJS', '94cb05e9');
