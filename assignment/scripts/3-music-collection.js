console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    let newAlbum = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(newAlbum);
    return newAlbum;
}


console.log(addToCollection('Europop','Eiffel 65',1999))
console.log(addToCollection('Texas Flood', 'Stevie Ray Vaughn', 1983))
console.log(addToCollection('Le Pop', 'Katzenjammer', 2008))
console.log(addToCollection('A Kiss Before You Go','Katzenjammer', 2011))
console.log(addToCollection('Rockland','Katzenjammer',2015))
console.log(addToCollection('Tonight Alright','Spiderbait',2004))
console.log(collection)


function showCollection(array) {
    console.log("There are " + array.length + " items in the array.")
    for (album of array) {
        console.log( (album.albumTitle) + ' by ' + (album.albumArtist) + ', published in ' + (album.albumYearPublished))
    }
}

console.log(showCollection(collection));

// I am not aware of a way to include collection array in the below without specifying it as part of the function.
// function findByArtist(artist, collection) {
//     let searchArray = [];
//     for (let i=0; i < collection.length; i++) {
//         if (collection[i] === artist) {
//             searchArray.push(collection[i].albumArtist);
//         } 
//     } 
// }