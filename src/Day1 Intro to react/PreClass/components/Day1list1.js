import React from "react";
import Day1listRow from "./Day1listRow";
class Day1list1 extends React.Component{
    render(){
        return (
            <div>
                <h1>List1</h1>
                <ol>
                    <Day1listRow/>
                    <Day1listRow/>
                    <Day1listRow/>
                </ol>
            </div>
        )
    }
}
export default Day1list1;