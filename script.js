// Simulated category data (this replaces an actual AJAX call for demo)
var categories = [
  { short_name: "L", name: "Lunch" },
  { short_name: "D", name: "Dinner" },
  { short_name: "S", name: "Sushi" },
  { short_name: "SP", name: "Specials" }
];

// Simulated $dc namespace with loadMenuItems function
var $dc = {};
$dc.loadMenuItems = function(short_name) {
  document.getElementById("main-content").innerHTML =
    "<h2>Menu for category: " + short_name + "</h2><p>Here are the items...</p>";
};

// Function to insert property into HTML (mimics Coursera helper)
function insertProperty(string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  return string.replace(new RegExp(propToReplace, "g"), propValue);
}

// Replace Specials placeholder with random category
(function() {
  // Get the HTML of the page
  var html = document.body.innerHTML;

  // Pick random category
  var randomCategory = categories[Math.floor(Math.random() * categories.length)];
  var randomCategoryShortName = "'" + randomCategory.short_name + "'";

  // Replace placeholder
  var newHtml = insertProperty(html, "randomCategoryShortName", randomCategoryShortName);

  // Overwrite the page with updated HTML
  document.body.innerHTML = newHtml;
})();
