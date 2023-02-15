# Unit 5, Part 3: Music Collection

This unit, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

## Topics Covered

- objects
- HTML & CSS

## Part 3 - Building a Music Collection

Update the `3-music-collection.js` file to do the following:

> While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

### Required Features

XX - Create a variable `collection` that starts as an empty array.

XX - Add a function named `addToCollection`. This function should:
  X- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  X- Create a new object having the above properties
  X- Add the new object to the end of the `collection` array
  X- Return the newly created object

XX - Test the `addToCollection` function:
  X- Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  X - Console.log each album as added using the returned value.
  X - After all are added, console.log the `collection` array.

- Add a function named `showCollection`. This function should:
 X- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
 X - Console.log the number of items in the array.
 X - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

X - Test the `showCollection` function.

- Add a function named `findByArtist`. This function should:
X  - Take in `artist` (a string) parameter
X  - Create an array to hold any results, empty to start
X  - Loop through the `collection` and add any objects with a matching artist to the array.
X  - Return the array with the matching results. If no results are found, return an empty array.

X - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file!


### Stretch goals

X- Create a function called `search`. This function should:
X  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
X  - The returned output from `search` should meet these requirements:
X    - Return a new array of all items in the `collection` matching *all* of the search criteria.
X    - If no results are found, return an empty array.
X    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

X - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
X - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria.
    - If the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
X  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!



## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
