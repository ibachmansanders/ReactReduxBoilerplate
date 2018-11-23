import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBikeShares, requestBikeShares } from '../reducers/bikeShares';

const ReduxComponent = ({ bikeShares }) => (
  <div>
    {bikeShares.map((share) => (
      <Link to={share.href} key={`bikeshare-${share.id}-${share.company}`}>
        <h2>Company: {share.company}</h2>
      </Link>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  bikeShares: selectBikeShares(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestBikeShares: dispatch(requestBikeShares()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
