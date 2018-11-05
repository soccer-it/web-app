import SingleTeam from 'components/Teams/Single';

const createTeams = (teams) => teams.map((team) => <SingleTeam { ...team } />);

const TeamsList = ({ teams }) => {
  return (
    <div className="teams-list">
      { createTeams(teams) }
    </div>
  );
};

export default TeamsList;