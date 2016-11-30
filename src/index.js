import App from './components/App.html'
document.addEventListener('DOMContentLoaded', mount)

function mount () {
  console.log('starting')
  var app = new App({
    target: document.querySelector( 'main' ),
    data: {
      title: 'People',
      users: [
        {name: 'Ben'},
        {name: 'Nina'},
        {name: 'Jack'},
        {name: 'Maggie'}
      ]
    }
  })
}
