import React from 'react';

const Computers = ({ computers }) => {
  return (
    <div className='ui three column grid'>
      <section className='ui grid'>
        {computers.map((computer) => {
          const { id, name, img, price } = computer;
          return (
            <article key={id} className='four wide column'>
              <div className='column'>
                <div className='ui segment'>
                  <img src={img} alt={name} />
                </div>
              </div>
              <div>
                <div className='ui label'>
                  <span>{name}</span>
                </div>
                <div className='ui label'>
                  <span>{price}</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Computers;
