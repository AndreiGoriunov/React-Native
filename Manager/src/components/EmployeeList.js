import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends Component {
    state = { loading: false };



    componentDidMount() {
        this.props.employeesFetch();
    }

    renderList() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <FlatList
                data={this.props.employees}
                renderItem={({ item }) => <ListItem employee={item} />}
                keyExtractor={item => item.uid}
            />
        );
    }

    render() {
        return (
            this.renderList()
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    });
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);