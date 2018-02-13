//sound cloud jukebox

class SCJukebox{
  constructor(id){
    this.id = id ;
    this.playlist = [];
    var currentTrack = 0;
    this.playerOn = false;
    this.currentTrackId = undefined;
    this.playedOnce = 0;
  }
  initSC(){
    SC.initialize({
      client_id: 'ebe2d1362a92fc057ac484fcfb265049'
    });
  }
  // 336768726
  getSongById(id){
    var id = this.value;
    var promise = new Promise(function(resolve, reject){
    SC.get('/tracks/' + id).then(function(response) {
        resolve(response);
      });
    });
    return promise;
  }
  getSongByTerm(term){
    if(this.playedOnce > 0){
      document.getElementById('songs-div').remove();
    } else {
      this.playedOnce++
    }
    SC.get('/tracks/', {
      q: term
    }).then(function(response){
      var songsDiv = document.createElement("div");
      songsDiv.setAttribute('id', 'songs-div');
      var songDiv;
      response.forEach((result, index) => {
        songDiv = document.createElement("div");
        songDiv.classList.add('song-div');

        var songP = document.createElement("p");
        songP.appendChild(document.createTextNode(result.title));

        var songPlayButton = document.createElement("button");
        songPlayButton.appendChild(document.createTextNode("Play"));
        songPlayButton.setAttribute('class', 'play-pause-buttons play-me');
        songPlayButton.setAttribute('id', `play${index}`);
        songPlayButton.setAttribute('data-id', result.id);

        var songPauseButton = document.createElement("button");
        songPauseButton.appendChild(document.createTextNode("Pause"));
        songPauseButton.setAttribute('class', 'play-pause-buttons pause-me');
        songPauseButton.setAttribute('id', `pause${index}`);
        songPauseButton.setAttribute('data-id', result.id);

        songDiv.appendChild(songP);
        songDiv.appendChild(songPlayButton);
        songDiv.appendChild(songPauseButton);
        songsDiv.appendChild(songDiv);
      });
      document.getElementById('playlist').appendChild(songsDiv);
    });
  }
  getPlaylist(){
    return this.playlist;
  }
  setPlaylist(arr){
    var arr = [reslut];
    for(var i = 0; i < arr.length; i++){
      this.playlist.push(arr[i]);
    }
  }
  playSongById(trackId){
  }
  playSong(trackId){
    SC.stream('/tracks/' + trackId).then(function(player) {
      player.play()
    });
  }
  diplaySongsResult(song){
  }
}

function init(){
  var sound = new SCJukebox();
  sound.initSC();
  var str = "";
  document.getElementById('search').addEventListener('keydown', function(e) {
    str += e.key
    if(e.key === "Backspace"){
      str = str.substring(0, str.length - 10)
    }
    if(str.indexOf("Enter") > -1){
      str = str.substring(0, str.indexOf("Enter"))
    }
    console.log(str)
    if(str !== ""){
      document.getElementById('track-id').disabled = true;
    } else {
      document.getElementById('track-id').disabled = false;
    }
    if(e.key === "Enter"){
      sound.getSongByTerm(document.getElementById('search').value);
    }
  });

  var isPlaying = false;
  var thisSound;
  var trackId;
  document.addEventListener('click',function(e){
    if(e.target && e.target.classList[0] === "play-pause-buttons"){
      if(thisSound && trackId == e.target.getAttribute('data-id')){
        if(e.target.classList[1] === "play-me"){
          thisSound.play();
        } else if (e.target.classList[1] === "pause-me"){
          thisSound.pause();
        }
      } else {
        SC.stream('/tracks/' + e.target.getAttribute('data-id')).then(function(player) {
          player.play();
          trackId = e.target.getAttribute('data-id')
          thisSound = player;
        });
      }
    }
  })
  document.getElementById('track-id').addEventListener('click', function() {
  });

  document.getElementById('play').addEventListener('click', function() {
    sound.playSongById()
  });
}

init();
