import React, {useState, createContext} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import './app.css';

import ListScreen from './screens/ListScreen';
import LibraryScreen from './screens/LibraryScreen';

export const LibraryContext = createContext(null);

export default function App() {

  const [selectedLibrary, setSelectedLibrary] = useState();
  const selectedLibraryContext = {
    selectedLibrary,
    setSelectedLibrary,
  };

  return (
    <LibraryContext.Provider value={selectedLibraryContext}>
      <div>
        <Switch>
          <Route path="/:id">
            <LibraryScreen />
          </Route>
          <Route path="/">
            <ListScreen />
          </Route>
        </Switch>
      </div>
    </LibraryContext.Provider>
  );
}
