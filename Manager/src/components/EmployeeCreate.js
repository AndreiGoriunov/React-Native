import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeFormReset } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    state = { loading: false };

    componentWillMount() {
        this.props.employeeFormReset();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.setState({ loading: true });
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />; //Prevents user from pressing button multiple times while scene is changing
        }
        else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Create
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, employeeFormReset })(EmployeeCreate);