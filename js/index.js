import { Animation } from "./helpers/Animation.js"

// variables
const rootPath = document.body.baseURI;
let audio;
let offColor;
const onColor = "rgb(255, 255, 255)";
const animation = new Animation;

// elements
const soundBtn = document.getElementById("sound");
const animationBtn = document.getElementById("animation");

// get username
const username = config.username;
console.log("Username: " + config.username);

document.getElementById('text').innerHTML += `
<a class="user" href="https://github.com/${username}">
<img src="https://avatars.githubusercontent.com/${username}" alt="...">
<span>${username}'s</span>
</a>
Military Discharge
`;

if (config.department == 'INTERIOR') {
  audio = new Audio(rootPath + 'assets/audio/noise.webm');
  offColor = "rgb(70, 130, 180)";

  document.documentElement.style.cssText = `
    /* clock colors */
    --clock-text-color: rgb(255, 255, 255);
    --clock-type-color: rgb(70, 130, 180);
    --text-shadow: 0 0 20px rgb(20, 28, 38);
    /* clock font */
    --font-name: Policemen;
    /* background-image */
    --image-url: url('../assets/images/police.jpg'), rgb(128, 128, 128);
    /* link */
    --link-color: rgb(88, 166, 255);
  `;
}
else if (config.department == 'DEFENSE') {
  audio = new Audio(rootPath + 'assets/audio/desert.mp3');
  offColor = "rgb(255, 204, 170)";

  document.documentElement.style.cssText = `
    /* clock colors */
    --clock-text-color: rgb(212, 170, 151);
    --clock-type-color: rgb(255, 204, 170);
    /* clock font */
    --font-name: ArmyBuster;
    /* background-image */
    --link-color: rgb(63, 45, 38);
    --text-shadow: 0 0 20px rgb(0, 0, 0);
    /* link */
    --image-url: url('../assets/images/defense.jpg'), rgb(204, 204, 204);
  `;
}

soundBtn.onclick = () => {
  const btnColor = getComputedStyle(soundBtn).backgroundColor;
  if (btnColor == offColor) {
    // turn on
    soundBtn.style.backgroundColor = onColor;
    audio.play()
    return
  }
  // turn off
  soundBtn.style.backgroundColor = offColor;
  audio.pause();
};

animationBtn.onclick = () => {
  const btnColor = getComputedStyle(animationBtn).backgroundColor;
  if (btnColor == offColor) {
    // turn on
    animationBtn.style.backgroundColor = onColor;
    animation.play();
    return
  }
  // turn off
  animationBtn.style.backgroundColor = offColor;
  animation.pause();
};