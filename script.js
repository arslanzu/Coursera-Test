// STEP 0: Request the list of categories from the server
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  function (categories) {

    // STEP 1: Pick a random category object
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // STEP 2: Prepare the short_name (with quotes) for the onclick HTML
    var randomCategoryShortName = "'" + randomCategory.short_name + "'";

    // STEP 3: Replace {{randomCategoryShortName}} in the HTML snippet
    var homeHtmlToInsertIntoMainPage =
      insertProperty(homeHtml, "randomCategoryShortName", randomCategoryShortName);

    // STEP 4: Insert the updated HTML into the #main-content
    insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
  },
  true // JSON response expected
);
