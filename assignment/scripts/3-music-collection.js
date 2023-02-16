console.log('***** Music Collection *****')

let collection = [];

// Respectfully, I'm not putting in the full track list for all the albums unless this goes to production. 
// I believe the below will be sufficient to verify the code works.
let europopTracks = [['Too Much of Heaven', 319],['Europop', 328]]
let texasFloodTracks = [['Love Struck Baby',149], ['Pride and Joy',219],['Texas Flood',321],['Tell Me',168],['Testify',200]]


//addToCollection Function
function addToCollection (title, artist, yearPublished, trackArray) {
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: trackArray // found this in the docs in VSCode: "declare const name: void;" - doesn't like it!
    }
    collection.push(newAlbum);
    return newAlbum;
}

console.log('--- Adding Music to Collection Start ---')

console.log(addToCollection('Europop','Eiffel 65',1999,europopTracks))
console.log(addToCollection('Texas Flood', 'Stevie Ray Vaughn', 1983,texasFloodTracks))
console.log(addToCollection('Le Pop', 'Katzenjammer', 2008))
console.log(addToCollection('A Kiss Before You Go','Katzenjammer', 2011))
console.log(addToCollection('Rockland','Katzenjammer',2015))
console.log(addToCollection('Tonight Alright','Spiderbait',2004))
console.log(addToCollection('Unknown Album', 'Ray Charles', 1957))
console.log(addToCollection('Unknown Album 2','Ray Charles', 1959))
//console.log(collection)

//showCollection Function
function showCollection(array) {
    console.log("There are " + array.length + " items in the array.")
        for (album of array) {
            console.log( (album.title) + ` by ` + (album.artist) + `, published in ` + (album.yearPublished) + `:`);
            if  ( album.tracks == undefined ) {
                console.log("No tracks available.")
            } else if ( album.tracks.length > 0 ) {
                for (i=0; i<album.tracks.length; i++) {
                console.log((i+1) + '. ' + album.tracks[i][0] + ': ' + album.tracks[i][1] + ' seconds')
                } 
            }
        }
    }

console.log('--- Show Collection Output Start ---')
showCollection(collection);
//this was for tracking down individual tracks.
//console.log('--- testing individual tracks start ---')
//console.log(collection[0].tracks[0])

//findByArtist Function
function findByArtist(artist) {
    let findByArtistArray = [];
    for (let i=0; i < collection.length; i++) {
        // testing only, clutters up output otherwise.
        //console.log('looking at', collection[i] );
        if (collection[i].artist === artist) {
            findByArtistArray.push(collection[i]);
        } 
    } return findByArtistArray;
} // end findByArtist
//positioning of the [i]'s is very important and tricky!!
// I reread the above and laugh after the last stretch goal.

console.log('--- findByArtist Output Start ---')

console.log('Searching for Stevie Ray Vaugh', findByArtist('Stevie Ray Vaughn')); // should output array with 1 entry
console.log('Searching for Katzenjammmer', findByArtist('Katzenjammer')); // should output array with 3 entries
console.log('Searching for Billy Idol', findByArtist('Billy Idol')); // should output empty array



// Stretch Goal 1


function search(searchInput) {
    if (searchInput.tracks != undefined ) { // if tracks isn't undefined...
        for (i = 0; i < collection.length; i++) { // iterate through collection...
            if (collection[i].tracks === undefined ) { // but if an item lacks tracks -> return collection
                // return collection;
            } else {
                for (x = 0; x < collection[i].tracks.length; x++) { // if a collection item has tracks..
                    // console.log('x = ' + x) // testing output only
                    if ( collection[i].tracks[x][0] === searchInput.tracks ) { //see if coollection's tracks match search query
                        return collection[i].tracks[x][0]; // and return the matching item.
                        } // if we put else return null here we get null if not the first track.
                }
            }
        }
    } else {
    let results = collection.filter(obj => (obj.title === searchInput.title || !searchInput.title)
    && (obj.artist === searchInput.artist || !searchInput.artist) 
    && (obj.yearPublished === searchInput.year || !searchInput.year));
    if (results.length > 0) {
    return results;
        } else {
            return collection;
        }
    }
}
// most robust so far. !propertyName tells it to ignore undefined properties.
// that filter thing ended up pretty long on a single line - hopefully this is the proper formatting for readability.

console.log('--- Stretch Goal 1 ---')
// annoyingly the search works, but not for the right reasons. It's just dumping out the collection once it iterates through the first two items.
// presumably swapping them around with an entry with no tracks would cause it to stop working immediately. Update: it does.
// would be nice to get this working elegantly but for the moment we can pretend we have a good and complete dataset.
// or at least one that has dummy info in the tracks. Could probably write a function to do that.

console.log('searching for requested information...')
console.log(search({artist: 'Eiffel 65', tracks: 'Europop'})); // should return 1 item, 'Europop'. 
console.log(search({artist: 'Eiffel 65', tracks: 'Too Much of Heaven'})); // should return 1 item, 'Too Much of Heaven'
console.log(search({artist: 'Eiffel 65', tracks: 'Power'})); // should return collection. currently returns undefined.
console.log(search({artist: 'Ray Charles', year: 1957 })) // should return 1 item
console.log(search({artist: 'Ray Charles'})); // should return 2 items
console.log(search({artist: 'Dave Matthews Band'})); // should return collection
console.log(search({year: 1999})); // should return 1 item
console.log(search({year: 2023})); // should return collection
console.log(search({title: 'Le Pop'})); // should return 1 item
console.log(search({title: 'Insomniac'})); // should return collection
console.log(search({artist: 'Katzenjammer', year: 2011, title: 'A Kiss Before You Go'})) // should return 1 item
console.log(search({tracks: 'Pride and Joy'})); // should return 1 item, 'Pride and Joy'

//Stretch Goal 2
//Inserted into above code!

// -- INTERNAL NOTES - PLEASE IGNORE -- //

//console.log(collection.tracks) // this produces undefined. 
//console.log(collection[0].tracks[0][0]) // this produces too much of heaven, so clearly need to be specific. Can see the whole object when it is returned
// but can't just log it into existence. Probably smart for ginormous data sets.

// This works with the given search, but is not very flexible.
//     for (let i=0; i<collection.length; i++) {
//         if (searchInput.artist === collection[i].albumArtist && searchInput.year === collection[i].albumYearPublished) {
//             searchArray.push(collection[i]);
//             console.log("Pushing an album Dave.");      
//         // This felt right at first, but will always return the full collection if ANY entry DOESN'T match both.
//         // ergo the else needs to go, er, elsewhere.
//             // } else {
//         //     return collection;
//         }
//     } if (searchArray === [] ) {
//         return collection;
//     } else { // this is where that else ended up.
//         return searchArray;
//     }
// } // end search

// this logs correctly but don't know what else to do with it atm frankly.
// function search(searchInput) {
//     collection.filter(obj => {
//         if (obj.artist === searchInput.artist) {
//             console.log('nice one');
//         } else {
//             console.log('dangit.')
//         }
//     })
// }
// -- END INTERNAL NOTES -- //