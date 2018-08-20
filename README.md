# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?

Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

##Router

webpage click link => invoke history(user changed URL) => invokes react router(here's the new URL) => invokes react(here's the components to render) => webpage DOM

##COMMOM BUG WITH REACT ROUTER
react router does loose match meaning if you have route '/' and '/hi' both condition will trigger if you do '/hi'
put switch around it and most specific route at the top

## redux form

does the manual action creator binding for you.
https://redux-form.com/7.1.2/examples/

1.identify different pieces of form state
2.make one field component per piece of sate
3.user changes a field input
4.Redux form automatically handles changes
5.User submits a form
6.We validate inputs and handle form submittal
...essentially form component with its own state

Pristine Touched Invalid

pristine - how every input is rendered by default (no input has been selected)
Touched - A user hasd done something in the field and is complete
invalid - where we got some error message and we need to show the message to the user
