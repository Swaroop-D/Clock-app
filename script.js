(function (target) {
  function time_output() {
    let date_handler = new Date(),
      hr_handler = date_handler.getHours(),
      min_handler = date_handler.getMinutes();
    hr_handler = hr_handler % 12 || 12;
    let output_string = `${hr_handler}<span>:</span>${equal_val(min_handler)}`;

    return output_string;
  }
  function equal_val(notation) {
    return (parseInt(notation, 10) < 10 ? '0' : '') + notation;
  }

  function time_handler() {
    target.innerHTML = time_output();
    setTimeout(time_handler, 1000);
  } time_handler()
})(document.querySelector("#event-time"));