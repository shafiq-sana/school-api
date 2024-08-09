# Python code to POST documents to the REST API

import requests

url = 'http://localhost:3000/schools'

document = {
    "name": "School-A",
    "status": "old",
    "startTime": "8:30am",
    "endTime": "1:30pm",
    "shift": "Morning",
    "address": {
        "town": "Nehar Kot",
        "tehsil": "Barkhan",
        "district": "Barkhan",
        "state": "Balochistan",
        "address": "address-1",
        "latitude": 29.79,
        "longitude": 69.47
    },
    "hasProjector": False,
    "hasLaptop": False,
    "organization": {
        "name": "publicschools"
    }
}

response = requests.post(url, json=document)

print(response.status_code)
print(response.json())
