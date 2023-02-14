console.log('***** Music Collection *****')

let collection = [];

//addToCollection Function
function addToCollection (title, artist, yearPublished) {
    let newAlbum = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(newAlbum);
    return newAlbum;
}

console.log('--- Adding Music to Collection Start ---')
console.log(addToCollection('Europop','Eiffel 65',1999))
console.log(addToCollection('Texas Flood', 'Stevie Ray Vaughn', 1983))
console.log(addToCollection('Le Pop', 'Katzenjammer', 2008))
console.log(addToCollection('A Kiss Before You Go','Katzenjammer', 2011))
console.log(addToCollection('Rockland','Katzenjammer',2015))
console.log(addToCollection('Tonight Alright','Spiderbait',2004))
console.log(addToCollection('Unknown Album', 'Ray Charles', 1957))
console.log(addToCollection('Unknown Album 2','Ray Charles', 1957))
//console.log(collection)


//showCollection Function
function showCollection(array) {
    console.log("There are " + array.length + " items in the array.")
    for (album of array) {
        console.log( (album.albumTitle) + ' by ' + (album.albumArtist) + ', published in ' + (album.albumYearPublished))
    }
}

console.log('--- Show Collection Output Start ---')
showCollection(collection);


//findByArtist Function
function findByArtist(artist) {
    let findByArtistArray = [];
    for (let i=0; i < collection.length; i++) {
        // testing only, clutters up output otherwise.
        //console.log('looking at', collection[i] );
        if (collection[i].albumArtist === artist) {
            findByArtistArray.push(collection[i]);
        } 
    } return findByArtistArray;
} // end findByArtist
//positioning of the [i]'s is very important and tricky!!
console.log('--- findByArtist Output Start ---')

console.log('Searching for Stevie Ray Vaugh', findByArtist('Stevie Ray Vaughn'));
console.log('Searching for Katzenjammmer', findByArtist('Katzenjammer'));
console.log('Searching for Billy Idol', findByArtist('Billy Idol'));



// Stretch Goal 1
function search(searchInput) {
    let searchArray = [];
    for (let i=0; i<collection.length; i++) {
        if (searchInput.artist === collection[i].albumArtist && searchInput.year === collection[i].albumYearPublished) {
            searchArray.push(collection[i]);
            console.log[searchArray];
        }
    } return searchArray;
} // end search

console.log('--- Stretch Goal 1 ---')
console.log('searching for requested information...', search({ artist: 'Ray Charles', year: 1957 })) // unclear why console is returning [object Object] when included
// in the function with a plus (+), but returns an array when using a comma (,)
console.log('searching for requested information...', search({ artist: 'Ray Charles', year: 1960 }))
console.log('searching for requested information...', search({ artist: 'Ray Charles', year: 1957 }))