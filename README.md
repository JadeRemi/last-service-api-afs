# Тестовое задание для Backend разработчика

Необходимо **на базе данного проекта** реализовать АПИ, который предоставляет CRUD-интерфейс для работы с компаниями и связанными с ними контактами.

## Требования

* Результат выполнения задания должен быть выложен в любой открытый репозиторий
* К проекту должна быть приложена инструкция по запуску, а также дамп БД, содержащий несколько записей о компаниях/контактах
* В качестве БД нужно использовать MongoDB или PostgreSQL

## Минимальный набор задач
> Для просмотра моков данных возвращаемых в ответ на запросы к существующим в коде эндпоинтам 
использовать служебный метод получения авторизационного токена.

* Реализовать авторизацию по логин/паролю.
* Реализовать методы получения/сохранения данных компаний и контактов. Пример форматов данных есть в "заглушках" в коде проекта.
* Реализовать дополнительно метод получения списка компаний. Должна быть возможность отфильтровать по статусу и/или типу компании, отсортировать по имени и/или дате создания. Также метод получения списка должен предлагать параметры для реализации пагинации.
* Реализовать метод удаления контакта.
* Добавить компании новое свойство "адрес".

## Расширенный набор задач ( будет плюсом )

* Дополнить необходимые автоматические тесты
* Дополнить недостающую документацию к API
* Любой рефакторинг и/или оптимизация на усмотрение соискателя

## Установка и запуск API

```
npm i
npm run start-dev
```

* страница с этим описанием - http://localhost:2114/v1
* страница с документацией - http://localhost:2114/v1/docs

