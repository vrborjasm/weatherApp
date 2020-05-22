import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  
  const [search, setSearch] = useState({
    country: '',
    city: ''
  })
  
  const [request, setRequest] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { country, city} = search;

  useEffect(() => {
    const requestAPI = async () => {
      
      if(request) {
        const appId = '53891a6a078c9651a2e5409c0c26b0bb';
        const url = ` http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        
        const resp = await fetch(url);
        const result = (await resp.json());

        setResult(result);
        setRequest(false);

        if(result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }

    }  
    requestAPI()
  },[request]);

  let component;
  if(error) {
    component = <Error message="No hay resultado" />
  } else {
    component = <Weather result={result} />
  }
  

  return (
    <Fragment>
      <Header 
        title='React Weather'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setRequest={setRequest}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
