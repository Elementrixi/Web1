import React, { useEffect, useState } from 'react'
import { Card } from '../../blocks/Card/Card';
import axios from 'axios';

export const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/benefits')
    .then(response => {
      setBenefits(response.data);
    })
    .catch(error => {
      console.error('Помилка отримання даних з API:', error);
    });
  }, []);

  return (
    <section className="benefits">
      <h2 className="order__title">Переваги</h2>
      <div className="benefits__cards">
        {benefits.map(benefit => {
          return <Card benefit={benefit} />
        })}
      </div>
    </section>
  )
}
