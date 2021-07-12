import React,{Component} from 'react';
import './Interview.css'
import 'bootstrap/dist/css/bootstrap.css'
class Interview extends Component{
    constructor(){
      super();
      this.state={
        question:[]
      }
    }


    getQuestion = () =>{
      fetch("http://localhost:1345/question")
      .then(response=>response.json())
      .then(allquestion =>  this.setState({
        question: allquestion
      
      }))
      console.log(this.getQuestion)
     
    
      }

      componentDidMount(){
        this.getQuestion();
      
      }

    render(){


        return(
          <div className="interview">
                <h5>Queries based on skills</h5>
             
             {
               this.state.question.map((xquestion, index)=>{
                 return(
                   <div className="container mt-2">
                     <div className="row">
                       <table className="table table-sm">
                         <tr>
                           <td>{xquestion.id}</td>
                           <td>{xquestion.questions}</td>
                         
                         </tr>
                       </table>
                     </div>
                   </div>
                 )
               })
             }
          </div>
          
        )
    }
}
export default Interview