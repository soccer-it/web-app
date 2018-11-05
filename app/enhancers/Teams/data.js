import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import { connect } from 'react-redux';
import { fetchData } from 'ducks/requests';
import R from 'ramda';

/* global APP */

const { API } = APP,
      { teams } = API;

const teamsDefaultValue = [];

const mapStateToProps = ({ requests }) => {
  const { teamsResponse } = requests;

  return {
    teams: R.pathOr(teamsDefaultValue, ['data', 'teams'], teamsResponse)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeams: () => {
      return dispatch(fetchData({
        url: teams,
        key: 'teamsResponse'
      }));
    }
  };
};

export default compose(
  setDisplayName('enhancers/AppLayout/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
);