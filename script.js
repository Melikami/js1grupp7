//global variables
const playlistDisplay = document.querySelector('.playlist-container');
const listHeaders = document.querySelector('.playlist-headers');
let playList = [];

//MELI: class Song to create new objects
class Song {
    constructor(artist, song, album, genre) {
      this.artist = artist;
      this.song = song;
      this.album = album;
      this.genre = genre;
    }
    //Amir & Tove: return obj-vales to print song
    songInfo() {
      return this;
    }
  }

  
// --------------------TESTDATA---------------------
playList.push(new Song('Britta', 'One more time', 'greatest hits', 'pop'));
playList.push(new Song('Hazelnut hobo', 'Covfef', 'greatest hits','rock'));
playList.push(new Song('Dagge', 'Greedy thief', 'greatest hits','country'));
playList.push(new Song('Locomotive Lars', 'chucka cho', 'greatest hits','alternative'));
playList.forEach(song => printSongs(song));


  //MELI: Function to activate the script at the click of the button
addPlaylist.addEventListener("click", function newSong() {
    //MELI: Collecting values from the input fields
    let artist = document.getElementById("enterArtist").value;
    let song = document.getElementById("enterSong").value;
    let album = document.getElementById("enterAlbum").value;
    let genre = document.getElementById("enterGenre").value;
  
    //MELI: Displays error message if all input fields haven't been entered
    if (artist == "" || song == "" || album == "" || genre == "") {
      output.innerHTML = "<p>You have to enter all information!</p>";
      return;

      //MELI: Displays that song has been saved  if all input fields has been entered
    } else if (artist != "" && song != "" && album != "" || genre != "") {
      output.innerHTML = "<p>You have saved a track to your playlist. Save as many as you like!</p>";
      console.log(artist, song, album, genre);
    }
    //MELI: Pushes in song into array if all input fields have been entered
      playList.push(new Song(artist, song, album, genre));
      //Amir: Write out song list every time a new song pushes in.
      printSongs(playList[playList.length - 1]);
    
    // clears input fields
    cleanInput();
  });
  
  // Tove & Amir: print song
  function printSongs(item) {
    //create variable to insert song-div into
    const playListItemsHolder = document.querySelector('.playlist-items');

    // show playlist-headers
     if (playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.remove('hidden');

     // getting song info
      let obj = item.songInfo();

      //create element to insert song-info into
      let playlistItem = document.createElement('div');
      playlistItem.classList.add('song');

      playlistItem.innerHTML = `
      <p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="album-display">${obj.album}</p><p class="genre-display">${obj.genre}</p><i class="far fa-edit"></i><i class="far fa-trash-alt"></i>`;

      //insert new song-element
      playListItemsHolder.insertBefore(playlistItem, playlistItem.nextSibling);
  }
   
  //MELI: Cleans text input with click of a button
  function cleanInput() {
    document.getElementById("enterArtist").value = "";
    document.getElementById("enterSong").value = "";
    document.getElementById("enterAlbum").value = "";
    document.getElementById("enterGenre").value = "";
  };
  
  //MELI: Cleans text output with click of a button
  cleanOutput.addEventListener("click", function cleanOutput() {
    document.getElementById("output").innerHTML = "<p>Playlist cleared</p>";
    document.querySelectorAll('.song').forEach(e => e.remove());
    if (!playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.add('hidden');
    playList = [];
  });

  //MELI: variable to make every other mouse click true or false
  var state = false;
  //Tove: sort the list alfabetichally
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
      
      //MELI: Prints songs in alphabetical order at click
      if (state == false) {
      playList.forEach(song => printSongs(song));   //for Each loop made by TOVE
      state = true;
      return;
      }
      //MELI: Prints songs in reversed alphabetical order at every other click
      if (state == true) {
        // print sorted playlist
      playList.reverse().forEach(song => printSongs(song));
      state = false;
      return;
      }
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

  //MELI: Function that lets you print the contents of the page/playlist
  function display(printDiv) {
    var printContents = document.getElementById(printDiv).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
