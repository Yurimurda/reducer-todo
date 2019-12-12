import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducerOne';
import TodoForm from './TodoForm'

const ToDo = () => {
    const [titleState, dispatch] = useReducer(reducer, initialState);
  
    return (
        <div>
             <TodoForm dispatch={dispatch} />
      {titleState.map(toDo => {
        return <Completed todo={toDo} dispatch={dispatch} key={toDo.id} />
      })}
        </div>
    )






};

export default ToDo