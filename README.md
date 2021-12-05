# DockerLab8
To jest aplikacja webowa do liczenia k-tego elementu ciągu Fibonacciego

# Polecenie
Budowa: 
```
docker build -t fib .
```
Uruchomienie kontenera:
```
docker run -it --name test --rm -p 8080:80 fib
```
Aplikacja jest wtedy dostepna na localhost:8080
Mozna rowniez zastosowac docker compose:
```
docker compose up
```
