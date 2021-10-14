const playlistDisplay = document.querySelector('.playlist-container');
/* const artistHeader = document.getElementById('artist-header');
const songHeader = document.getElementById('song-header');
const genreHeader = document.getElementById('genre-header'); */

const listHeaders = document.querySelector('.playlist-headers');

//MELI: class Song to create new objects
class Song {
    constructor(artist, song, album, genre) {
      this.artist = artist;
      this.song = song;
      this.album = album;
      this.genre = genre;
    }
    //Amir: Make string of every Song objekt.
    songInfo() {
      /* return "Låt " + this.song + " av " + this.artist + " från " + this.genre + "." ; */
      return this;
    }
  }
let playList = [];

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
      return

    //When every input field has been entered
    } else if (artist != "" && song != "" && album != "" && genre != "") {
      output.innerHTML = "<p>You have saved a track to your playlist. Save as many as you like!</p>";
      console.log(artist, song, album, genre);
    }
  
    //Pushes songs into array if all input fields have been entered
    if (artist != "" && song != "" && album != "" && genre != "") {
      playList.push(new Song(artist, song, album, genre));
      console.log(playList);
      //Amir: Write out song every time a new song pushes in.
    }
    
    //After pressing the AddToYourPlaylist button, input fields clears out
    printSongs(playList[playList.length - 1]);
    cleanInput();
  });
  
  //Function to print songs in Output
  function printSongs(item) {
    /* let songOutput = "";
      playList.forEach((item, i) => {
      songOutput += `<p id="song">${item.songInfo()} <i class="fas fa-minus-circle"></i><p id="">`;
      });
      output1.innerHTML = songOutput; */

     /*  playlistItems.innerHTML = ''; */

     if (playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.remove('hidden');

     //FOR TESTING EXISTING PLAYLIST
      /* 
      playList.forEach((item, i) => {
        let obj = item.songInfo();
        let playlistItem = document.createElement('div');

        playlistItem.innerHTML = `
        <p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="genre-display">${obj.genre}</p><i class="fas fa-minus-circle"></i>`;

        playlistDisplay.insertBefore(playlistItem, playlistItem.nextSibling);
      }); */

      //FOR USERINPUT 
      let obj = item.songInfo();
      let playlistItem = document.createElement('div');
      playlistItem.classList.add('song');

      playlistItem.innerHTML = `
      <p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="song-display">${obj.album}</p><p class="genre-display">${obj.genre}</p><i class="far fa-edit"></i><i class="far fa-trash-alt"></i>`;

      playlistDisplay.insertBefore(playlistItem, playlistItem.nextSibling);
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
    document.getElementById("output1").innerHTML = "";
    if (!playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.add('hidden');
    playList = [];
  });

  //Function to sort playlist
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

      document.querySelectorAll('.song').forEach(e => e.remove());
      playList.forEach(song => printSongs(song));
    }
  }
  
  /* sortPlaylist('genre'); */

  listHeaders.addEventListener('click', (e) => {
    const [el] = e.target.id.split('-');
    sortPlaylist(el);
  });
