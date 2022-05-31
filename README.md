# Документооборот поликлиники

## Запуск приложения

Для разворачивания приложения необходимо установить [Node.js v14](https://nodejs.org/download/release/v14.17.1/)
и базу данных [mongodb](https://www.mongodb.com/try/download).
 
### База данных

```sh
$ mongorestore абсолютный_путь_до_проекта/db-dump/polyclinic
```

### API

```sh
$ cd api
$ npm i
$ npm run dev
```

### Запуск приложения

```sh
$ cd backend
$ npm i
$ npm start
```

## О проекте

Приложение для врачей и пациентов. Пациенты могут просматривать
информацию о врачах и записываться к ним на прием, а врачи
смотреть расписание на день. Для администраторов сайта реализована
небольшая админка для заполнения базы данных.

Используемый стек технологий:

- Vue 2
- Vue-router
- Express.js
- Mongodb

## Возможные доработки

- Реализовать возможность оставлять комментарии о врачах
- Вынести информацию о текущем пользователе во Vuex, чтобы не повторять одинаковые запросы
- Редизайн
- Реализовать возможность отмены приема
- Email-рассылка после записи к врачу
