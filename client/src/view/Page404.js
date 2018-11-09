import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Content, ContentH1, ContentLink } from '../style/components/Page404';
import { removeHeaderTitle } from '../actions/headerActions';

class Page404 extends React.Component {
  componentWillMount() {
    this.props.removeHeaderTitle();  
  }

  render() {
    return (
      <Wrapper className="page-404">
        <Content className="page-404__content">
          <ContentH1>Oopss..</ContentH1>
          <Link to="/"><ContentLink>Back to homepage!</ContentLink></Link>
        </Content>
      </Wrapper>
    )
  }
}

Page404.propTypes = {
  removeHeaderTitle: PropTypes.func.isRequired
}

export default withRouter(
  connect(null, { removeHeaderTitle })(Page404)
);
