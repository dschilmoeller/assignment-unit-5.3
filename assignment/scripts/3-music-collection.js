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
            if ( album.tracks.length > 0 ) {
                for (i=0; i<album.tracks.length; i++) {
                console.log((i+1) + '. ' + album.tracks[i] + ': ' + album.tracks[i+1] + ' seconds')
            } 
        }
    }
}

console.log('--- Show Collection Output Start ---')
showCollection(collection);

console.log('--- testing individual tracks start ---')
console.log(collection[0].tracks[0])

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
console.log('--- findByArtist Output Start ---')

console.log('Searching for Stevie Ray Vaugh', findByArtist('Stevie Ray Vaughn'));
console.log('Searching for Katzenjammmer', findByArtist('Katzenjammer'));
console.log('Searching for Billy Idol', findByArtist('Billy Idol'));



// Stretch Goal 1
// This works with the given search, but is not very flexible.
//     for (let i=0; i<collection.length; i++) {
//         if (searchInput.artist === collection[i].albumArtist && searchInput.year === collection[i].albumYearPublished) {
//             searchArray.push(collection[i]);
//             console.log("Pushing an album Dave.");      
//         // This feels right at first, but will always return the full collection if ANY entry DOESN'T match both.
//             // } else {
//         //     return collection;
//         }
//     } if (searchArray === [] ) {
//         return collection;
//     } else {
//         return searchArray;
//     }
// } // end search


// It seems like to make a proper function we need to do a few things.
// 1 - somehow ignore parameters that are not passed (in example, album name for instance)
// 2 - check parameters that do exist against the array
// 3 - return items in the array that pass the test.

function search(searchInput) {
    collection.filter(obj => {
        if (obj.artist === searchInput.artist) {
            console.log('nice one');
        } else {
            console.log('damnit.')
        }
    })
}
    


console.log('--- Stretch Goal 1 ---')

console.log('searching for requested information...')
console.log(search({artist: 'Ray Charles', year: 1957 })) // should return 1 item
console.log(search({artist: 'Ray Charles'})); // should return 2 items
//console.log(search(1999))

//Stretch Goal 2
//Inserted into above code!


// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems(query) {
//   return fruits.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems("ap")); // ['apple', 'grapes']
// console.log(filterItems("an")); // ['banana', 'mango', 'orange']


// array.filter() - 
// array.includes - first determine if array includes value. 

