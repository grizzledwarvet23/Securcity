# Securcity
Developed for HackTX 2022

## Inspiration
As freshman university students, we have all had the same issue of wishing we could have known to not go down a certain street to avoid some unpleasant interactions. We thought that this app would be cool to build because it could be really useful for students on campus and people in cities, in general.

## What it does
There are two main features. One is to view a map, which would be populated over time by red circles. The circles would vary in size and intensity/opacity, based on frequency of incidents and severity of incidents, respectively. Things that people can report include assault, robbery, homeless people, noise pollution, cleanliness, etc. The other feature of the app is being able to report at your location. Reporting allows the user to select the type of incident and add a description to elaborate on it.

## How we built it
Our mobile app is built with React Native and Expo, a platform that helps with the transition between developing on a computer and testing on a phone. Both of those allow for cross platform mobile app development (IOS and Android).

## Challenges we ran into
We ran into a lot of problems with using a library to get a phone user's coordinates. The documentation's guidance did not work, and we ran into problems all over the place inexplicably. We ended up overcoming this by changing the way we placed our marker on the map.

## Accomplishments that we're proud of
We are proud of making a mostly functioning version of the app in one day. We overcame a lot of technical challenges with a language that none of us really had experience with. We successfully made our UI wireframe and frontend.

## What we learned
It is important to choose a platform that is well-documented because although Expo should have made things easier theoretically, it caused us a lot of debugging trouble. We learned a decent amount of frontend work, but we hope that more backend work can get involved.

## What's next for Securcity
Adding the backend and circle size/color algorithm is definitely our next goal. We need a way to keep track of circles added in a region and correspondingly alter red intensity and circle size properly.
