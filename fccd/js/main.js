$(document).ready(function() {
    $("#billingType").change(function() {
        if (this.checked) {
            $(".monthlyBilling").addClass("disabled");
            $(".annualBilling").removeClass("disabled");
            $(".annualBilling").addClass("enabled");
            setAnnualPrice();
        }
        else
        {
            $(".annualBilling").addClass("disabled");

            $(".monthlyBilling").removeClass("disabled");

            $(".monthlyBilling").addClass("enabled");

            setMonthlyPrice();
        }
      
    });
  });

function setAnnualPrice() {
    var prices = $(".price") ;

    for(var i = 0; i<prices.length; i++) {
        var value = prices[i].textContent;

        var outputValue = parseFloat(value.substring(1)) - parseFloat(80);

        prices[i].textContent = '$' + outputValue + '<span class="price-small">.00</span>';

    }
}

function setMonthlyPrice() {
    var prices = $(".price") ;

    for(var i = 0; i<prices.length; i++) {
        var value = prices[i].textContent;

        var outputValue = parseFloat(value.substring(1)) + parseFloat(80);

        prices[i].textContent = '$' + outputValue + '<span class="price-small">.00</span>';

    }

}