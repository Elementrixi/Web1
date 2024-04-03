import React from 'react'

export const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="order__title">Контакти</h2>
      <p className="info">Ми знаходимося у Білій Церкві</p>
      <div className="book">
        <p className="info">Бронювання</p>
        <p className="tel">+38 (09x) xxx xx xx</p>
      </div>
      <div className="book">
        <p className="info">Корпоративні замовлення</p>
        <p className="tel">+38 (09x) xxx xx xx</p>
      </div>
      <div className="book">
        <p className="info">Скарги</p>
        <p className="tel">+38 (09x) xxx xx xx</p>
      </div>
    </section>
  )
}
