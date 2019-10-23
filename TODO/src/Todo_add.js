import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';

class Add_todo extends React.Component{

    state={input:""};
    
    handleInputChange =event =>{
        this.setState({
            input:event.target.value
        })
        console.log(event.target.value);
    }
    handleSubmit=e=>{
        this.props.addItem(this.state.input);
        console.log(this.state.input);
        this.setState({input:""});
    }

    render(){

        return(
            <div>
            <input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.input} />
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Add Todo</button>
            </div>
        )
    }
      
}
export default Add_todo;