import React from 'react';
import './Position.css'
class Input extends React.Component {
    constructor(){
        super()
           this.state = {
               text:null,
               password:null,
               date:null
           }
        
    }

    onChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    onChangePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onChangeDate=(e)=>{
        this.setState({
date:e.target.value
        })
    }
    render() {
        return (
            <div className="background">
                <div className="position1"> 
                    <h3>!Welcome To Online PTE Forms!</h3>
                </div>
                <div className='fixed'>
                    <div>
                        Name <input type="text" onChange={(e)=>{this.onChange(e)}}/>
                    {console.log(this.state.text)}
                    </div>
                    <br />
                    <div>
                        Passport No.  <input type="text" onChange={(e)=>{this.onChangePassword(e)}}/>
                        {console.log(this.state.password)}
                    </div>
                    <br />
                    <div>
                        Test Date <input type="date" onChange={(e)=>{this.onChangeDate(e)}}/>
                        {console.log(this.state.date)}
                    </div>
                </div>
                
            </div>
        
        );
    }
}

export default Input;