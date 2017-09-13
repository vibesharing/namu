import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDTecUG73h6GQ1U5_aA8gzh2jps6PDuwao',
  authDomain: 'linear-theater-133423.firebaseapp.com',
  databaseURL: 'https://linear-theater-133423.firebaseio.com',
  projectId: 'linear-theater-133423',
  storageBucket: 'linear-theater-133423.appspot.com',
  messagingSenderId: '36672376458'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
