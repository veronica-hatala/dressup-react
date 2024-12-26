import './style.scss';
import React, { useState } from 'react';

function App() {

  const [dressupState, setDressupState] = useState({
    dress: {current: 0, total: 4},
    shoes: {current: 0, total: 2},  
    socks: {current: 0, total: 2},
  });

  function next(item){
    let next_num = dressupState[item].current + 1
    let new_current = next_num < dressupState[item].total ? next_num : dressupState[item].current
    console.log(new_current);
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  function previous(item){
    let previous_num = dressupState[item].current - 1
    let new_current = previous_num > -1 ? previous_num : dressupState[item].current
    console.log(new_current);
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  return (
    <div className="App">
      <div id="container">
        <div id="background">
          <div class="paper-doll">
            <div id="body"></div>
            { Object.keys(dressupState).map((item) => 
                <div id={item} className={item+(dressupState[item].current+1)} key={item}></div>
              )
            } 
          </div>
          <div class="decorate-label"> Decorate </div>
          <div class="selection-arrows-container">
            {Object.keys(dressupState).map((item) => (
              <div class="selection-arrows" key={item}>
                <input
                  type="button"
                  className="selection-arrow previous-arrow"
                  value="➜"
                  id={`previous${item}`}
                  onClick={() => previous(item)}
                  disabled={dressupState[item].current === 0}
                />
                <div class="selection-label">{`${item}`}</div>
                <input
                  type="button"
                  className="selection-arrow next-arrow"
                  value="➜"
                  id={`next${item}`}
                  onClick={() => next(item)}
                  disabled={dressupState[item].current === dressupState[item].total - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
