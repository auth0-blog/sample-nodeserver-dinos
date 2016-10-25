# sample-nodeserver-dinos

A small sample [nodejs](http://nodejs.org) server with dinosaurs!

## Setup and Usage

1. `npm install` from root
2. `npm start` launches the node server on [http://localhost:3001](http://localhost:3001)

## Routes

The following public `GET` requests are currently available:

`GET` Route: `/api/dinosaurs` returns an array of dinosaur objects with IDs and names, ie:

```
...
{
	"id": 5,
	"name": "Dracorex"
},
...
```

`GET` Route: `/api/dinosaur/:id` returns an object with a single dinosaur's expanded details, ie:

```
{
	"id": 5,
	"name": "Dracorex",
	"pronunciation": "dray-ko-rex",
	"meaningOfName": "dragon king",
	"diet": "herbivorous",
	"length": "estimated 4m",
	"period": "Late Cretaceous",
	"mya": "66",
	"info": "<em>Dracorex hogwartsia</em> was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum where it was displayed."
}
```

MIT license