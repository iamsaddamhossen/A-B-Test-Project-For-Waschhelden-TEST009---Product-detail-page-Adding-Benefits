
var waschheldenStyles = {
  init: function () {
    this.mainCss();
    this.mainJS();
  },
  mainCss: function () {
    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    document.head.appendChild(s).textContent =
      "#result-wrapper .hersteller-content .overflow-wrapper{" +
      "display: none !important;" +
      "}" +

      ".waTopBoxWrapper-inner{" +
      "margin-top: 15px;" +
      "}" +

      ".waLeftBox-inner{" +
      "background: #f7f6f6;" +
      "height: 170px;" +
      "margin-left: -15px;" +
      "display: flex;" +
      "}" +

      ".waLeftImageContent{" +
      "width: 35%;" +
      "display: flex;" +
      "height: 170px;" +
      "}" +

      ".waLeftTextContent{" +
      "position: relative;" +
      "display: block;" +
      "width: 70%;" +
      "}" +


      ".waLeftImg{" +
      //"height: 212px;" +
      "margin-top: -12px;" +
      //"max-width: 100%;"+
      //"max-height: 100%;"+
      "}" +

      ".waRightBox-inner{" +
      "background: #f7f6f6;" +
      "height: 170px;" +
      "margin-right: -15px;" +
      "display: flex;" +
      "}" +

      ".waLeftTextContent h2{" +
      "color: #2eb4e9;" +
      "font-size: 14px;" +
      "margin-top: 45px;" +
      "text-align: justify;" +
      "margin-right: 100px;" +
      "margin-left: 50px;" +
      "line-height: 25px;" +
      "}" +

      ".waLeftTextContent p{" +
      "color: #2eb4e9;" +
      "font-size: 11px;" +
      "margin-left: 50px;" +
      "}" +

      ".waRightTextContent{" +
      "width: 50%;" +
      "}" +

      ".waRightTextContent h2{" +
      "color: #2eb4e9 !important;" +
      "font-size: 14px !important;" +
      "margin-left: 50px;" +
      "margin-top: 50px;" +
      "}" +

      ".waRightTextContent p{" +
      "color: #2eb4e9 !important;" +
      "font-size: 11px !important;" +
      "margin-left: 50px;" +
      "margin-right: 30px;" +
      "word-spacing: 3px;" +
      "}" +

      ".waBottomBoxWrapper {" +
      "position: relative;" +
      "margin-bottom: 50px;" +
      "margin-top: -70px;" +
      "}" +

      ".waBottomBoxWrapper-inner {" +
      "background: #f7f6f6;" +
      "height: 420px;" +
      "margin-top: 30px" +
      "}" +

      ".waRightImageSingleBox {" +
      "width: 30%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 45px;" +
      "margin-right: 10px;" +
      "}" +

      ".waRightImageSingleBoxTwo {" +
      "width: 30%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 45px;" +
      "margin-right: 10px;" +
      "}" +

      ".waRightImageSingleBoxThree {" +
      "width: 29%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 45px;" +
      "margin-right: 10px;" +
      "}" +

      ".waRightImageSingleBoxFour {" +
      "width: 30%;" +
      "background: #fff;" +
      "margin-top: -32px;" +
      "height: 35px;" +
      "margin-right: 10px;" +
      "}" +

      ".waRightImageSingleBoxFive {" +
      "width: 30%;" +
      "background: #fff;" +
      "margin-top: -32px;" +
      "height: 35px;" +
      "margin-right: 10px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "width: 29%;" +
      "background: #fff;" +
      "margin-top: -32px;" +
      "height: 35px;" +
      "margin-right: 10px;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 45px;" +
      "margin-top: 2px;" +
      "padding: 2px;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 44px;" +
      "margin-top: 3px;" +
      "padding: 2px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 75px;" +
      "padding: 3px;" +
      "margin-left: 5px;" +

      "}" +

      ".waImgSepaCard{" +
      "width: 83px;" +
      "padding: 2px;" +
      "margin-left: 2px;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 75px;" +
      "margin-left: 5px;" +
      "margin-top: 7px;" +

      "}" +

      ".waImgAmazonCard{" +

      "width: 75px;" +
      "margin-left: 7px;" +
      "margin-top: 6px;" +

      "}" +


      ".waImgKlamaCard{" +
      "width: 75px;" +
      "margin-left: 6px;" +
      "margin-top: 3px;" +
      "}" +

      ".waRightImageContent{" +
      "display: flex;" +
      "width: 50%;" +
      "flex-wrap: wrap;" +
      "margin-right: 25px;" +
      "}" +

      ".waBottomImgLeft{" +
      "margin-top: 20px;" +
      "margin-left: 7px;" +
      "width: 100%;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 20px;" +
      "width: 100%;" +
      "}" +

      ".waBottomImgRight{" +
      "margin-top: 20px;" +
      "width: 100%;" +
      "}" +

      ".waRightBoxContent-inner{" +
      "margin-right: 5px;" +
      "}" +

      ".waBottomBoxTitle{" +
      "text-align: center;" +
      "color: #2eb4e9;" +
      "font-size: 14px;" +
      "}" +

      ".waBottomBoxDesc{" +
      "text-align: justify;" +
      "margin-left: 50px;" +
      "margin-right: 50px;" +
      "font-size: 11px;" +
      "color: #2eb4e9;" +
      "word-spacing: 2px;" +
      "}" +


      // Mobile Design Responsive Code

      "@media (max-width: 360px) {" +
      ".hersteller-content {" +
      "display: none;" +
      "}" +

      ".waBottomBoxWrapper-inner {" +
      "margin-top: 70px !important;" +
      "height: 320px;" +
      "}" +

      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 111%;" +
      "margin-left: -15px;" +
      "}" +

      ".waBottomBoxTitle{" +
      "font-size: 11px;" +
      "}" +

      ".waBottomBoxDesc {" +
      "text-align: unset;" +
      "margin-left: 10px;" +
      "margin-right: 10px;" +
      "font-size: 11px;" +
      "color: #2eb4e9;" +
      "word-spacing: 2px;" +
      "}" +

      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6;" +
      "margin-top: 22px;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 111%;" +
      "margin-left: -15px;" +
      "}" +


      ".nav-tabs{" +
      "display:none;" +
      "}" +


      "#accordion .panel{" +
      "border: none;" +
      "border-radius: 0;" +
      "margin-bottom: 5px;" +
      "box-shadow: none;" +
      "}" +
      "#accordion .panel-heading{" +
      "padding: 0;" +
      "border: none;" +
      "border-radius: 0;" +
      "position: relative;" +
      "}" +
      "#accordion .panel-title a{" +
      "display: block;" +
      "padding: 20px 30px;" +
      "margin: 0;" +
      "background: #e65e36;" +
      "font-size: 17px;" +
      "font-weight: bold;" +
      "color: #f9e2ad;" +
      "text-transform: uppercase;" +
      "letter-spacing: 1px;" +
      "position: relative;" +
      "}" +
      "#accordion .panel-title a:before," +
      "#accordion .panel-title a.collapsed:before{" +
      'content: "";' +
      "width: 20px;" +
      "height: 2px;" +
      "background: #f9e2ad;" +
      "position: absolute;" +
      "top: 30px;" +
      "right: 30px;" +
      "}" +
      "#accordion .panel-title a:after," +
      "#accordion .panel-title a.collapsed:after{" +
      'content: "";' +
      "width: 2px;" +
      "height: 20px;" +
      "background: #f9e2ad;" +
      "position: absolute;" +
      "bottom: 18px;" +
      "right: 39px;" +
      "transition: all 0.3s ease 0s;" +
      "}" +
      "#accordion .panel-title a:after{ height: 0; }" +
      "#accordion .panel-body{" +
      "padding: 20px 30px;" +
      "background: #56522b;" +
      "border-top: 2px solid #000;" +
      "font-size: 15px;" +
      "color: #f9e2ad;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "}" +

      "}" +

      // End Mobile Responsive 

      ".waLeftBox-inner-mobile{" +
      "width: 100%;" +
      "height: 54px;" +
      "background: #f9f9f9;" +
      "display: flex;" +
      "margin-top: 35px;" +
      "margin-bottom: 10px;" +
      "}" +

      ".waLeftImageContentMObile{" +
      "width: 25%;" +
      "}" +
      ".waLeftImgMobile{" +
      "margin-top: -28px;" +
      "width: 100%;" +
      "}" +
      ".waLeftTextContentMobile{" +
      "width: 75%;" +
      "}" +

      ".waLeftTextContentMobile h2{" +
      "font-size: 12px;" +
      "margin-top: 15px;" +
      "margin-left: 7px;" +
      "color: #2eb4e9;" +
      "}" +

      ".paymentIconTitleMobile h3{" +
      "font-size: 14px;" +
      "color: #1389b7;" +
      "text-align: center;" +
      "}" +

      ".waPaymentBox-inner-mobile{" +
      "width: 100%;" +
      "height: 85px;" +
      "background: #E5E5E9;" +
      "margin: 0 auto;" +
      "margin-bottom: 15px;" +
      "}" +

      ".waRightImageContentMobile{" +
      "display: flex;" +
      "flex-wrap: wrap;" +
      "}" +

      ".waRightImageSingleBoxMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 5px;" +
      "margin-right: 5px;" +
      "margin-left: 5px;" +
      "width: 31%;" +
      "}" +

      ".waRightImageSingleBoxTwoMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-right: 10px;" +
      "margin-top: 5px;" +
      "margin-right: 5px;" +
      "width: 29%;" +
      "}" +

      ".waRightImageSingleBoxThreeMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 5px;" +
      "margin-right: 5px;" +
      "width: 33.1%;" +
      "}" +

      ".waRightImageSingleBoxFourMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 5px;" +
      "margin-right: 5px;" +
      "margin-left: 5px;" +
      "width: 31.1%;" +
      "}" +

      ".waRightImageSingleBoxFiveMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 5px;" +
      "margin-left: 0;" +
      "width: 29.1%;" +
      "}" +

      ".waRightImageSingleBoxSixMobile {" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 5px;" +
      "margin-left: 5px;" +
      "width: 33%;" +
      "}" +

      ".waImgMasterCardMobile{" +
      "width: 45px;" +
      "margin-top: 2px;" +
      "padding: 2px;" +
      "}" +

      ".waImgVisaCardMobile{" +
      "width: 44px;" +
      "margin-top: 3px;" +
      "padding: 2px;" +
      "margin-left: 5px" +
      "}" +

      ".waImgKaufCardMobile{" +
      "width: 100%;" +
      "padding: 3px;" +
      "margin-left: 5px;" +
      "height: 35px" +

      "}" +

      ".waImgSepaCardMobile{" +
      "width: 100%;" +
      "padding: 2px;" +
      "height: 35px;" +
      "}" +

      ".waImgPaypalCardMobile{" +
      "width: 75px;" +
      "margin-left: 5px;" +
      "margin-top: 7px;" +

      "}" +

      ".waImgAmazonCardMobile{" +
      "width: 75px;" +
      "margin-left: 7px;" +
      "margin-top: 6px;" +

      "}" +


      ".waImgKlamaCardMobile{" +
      "width: 90%;" +
      "margin-left: 6px;" +
      "height: 35px;" +
      "}"



  },
  mainJS: function () {
    var $ = window.jQuery;


    //For JS
    var topContentBoxHTML =
      '<div class="waTopBoxWrapper">' +
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
      '<div class="waBottomBoxWrapper col-xs-12">' +
      '<div class="waBottomBoxWrapper-inner">' +

      '<div class="col-sm-4 col-xs-12">' +
      '<div class="waLeftBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_three.jpg" class="waBottomImgLeft"/>' +
      '<h2 class="waBottomBoxTitle"> Innerhalb von 1-2 Tagen ist deine Bestellung bei dir</h2>' +
      '<p class="waBottomBoxDesc"> Bei uns werden Bestellungen, montags bis freitags, täglich verschickt. Wenn dein Artikel vorrätig ist, geht dieser noch am Tag deiner Bestellung auf die Reise.</p>' +
      "</div>" +
      "</div>" +

      '<div class="col-sm-4 col-xs-12 waMiddleBoxContentMobile">' +
      '<div class="waMiddleBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_one-scaled.jpg" class="waBottomImgMiddle"/>' +
      '<h2 class="waBottomBoxTitle"> Über 100.000 Kunden vertrauen uns</h2>' +
      '<p class="waBottomBoxDesc"> Uns liegt die Zufriedenheit unserer Kunden wirklich am Herzen, daher geben wir seit 2014 jeden Tag unser Bestes. Dies zeigen unsere 10.000+ 5-Sterne Bewertungen.</p>' +
      "</div>" +
      "</div>" +

      '<div class="hidden-xs col-sm-4 col-xs-12">' +
      '<div class="waRightBoxContent-inner">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_four.jpg" class="waBottomImgRight"/>' +
      '<h2 class="waBottomBoxTitle"> Recycling von Hersteller Kartons</h2>' +
      '<p class="waBottomBoxDesc"> Um die Verschwendung von Kartons zu minimieren, kannst du bei uns unversehrte, gebrauchte Kartons im Bestellprozess ankreuzen und damit einen Beitrag zur Umwelt leisten. (Kostenlos)</p>' +
      "</div>" +
      "</div>" +


      "</div>" +
      "</div>" +

      "</div>" +
      "</div>";

    $(".hersteller-content").after(bottomContentBoxHTML);

    // For Mobile Design
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

    // Payment Icon under Add to card 
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


    // Accordion for mobile
    var accordionLinkMobile =
      //'<div class="hidden-sm hidden-md hidden-lg visible-xs accordionLinks">' +
      '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingOne">' +
      '<h4 class="panel-title">' +
      '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#tab-description" aria-expanded="true" aria-controls="tab-description">Section 1</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingTwo">' +
      '<h4 class="panel-title">' +
      '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#tab-votes" aria-expanded="false" aria-controls="tab-votes">Section 2</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '</div>';
    //'</div>' +


    $(".tab-content").before(accordionLinkMobile);

  },
};

//Poll off:  10000ms
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
