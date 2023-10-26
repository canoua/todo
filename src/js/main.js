

import './../scss/commons.scss';

//timer
// import './components/timer/timer.js';
// import './components/timer/script.js';

//todo
import todoHtml from './components/todo/render/todoHtml';
import todoScript from './components/todo/todoScript';

document.addEventListener('DOMContentLoaded', function() {
  todoHtml();
  todoScript();
})