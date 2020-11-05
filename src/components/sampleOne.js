import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux-saga/sampleOne/acctions';

const { loadData } = actions;

class SampleOne extends Component {
    constructor(props) {
        super(props);       
        this.props.loadData()
    }
    
    render() {
        return (
            <div>
                <h1>Sample One  {this.props.test}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const {test} = state.SampleOne
    return {
        test
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
}

export default connect(mapStateToProps, {
    // name of funcation whose in action here and top
    loadData
})(SampleOne)

// export default SampleOne;