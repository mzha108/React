import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem.js';

class Todolist extends Component {

  // 构造函数, 初始化 state
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)} />

        <button onClick={this.handleBtnClick.bind(this)}>提交</button>

        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem />
              )
            })
          }

        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });

  }

  handelDelete(index) {
    const _list = [...this.state.list];

    _list.splice(index, 1);
    this.setState({
      list: _list
    })
  }
}


export default Todolist;
