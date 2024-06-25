/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Главная', // name that appear in Sidebar
  },
  {
    path: '/app/buttons',
    icon: 'BulbIcon',
    name: 'Освещение',
  },
  {
    path: '/app/forms',
    icon: 'LightIcon',
    name: 'Питание',
  },
  {
    path: '/app/modals',
    icon: 'RocketIcon',
    name: 'Двигатели',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Графики',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Таблицы',
  },
  
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
]

export default routes
