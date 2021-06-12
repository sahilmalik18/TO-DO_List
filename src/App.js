
import './App.css';
import React, { Component } from 'react'
import { nanoid } from 'nanoid'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newItem:'',
       list:[],
    }
  }

  updateInput(key, value)
  {
    //console.log(key,value);
    this.setState({
      [key]:value
    })

  }

  addItem()
  {
    if(this.state.newItem !=='')
    {
      const newItem={
        id: nanoid(),
        value: this.state.newItem.slice()
      }
      const list = [...this.state.list];
      list.push(newItem)
      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem(id)
  {
    console.log(id)
    const list =[... this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this. setState({
      list:updatedList
    })
  }

  setUpdate(value,id)
  {
    const list = this.state.list
    list.map(i => {
      if(i.id===id){
        i.value=value
      }
    })
    this.setState({
      list:list
    })
  }

  
  render() {
    return (
      <div className='App'>
        
        <div className="App-in">
        <h1> &nbsp; To-Do  &nbsp; </h1><br/> 
          <input
            type="text" 
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem",e.target.value)}
          />
          <button className="Add_btn" onClick={() => this.addItem()}>ADD</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input type="text" 
                    id={item.id} value={item.value}
                    onChange={(e)=> this.setUpdate(e.target.value,item.id)} />
                    <button className="close" 
                      onClick={() => this.deleteItem(item.id)}>
                      <div className="closein">+</div>
                    </button>
                    <hr/>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default App
