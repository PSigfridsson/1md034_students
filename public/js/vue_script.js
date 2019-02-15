/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#el',
    data: {
        customerInfo: [],
        burgers: food,
        checkedBurgers: [],
        orders: {},
        orderId: "",
        details: {x: -100, y: -100},
        idForOrders: 0,
    },
    methods: {
        submitForm: function (event) {

            document.getElementById("formData").innerHTML = "";

            var name = document.getElementById("full name").value;
            var email = document.getElementById("email").value;

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
            var burgers = this.checkedBurgers;
            if(this.checkedBurgers.length == 0){
                alert("No burger/burgers are choosen");
                return;
            }
            // Sets the array of custommerInfo
            this.customerInfo = [name, email, paymentOption, gender, burgers];

            // Checks if the form is correctly filled.
            for (i = 0; i < this.customerInfo.length - 1; i++) {
                if(this.customerInfo[i].length == 0){
                    alert("You need to fill in the form correctly")
                    this.customerInfo = [];
                    return -1;
                }
            }
            document.getElementById("formData").innerHTML = this.customerInfo;
            return 0;
        },
        getNext: function () {
            return this.idForOrders += 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { orderId: this.getNext(),
                                      details: this.details,
                                      customerItems: this.customerInfo
                                    });
        },
        displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.orderId = "T";
            this.details = { x: event.clientX - 10 - offset.x,
                             y: event.clientY - 10 - offset.y
                           };
        },
        send: function (event) {
            if(this.submitForm() == 0){
                this.addOrder();
            }
        }
    }
})
