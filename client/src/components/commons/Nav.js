import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { switchTheme } from '../../actions/headerActions';

// Theme
import { ThemeProvider } from 'styled-components';
import * as themes from '../../style/themes';
import ThemeContext from '../../style/themes/context';

// Components
import { NavWrap, NavTitle, Heading1, LightButton } from '../../style/components/Header';

class Nav extends React.Component {
    componentWillMount() {        
        if(localStorage.theme) {
            const theme = JSON.parse(localStorage.theme);
            this.props.switchTheme(theme);
        }
    }

    switchTheme = () => {
        const theme = this.props.theme.context == 'light' ? themes.dark : themes.light;
        this.props.switchTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
    }

    render() {
        const { title, theme } = this.props;

        return (
            <ThemeContext.Provider value={theme}>
                <ThemeContext.Consumer>
                    {theme => (
                        <ThemeProvider theme={theme}>
                            <NavWrap theme={theme}>
                                <NavTitle>
                                    <Heading1 theme={theme}>{title}</Heading1>
                                </NavTitle>
                                <LightButton onClick={this.switchTheme}>
                                    {theme.context == 'light' ?
                                        <Icon name='lightbulb' /> : <Icon name='lightbulb outline' />
                                    }
                                </LightButton>
                            </NavWrap>
                        </ThemeProvider>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        )
    }
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    switchTheme: PropTypes.func.isRequired
}

export default withRouter(
    connect(null, { switchTheme })(Nav)
);