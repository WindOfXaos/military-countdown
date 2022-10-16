# Military Discharge Date Countdown

Let others know how much time is left in your service at ease without having to calculate it yourself with this eye-catching-blazingly-fast-webpage!

<p align="center">
  <img src="" style="display:inline-block; width: 40%" alt="Screenshots">
  <img src="" style="display:inline-block; width: 11.5%" alt="Screenshots"><br>
  <img src="" style="display:inline-block; width: 40%" alt="Screenshots">
  <img src="" style="display:inline-block; width: 11.5%" alt="Screenshots"><br>
  <a href="https://windofxaos.github.io/military-countdown">Live Preview</a>
</p>

## Features

- Responsive
- Cool animations
- Sound effects
- Different theme for each variant
- Toggle sound and animations

## Configuration

After forking this repository edit [`config.js`](assets/configs/config.js) then host it on **Github Pages**
```javascript
const config = {
    department: "INTERIOR", // INTERIOR or DEFENSE
    date: "2023-12-1", // discharge date eg. "2025-2-1"
    username: "WindOfXaos" // your exact username on github.com
}
```

## Dependencies

- [jQuery](https://github.com/jquery/jquery) (mgGlitch dependency)
- [mgGlitch](https://github.com/hmongouachon/mgGlitch) (Glitch animation)
- [particles.js](https://github.com/VincentGarreau/particles.js) (Dust animation)
- [Moment.js](https://github.com/moment/moment) (Date calculations)

## Project Structure

```
└───root
    │   index.html
    │   README.md
    │   
    ├───assets
    │   ├───audio
    │   │       desert.mp3
    │   │       noise.webm
    │   │       
    │   ├───configs
    │   │       config.js
    │   │       particlesjs-config.json
    │   │       
    │   ├───fonts
    │   │       army-buster-webfont.woff
    │   │       army-buster-webfont.woff2
    │   │       fontstylesheet.css
    │   │       policemen-black-webfont.woff
    │   │       policemen-black-webfont.woff2
    │   │       
    │   ├───icons
    │   │       animation.svg
    │   │       favicon.ico
    │   │       sound-off.svg
    │   │       sound-on.svg
    │   │       
    │   └───images
    │           defense.jpg
    │           police.jpg
    │           
    ├───css
    │   │   index.css
    │   │   
    │   └───components
    │           clock.css
    │           
    └───js
        │   index.js
        │   
        ├───components
        │       Clock.js
        │       
        └───helpers
                Animation.js
```