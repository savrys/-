import React, { useState } from 'react';
import './App.css';
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const [technologies, setTechnologies] = useState([
    { 
      id: 1, 
      title: 'React Components', 
      description: 'Изучение базовых компонентов и их жизненного цикла', 
      status: 'completed' 
    },
    { 
      id: 2, 
      title: 'JSX Syntax', 
      description: 'Освоение синтаксиса JSX и его особенностей', 
      status: 'in-progress' 
    },
    { 
      id: 3, 
      title: 'State Management', 
      description: 'Работа с состоянием компонентов', 
      status: 'not-started' 
    },
    { 
      id: 4, 
      title: 'Props System', 
      description: 'Передача данных между компонентами', 
      status: 'not-started' 
    },
    { 
      id: 5, 
      title: 'Event Handling', 
      description: 'Обработка событий в React', 
      status: 'not-started' 
    }
  ]);

  const updateTechnologyStatus = (id, newStatus) => {
    setTechnologies(prevTech => 
      prevTech.map(tech => 
        tech.id === id ? { ...tech, status: newStatus } : tech
      )
    );
  };

  const getNextStatus = (currentStatus) => {
    const statusFlow = {
      'not-started': 'in-progress',
      'in-progress': 'completed',
      'completed': 'not-started'
    };
    return statusFlow[currentStatus];
  };

  const handleCardClick = (id, currentStatus) => {
    const nextStatus = getNextStatus(currentStatus);
    updateTechnologyStatus(id, nextStatus);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 Трекер изучения технологий</h1>
        <p>Отслеживайте ваш прогресс в изучении веб-разработки</p>
        <p className="click-hint">💡 Нажмите на карточку, чтобы изменить статус</p>
      </header>
      
      <ProgressHeader technologies={technologies} />
      
      <main className="technologies-container">
        <h2>Дорожная карта изучения</h2>
        <div className="technologies-grid">
          {technologies.map(tech => (
            <TechnologyCard
              key={tech.id}
              id={tech.id}
              title={tech.title}
              description={tech.description}
              status={tech.status}
              onStatusChange={handleCardClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;