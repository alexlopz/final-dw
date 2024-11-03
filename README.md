## EXAMEN FINAL

- Clientes:

```bash
curl --location 'http://localhost:3000/api/cliente/creacion' \
--header 'Content-Type: application/json' \
--data '{
    "nombres": "Rene Marcos",
    "apellidos": "Franco Lopez",
    "genero": "M",
    "fecha_nacimiento": "2006-11-03T04:01:13.947Z",
    "estado": true
}'

```

- Agregar informacion adicional de clientes:

```bash
curl --location --request PUT 'http://localhost:3000/api/cliente/infoGeneral/3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "direccion": "Ciudad GT",
    "telefono": "565878976",
    "email": "kin@cliente.com",
    "saldo_mensual": "25,000"
}'
```

- Listado de clientes:

```bash
curl --location 'http://localhost:3000/api/cliente/ListadoGeneral' \
--header 'Content-Type: application/json'
```
