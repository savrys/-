import React from 'react';
import './TechnologyCard.css';

function TechnologyCard({ id, title, description, status, onStatusChange }) {
  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return '✅ Изучено';
      case 'in-progress':
        return '🔄 В процессе';
      case 'not-started':
        return '⏳ Не начато';
      default:
        return '❓ Неизвестно';
    }
  };

  const getStatusClass = () => {
    return `technology-card status-${status}`;
  };

  const handleClick = () => {
    onStatusChange(id, status);
  };

  const getNextStatusHint = () => {
    switch (status) {
      case 'completed':
        return 'Нажмите, чтобы отметить как "Не начато"';
      case 'in-progress':
        return 'Нажмите, чтобы отметить как "Изучено"';
      case 'not-started':
        return 'Нажмите, чтобы отметить как "В процессе"';
      default:
        return 'Нажмите для изменения статуса';
    }
  };

  return (
    <div 
      className={getStatusClass()} 
      onClick={handleClick}
      title={getNextStatusHint()}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="status-badge">{getStatusText()}</span>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="progress-indicator">
          <div className={`progress-bar ${status}`}></div>
        </div>
        <div className="status-hint">
          {getNextStatusHint()}
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;