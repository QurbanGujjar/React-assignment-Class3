import React, { Component } from 'react'

class Hello extends Component {
   
    
    render() {
        return (
            <div className= 'mylist'>
                Hello world from   <strong>{this.props.name }</strong>
                <h1>This is a list of unorder items</h1>
                 <ul>
                     <li>Cake</li>
                     <li>Fish</li>
                     <li>Oil</li>
                     <li>Pan</li>
                     <li>Tea</li>
                 </ul>
                 <h1>This is a list of order items</h1>
                 <ol>
                     <li>Cake</li>
                     <li>Fish</li>
                     <li>Oil</li>
                     <li>Pan</li>
                     <li>Tea</li>
                 </ol>


            </div>
        )
    }
}

export default Hello
