const ctx = new AudioContext();
let audio;

// let getJsonUrl = "https://jsonplaceholder.typicode.com/users/1";
let getJsonUrl = "https://johnbartmann.com/musicTracks.json";

async function getJson() {
  const resJson = await fetch(`${getJsonUrl}`);
  console.log(resJson);
}

async function getAudio() {
  const resAudio = await fetch(
    "https://johnbartmann.com/track/african-moon-sample.mp3",
    {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Transfer-Encoding": "binary",
        "Content-Type": "audio/mpeg",
      },
    }
  );
}
