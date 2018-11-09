import React, { Component } from 'react';
import { Form, Input, Button, Error} from '../style/components/FractionForm';

export default class FractionForm extends Component {
    render() {
        const { value, onSubmit, onChange, isValid } = this.props;

        return (
            <Form onSubmit={onSubmit}>
                <div className="form-group">
                    <Input type="text" value={value} onChange={onChange} placeholder="Rp 12.510,00"/>
                    {!isValid && <Error>Input format not valid..</Error>}
                </div>

                <Button type="submit">Check</Button>
            </Form>
        )
    }
}
