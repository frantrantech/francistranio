import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

function Intro() {

    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>Fading at Initial Mount</h1>
    </ReactCSSTransitionGroup>
    );
  }

export default Intro;
