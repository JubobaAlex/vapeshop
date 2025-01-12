import React, { useState } from 'react';


const Popup: React.FC = () => {
  const [inputValue, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = ():void => {
    setIsVisible(isVisible === false);
  };
  const btnPopup = ():void => {
    setIsVisible(isVisible === false);
    if(inputValue){
      alert('Ожидайте звонок')
    }
    else {
      alert('Вы не написали номер')
  }
}
  return (
    <div>
      <div className='btn_popup_div'>
      <button onClick={togglePopup} className="popUp_button">Заказать</button>
      </div>
        {isVisible &&(
        <div className="popUp_div">
          <div className="popUp_content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <h2>Ваш номер телефона:<input value={inputValue} id='input_number' type="text" onChange={(e) => setValue(e.target.value)}></input></h2>
            <h5>Мы вам позвоним и узнаемм куда доставить!</h5>
            
            <button onClick={btnPopup} className="confirm-button">Купить</button>
            
          </div>
        </div>
        )}
    </div>
  );
};
export default Popup