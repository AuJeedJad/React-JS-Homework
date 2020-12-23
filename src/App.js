import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Counter from './components/Counter';

class App extends Component {
  render() {
    const picList = [
      'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1480569798454-4c8d2d1cf5e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1523906675968-f957b4033580?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1344&q=80',
      'https://images.unsplash.com/photo-1536856543798-c55c4b944ebf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    ];
    return <Carousel picList={picList} />;
  }
}

export default App;
