# DockerLab8
To jest aplikacja webowa do liczenia k-tego elementu ciągu Fibonacciego

## Polecenie
Budowa: 
```
docker build -t fib .
```
Uruchomienie kontenera:
```
docker run -it --name test --rm -p 8080:80 fib
```
Aplikacja jest wtedy dostępna na localhost:8080

Można rownież zastosować docker compose:
```
docker compose up
```
Albo tez docker compose ze sledzeniem zmian w kodzie (z wolumenami):
```
docker compose -f docker-compose_vol.yml up
```
