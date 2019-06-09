import SingleTeam from "../SingleTeam";

export default function TeamsList({ teams }) {
  return (
    <div className="teams-list">
      {teams.map(({ slug, ...team }) => (
        <SingleTeam key={slug} {...team} />
      ))}
    </div>
  );
}
