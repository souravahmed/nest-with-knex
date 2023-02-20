# Base Microservice Repository 
Docker, Nest, MongoDB, MySQL, PHPMyadmin
<br>
<br>

## Running instruction

Step 1: Clone repository
```shell 
  git clone https://github.com/monarchmart/base_repo.git
  cd base_repo
```

Step 2: copy .env.example to .env
<br>
Step 3: Run docker compose

```shell
  docker-compose build
  docker-compose up
```

This will build docker image and docker containers. You can get/update PORT and Credentials of different containers from .env file

```js
  APP_CONTAINER_NAME=nest_mongo
  APP_PORT=3020
  APP_DEBUG_PORT=8021

  # MongoDB Environment Variables
  MONGODB_PORT=27019
  MONGODB_USER=root
  MONGODB_PASSWORD=password

  # MySQL Environment Variables
  MYSQL_PORT=3309
  MYSQL_DATABASE=nestjs
  MYSQL_ROOT_USER=root
  MYSQL_ROOT_PASSWORD=password

  # PHPMyadmin Environment Variables
  PHPMYADMIN_PORT=8085

  REDIS_PASSWORD=eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
  REDIS_PORT=6379
```