import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { setHeaderTitle } from '../actions/headerActions';

// component
import FractionForm from '../components/FractionForm';
import FractionResult from '../components/FractionResult';

// validation
import { currencyFormat } from '../validation';

// util
import { getNumber, getFraction, getCountFraction } from '../util';

class Home extends React.Component {
    state = {
        input: '',
        fractions: [],
        isValid: true
    }

    componentWillMount() {
        this.props.setHeaderTitle('Money Fraction');
    }

    onChange = (e) => {
        this.setState({ input: e.target.value, isValid: true })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input } = this.state;

        if(input !== '' && input != '0' && currencyFormat(input)) {
            const fractionArray = getFraction(getNumber(input));
            const countFraction = getCountFraction(fractionArray);

            this.setState({ fractions: countFraction, isValid: true });
        }
        else {
            this.setState({ fractions: [], isValid: false });
        }
    }

    render() {
        const { input, fractions, isValid } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>Money Fraction</title>
                </Helmet>
                
                <div className="has-header-fixed">
                    <FractionForm value={input} onSubmit={this.onSubmit} onChange={this.onChange} isValid={isValid} />

                    <FractionResult fractions={fractions}/>
                    
                    {/*<img src={require('../../static/images/no_pic.png')} alt="no pic"/>*/}
                </div>
            </React.Fragment>
        );
    }

};

Home.propTypes = {
    setHeaderTitle: PropTypes.func.isRequired
};

// export default withRouter(Home);
export default withRouter(
    connect(null, { setHeaderTitle })(Home)
);