# Students RESTful API

## Usage

Start the MongoDB server.

```bash
npm install --dev
npm run devStart
```

Use [http://localhost:3000/studnets]().

To connect to MongoDB:

```
mongosh
connect("localhost/students")
>show dbs
>use students
>db.students.find()
```

## Docker

build docker image
```
docker build --env-file .env.docker -t studentdb .
```

start containers
```
docker network create studentdb-network
# remember to use name mongo, the container name acts as hostname
docker run --network studentdb-network -p 27017:27017 -d --name mongo mongo
docker run --network studentdb-network -p 3000:3000 -d --env-file .env.docker studentdb
```
or
```
docker-compose up
```

## Reference

- [https://www.youtube.com/watch?v=fgTGADljAeg]()
- [https://www.youtube.com/watch?v=ofme2o29ngU]()
