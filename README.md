## Usage

### Setup

Install yarn 1.5.1.

Run `yarn install`.

### Start app

Run `yarn start`.

Navigate to `localhost:3000` to interact with the app.

### Quality

Run `yarn lint` to ensure all files meet ilnting requirements.

Run `yarn test` to run tests.

Run `yarn test:coverage` to get test coverage stats.

## Technologies used

### Typescript

To develop a web app, Typescript provides the benefits of object oriented programming while being able to leverage the full power of Javascript as a web programming language. For that reason, Typescript was the language of choice.

### React 

For a web app that needs many real-time updates, React is a great technology choice since it is optimized for faster and efficient rendering with the help of the internal ReactDOM. For that reason, this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

### Stardust UI

Explored several libraries that provide UI plug-and-play React components to simplify development. For the components I needed, [Semantic UI React](https://react.semantic-ui.com/introduction) seemed to have a lot of good support as well as recommendation from the community. However, it seemed like it did not have too many recent updates. I learnt that developers of Semantic UI React had forked and developed [Stardust UI React](https://stardust-ui.github.io/react/) more recently. Having found the same value plus the recency in updates, this became a good choice.

### Jest
Jest is the testing framework used. The other one I considered was Jasmine, but given the feature set, it appears that Jest provides all the functionality that Jasmine does, and more. It has proven to be stable, has high usge and activity on on GitHub. For this reason, Jest was the winner!

### Enzyme
Enzyme provides the added capability to test a React component output by virtually mounting and rendering. It seemed like the most popular choice for this purpose with a lot of community support.
