import React from 'react';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true, // Показать точки
    infinite: true, // Циклическая прокрутка
    speed: 500, // Скорость прокрутки
    slidesToShow: 1, // Количество показанных слайдов
    slidesToScroll: 1 // Количество слайдов для прокрутки
  };

  return (
    <div>
      <div className='SliderConteinerPasito'>
      <Slider  {...settings}>
        <div>
          <h2 className='textSlider'><img className='imgslider' src="/1.jpg" width={640} height={480} alt="" />Pasito 2</h2>
          <b >Поздоровайтесь с новейшим комплектом модов Smoant Pasito 2 на 2500 мАч, который является обновлением Smoant Pasito.
Комплект Smoant Pasito 2 питается от встроенного аккумулятора большой емкости 2500 мАч, чтобы вы могли использовать его в течение всего дня с максимальной выходной мощностью 80 Вт.
Благодаря интеллектуальной батарее устройство Smoant Pasito 2 может обеспечить режим VW / DVW / Bypass / TC для удовлетворения ваших различных потребностей. На красочном TFT-экране размером 0,96 дюйма вы можете четко видеть дату выпуска устройства Smoant Pasito 2</b>
        </div>
        <div>
        <h2 className='textSlider'><img className='imgslider' src="/2.jpg" width={640} height={480} alt="" />Pasito 2</h2>
        <b>
        0,96" цветной TFT-дисплей с регулировкой отображения цветов.
        <br />
На дисплее отображаются:
        <br />
- установленную мощность;
        <br />
- режим работы;
        <br />
- уровень заряда аккумулятора;
        <br />
- выставленное сопротивление;
        <br />
- напряжение;
- время и количество совершенных затяжек;
        <br />
Работает Pasito 2 на мощном чипсете, с возможностью выбора одного из четырех режимов Bypass, VW, DVW, TC (NI200, SS, TI).
        </b>
        </div>
        <div>
        <h2 className='textSlider'><img className='imgslider' src="/3.jpg" width={640} height={480} alt="" />Pasito 2</h2>
          <b>При использовании адаптера Pasito 2 Adapter:
          <br />
- испаритель Pasito Ni-80 1,4 Ом (10-13Вт);
          <br />
- испаритель Mesh 0,6 Ом (20-25Вт);
- испаритель Pasito RBA (0,5-1,0 Ом);
          <br />
При использовании адаптера Pasito 2 base:
          <br />
- испаритель Pasito K-3 Half DTL Mesh 0,6 Ом (20-25Вт);
          <br />
- испаритель Pasito K-2 Dual Mesh 0,4 Ом (35-50Вт);
          <br />
- испаритель Pasito K-RBA 0,3-2,0 Ом;
          <br />
- испаритель Pasito K-1 Mesh 0,3 Ом (50-65Вт).
          </b>
        </div>
        <div className='divSlider'>
          <h2 className='textSlider'><img className='imgslider'  src='/4.jpg' width={640} height={480} />Pasito 2</h2>
          <b>Устройство Smoant Pasito 2 510 Drip tip - 510-й мундштук; Air-flow control - регулировка воздушного потока на испаритель; Left buttoon (-) - Левая кнопка управления (-); Right buttoon (+) - Правая кнопка управления (+); Type-C - порт заряда Type-C; 0,96" TFT screen - цветной дисплей 0,96 дюйма; Fire button - кнопка включения.</b>
          
        </div>
      </Slider>
      </div>
      <main>
        <div>
          <h1>Привет</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
