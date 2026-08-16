# API Usage

The API runs on:

`http://localhost:4000`


---
## 1. Root Route Check

**GET**

`http://localhost:4000/`

Used to check the root endpoint of the API.

-------
## 2. Health Route Check

**GET**

`http://localhost:4000/health`

Used to check whether the API is running correctly.

---

## 3. Get All Items

**GET**

`http://localhost:4000/api/soaps`

Returns all available soap items.

---
## 4. Get Item by ID

**GET**

`http://localhost:4000/api/soaps/s3`

Replace `s3` with the ID of the soap you want to retrieve.

---

## 5. Create Item

**POST**

`http://localhost:4000/api/soaps`

Request body:

```json
{
    "name": "Kids Soap",
    "category": "Children",
    "condition": "New",
    "description": "Gentle on the skin."
}
```
