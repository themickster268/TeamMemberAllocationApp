import './App.css'
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import { useState } from 'react';


export default function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }
  ]);
  const [selectedTeam, setSelectedTeam] = useState("TeamB");

  const handleTeamSelectionChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  function handleEmployeeCardClick(e) {
    const transformedEmployees = employees.map(employee => employee.id === parseInt(e.currentTarget.id)
                                              ?(employee.teamName === selectedTeam) ? {...employee, teamName: ''}
                                              : {...employee, teamName: selectedTeam}
                                              : employee);
    setEmployees(transformedEmployees);
  }
  
  return (
    <>
      <Header 
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(employee => employee.teamName === selectedTeam).length}/>
      <Employees 
        employees={employees} 
        selectedTeam={selectedTeam} 
        onTeamSelectionChange={handleTeamSelectionChange}
        onEmployeeCardClick={handleEmployeeCardClick}/>
      <Footer />
    </>
  )
}
