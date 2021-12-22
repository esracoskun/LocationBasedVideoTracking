## LocationBasedVideoTracking

<p align='center'>
   <img src="https://user-images.githubusercontent.com/53093667/147157735-93794a4e-546c-475b-9159-c2d50c00cb2c.png" width='150px'>
</p>

It is an application that brings location-based videos written in React Native hybrid.

It was developed using Google Maps and Youtube Data API.
When a location is clicked on the map, the first 10 videos of the location are brought, and as the list is scrolled down, the next 10 videos of that location are brought.

When the videos brought on the list are clicked on, that video is watched on youtube.

To run the project in the development environment;

- **GOOGLE MAPS API** and **YOUTUBE DATA API KEY** must be obtained from the Google Cloud Platform. Keys should be added to the fields with the description lines in the code.

- The `yarn` command should be run in the main directory of the project.

- **`Local.properties`** should be added to the **`LocationBasedVideoTracking/android`** directory in the project.

- In the project, apk is taken to develop with the `./gradlew assembleDebug` command in the LocationBasedVideoTracking/android directory. Live application apk is taken with `./gradlew assembleRelease` command.

- The `yarn start` command must be run to run the apk received for development.

<p align='center'>
  <img src="https://user-images.githubusercontent.com/53093667/147156516-5415177c-2803-4e76-9022-e91cf7370f02.gif">
</p>
