import './Home.css';
import React from 'react';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Header />
        <main className="home">
          <h2>Welcome to our page!</h2>
          <p>
            Anim esse duis proident dolor. Eiusmod enim cupidatat nostrud quis et minim
            exercitation in incididunt amet esse aute. Sunt nostrud reprehenderit est
            reprehenderit commodo. Aute cillum aliquip enim occaecat amet. Excepteur
            minim mollit laborum fugiat. Esse sint nisi in ex consequat laborum culpa.
            Nostrud duis do dolore esse ullamco non velit ullamco deserunt sint.
          </p>
          <p>
            Anim esse duis proident dolor. Eiusmod enim cupidatat nostrud quis et minim
            exercitation in incididunt amet esse aute. Sunt nostrud reprehenderit est
            reprehenderit commodo. Aute cillum aliquip enim occaecat amet. Excepteur
            minim mollit laborum fugiat. Esse sint nisi in ex consequat laborum culpa.
            Nostrud duis do dolore esse ullamco non velit ullamco deserunt sint.
          </p>
        </main>
      </>
    );
  }
}

export default Home;
