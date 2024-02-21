// src/App.js

import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';

const App = () => {
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = (newExercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <ExerciseForm onAddExercise={handleAddExercise} />
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default App;
