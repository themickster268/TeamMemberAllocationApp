import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = {};

    employees.forEach(employee => {
      const {teamName} = employee;
      if(!teams[teamName]){
        teams[teamName] = {
          name: teamName,
          selected: teamName === selectedTeam,
          members: []
        };
      }
      teams[teamName].members.push(employee);
    });
    
    return teams;

    /* const teams = [];

    const teamAMembers = employees.filter(employee => employees.teamName === "TeamA");
    const teamA = { team: "TeamA", members: teamAMembers, collapsed: selectedTeam === "TeamA" ? false : true };
    teams.push(teamA);

    const teamBMembers = employees.filter(employee => employees.teamName === "TeamB");
    const teamB = { team: "TeamB", members: teamBMembers, collapsed: selectedTeam === "TeamA" ? false : true };
    teams.push(teamB);

    const teamCMembers = employees.filter(employee => employees.teamName === "TeamC");
    const teamC = { team: "TeamC", members: teamCMembers, collapsed: selectedTeam === "TeamC" ? false : true };
    teams.push(teamC);

    const teamDMembers = employees.filter(employee => employees.teamName === "TeamD");
    const teamD = { team: "TeamD", members: teamDMembers, collapsed: selectedTeam === "TeamD" ? false : true };
    teams.push(teamD);

    return teams; */
  }

  function handleOnTeamClick(event) {
    setSelectedTeam(event.currentTarget.id);
    setGroupedEmployees(groupTeamMembers());
  }

  const teams = Object.keys(groupedEmployees).filter(team => team !== "");
  
  return (
    <main className="container">
      {
        teams.map(team => {
          return (
            <div key={groupedEmployees[team].name} className="card mt-2" style={{cursor: "pointer"}}>
              <h4 id={groupedEmployees[team].name} className="card-header text-secondary bg-white" onClick={handleOnTeamClick}>
               Team Name: {groupedEmployees[team].name}
              </h4>
              <div id={ "collapse_" + groupedEmployees[team].name } className={groupedEmployees[team].selected ? "" : "collapse"}>
                <hr />
                {
                  groupedEmployees[team].members.map(member => {
                    return (
                      <div className="mt-2" key={member.id}>
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </main>
  );
}

export default GroupedTeamMembers;