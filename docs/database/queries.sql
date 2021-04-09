/************************
 * DATABASE QUERIES
 ************************/

-- Autenticação do Usuário
SELECT U.id
FROM USERS U
WHERE U.login = 'johndoe@mail.com' AND U.password = 'm3N5&U';

-- Quantidade de eventos que já ocorreram:
SELECT COUNT(*)
FROM EVENTS E
WHERE DATE(E.endsAt) < CURRENT_DATE AND E.userId = '94cb05e9'
ORDER BY E.endsAt DESC;

-- Eventos que já ocorreram:
SELECT *
FROM EVENTS E
WHERE DATE(E.endsAt) < CURRENT_DATE AND E.userId = '94cb05e9'
GROUP BY E.id
ORDER BY E.endsAt ASC;

-- Quantidade de eventos que irão ocorrer:
SELECT COUNT(*)
FROM EVENTS E
WHERE DATE(E.startAt) >= CURRENT_DATE AND E.userId = '94cb05e9';

-- Próximos eventos:
SELECT *
FROM EVENTS E
WHERE DATE(E.startAt) >= CURRENT_DATE AND E.userId = '94cb05e9'
GROUP BY E.id
ORDER BY E.startAt ASC;

-- Eventos que irão ocorrer hoje:
SELECT *
FROM EVENTS E
WHERE DATE(E.startAt) = CURRENT_DATE AND E.userId = '94cb05e9'
GROUP BY E.id
ORDER BY E.startAt ASC;

-- Quantos eventos irão ocorrer no mês X. Ex: X = Abril (04)
SELECT COUNT(*)
FROM EVENTS E
WHERE EXTRACT(MONTH from DATE(E.startAt)) = 04 AND EXTRACT(YEAR FROM DATE(E.startAt)) = EXTRACT(YEAR FROM now()) AND E.userId = '94cb05e9';

-- Quais eventos irão ocorrer no mês X. Ex: X = Abril (04)
SELECT *
FROM EVENTS E
WHERE EXTRACT(MONTH from DATE(E.startAt)) = 04 AND EXTRACT(YEAR FROM DATE(E.startAt)) = EXTRACT(YEAR FROM now()) AND E.userId = '94cb05e9'
GROUP BY E.id
ORDER BY E.startAt ASC;

-- Evento que está ocorrendo agora:
SELECT *
FROM EVENTS E
WHERE DATE(E.startAt) = CURRENT_DATE AND EXTRACT(HOUR FROM E.startAt) = EXTRACT(HOUR FROM now()) AND E.userId = '94cb05e9';

-- Horário do primeiro evento de hoje:
SELECT EXTRACT(HOUR FROM E.startAt), EXTRACT(MINUTE FROM E.startAt)
FROM EVENTS E
WHERE DATE(E.startAt) = CURRENT_DATE
LIMIT 1;

