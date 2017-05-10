![logo-imgur](https://cloud.githubusercontent.com/assets/4691419/25890317/0e6b2d14-353b-11e7-9b48-358a08948e04.png)

App and Logo(above) created by Kelly English

# Vibes

- Live Deployed App: [Vibes](https://kellye2010.github.io/vibes/)
- Live API: [Vibes API](https://vibesforyou.herokuapp.com/)
- API GitHub Repository: [kellye2010/rails-api-vibes](https://github.com/kellye2010/rails-api-vibes)

## About Vibes


Create Playlists Inspired By Your Moods - Your Vibes.

[Vibes](https://kellye2010.github.io/vibes/) lets users create customized playlists from their favorite music tracks on Spotify. Users can create a unique name for their playlist, then they can customize the playlists they’ve created by adding their favorite song tracks to the playlists.
How It Works:
-   (First Iteration) Currently, a user is only able to create a playlist with a title attribute.
-   (Second Iteration) The user will be able to add songs to the playlist they've created using the Spotify API.


## Application Requirements

-   Have an **API** that is securely accessible by your browser app, built using
    frameworks covered in class
-   Create **at least 4 RESTful routes** for handling GET, POST, PUT/PATCH, and
    DELETE requests; Any actions which change data must be authenticated, and
    the data must be "owned" by the user performing the change
-   **Utilize an ORM** to create a database table structure and interact with
    data
-   **Use a front-end Javascript app** to communicate with your API (both read
    and write) and render data that it receives in the browser
-   Have **semantically clean HTML and CSS**
-   Be **deployed online**, so that it is accessible to the public
-   Be linked in your `pinned repositories` on your GitHub profile page
-   Must not have any obvious user-facing errors
-   Must not rely on refreshing the page for any functionality


## Project Workflow

### User Stories
-   As I user I want to:
-     Sign-up & Login
-     Create a playlist with a unique title
-     Get a list of ALL of MY saved playlists
-     Update my playlist titles
-     Delete my playlist
-     Change my password
-     Sign-out and have my information saved for the next time I log in (user credentials and playlists)
-     Add song(s) from Spotify to my new playlist (Not Complete)
-     Add song(s) from Spotify to my existing playlist (Not Complete)
-     Delete songs from a playlist (Not Complete)
-     Delete my playlist (and the songs in that playlist) (Not Complete)

### Wireframes
-   Original Login/Signup: http://imgur.com/xIMC1mg
-   Original User Playlist view: http://imgur.com/ZiL4HWn
-   Playlist CRUD actions flow: http://imgur.com/bAWv9mP


## Development Process

Received the project requirements, began sketching some rough wireframes for how the front end will look and act for the user. Created an ERD for the back-end (http://imgur.com/MhC0kfq) based on the data that would be needed from the user in the front-end of the application. Created application repos for both the back-end API and the front-end client. Attempted to create a front-end based on the wireframes crated, but design changed for the timeframe of the project. Used     [`rails-api-template`](https://github.com/ga-wdi-boston/rails-api-template) for your back-end provided by GA, which already included authentication. I built out the models and migrations for the resources and relationships  in the API I wanted to represent based on my ERD. After, I began testing the API endpoints with CURL scripts, and tested models using 'rails console', making further modifications to the routes, models, and controllers based on the specific functionality of the application. I ensured the backend was working fine and deployed the database to Heroku, then bean working on the front-end using JavaScript, jQuery, and AJAX.

Challenges faced determining which routes to settle on (when thinking about future app functionality), which is why planning is so important. The user stories determine which routes you should use, and the developer should stick to that until they've accomplished their most front-facing/initial goals and requirements defined.

## Data Model (Entity Relationship Diagram)

-   [Vibes ERD](https://cloud.githubusercontent.com/assets/4691419/25890338/17ebb552-353b-11e7-91e4-5a72c8dcd4eb.png)
-   For full backend details, see the kellye2010/rails-api-vibes Github repository

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)


## Structure

Dependencies are stored in [`package.json`](package.json). Do not configure `grunt` packages configurations are stored in the
[`grunt`](grunt) directory. JavaScript files are stored in [`assets/scripts`](assets/scripts). Styles are stored in [`assets/styles`](assets/styles) and are loaded from [`assets/styles/index.scss`](assets/styles/index.scss). [getFormFields](forms.md) are used to retrieve form data to send to an API.
(To deploy a browser-template based SPA, run `grunt deploy`.)

## Next Steps

Nexts steps for this application will include adding resources such as playlist songs, songs, and artists and connecting to the Spotify API to enable th user to create playlists on vibes using songs from Spotify. The incomplete user stories (annotated above) will be included in next steps for this application as well.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
# vibes
