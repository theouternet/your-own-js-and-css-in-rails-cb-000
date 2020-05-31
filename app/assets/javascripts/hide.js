function hideWhenClicked(event) {
  $(event.target).hide();
}

$('#hide_this').click(hideWhenClicked)