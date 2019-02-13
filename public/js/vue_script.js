var vm = new Vue({
  el: '#Burgers',
  data: {
    burgers: food,
    checkedBurgers: []
  }
})

var vm1 = new Vue({
  el: '#buttonArea',
  data: {
    customerInfo: []
  },
  methods: {
    submitForm: function (event) {

      document.getElementById("formData").innerHTML = "";

      var name = document.getElementById("full name").value;
      var email = document.getElementById("email").value;
      var street = document.getElementById("street").value;
      var house = document.getElementById("house").value;

      // checking radio buttons.
      var radios = document.getElementsByName('gender');
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked)
        {
          var gender = radios[i].value;
          break;
        }
      }

      var paymentOption = document.getElementById("recipient").value;
      // Checking checkboxes for burgers
      var burgers = vm.checkedBurgers;
      if(vm.checkedBurgers.length == 0){
        alert("No burger/burgers are choosen");        
      }
      // Sets the array of custommerInfo
      vm1.customerInfo = [name, email, street, house, paymentOption, gender, burgers];

      // Checks if the form is correctly filled.
      for (i = 0; i < vm1.customerInfo.length - 1; i++) {
        if(vm1.customerInfo[i].length == 0){
          alert("You need to fill in the form correctly")
          //vm1.customerInfo = [];
          return;
        }
      }
      document.getElementById("formData").innerHTML = vm1.customerInfo;
    }
  }
})
