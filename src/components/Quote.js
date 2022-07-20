import './Quote.css';
import React from 'react';
import Header from './Header';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Header />
        <main className="quote">
          <blockquote>
            <p>
              Carl Friedrich Gauss: &quot;Mathematics is the queen of science,
              and arithmetic the queen of mathematicss.&quot;
            </p>
          </blockquote>
        </main>
      </>
    );
  }
}

export default Quote;
