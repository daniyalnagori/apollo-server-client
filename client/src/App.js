import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  useQuery, gql } from '@apollo/client';

const GetData = gql`
  query message{
    getMessage{
      message
      firstName
  }
}
`;
function App() {
  const {loading, error, data} = useQuery(GetData);
 if (loading) return <div>loading...</div>
  console.log('dataa',data.getMessage.message);
  return (
    <div className="App">
      Hello world {JSON.stringify(data)}
    </div>
  );
}

export default App;
