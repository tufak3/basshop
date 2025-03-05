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
    id: 1,
    title: 'Бас-гитары',
    image: bass,
    alt: 'Бас-гитары',
    className: 'main-container-left-img',
    style: { maxWidth: '100%', height: 'auto' },
    link: '/bass-guitars'
    },
    {
      id: 2,
      title: 'Электрогитары',
      image: electro,
      alt: 'Электрогитары',
      className: 'main-container-left-img-second',
      style: { maxWidth: '100%', height: 'auto' },
      link: '/electro-guitars'
    }]

export const MiddleSection = [{
    id: 1,
    title: 'Струны для <br/>электрогитар',
    image: strunes,
    alt: 'Струны для электрогитар',
    className : 'main-container-middle-img',
    style : { top:'-30px' },
    link: '/strings'
},{
    id: 2,
    title: 'Комбики и <br/>усиление',
    image: amp,
    alt: 'Комбики и усиление',
    className : 'main-container-middle-img',
    style : { right:'24px',top:'30px' },
    link: '/amps'
},{
    id: 3,
    title: 'Аксессуары<br/> для электрогитар',
    image: pedal,
    alt: 'Аксессуары для электрогитар',
    className : 'main-container-middle-img',
    style: {top:'30px' },
    link: '/pedals'
},{
    id: 4,
    title: 'Струны для<br/> бас-гитар',
    image: strunesBass,
    alt: 'Струны для бас-гитар',
    className : 'main-container-middle-img',
    style : {top:'-24px' },
    link: '/bass-strings'
}]
export const RightSection = [
    {
        id: 1,
        title: 'Своя <br/>мастерская',
        image: cartmaster,
        alt: 'Своя мастерская',
        className : 'scissors-img',
        text : 'Каждая гитара отстраивается в нашей мастерской. Струны низко, играть удобно :)',
    },
    {
        id: 2,
        title: 'Надежная<br /> доставка',
        image: scissors,
        alt: 'Надежная доставка',
        className : 'scissors-img',
        text : 'Упаковываем так, будто пупырка у нас бесконечная. Каждую отправку страхуем за свой счет. Вы ничем не рискуете',
    },
    {
        id: 3,
        title: 'Сервисное<br /> обслуживание',
        image: scissors,
        alt: 'Сервисное обслуживание',
        className : 'scissors-img',
        text : 'Внутри гитары стоит наша печать. Если вдруг почувствуюте дискомфорт при игре, наши мастера вернут, как было :)',
    }
]
