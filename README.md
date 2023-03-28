## Description

This is a dockerized fork of https://github.com/majoyal/nestjs-microservices-example see repo for a detailed explanation or to run on localhost.

This repo exists to run nest js microservices in distinct docker containers and configure correct networking settings not included in the original repo. To appreciate the benefits of containerising microservices [read this article](https://blog.dreamfactory.com/what-are-containerized-microservices/)

## Docker compose notes: 

- uses a custom network
- only exposes the http port to the 
- all microservice ports are internal on network only available to eachother
- uses bind mounts so not need to create separate docker images

## Installation

```bash
$ yarn
```

or

```bash
$ npm install
```

## Running the micro services.
Open two terminal windows and run docker compose to start both services.

To run the `api-service`:
```bash
$ npm insall
$ docker compose up -d
```

When both services are started and running, go to http://localhost:3000 to trigger communication and observe the terminal windows. 

## License

[MIT licensed](LICENSE) extneded from original repo.
