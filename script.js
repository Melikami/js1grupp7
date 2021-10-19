//Global variables
const playlistDisplay = document.querySelector('.playlist-container');
const listHeaders = document.querySelector('.playlist-headers');
let playList = [];
const playlistItems = document.querySelector(".playlist-items");
//MELI: Class Song to create new objects
class Song {
    constructor(id, artist, song, album, genre) {
      this.id = id;
      this.artist = artist;
      this.song = song;
      this.album = album;
      this.genre = genre;
    }
    //Return obj-values
    songInfo() {
      return this;
    }
}
// --------------------TESTDATA---------------------
playList.push(new Song(1, 'Britta', 'One more time', 'greatest hits', 'pop'));
playList.push(new Song(2, 'Hazelnut hobo', 'Covfef', 'greatest hits','rock'));
playList.push(new Song(3, 'Dagge', 'Greedy thief', 'greatest hits','country'));
playList.push(new Song(4, 'Locomotive Lars', 'chucka cho', 'greatest hits','alternative'));
playList.push(new Song(5, 'Daft Punk', 'Voyager', 'Discovery','Acid House'));

playList.forEach(song => printSongs(song));

//MELI: Function to activate the script at the click of the button
addPlaylist.addEventListener("click", function newSong() {
    //Collecting values from the input fields
    let artist = document.getElementById("enterArtist").value;
    let song = document.getElementById("enterSong").value;
    let album = document.getElementById("enterAlbum").value;
    let genre = document.getElementById("enterGenre").value;
  
    //Displays error message if all input fields haven't been entered
    if (artist == "" || song == "" || album == "" || genre == "") {
      output.innerHTML = "<p>You have to enter all information!</p>";
      return;
    } else if (artist != "" && song != "" && album != "" &&  genre != "") {
      output.innerHTML = "<p>You have saved a track to your playlist. Save as many as you like!</p>";
      console.log(artist, song, genre);
    }
    // Skapa ett ID till samtliga värden i arrayen
      let id;
      if (playList.length === 0) {
        id = 0;
      } else {
        id = playList[playList.length -1].id +1;
      }
      playList.push(new Song(id, artist, song, album, genre));
      //Amir: Write out song every time a new song pushes in.
      printSongs(playList[playList.length - 1]);
      console.log(playList);
    //Clears inputfields
    cleanInput();
  });
  //Function Print song
  function printSongs(item) {
    // Variable to insert song-div into
    const playListItemsHolder = document.querySelector('.playlist-items');

    // Show playlist-headers
     if (playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.remove('hidden');

     // Getting song info
      let obj = item.songInfo();
      // Create element to insert song-info into
      let playlistItem = document.createElement('div');
      playlistItem.classList.add('song');
      
      // Create unique DIV id
      playlistItem.setAttribute("id", item.id);

      playlistItem.innerHTML = `<p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="album-display">${obj.album}</p><p class="genre-display">${obj.genre}</p> <button id="btnTrash"<i class="far fa-trash-alt"></i></button>`;

      // Insert new song-element
      playListItemsHolder.insertBefore(playlistItem, playlistItem.nextSibling);
  }
   // Delete function
    playlistItems.addEventListener("click", (e) => {
    if (e.target.id === 'btnTrash') {
      const songId = Number(e.target.parentNode.id);
      const ids = playList.map(e => e.id);
      const index = ids.indexOf(songId);
      playList.splice(index, 1);

      document.querySelectorAll('.song').forEach(e => e.remove());

      //Print sorted playlist
      playList.forEach(song => printSongs(song));
      console.log(playList);
    }
    console.log('btnTrash');

  });
  //MELI: Cleans text input with click of a button
  function cleanInput() {
    document.getElementById("enterArtist").value = "";
    document.getElementById("enterSong").value = "";
    document.getElementById("enterAlbum").value = "";
    document.getElementById("enterGenre").value = "";
  };
  //Sorts the list alfabetichally
  function sortPlaylist(el) {
    if(playList.length > 1) {
      // learned this here: https://www.youtube.com/watch?v=0d76_2sksWY
      playList.sort((a,b) => {
        if(a[el].toLowerCase() < b[el].toLowerCase()) {
          return -1;
        }
        if(a[el].toLowerCase() > b[el].toLowerCase()) {
          return 1;
        }
        return 0;
      });
      //Remove printouts of unsorted playlist
      document.querySelectorAll('.song').forEach(e => e.remove());
      //Print sorted playlist
      playList.forEach(song => printSongs(song));
    }
  }
  //Eventlistener that hears if sorting-headers are clicked
  listHeaders.addEventListener('click', (e) => {
    const [el] = e.target.id.split('-');
    sortPlaylist(el);
  });
  //Sebastian & Tove: Dragable
  const dragArea = document.querySelector(".playlist-items");
  new Sortable(dragArea, {
    animation: 350,
  });
  var state = false;
function handleAction() {
    if (state == false) {
        // stuff for 'playnow' action
        alert('första');
        state = true;
        return;
    }
    if (state == true) {
        // stuff for 'stop' action
        alert('andra')
        state = false;
        return;
    }
}

