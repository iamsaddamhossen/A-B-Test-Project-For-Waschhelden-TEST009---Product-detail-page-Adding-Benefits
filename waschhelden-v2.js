var waschheldenStyles = {
  init: function () {
    this.mainJS();
  },
  mainCss: function () {
    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    document.head.appendChild(s).textContent = ""
  },
  mainJS: function () {
    var $ = window.jQuery;
    var topContentBoxHTML =
      '<div class="waTopBoxWrapper visible-lg visible-md visible-sm">' +
      '<div class="waTopBoxWrapper-inner">' +

      '<div class="hidden-xs col-sm-6">' +
      '<div class="waLeftBox-inner">' +
      '<div class="waLeftImageContent">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_two.png" class="img-responsive waLeftImg"/>' +
      "</div>" +
      '<div class="waLeftTextContent">' +
      '<h2> Wir sind auch nach dem Kauf für Fragen rund um das Produkt jederzeit für dich da.</h2>' +
      '<p> Dein Waschhelden Team</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="hidden-xs col-sm-6">' +
      '<div class="waRightBox-inner">' +
      '<div class="waRightTextContent">' +
      '<h2>Du zahlst sicher und bequem.</h2>' +
      '<p>Waschhelden.de ist ein durch den Händlerbund geprüfter Online-Shop.</p>' +
      "</div>" +
      '<div class="waRightImageContent">' +
      '<div class="waRightImageSingleBox">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Mastercard-Logo.jpg" class="waImgMasterCard"/>' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Visa-Logo.png" class="waImgVisaCard"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxTwo">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Kauf-auf-Rechnung.png" class="waImgKaufCard"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxThree">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/SEPA-Lastschrift-Logo.png" class="waImgSepaCard"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxFour">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Paypal-Logo.png" class="waImgPaypalCard"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxFive">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/amazonpaylogo.png" class="waImgAmazonCard"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxSix">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/klarna-logo.png" class="waImgKlamaCard"/>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $(".hersteller-content").append(topContentBoxHTML);
    var bottomContentBoxHTML =
      '<div class="waBottomBoxWrapper col-xs-12 visible-sm visible-xs visible-md visible-lg">' +
      '<div class="waBottomBoxWrapper-inner">' +
      '<div class="col-sm-4 col-xs-12">' +
      '<div class="waLeftBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_three.jpg" class="waBottomImgLeft"/>' +
      '<h2 class="waBottomBoxTitle"> Innerhalb von 1-2 Tagen ist deine Bestellung bei dir</h2>' +
      '<p class="waBottomBoxDescLeft"> Bei uns werden Bestellungen, montags bis freitags, täglich verschickt. Wenn dein Artikel vorrätig ist, geht dieser noch am Tag deiner Bestellung auf die Reise.</p>' +
      "</div>" +
      "</div>" +
      '<div class="col-sm-4 col-xs-12 waMiddleBoxContentMobile">' +
      '<div class="waMiddleBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_one-scaled.jpg" class="waBottomImgMiddle"/>' +
      '<h2 class="waBottomBoxTitle"> Über 100.000 Kunden vertrauen uns</h2>' +
      '<p class="waBottomBoxDescMiddle"> Uns liegt die Zufriedenheit unserer Kunden wirklich am Herzen, daher geben wir seit 2014 jeden Tag unser Bestes. <span class="hidden-xs">Dies zeigen unsere 10.000+ 5-Sterne Bewertungen.</span></p>' +
      "</div>" +
      "</div>" +
      '<div class="hidden-xs col-sm-4 col-xs-12">' +
      '<div class="waRightBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_four.jpg" class="waBottomImgRight"/>' +
      '<h2 class="waBottomBoxTitle"> Recycling von Hersteller Kartons</h2>' +
      '<p class="waBottomBoxDescRight"> Um die Verschwendung von Kartons zu minimieren, kannst<br/> du bei uns unversehrte, gebrauchte Kartons im Bestellprozess<br/> ankreuzen und damit einen Beitrag zur Umwelt leisten. (Kostenlos)</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $(".hersteller-content").after(bottomContentBoxHTML);
    var topContentBoxHTMLForMobile = '<div class="hidden-sm hidden-md hidden-lg visible-xs">' +
      '<div class="waLeftBox-inner-mobile">' +
      '<div class="waLeftImageContentMObile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_two.png" class="img-responsive waLeftImgMobile"/>' +
      "</div>" +
      '<div class="waLeftTextContentMobile">' +
      '<h2> Wir sind auch nach dem Kauf für Fragen rund um das Produkt jederzeit für dich da.</h2>' +
      "</div>" +
      "</div>" +
      "</div>";
    $(".product-gallery").append(topContentBoxHTMLForMobile);
    var paymentIconHTMLForMobile = '<div class="hidden-sm hidden-md hidden-lg visible-xs paymentIconTitleMobile">' +
      '<h3>Online sicher bezahlen mit</h3>' +
      '<div class="waPaymentBox-inner-mobile">' +
      '<div class="waRightImageContentMobile">' +
      '<div class="waRightImageSingleBoxMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Mastercard-Logo.jpg" class="waImgMasterCardMobile"/>' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Visa-Logo.png" class="waImgVisaCardMobile"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxTwoMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Kauf-auf-Rechnung.png" class="waImgKaufCardMobile"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxThreeMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/SEPA-Lastschrift-Logo.png" class="waImgSepaCardMobile"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxFourMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/Paypal-Logo.png" class="waImgPaypalCardMobile"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxFiveMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/amazonpaylogo.png" class="waImgAmazonCardMobile"/>' +
      "</div>" +
      '<div class="waRightImageSingleBoxSixMobile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/klarna-logo.png" class="waImgKlamaCardMobile"/>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $(".product-actions").before(paymentIconHTMLForMobile);
    var accordionLinkMobile =
      '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingOne">' +
      '<h4 class="panel-title">' +
      '<a class="accordionLinkTopMobile hidden-lg hidden-md visible-xs hidden-sm" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Beschreibung & Lieferumfang</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
      '<div class="panel-body hidden-lg hidden-md hidden-sm visible-xs" id="panelBodyOneMobile">' +
      '</div>' +
      '</div>' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingTwo">' +
      '<h4 class="panel-title">' +
      '<a class="accordionLinkTopMobileTwo hidden-lg hidden-md visible-xs hidden-sm collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Kundenmeinungen</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">' +
      '<div class="panel-body hidden-lg hidden-md hidden-sm visible-xs panelBodyTwoMobile" id="panelBodyTwoMobile">' +
      '</div>' +
      '</div>' +
      '</div>';
    $("#tab-votes").removeClass("tab-pane fade").addClass("tab-pane fade in");
    $("#article-tabs").after(accordionLinkMobile);
    $("#tab-description").clone().appendTo("#panelBodyOneMobile");
    $("#tab-votes").clone().appendTo("#panelBodyTwoMobile");
    $("#tab-description").removeClass("tab-pane fade active collapse").addClass("panel-collapse collapse in");
    $(".accordionLinkTopMobile").addClass("wa-border-have");
    $(".accordionLinkTopMobile").click(function () {
      var wacollapseClassNameOne = $("#collapseOne").attr('class');
      if (wacollapseClassNameOne === 'panel-collapse collapse') {
        $(this).addClass("wa-border-have");
      } else {
        $(this).removeClass("wa-border-have");
      }
    });
    $(".accordionLinkTopMobileTwo").click(function () {
      var wacollapseClassName = $("#collapseTwo").attr('class');
      if (wacollapseClassName === 'panel-collapse collapse') {
        $(this).addClass("wa-border-have");
      } else {
        $(this).removeClass("wa-border-have");
      }
    });
  },
};
var pollCounter = 0;
(function pollForWaschheldenStyles() {

 


  if (window.jQuery !== undefined && document.querySelector('.hersteller-content')) {
    if (window.jQuery("body.adding-benefits").length === 0) {
      document.body.classList.add("adding-benefits");
      waschheldenStyles.init();
      console.log("TEST009 - Product detail page: Adding Benefits");
  }    
  } else {
    if (pollCounter < 400) {
      console.log("pollCounter", pollCounter);
      setTimeout(pollForWaschheldenStyles, 25);
    }
    pollCounter++;
  }
})();
