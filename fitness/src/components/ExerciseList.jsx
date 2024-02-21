// src/components/ExerciseList.js

import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      <h2>Exercise Log</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.sets} sets, {exercise.reps} reps, {exercise.weight} lbs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
