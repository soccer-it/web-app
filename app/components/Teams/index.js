import TeamsEnhancer from 'enhancers/Teams';
import TeamsList from 'components/Teams/List';

const Teams = ({ teams }) => {
  return (
    <div className="teams">
      <TeamsList teams={teams} />
    </div>
  );
};


export default TeamsEnhancer(Teams);