# sample-nodeserver-dinos

A small sample [nodejs](http://nodejs.org) server with dinosaurs!

## Setup and Usage

1. Make sure [NodeJS (with npm)](http://nodejs.org) is installed.
2. Clone or download this repository to a directory of your choice.
3. Run the command `npm install` from the project root directory.
4. Executing `npm start` launches the node server on [http://localhost:3001](http://localhost:3001).

## Routes

The following public `GET` requests are currently available:

### `/api/dinosaurs`

`GET`: returns an array of simple dinosaur objects with `id`s and `name`s, ie:

```
...
{
	"id": 5,
	"name": "Dracorex"
},
{
	"id": 6,
	"name": "Elasmosaurus"
}
...
```

### `/api/dinosaur/:id`

`GET`: returns an object with a dinosaur's expanded details, ie:

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