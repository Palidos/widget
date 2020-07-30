import React from 'react';

export default function TodayPanel() {
  const dateOfSending = new Date(localStorage.getItem('date')) || new Date();

  const isToday = someDate => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear();
  };

  return (
    <div className='messages__today-text'>
      {isToday(dateOfSending)
        ? 'Сегодня'
        : dateOfSending.toLocaleDateString()}
    </div>
  );
}
