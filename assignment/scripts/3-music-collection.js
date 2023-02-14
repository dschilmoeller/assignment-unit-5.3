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

addToCollection('TestAlbum','TestArtist',1900);

console.log(addToCollection('Europop','Eiffel 65',1999))
console.log(addToCollection('Texas Flood', 'Stevie Ray Vaughn', 1983))
console.log(addToCollection('Le Pop', 'Katzenjammer', 2008))
console.log(addToCollection('A Kiss Before You Go','Katzenjammer', 2011))
console.log(addToCollection('Rockland','Katzenjammer',2015))
console.log(addToCollection('Tonight Alright','Spiderbait',2004))
