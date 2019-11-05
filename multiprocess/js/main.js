$("#annualBilling").off().on('click', setAnnualPrice());
$("#monthlyBilling").off().on('click', setMonthlyPrice());

var currentPrice = "annual";
//setMonthlyPrice();

var sliderState = false;

function closeFooter() {
    hideDrawerContent();
    toggleSlider();
}

function toggleSlider(contentType) {

 
    if(sliderState === false) {
        $('#footerSlideContainer').animate({ height: '50%' });
        $('#' + contentType).animate({ height: '50%' });
        //$(this).css('backgroundPosition', 'bottom left');
        $('#pageOverlay').toggle();
        sliderState = true;
    } else {
        $('#footerSlideContainer').animate({ height: '0px' });
        $('#' + contentType).animate({ height: '0px' });
        //$(this).css('backgroundPosition', 'top left');
        sliderState = false;
        hideDrawerContent();
        $('#pageOverlay').toggle();
    }
			
};


$(document).ready(function() {

   // $("#monthlyBilling").off().on('click', setMonthlyPrice());

   // $("#annualBilling").off().on('click', setAnnualPrice());

   
   setAnnualPrice();
  

    /*$("#billingType").change(function() {
        
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


      
    });*/
  });

function setAnnualPrice() {

    if(currentPrice === "monthly")
    {
        $("#monthlyBilling").addClass("disabled");
        $("#annualBilling").removeClass("disabled");
        $("#annualBilling").addClass("enabled");
        $("#monthlyBilling").removeClass("enabled");


        var prices = $(".price") ;

        for(var i = 0; i<prices.length; i++) {

            newValue = Math.round(parseFloat(value.substring(1)) / 10);

            var outputValue = parseFloat(value.substring(1)) - parseFloat(newValue);

            prices[i].textContent = '$' + outputValue;

        }

        currentPrice = "annual";
    }
}

function setMonthlyPrice() {

    if(currentPrice === "annual")
    {
        $("#annualBilling").addClass("disabled");
        $("#monthlyBilling").removeClass("disabled");
        $("#monthlyBilling").addClass("enabled");
        $("#annualBilling").removeClass("enabled");
        
        var prices = $(".price") ;

        for(var i = 0; i<prices.length; i++) {
            var value = prices[i].textContent;
            
            newValue = Math.round(parseFloat(value.substring(1)) / 10);

            var outputValue = parseFloat(value.substring(1)) + parseFloat(newValue);

            prices[i].textContent = '$' + outputValue;

        }

        currentPrice = "monthly";
    }

    
}

function hideDrawerContent() {

    $("#POProcessing").addClass("hide");
    $("#FormsAndLabelPrinting").addClass("hide");
    $("#InventoryControl").addClass("hide");
    $("#Quickbooks").addClass("hide");
    $("#LotControl").addClass("hide");
    $("#MobileOrderEntry").addClass("hide");
    $("#MobileFillAndShip").addClass("hide");
}


function drawerSlide(contentType){
    
    hideDrawerContent();

    if(contentType === "POProcessing") $("#POProcessing").removeClass("hide");
    if(contentType === "FormsAndLabelPrinting") $("#FormsAndLabelPrinting").removeClass("hide");
    if(contentType === "InventoryControl") $("#InventoryControl").removeClass("hide");
    if(contentType === "Quickbooks") $("#Quickbooks").removeClass("hide");
    if(contentType === "LotControl") $("#LotControl").removeClass("hide");
    if(contentType === "MobileOrderEntry") $("#MobileOrderEntry").removeClass("hide");
    if(contentType === "MobileFillAndShip") $("#MobileFillAndShip").removeClass("hide");

    toggleSlider(contentType);
    
}