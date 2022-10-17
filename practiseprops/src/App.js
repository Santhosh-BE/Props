import './App.css';
import Employee from './Components/Employee';

function App() {
  const EmployeeInfo=[
    {name:"santhosh",age:25},
    {name:"vijay",age:26},
    {name:"karthi",age:27},
    {name:"jega",age:28},
    {name:"gandhi",age:29}
  ]
  return (
    <div className="App">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
      <tbody>
      {/* <Employee name="santhosh" age="25"/> */}
      {
        EmployeeInfo.map(every=>{
          const {name,age}=every;
          return(
            <tr>
         <td> <Employee name={name}/></td>
         <td> <Employee age={age}/></td>
         </tr>
         )
        }
          )
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
