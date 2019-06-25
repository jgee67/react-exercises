import React from 'react';
import SimpleCard from './SimpleCard';

const App = () => (
  <main className="container">
    <SimpleCard item={{ title: 'title text', description: 'description text', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }} />
  </main>
);

export default App;
