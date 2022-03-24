# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Diffculty level where the user can select
- [x] Life remain, playback speed increment, length of pattern based on diffculty level
- [x] A game content label that will appear when the game start showing the 
      diffuculty level and life remains

## Video Walkthrough (GIF)

![](http://g.recordit.co/jF7BbDCSXL.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [There are many outside resources mainly websites when creating additional features for this project. The two main website is Stackoverflow and Geeksforgreeks,
    I use these two website mainly to check on some HTML syntax.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [One of the challenges that I encountered during creating this submission is how to make each round faster than before. I first thought maybe I can change the
    value of clueHoldTime to achieve this, however, I soon realize it will not going to work since it is a constant variable. After some reading of the code, I realize
    I can just edit the delay element by minus a linear growing variable to achieve this. Then I was thinking since I got the difficulty level aspect implemented
    in the game, maybe I can go a step further and incorporate this element of the higher the level the faster each round will go. After this thinking process was
    finished I go ahead and start to implement it, however, the first implementation comes with bugs and it is overkilling it by creating multiple variables and 
    adjusting delay according to those variables. Soon I come to realize this is an overkill and overdo, I can just edit the delay variable directly since it will be 
    resetting every time, and I can just minus it by a linear growing variable that was controlled by progress and difficulty element.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   [Since I have learned HTML CSS and Javascript a while back, I do come with some background knowledge, however, I never went far enough for me to get a real taste 
   of it. After completing this prework assignment, I soon realize I was just scratching the surface of web development, and many questions were in my mind. One of 
   which is how to create those dynamic websites, and how will the developing process differ from this. I know that Glitch has handled lots of formatting work for me
   so I got the light work here, however, this project raise my interest to further discover and learn in the field of web development.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   [YOUR ANSWER HERE]

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
