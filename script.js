
// Testdata
//-------------------------------------------------------------------------

let playlistTest = [];

/* const outputDiv = document.getElementById('output');

const outputTest = document.createElement('div');
outputTest.classList.add('output-test');

outputTest.innerText = 'Test';
outputDiv.appendChild(outputTest); */
/* 
function Songtest(artist, song, genre, score){
    this.artist = artist,
    this.song = song,
    this.genre = genre,
    this.score = score
}

playlistTest.push(new Songtest('Britta', 'One more time', 'pop', 2));
playlistTest.push(new Songtest('Hazelnut hobo', 'Covfef', 'rock', 4));
playlistTest.push(new Songtest('Dagge', 'Greedy thief', 'country', 7));
playlistTest.push(new Songtest('Locomotive Lars', 'chucka cho', 'alternative', 8));
playlistTest.push(new Songtest('Helms deep', 'into the mountain', 'indie', 3));
playlistTest.push(new Songtest('Abracadabra', 'pick a card', 'pop',5));
playlistTest.push(new Songtest('Meli Montana', 'gumminos', 'hiphop', 4));
playlistTest.push(new Songtest('Lens-Amir', 'photograph', 'indie', 9));
playlistTest.push(new Songtest('Sebbe af Hans', 'Hansen of sweden', 'classical', 7));
playlistTest.push(new Songtest('Tendonitis Tove', 'Strech', 'country', 1)); */

function sortPlaylist(el) {
  // learned this here: https://www.youtube.com/watch?v=0d76_2sksWY
  playlistTest.sort((a,b) => {
    if(a[el].toLowerCase() < b[el].toLowerCase()) {
      return -1;
    }
    if(a[el].toLowerCase() > b[el].toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

/* sortPlaylist('genre'); */


//------------------------------------------------------------------------

const playlistDisplay = document.querySelector('.playlist-container');


//MELI: class Song to create new objects
class Song {
    constructor(artist, song, genre) {
      this.artist = artist;
      this.song = song;
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
    let genre = document.getElementById("enterGenre").value;
  
    //Displays error message if all input fields haven't been entered
    if (artist == "" || song == "" || genre == "") {
      output.innerHTML = "You have to enter all information";
    } else if (artist != "" && song != "" && genre != "") {
      output.innerHTML = "You have saved a track to your playlist. Save as many as you like!";
      console.log(artist, song, genre);
    }
  
    //Pushes in song into array if all input fields have been entered
    if (artist != "" && song != "" && genre != "") {
      playList.push(new Song(artist, song, genre));
      console.log(playList);
      //Amir: Write out song lite every time a new song pushes in.
      
    }

    playList.push(new Song('Britta', 'One more time', 'pop'));
    playList.push(new Song('Hazelnut hobo', 'Covfef', 'rock'));
    playList.push(new Song('Dagge', 'Greedy thief', 'country'));
    playList.push(new Song('Locomotive Lars', 'chucka cho', 'alternative'));
    playList.push(new Song('Helms deep', 'into the mountain', 'indie'));
    playList.push(new Song('Abracadabra', 'pick a card', 'pop'));
    playList.push(new Song('Meli Montana', 'gumminos', 'hiphop'));
    playList.push(new Song('Lens-Amir', 'photograph', 'indie'));
    playList.push(new Song('Sebbe af Hans', 'Hansen of sweden', 'classical'));
    playList.push(new Song('Tendonitis Tove', 'Strech', 'country'));

    printSongs();
    cleanInput();
  });

  let songOutput = "";
  
  
  function printSongs() {

    if (playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.remove('hidden');
   
    playList.forEach((item, i) => {
    let obj = item.songInfo();
    let playlistItem = document.createElement('div');

    playlistItem.innerHTML = `
    <p class="artist-display">${obj.artist}</p><p class="song-display">${obj.song}</p><p class="genre-display">${obj.genre}</p><i class="fas fa-check-circle"></i>`;

    playlistDisplay.insertBefore(playlistItem, playlistItem.nextSibling);
    });
  
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
    document.getElementById("output1").innerHTML = "";
    if (!playlistDisplay.classList.contains('hidden')) playlistDisplay.classList.add('hidden');
    playList = [];
  });

  