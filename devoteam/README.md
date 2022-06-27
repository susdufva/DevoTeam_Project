# Getting Started with React App

´bash´
run: npm i
´´
npm start
´bash´

## About

I chose to write my assignement in React.js with custom css.

My app fetches users from an API, displays all the users and the users are serachable. 

My app containes following requirements:

● Recreate the Figma design.
● Add search by name functionality.
● Handle empty or error states.
● Responsive design.
● No UI frameworks used (ex. Bootstrap, Material, Tailwind).

## Evaluation 

I started my focus on the functionality requested which turned out to be trickier than I thought. After off course fetching the API and displaying the result I started with the asceding/descending sorting which I had planed to do with classic javascript sort() function but I didn't get it to work.

The serach bar is working.

The css was also a bit tricky and took some extra time. I had planned to use a toggle class to swith between grid and list view. I would have had continued with that if I had put in extra time.

The design is responsive but in a simple way.

I have not written any unit tests, testing-library/jest and eslint are built in with React and more npm testing packages can easily be downloaded to the package.json

I had great fun with this assignment, thank you!

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

