// src/components/ExerciseForm.js

import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [exercise, setExercise] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise((prevExercise) => ({ ...prevExercise, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExercise(exercise);
    setExercise({
      name: '',
      sets: '',
      reps: '',
      weight: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise Name:
        <input type="text" name="name" value={exercise.name} onChange={handleChange} />
      </label>
      <label>
        Sets:
        <input type="number" name="sets" value={exercise.sets} onChange={handleChange} />
      </label>
      <label>
        Reps:
        <input type="number" name="reps" value={exercise.reps} onChange={handleChange} />
      </label>
      <label>
        Weight (lbs):
        <input type="number" name="weight" value={exercise.weight} onChange={handleChange} />
      </label>
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
