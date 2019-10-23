import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


export class Task extends React.Component{
   
    
    markDone=event=>{
       event.target.style.textDecoration ='line-through'
    }
    render(){

        return(

            <div>
         <ul className="list-group">
             
             {this.props.items.map(i=>{
                 return(
                     
                    <li key={i.id} className="list-group-item"><span onClick={this.markDone}>{i.post}</span>
                    <button key={i.id} className="btn float-right" onClick={this.props.deleteItem.bind(this,i.id)} >Delete</button></li>

                 )
             })}
                  
         </ul>
        </div>
        )
    }   
}

