
var waschheldenStyles = {
  init: function () {
    this.mainJS();
  },
  mainJS: function () {
    var $ = window.jQuery;
    //For JS
    var topContentBoxHTML =
      '<div class="waTopBoxWrapper">' +
      '<div class="waTopBoxWrapper-inner">' +
      '<div class=" col-sm-6">' +
      '<div class="waLeftBox-inner">' +
      '<div class="waLeftImageContent">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_two.png" class="img-responsive waLeftImg"/>' +
      "</div>" +
      '<div class="waLeftTextContent">' +
      '<h2> Wir sind auch nach dem Kauf für Fragen<br/> rund um das Produkt jederzeit für dich da.</h2>' +
      '<p> Dein Waschhelden Team</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class=" col-sm-6 waPaymentIconArea">' +
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
      '<div class="waBottomBoxWrapper col-xs-12    ">' +
      '<div class="waBottomBoxWrapper-inner">' +
      '<div class="col-sm-4 col-xs-12 wacustomforiphone">' +
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
      '<p class="waBottomBoxDescMiddle"> Uns liegt die Zufriedenheit unserer Kunden wirklich am Herzen, daher geben wir seit 2014 jeden Tag unser Bestes. <span class="hiddenOnMobile">Dies zeigen unsere 10.000+ 5-Sterne Bewertungen.</span></p>' +
      "</div>" +
      "</div>" +
      '<div class=" col-sm-4 col-xs-12">' +
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
    var topContentBoxHTMLForMobile = '<div class="topContentBoxHTMLForMobile">' +
      '<div class="waLeftBox-inner-mobile">' +
      '<div class="waLeftImageContentMObile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_two.png" class="img-responsive waLeftImgMobile"/>' +
      "</div>" +
      '<div class="waLeftTextContentMobile">' +
      '<h2> Wir sind auch nach dem Kauf für Fragen<br> rund um das Produkt jederzeit für dich da.</h2>' +
      "</div>" +
      "</div>" +
      "</div>";
    $(".product-gallery").append(topContentBoxHTMLForMobile);
    var paymentIconHTMLForMobile = '<div class="paymentIconTitleMobile col-xs-12" id="waPaymentIconList">' +
      '<h3>Online sicher bezahlen mit</h3>' +
      '<div class="waPaymentBox-inner-mobile" >' +
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
      "</div>";
    $("#add-to-cart").parent().after(paymentIconHTMLForMobile);
    var accordionLinkMobile =
      '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingOne">' +
      '<h4 class="panel-title">' +
      '<a class="accordionLinkTopMobile" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Beschreibung & Lieferumfang</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
      '<div class="panel-body" id="panelBodyOneMobile">' +
      '</div>' +
      '</div>' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingTwo">' +
      '<h4 class="panel-title">' +
      '<a class="accordionLinkTopMobileTwo collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Kundenmeinungen</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">' +
      '<div class="panel-body panelBodyTwoMobile" id="panelBodyTwoMobile">' +
      '</div>' +
      '</div>' +
      '</div>';
    $("#tab-votes").removeClass("tab-pane fade").addClass("tab-pane fade in");
    $("#article-tabs").after(accordionLinkMobile);
    $("#tab-description").clone().appendTo("#panelBodyOneMobile");
    $("#tab-votes").clone().appendTo("#panelBodyTwoMobile");
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
    $(document).on("click", ".variation input", function (e) {

      (function waitForEl() {
        if ($('.waTopBoxWrapper').length === 0 && $(".hersteller-content").length) {
          waschheldenStyles.mainJS();
        } else {
          setTimeout(function () {
            waitForEl();
          }, 100);
        }
      })();

    });
  },
};
var pollCounter = 0;
(function pollForWaschheldenStyles() {
  if (window.jQuery !== undefined && document.querySelector('.hersteller-content')) {
    waschheldenStyles.init();
    console.log("Variation- A: 01");
  } else {
    if (pollCounter < 400) {
      console.log("pollCounter", pollCounter);
      setTimeout(pollForWaschheldenStyles, 25);
    }
    pollCounter++;
  }
})();

