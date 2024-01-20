// budget controller
var budgetController = (function () {})();

// ui controller
var UIController = (function () {})();

// global controller
var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Clear the fields
    // 5. Calculate and update budget
    // 6. Calculate and update percentages
    console.log('It Works');
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        console.log('ENTER was pressed');
    }
  })
})(budgetController, UIController);
