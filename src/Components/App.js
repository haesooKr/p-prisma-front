import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

const QUERY = gql`
  {
    allRamens {
      name
    }
  }
`;
function App() {
  const { data } = useQuery(QUERY);
  console.log(data);
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
