# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Jun Huang**

Time spent: **1.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/rainbow-superb-brontomerus)

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

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to imprhttp://g.recordit.co/FslarNx36O.gife the app!
- [x] Diffculty level where the user can select
- [x] Life remain, playback speed increment, length of pattern based on diffculty level
- [x] A game content label that will appear when the game start showing the 
      diffuculty level and life remains

## Video Walkthrough (GIF)

![](http://g.recordit.co/FslarNx36O.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [There are many outside resources mainly websites when creating additional features for this project. The two main website is Stackoverflow and Geeksforgreeks,
    I use these two website mainly to check on some HTML syntax. The project is completed by myself and research through these two online resources that I've used]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   [The most challenging challenge that I encountered during this submission is to create a difficult system. I had this idea that the game will adjust itself based
   on the level you have chosen. Now with this idea in mind, I had my first problem, how can I make the user choose a level? Through some research, I decided to use 
   a dropdown list that will fetch the value been selected by the user when they start the game. Now having the basics of the system completed I encounter a new 
   problem, how should I adjust my game setting accordingly to the difficulty level selected? That is when I've decided to add additional features to the game, and 
   three features that I added having this difficult system in mind are random pattern generation, extra life, and faster playback speed each round. All three of 
   these additional features will change accordingly based on the difficulty level that the user has chosen. I have also made a display showing these elements to the
   user when they press start game.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [Since I have learned HTML CSS and Javascript a while back, I do come with some background knowledge, however, I never went far enough for me to get a real taste 
   of it. After completing this prework assignment, I soon realize I was just scratching the surface of web development, and many questions were in my mind. One of 
   which is how to create those dynamic websites, and how will the developing process differ from this. I know that Glitch has handled lots of formatting work for me
   so I got the light work here, however, this project raise my interest to further discover and learn in the field of web development.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [If I would spend more time doing this submission, I will implement a few features that I had in mind. One of which is a button where it can repeat the 
   the pattern played, I think this can be implemented pretty easily with all the fundamental functions that have been set up, and I can set a certain amount of time 
   where you can use this button in different difficulty levels. Another feature I wanted to implement is similar to what I have before, but instead of replaying the 
   entire pattern, it will choose a random index from 0 to progress and reveal the button # for it, and like the repeat button it will have different number of times 
   where an users can use this button based on the difficulty level that they have chosen.]

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/0967738930e34c30a185cbce24c6ee13)

## License

    Copyright Jun Huang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
