(function () {
  const time_container = document.getElementById("event-time");

  const time_handler = () => {
    const date_handler = new Date(),
      hour_handler = date_handler.getHours(),
      min_handler = date_handler.getMinutes(),
      output_handler = `${hour_handler}<span>:</span>${min_handler}`;

    return output_handler;
  };

  time_container.innerHTML = time_handler();
})();