## Description

This is a dockerized fork of https://github.com/majoyal/nestjs-microservices-example see repo for a detailed explanation or to run on localhost.

It will run microservices in separate docker containers. To understand the benefits of doing see:
https://www.meritdata-tech.com/resources/whitepaper/digital-engineering-solutions/microservices-architecture-docker-kubernetes/#:~:text=Some%20of%20the%20advantages%20of,therefore%20cost%20and%20resource%2Deffective

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
