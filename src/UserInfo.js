import React from 'react';

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} </h1>
    }
}

class Age extends React.Component {
    render() {
        return <h2>Your age is {this.props.age}</h2>
    }
}

var person = [
    {name: 'John', age: 25},
    {name: 'Michael', age: 30},
    {name: 'Me', age: 23}
]

class UserInfo extends React.Component {
    render() {
        return (
           <>
           {person.map(item => {
               return (
                   <div style={{border: "1px solid #000", padding:"20px"}}>
                       <Welcome name={item.name} />
                       <Age age={item.age} />

                   </div>
               )
           })}
           </> 
        )
    }
}

export default UserInfo;