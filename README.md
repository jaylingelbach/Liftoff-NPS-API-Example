# Liftoff group!

Fork this repo, clone it, play with it.
It has one component that really doesn't do anything but console log the result
of a call to the API.
I installed axios to make http requests easier.
I'd like for you to do a few simple things.

- Take a look at ParkList.js

```
  componentDidMount() {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=YOUR_KEY_HERE`
      )
      .then((res) => {
        const parks = res.data;
        console.log(parks);
      });
  }
```

GLOSS OVER `componentDidMount()`, but checkout `axios.get()` the link was
given at the time that I made a request for access to the NPS API. They should
have sent an email with your api_key. We will be replacing this shortly with
ENV Variables. I'll cover this in small group time. You can replace YOUR_KEY_HERE
with the key they sent to you after signup. No quotes or anything.

`.then((res) => {...function stuff here })` is something else we will talk about, but for now just think
of it as a pause until the server has time to respond.

The next line sets the response from the server to a constant and then we log it.

- What I want you to do is to make some more console.logs. Just add them under the
  existing log.
  I'd like you to log:

1. `weatherInfo`
2. Operating hours description text (Acadia National Park is open year-round. Check our website for park facilities operating hours, such as Hulls Cove Visitor Center.)
3. The `cost` of "Admits one or two passengers on a private, non-commercial motorcycle. Valid for 7 days." (should be 25.00)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
