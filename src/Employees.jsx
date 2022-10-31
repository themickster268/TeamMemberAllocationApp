
import TeamDropdown from './TeamDropdown';
import Employee from './Employee';

const Employees = ({ employees, selectedTeam, onTeamSelectionChange, onEmployeeCardClick }) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <TeamDropdown selectedTeam={selectedTeam} onTeamSelectionChange={onTeamSelectionChange}/>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map(employee => (
                <Employee 
                  key={employee.id} 
                  employee={employee} 
                  selectedTeam={selectedTeam} 
                  onEmployeeCardClick={onEmployeeCardClick} />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;