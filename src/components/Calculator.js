import './Calculator.css';
import React from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress({ target }) {
    this.setState((state) => calculate(state, target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <article className="calculator">
        <Screen total={total} next={next} operation={operation} />
        <Button bgColor="btn-gray" btnRef="AC" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="+/-" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="%" handleClick={this.onButtonPress} />
        <Button bgColor="btn-orange" btnRef="÷" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="7" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="8" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="9" handleClick={this.onButtonPress} />
        <Button bgColor="btn-orange" btnRef="x" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="4" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="5" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="6" handleClick={this.onButtonPress} />
        <Button bgColor="btn-orange" btnRef="-" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="1" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="2" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="3" handleClick={this.onButtonPress} />
        <Button bgColor="btn-orange" btnRef="+" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray zero" btnRef="0" handleClick={this.onButtonPress} />
        <Button bgColor="btn-gray" btnRef="." handleClick={this.onButtonPress} />
        <Button bgColor="btn-orange" btnRef="=" handleClick={this.onButtonPress} />
      </article>
    );
  }
}

export default Calculator;
