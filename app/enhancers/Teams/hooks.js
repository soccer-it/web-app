import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import setDisplayName from 'recompose/setDisplayName';

export default compose(
  setDisplayName('enhancers/AppLayout/hooks.js'),
  lifecycle({
    componentDidMount() {

      const { getTeams } = this.props;

      getTeams()
        .then((res) => console.log('Res', res))
    }
  })
);