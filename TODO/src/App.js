import React from "react";
import 'bootstrap/dist/css/bootstrap.css';                                                                                     
import Nav from "./Navbar_Comp";
import Add_todo from "./Todo_add";
import { Task } from "./Task_list";
import axios from "axios";



class App extends React.Component{
    state={
        list:[]
    }


    

    componentDidMount() {
        axios.get("http://localhost:3000/posts/")
        .then(result=>{
            console.log(result.data);
            this.setState({
                list:result.data
            })
        })
        .catch(error=> console.log(error));


    }

handlePost=task=>{

    axios.post(`http://localhost:3000/posts/`, {
        post:task
       
      })
      .then(newtask=> {
        console.log("Posted Success!!"+newtask);

        this.setState({       
            list:[newtask.data,...this.state.list]
        })
      })
      .catch(error => {console.log(error) });
}
    // addItem= item=>{
    //     this.setState({
    //         list:[item,...this.state.list]
    //     });
       
    // }
   handleDelete=id=>{
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(result=>{
        console.log("Deleted Object:" +result.data);
        this.setState({           
            list: this.state.list.filter(i=>i.id!==id)
                
        })
    })
    .catch(error=> console.log(error));
   }
    // deleteTask=item=>{    
    //     this.setState({
    //         list: this.state.list.filter(id=>id!==item)
    //     });
    // }
   

    render(){
        return(
            <div>
            <Nav />
            <Add_todo addItem={this.handlePost} />
            <Task items={this.state.list} deleteItem={this.handleDelete}  />
            </div>
                    
           );

    }
}
export default App;