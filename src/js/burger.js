export const burger = () => {
  const burger = document.querySelector('.header__burger')

  const toggleBurger = () => {
    burger.classList.toggle('active')
  }

  burger.addEventListener('click', toggleBurger)
}
