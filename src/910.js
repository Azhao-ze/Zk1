import React, { Component } from 'react';

class Rea extends Component {
    sdata={data:[]}
    render() {
        return (
            <div>
                <ul onClick="Btn">
                    <li>曹云金离婚</li>
                    <li>     猛龙vs勇士         </li>
                    <li></li>
                </ul>
            </div>
        );
    }
    Btn(){
        alert("换一换")
        this.state.data.splic(2,5)
        this.setState({data:data})
    }
}

export default Rea;