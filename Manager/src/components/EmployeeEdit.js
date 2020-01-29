import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm, Spinner } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false, loading: false }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
        /*Object.entries(employee).forEach(([prop, value]) => {
            employeeUpdate({ prop, value });
        });*/
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.setState({ loading: true });
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    renderSaveButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Save Changes
            </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    {this.renderSaveButton()}
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete {this.props.name}?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);