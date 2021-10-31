import React from "react";

class Cbased extends React.Component{
  state = {
    show: false
  }

  changeState = () => {
    this.setState({
      show : !this.state.show
    })
  }
    render(){
        return (
        <div className="div2" onClick={this.changeState}>
        <p>To see styling in classbased component</p>
        {
          this.state.show == false? null : (
            <div className="box2"><h3>This is created using class based component</h3>
              <p className="para1">This is done using external css</p>
              <p style={{color:"yellow"}}>This is done using inline css</p>
            </div>
          )
        }
    </div>
    )    
    }
}
export default Cbased;