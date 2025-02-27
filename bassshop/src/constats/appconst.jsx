import bass from '/bass.svg'
import strunes from '/strunes.svg'
import amp from '/amp.svg'
import electro from '/electro.svg'
import pedal from '/pedal_test.svg'
import strunesBass from '/strunes_bass.svg'
import scissors from '/scissors.svg'
import cartmaster from '/masterscart.svg'
export const LeftSection = [
    {
    title: 'Бас-гитары',
    image: bass,
    alt: 'Бас-гитары',
    className: 'main-container-left-img',
    style: { maxWidth: '100%', height: 'auto' }
    },
    {
      title: 'Электрогитары',
      image: electro,
      alt: 'Электрогитары',
      className: 'main-container-left-img-second',
      style: { maxWidth: '100%', height: 'auto' }
    }]

export const MiddleSection = [{
    title: 'Струны для <br/>электрогитар',
    image: strunes,
    alt: 'Струны для электрогитар',
    className : 'main-container-middle-img',
    style : { top:'-30px' },
},{
    title: 'Комбики и <br/>усиление',
    image: amp,
    alt: 'Комбики и усиление',
    className : 'main-container-middle-img',
    style : { right:'24px',top:'30px' },
},{
    title: 'Аксессуары<br/> для электрогитар',
    image: pedal,
    alt: 'Аксессуары для электрогитар',
    className : 'main-container-middle-img',
    style: {top:'30px' },
},{
    title: 'Струны для<br/> бас-гитар',
    image: strunesBass,
    alt: 'Струны для бас-гитар',
    className : 'main-container-middle-img',
    style : {top:'-24px' },
}]
export const RightSection = [
    {
        title: 'Своя <br/>мастерская',
        image: cartmaster,
        alt: 'Своя мастерская',
        className : 'scissors-img',
        text : 'Каждая гитара отстраивается в нашей мастерской. Струны низко, играть удобно :)',
    },
    {
        title: 'Надежная<br /> доставка',
        image: scissors,
        alt: 'Надежная доставка',
        className : 'scissors-img',
        text : 'Упаковываем так, будто пупырка у нас бесконечная. Каждую отправку страхуем за свой счет. Вы ничем не рискуете',
    },
    {
        title: 'Сервисное<br /> обслуживание',
        image: scissors,
        alt: 'Сервисное обслуживание',
        className : 'scissors-img',
        text : 'Внутри гитары стоит наша печать. Если вдруг почувствуюте дискомфорт при игре, наши мастера вернут, как было :)',
    }
]
