
My Phone Catalogue
It's a project based on a React application created with create-react-app and a server with and endpoint /phones to display a catalogue of phones.

  

## Available Scripts

  ### `yarn`
Run to install all dependencies

In the project directory, you can run to run the react app:


### `yarn start`

  

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `yarn build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn test:all`

  
To run all unit test of the React application.

###`yarn commit`
To create a commit. This will run commitizen to create a formated commit message.

### Additional lint
#### `yarn stylelint`

To run stylelint to your style files.


### Git hooks
#### pre-commit
Before each commit prettier is being run on html and js files and stylelint for scss files
#### pre-push
Before each push all tests of the React app are run.

  