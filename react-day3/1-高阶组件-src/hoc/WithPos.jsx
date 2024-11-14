import React, { Component } from 'react'

function WithPos(WrappedComponent) {

    class PosHoc extends Component {

        state = {
            pos : {  x: 0,   y: 0  }
        }

        moseMove = (e) =>{
            this.setState({
                pos: {
                    x: e.pageX,
                    y: e.pageY    
                }
            })
        }

        componentDidMount() {
            document.addEventListener('mousemove', this.moseMove)
        }

        componentWillUnmount() {
            document.removeEventListener('mosuemove', this.moseMove)
        }


        render() {
            return (
            // <div  style={{backgroundColor: 'yellow'}}>
            //     <WrappedComponent />
            // </div>
            <WrappedComponent pos={this.state.pos} {...this.props} />
            )
        }
    }


    return PosHoc;
}

export default WithPos
