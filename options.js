var trumps = [
  'Lord Voldemort',
  'Golden Wrecking Ball',
  'The Most Fabulous Whiner',
  'Fuckface von Clownstick',
  'Man-Baby',
  'Unrepentant Narcissistic Asshole',
  'Short-Fingered Vulgarian',
  'Tiny Hands Dildo',
  'Babyfingers Dildo',
  'Pixie Fingers Dildo',
  'Agent Orange',
  'The Dildo of Doom',
  'Angry Creamsicle',
  'Human-toupee Hybrid',
  'Orange Manatee',
  'Decomposing Jack-o-lantern',
  'Fascist Carnival Barker',
  'A Racist Clementine',
  'Sentient Caps-lock Button',
  '70-year-old Toddler',
  'Cheeto Jesus',
  'Failed Mail-order Meat Salesman',
  'The Angry Cheeto',
  'Douchebag',
  'Not My President',
  'The Turd Monster',
  'America’s Back Mole',
  'Rome Burning in Man Form',
  'Donald Drumpf',
  'Orange Slug',
  'Crybaby Trump',
  'Diaper Donald',
  'Moneydiaper McStupid',
  'The Incredible Douche',
  'Dodgy Donald',
  'Seagull Dipped In Tikka Masala',
  'Bursting Landfill',
  'Municipal Solid Waste',
  'Rotting Whale Blubber',
  'Sputum-filled Orange Julius',
  'Gangrenous Gaping Wound',
  'Racist, Sexist Block of Aged Cheddar',
  'Oversized Wasp Exoskeleton',
  'Old Mustard Face',
  'Neo-fascist Real Estate Golem',
  'Abandoned Roadside Ham Hock',
  'Rotting Spam',
  'Reanimated Roadkill',
  'Heaving Carcass',
  'Stately Hot Dog Casing',
  'Flatulent Leather Couch',
  'Swollen Earthworm Gizzard',
  'Rotten Gazpacho',
  'A Pair Of Chapped Lips Superglued To A Hairball',
  'Malignant Corn Chip',
  'Roiling Cheez Whiz Mass',
  'Screaming Giant Cheese Wedge',
  'Temperamental Gelatinous Sponge',
  'Sentient Hate-balloon',
  'Sun-kissed Ass Plug',
  'Self-tanning Enthusiast',
  'An Enraged, Bewigged Fetus',
  'Human-shaped Wad Of gak',
  'Walking Irradiated Tumor',
  'Uncooked Chicken Breast',
  'Seeping Fleabag',
  'Irradiated Bat Urine',
  'Sentient Waste Disposal Plant',
  'A Disappointment',
  'Poorly-drawn Fascist',
  'Racist Teratoma',
  'Lamprey Eel Spray-painted Gold',
  'Sunken, Corroding Soufflé',
  'Nacho Cheese Golem',
  'Undead Tangerine',
  'Fossilized Meatball',
  'Radioactive Spray-tan',
  'Tattered Craigslist Sofa',
  'Play-Doh Factory Explosion',
  'A New Superfood Made Of Finely-ground Clown Wigs',
  'Unkempt Troll Doll',
  'Rancid Beluga Caviar',
];

// Saves options to chrome.storage.sync.
function save_options() {
  var word = document.getElementById('replace_word').value;
  var replace = document.getElementById('replace').checked;
  var redirect = document.getElementById('redirect').checked;
  chrome.storage.sync.set({
    replaceDT: replace,
    redirectDT: redirect,
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
    replaceDT: true,
    redirectDT: true
  }, function(items) {
    document.getElementById('replace_word').value = items.wordDT;
    document.getElementById('replace').checked = items.replaceDT;
    document.getElementById('redirect').checked = items.redirectDT;
  });
}

function random_no_repeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

// Randomly generate Trump Nickname
var randomWord = random_no_repeats(trumps);
function generate_word() {
  document.getElementById('replace_word').value = randomWord();
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('generate_word')
        .addEventListener('click', generate_word);

document.getElementById('save')
        .addEventListener('click', save_options);
