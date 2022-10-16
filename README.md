# Military Discharge Date Countdown

Let others know how much time is left in your service at ease without having to calculate it yourself with this eye-catching-blazingly-fast-webpage!

<p align="center">
  <img src="https://user-images.githubusercontent.com/52869398/196017225-988eae76-ee06-4dbd-a14f-ee93a0152546.jpeg" style="display:inline-block; width: 70%" alt="Screenshots">
  <img src="https://user-images.githubusercontent.com/52869398/196017243-cd39fb7f-2f3e-4f8a-85d4-8b8a66826fe8.jpeg" style="display:inline-block; width: 20%" alt="Screenshots"><br>
  <i>-Interior Department</i><br><br>
  <img src="https://user-images.githubusercontent.com/52869398/196017254-8f5a2eb9-c980-49c7-bbd6-53a902d23ba0.jpeg" style="display:inline-block; width: 70%" alt="Screenshots">
  <img src="https://user-images.githubusercontent.com/52869398/196017269-6903949d-3697-4a91-b868-c3e68fb2c5ad.jpeg" style="display:inline-block; width: 20%" alt="Screenshots"><br>
  <i>-Defense Department</i><br><br>
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
