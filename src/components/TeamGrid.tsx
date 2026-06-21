import { team } from "../content/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((person) => (
        <article className="card team-card" key={person.email}>
          <a
            className="team-photo"
            href={person.profileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name}'s profile`}
          >
            {person.photo ? (
              <img
                src={person.photo}
                alt=""
                style={person.photoPosition ? { objectPosition: person.photoPosition } : undefined}
              />
            ) : (
              <span>{getInitials(person.name)}</span>
            )}
          </a>
          <div className="team-card-body">
            <h3>
              {person.profileUrl ? (
                <a href={person.profileUrl} target="_blank" rel="noreferrer">
                  {person.name}
                </a>
              ) : (
                person.name
              )}
            </h3>
            {person.role ? <p className="team-role">{person.role}</p> : null}
            <a href={`mailto:${person.email}`}>{person.email}</a>
            {person.bio ? <p>{person.bio}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
