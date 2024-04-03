import React from 'react'

export const Order = () => {
  return (
    <section className="order">
      <h2 className="order__title">Замовлення</h2>
      <div className="orders__form">
        <form action="">
          <aside className="left__forms">
            <div className="info__input">
              <label>Ім'я</label>
              <input type="text" placeholder="Type here" required />
            </div>
            <div className="info__input">
              <label>Телефон</label>
              <input type="tel" placeholder="Type here" required />
            </div>
            <div className="info__input">
              <label>Кількість каяків</label>
              <input name="quantity" type="number" placeholder="Type here" required />
            </div>
          </aside>
          <aside className="rigth__input">
            <div className="info__input">
              <label>Кількість годин</label>
              <input name="hours" type="number" placeholder="Type here" required />
            </div>
            <div className="info__input">
              <select name="kayaks_type" id="kayaks_type">
                <option value="одинарний">Одинарний каяк</option>
                <option value="двомісний">Двомісний каяк</option>
                <option value="трьохмісний">Трьохмісний каяк</option>
              </select>
            </div>
          </aside>
        </form>
        <div className="buttons">
          <button className="buttons__total">Загальна ціна: 10$</button>
          <button className="buttons__buy">Замовити</button>
        </div>
      </div>
    </section>
  )
}
