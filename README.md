# REST API

This project contains REST API which allows 
- Adding words to collection
- Deleting words from collection
- Getting the number of appearances of the word in collection
- Getting all unique words from collection

## Tech

Open source projects used in REST_API
- Node.js
- Express


## Setup

REST_API requires [Node.js] v10+ to run.

Install [Node.js](https://nodejs.org/en/download/) including npm.

Create a package.json file
```sh
npm init
```

Install express and nodemon package

```sh
npm install express nodemon
```

Install body-parser package

```sh
npm install body-parser
```
Install fs package

```sh
npm install fs
```
Start application
```sh
npm start
```

## REST API Specification
### Add words
Adding word into collection.
#### Request
`POST http://localhost:3000/add`
```
{
    "word": "example"
}
```
#### Response
```
{
    "message": "success",
    "collection": [
        "example",
        "example1",
        "example2",
        "example"
    ]
}
```
### Delete words
Deleting word from collection.
#### Request
`POST http://localhost:3000/delete`
```
{
    "word": "example"
}
```
#### Response
```
{
    "message": "success",
    "collection": [
        "example1",
        "example2"
    ]
}
```
### Count of words
Getting the number of appearances of the word in collection.
#### Request
`GET http://localhost:3000/reduce`
#### Response
```
{
    "message": "success",
    "reduplication": [
        {
            "word": "example",
            "count": 2
        },
        {
            "word": "example1",
            "count": 1
        },
        {
            "word": "example2",
            "count": 1
        }
    ]
}
```
### Unique words
Getting all unique words from collection.
#### Request
`GET http://localhost:3000/unique`
#### Response
```
{
    "message": "success",
    "collection": [
        "example",
        "example1",
        "example2"
    ]
}
```
## Collection
Collection is stored as JSON array containing strings with words in collection.json file in main directory.
## Test
Project was tested using Postman for executing REST API request to the local server and checking responses.
