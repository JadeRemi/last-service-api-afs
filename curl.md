

List of all applicable new curls:

- delete contact

```

curl --location --request DELETE 'localhost:2114/v2/contacts/17' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{}
'

```

- delete company


```

curl --location --request DELETE 'localhost:2114/v2/companies/13' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{}
'

```

- list companies

```


curl --location --request GET 'localhost:2114/v2/companies' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{}
'

```

- list contacts

```

curl --location --request GET 'localhost:2114/v2/contacts' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{}
'

```

- create company

```

curl --location 'localhost:2114/v2/companies/27' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{
 "contactId": 12,
 "name": "Tech Innovations Ltd.",
 "address": "abc",
 "shortName": "TechInnov",
 "businessEntity": "LLC",
 "contract": {
   "no": "CN-2025-001",
   "issueDate": "2025-03-05"
 },
 "type": ["agent"],
 "status": "Active",
 "photos": [
  {
	"name": "0b8fc462dcabf7610a91.png",
	"filepath": "0b8fc462dcabf7610a91.png",
	"thumbpath": "0b8fc462dcabf7610a91_160x160.png"
  }
]
}
'



```

- create contact

```

curl --location 'localhost:2114/v2/contacts/22' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data-raw '{
  "lastname": "Doe",
  "firstname": "John",
  "patronymic": "Michael",
  "phone": "+1234567890",
  "email": "john.doe@example.com"
}
'


```


- generate auth token for the Auth header using login + pass

```
curl --location 'localhost:2114/v2/users/auth' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJUZXN0IEFQSSBqcyBiYWNrZW5kIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjp7ImlkIjoxfX0.ImTZ-fXUWWnf7Mh7zq8JALbbVWQ2pbKce5r4MolXRLY' \
--data '{
 "login": "norahj",
 "password": "password"
}
'
```