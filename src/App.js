import React from 'react';
import { Counter } from './features/counter/Counter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <header>
        <Counter />
        <Footer  />
      </header>
    </div>
  );
}

export default App;
