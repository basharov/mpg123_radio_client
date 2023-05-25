const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(20, 9);

let previousStation = 0
let station = 0

const stationsTitles = [
  'Vaporwaves',
  'Boot Liquor',
  'Indie Pop Rocks',
  'Groove Salad',
]

const stations = [
  'http://somafm.com/m3u/vaporwaves.m3u',
  'http://somafm.com/m3u/bootliquor.m3u',
  'http://somafm.com/m3u/indiepop.m3u',
  'http://somafm.com/m3u/groovesalad.m3u',
]

myEncoder.on('rotation', (direction, value) => {
  previousStation = station

  if (value > 3) {
    station = 3
  } else if (value < 0) {
    station = 0
  } else {
    station = value
  }


  if (station !== previousStation) {
    console.log(stationsTitles[station])
    player.openPlaylist(stations[station], {
      cache: 128,
      cacheMin: 1
    })
  }
});

const MPlayer = require('mplayer');

const player = new MPlayer();
