$(document).ready(function() {
  $("li").css("id", "uw");

  const ENTER = 13;
  const states = ["gather", "process"];

  let state = states[0];
  let words = new Array();
  let word = '';

  function redraw() {
    $('#word-input').val('');

    const todos = $("#todos");
    todos.empty();

    words.forEach(word => {
      todos.append(`<li>${word}</li>`)
    });
  }

  // reset button click
  $("button").on("click", function(e) {
    words = new Array();
    state = states[0];
    redraw();
  });

  // keypress
  $("input").on("keypress", function(e) {
    var code = e.which;
    const char = String.fromCharCode(code);

    if (code === ENTER) {
      state = states[1];
    }

    // console.log('key:' + code + '\tstate:' + state);
    switch (state) {
      case "gather":
        word += char;
        break;

      // process
      case "process":
        words.push(word);
        word = '';
        redraw();
        state = states[0];
        break;

      default:
        alert('Unknown state');
        break;
    }
  });
});
