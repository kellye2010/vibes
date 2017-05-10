![logo-imgur](https://cloud.githubusercontent.com/assets/4691419/25890317/0e6b2d14-353b-11e7-9b48-358a08948e04.png)

# Vibes

- Live Deployed App: [Vibes](https://kellye2010.github.io/vibes/)
- Live API: [Vibes API](https://vibesforyou.herokuapp.com/)
- API GitHub Repository: [kellye2010/rails-api-vibes](https://github.com/kellye2010/rails-api-vibes)

## About Vibes


Create Playlists Inspired By Your Moods - Your Vibes.

[Vibes](https://kellye2010.github.io/vibes/) lets users create customized playlists from their favorite music tracks on Spotify. Users can create a unique name for their playlist, then they can customize the playlists they’ve created by adding their favorite song tracks to the playlists.
How It Works:
-   (First Iteration)
-   (First Iteration)
-   (First Iteration)


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


### Project Workflow

-   **User Stories** : Did you complete user stories and wireframes before you
    started writing code? Did you create a schedule for yourself to keep your
    project on track?
-   **Wireframes** : Did you complete user stories and wireframes before you started writing code? Did you create a schedule for yourself to keep your project on track?


## Development Process
 I built out the resources and relationships in the API. After, I began testing the API with CURL scripts, making further modifications to the routes, models, and controllers based on the specific functionality of the application.
 -   [ ] After receiving the project prompt, decide what kind of app to make, and
    begin sketching some rough wireframes for how the front end will look and
    act.
-   [ ] Think about what kind of data your front-end will need from your
    back-end, and how that data will be used. Create an ERD.
-   [ ] Create two repos that your project will use, and add READMEs to both.
-   [ ] Create a simple front-end with HTML and CSS based (loosely) on your
    wireframes.
-   [ ] User our
    [`rails-api-template`](https://github.com/ga-wdi-boston/rails-api-template)
    for your back-end. It already includes authentication.
-   [ ] After you have an ERD, check with a consultant to ensure your data model
    is appropriate for your goals. Then, build the models and migrations to
    represent this data. Test your models using the Rails console, and test your
    API endpoints using `curl`. You may also write automated tests in RSpec if
    you choose.
-   [ ] Before working on the front-end application, ensure all back-end
    endpoints work as expected. Knowing the back-end well will help you diagnose
    bugs on the front-end.
-   [ ] Write your front-end application using JavaScript, jQuery, and AJAX.
-   [ ] Test, commit, and deploy often! Test, commit, deploy! Test your
    deployments!
-   [ ] When main features are finished, begin working on stretch goals and
    icebox features.
-   [ ] Finish your documentation. Make it high-quality.

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
Below are some of the unsolved problems that I faced, and next steps for this application
-



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
# vibes
