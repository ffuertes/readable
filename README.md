# Readable Project

This is the final assesment for Udacity's React-Redux course.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## API Server

This project depends on a backend development server built in Node provided by Udacity. You can download it [here](https://github.com/udacity/reactnd-project-readable-starter). Make sure it is running before you start this project.

To install and start the API server, run the following commands in the API server directory:

* `npm install`
* `node server`

If you have trouble getting it running make sure the port 3001 is available in your localhost.

Detailed information about the API server and how to use it can be found [here](https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md)

## Folder Structure

```
readable/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
      index.js
    components/
      App.css
      App.js
      Header.js
      Category/
        Category.js
      Home/
        Home.js
      Post/
        Comments/
        CreatePost.js
        EditPost.js
        PostDetails.js
        PostItem.js
        PostList.js
    reducers/
      comments.js
      index.js
      posts.js
    utils/
      api.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

This repository is my own version of the final assessment project for Udacity's React-Redux course. After reviewed it will be no longer be maintained. Therefore, I most likely will not accept pull requests.

## License

The content of this repository is licensed under a Creative Commons Attribution License.

