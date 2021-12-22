## LocationBasedVideoTracking

It is an application that brings location-based videos written in React native hybrid.

It was developed using Google Maps and Youtube Data API.
When a location is clicked on the map, the first 10 videos of the location are brought, and as the list is scrolled down, the next 10 videos of that location are brought.

When the videos brought on the list are clicked on, that video is watched on youtube.

To run the project in the development environment;

- **GOOGLE MAPS API** and **YOUTUBE DATA API KEY** must be obtained from the Google Cloud Platform. Keys should be added to the fields with the description lines in the code.

- The `yarn` command should be run in the main directory of the project.

- **`Local.properties`** should be added to the **`LocationBasedVideoTracking/android`** directory in the project.

- In the project, apk is taken to develop with the `./gradlew assembleDebug` command in the LocationBasedVideoTracking/android directory. Live application apk is taken with `./gradlew assembleRelease` command.

- The `yarn start` command must be run to run the apk received for development.


https://user-images.githubusercontent.com/53093667/147154673-b5b32cfe-6159-4919-8d75-5be61ce7c2c7.mp4
