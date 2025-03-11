import './App.css';


function Zapytanie() {

    const options = {
        method: 'POST',
        headers: {
          cookie: 'visitor_id=67981AF8434442FA2E71124DE',
          'Content-Type': 'application/json'
        },
        body: '{"username":"kf63083@amu.edu.pl","password":"Krychu11L19*63083"}'
      };
      
      fetch('/api', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
      <div className="App">
            <p>${response}</p>
          
      </div>
    );
  }
  
  export default Zapytanie;


