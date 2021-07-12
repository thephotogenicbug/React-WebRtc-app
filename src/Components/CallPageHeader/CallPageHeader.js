import React,{Component} from 'react'
import './CallPageHeader.scss'
import 'bootstrap/dist/css/bootstrap.css'
class CallPageHeader extends Component{
  constructor(){
    super();
    this.state={
      profile:[]
    }
  }


  getQuestion = () =>{
    fetch("http://localhost:1345/profile")
    .then(response=>response.json())
    .then(allprofile =>  this.setState({
      profile: allprofile
    
    }))
   
  
    }

    componentDidMount(){
      this.getQuestion();
    
    }

    render(){
      return(
        <>
       
        <div className="frame-header">
        
         {
            this.state.profile.map((xprofile, index)=>{
              return(
                <div className="container mt-3">
                  <div className="row" >
                    <div className="col-md-6" style={{fontWeight:'bold', fontSize:'17px'}}>
                      {xprofile.name}
                    </div>
                    <div className="col-md-6" >
                      {xprofile.interviewid}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6" style={{ fontSize:'14px'}}>
                      {xprofile.jobrole}
                    </div>
                    <div className="col-md-6">
                      {xprofile.type}
                    </div>
                  </div>
                </div>
      
              )
            })
         }
        
        </div> 
        <div>
        <div className="v1">

          </div>
        </div>
        </>
      )
    }
}
export default CallPageHeader

