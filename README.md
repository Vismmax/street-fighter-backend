# Street Fighter Server

## Description
Server for browser game Street Fighter.

## Links
[Street Fighter](https://street-fighter-bsa20.herokuapp.com/)

## Instalation

`. build-start`

`npm start`

open http://localhost:3050/

## API  
##### USER:  
`GET /api/users`  - Получение данных о всех пользователях
`GET /api/users/:id`  - Получение данных о пользователе по ID 
`POST /api/users`  - Добавление пользователя
`PUT /api/users/:id`  - Обновление данных о пользователе по ID
`DELETE /api/users/:id` - Удаление пользователя
##### LOGIN:
`POST /api/auth/login` - Логин пользователя
##### FIGHTER:
`GET /api/fighters` - Получение данных о всех бойцах
`GET /api/fighters/:id` - Получение данных о бойце по ID
`POST /api/fighters` - Добавление бойца
`PUT /api/fighters/:id` - Обновление данных о бойце по ID
`DELETE /api/fighters/:id` - Удаление бойца
##### FIGHT:
`GET /api/fighters` - Получение данных о всех боях
`GET /api/fighters/fight/:id` - Получение данных о бое по ID
`POST /api/fighters/fight` - Добавление боя
`POST /api/fighters/fight/:id` - Добавление события боя в лог по ID боя, для записи лога непосредственно во время боя. Входные данные могут быть одиночным событием (объект) либо массивом событий (объектов).
`PUT /api/fighters/fight/:id` - Обновление данных о бое по ID
`DELETE /api/fighters/fight/:id` - Удаление боя
`GET /api/fighters/history` - Получение истории боев выбранных бойцов. Возвращается массив всех проведенных боев.
`POST /api/fighters/history` - Получение истории боев выбранных бойцов. Возвращается массив всех проведенных боев.

## Gratitude
Thanks for the information provided to [Alexandr Tovmach](https://alexandrtovmach.com/) and the [Binary Studio Academy](https://binary-studio.com/academy/) team.
