// Saves options to chrome.storage.sync.
function save_options() {
  var word = document.getElementById('replace_word').value;
  var replace = document.getElementById('replace').checked;
  chrome.storage.sync.set({
    replaceDT: replace,
    wordDT: word
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and replaceDT = true.
  chrome.storage.sync.get({
    wordDT: 'Not My President',
    replaceDT: false
  }, function(items) {
    document.getElementById('replace_word').value = items.wordDT;
    document.getElementById('replace').checked = items.replaceDT;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);