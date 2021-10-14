//global variables
const playlistDisplay = document.querySelector('.playlist-container');
const listHeaders = document.querySelector('.playlist-headers');
let playList = [];

//MELI: class Song to create new objects
class Song {
    constructor(artist, song, genre) {
      this.artist = artist;
      this.song = song;
      this.genre = genre;
    }
    //return obj-values
    songInfo() {
      return this;
    }
  }

  
// --------------------TESTDATA---------------------
playList.push(new Song('Britta', 'One more time', 'pop'));
playList.push(new Song('Hazelnut hobo', 'Covfef', 'rock'));
playList.push(new Song('Dagge', 'Greedy thief', 'country'));
playList.push(new Song('Locomotive Lars', 'chucka cho', 'alternative'));
playList.forEach(song => printSongs(song));


  //MELI: Function to activate the script at the click of the button
addPlaylist.addEventListener("click", function newSong() {
    //Collecting values from the input fields
    let artist = document.getElementById("enterArtist").value;
    let song = document.getElementById("enterSong").value;
    let genre = document.getElementById("enterGenre").value;
  
    //Displays error message if all input fields haven't been entered
    if (artist == "" || song == "" || genre == "") {
      output.innerHTML = "You have to enter all information";
      return;
    } else if (artist != "" && song != "" && genre != "") {
      output.innerHTML = "You have saved a track to your playlist. Save as many as you like!";
      console.log(artist, song, genre);
    }
  
    //Pushes in song into array if all input fields have been entered
    if (artist != "" && song != "" && genre != "") {
      playList.push(new Song(artist, song, genre));
      //Amir: Write out song lite every time a new song pushes in.
      printSongs(playList[playList.length - 1]);
    }
    // cleras inputfields
    cleanInput();
  });
  
  // print song
  function printSongs(item) {
    // variable to insert song-div into
    const playListItemsHolder = document.querySelector('.playlist-items');

    // show playlist-headers
     if (playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.remove('hidden');

     // getting song info
      let obj = item.songInfo();

      //create element to insert song-info into
      let playlistItem = document.createElement('div');
      playlistItem.classList.add('song');

      playlistItem.innerHTML = `
      <p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="genre-display">${obj.genre}</p><i class="fas fa-minus-circle"></i>`;

      //insert new song-element
      playListItemsHolder.insertBefore(playlistItem, playlistItem.nextSibling);
  }

  
   
  //MELI: Cleans text input with click of a button
  function cleanInput() {
    document.getElementById("enterArtist").value = "";
    document.getElementById("enterSong").value = "";
    document.getElementById("enterGenre").value = "";
  };
  
  //MELI: Cleans text output with click of a button
  cleanOutput.addEventListener("click", function cleanOutput() {
    document.getElementById("output").innerHTML = "";
    document.querySelectorAll('.song').forEach(e => e.remove());
    if (!playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.add('hidden');
    playList = [];
  });

  //sort the list alfabetichally
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

      //remove printouts of unsorted playlist
      document.querySelectorAll('.song').forEach(e => e.remove());
      // print sorted playlist
      playList.forEach(song => printSongs(song));
    }
  }

  // eventlistener that hears if sorting-headers are clicked
  listHeaders.addEventListener('click', (e) => {
    const [el] = e.target.id.split('-');
    sortPlaylist(el);
  });
  

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