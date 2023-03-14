console.log("1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n-При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n-Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20\n-Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n-При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n-Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25\n3. В разделе contacts реализован select с выбором городов +25\n-В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n-При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10\n-TOTAL: 125/125");

const burger = document.querySelector('.header_burger');
const header = document.querySelector('.header');
const headerLink = document.querySelector('.header_list');
const gardensButton = document.querySelector('.gardens_button');
const plantingButton = document.querySelector('.planting_button');
const lawnButton = document.querySelector('.lawn_button');
const serviceWrapper = document.querySelector('.service_wrapper');
const pricesBtnCont = document.querySelector('.prices_buttons_container');
const basicsBtn = document.querySelector('.basics_button_header');
const standardBtn = document.querySelector('.standard_button_header');
const procareBtn = document.querySelector('.procare_button_header');
const cityHeader = document.querySelector('.contacts_accordion_header');
const contactsWrapper = document.querySelector('.contacts_wrapper');

burger.addEventListener('click', () => {
  header.classList.toggle('adaptive');
});

headerLink.addEventListener('click', () => {
  header.classList.remove('adaptive');
});

window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.header')) {
    header.classList.remove('adaptive');
  }
})

gardensButton.addEventListener('click', () => {
  if (serviceWrapper.classList.contains('active_planting') && serviceWrapper.classList.contains('active_lawn')) {
    !serviceWrapper.classList.toggle('active_gardens');
  } serviceWrapper.classList.toggle('active_gardens');
});

plantingButton.addEventListener('click', () => {
  if (serviceWrapper.classList.contains('active_gardens') && serviceWrapper.classList.contains('active_lawn')) {
    !serviceWrapper.classList.toggle('active_planting');
  } serviceWrapper.classList.toggle('active_planting');
});

lawnButton.addEventListener('click', () => {
  if (serviceWrapper.classList.contains('active_gardens') && serviceWrapper.classList.contains('active_planting')) {
    !serviceWrapper.classList.toggle('active_lawn');
  } serviceWrapper.classList.toggle('active_lawn');
});

basicsBtn.addEventListener('click', () => {
  if (pricesBtnCont.classList.contains('active_standard')) {
    pricesBtnCont.classList.remove('active_standard');
    pricesBtnCont.classList.toggle('active_basics');
  } else if (pricesBtnCont.classList.contains('active_procare')) {
    pricesBtnCont.classList.remove('active_procare');
    pricesBtnCont.classList.toggle('active_basics');
  } else {
    pricesBtnCont.classList.toggle('active_basics');
  }
})

standardBtn.addEventListener('click', () => {
  if (pricesBtnCont.classList.contains('active_basics')) {
    pricesBtnCont.classList.remove('active_basics');
    pricesBtnCont.classList.toggle('active_standard');
  } else if (pricesBtnCont.classList.contains('active_procare')) {
    pricesBtnCont.classList.remove('active_procare');
    pricesBtnCont.classList.toggle('active_standard');
  } else {
    pricesBtnCont.classList.toggle('active_standard');
  }
})

procareBtn.addEventListener('click', () => {
  if (pricesBtnCont.classList.contains('active_basics')) {
    pricesBtnCont.classList.remove('active_basics');
    pricesBtnCont.classList.toggle('active_procare');
  } else if (pricesBtnCont.classList.contains('active_standard')) {
    pricesBtnCont.classList.remove('active_standard');
    pricesBtnCont.classList.toggle('active_procare');
  } else {
    pricesBtnCont.classList.toggle('active_procare');
  }
})

cityHeader.addEventListener('click', () => {
  if (contactsWrapper.classList.contains('active_canandaigua')) {
    contactsWrapper.classList.remove('active_canandaigua');
    contactsWrapper.classList.toggle('active_city');
  } else if (contactsWrapper.classList.contains('active_newyork')) {
    contactsWrapper.classList.remove('active_newyork');
    contactsWrapper.classList.toggle('active_city');
  } else if (contactsWrapper.classList.contains('active_yonkers')) {
    contactsWrapper.classList.remove('active_yonkers');
    contactsWrapper.classList.toggle('active_city');
  } else if (contactsWrapper.classList.contains('active_sherrill')) {
    contactsWrapper.classList.remove('active_sherrill');
    contactsWrapper.classList.toggle('active_city');
  } else {
    contactsWrapper.classList.toggle('active_city');
  }
});

const canCity = document.querySelector('.contacts_accordion_canandaigua');
const nyCity = document.querySelector('.contacts_accordion_newyork');
const yonkers = document.querySelector('.contacts_accordion_yonkers');
const sherrill = document.querySelector('.contacts_accordion_sherrill');

canCity.addEventListener('click', () => {
  contactsWrapper.classList.toggle('active_canandaigua');
});

nyCity.addEventListener('click', () => {
  contactsWrapper.classList.toggle('active_newyork');
});

yonkers.addEventListener('click', () => {
  contactsWrapper.classList.toggle('active_yonkers');
});

sherrill.addEventListener('click', () => {
  contactsWrapper.classList.toggle('active_sherrill');
});