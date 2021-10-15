
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
      ".waPaymentIconArea{" +
      " padding-left: 10px;" +
      "padding-right: 0;" +
      "}" +
      ".inner-wrapper .btn-secondary{" +
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
      "align-items:center;" +
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
      "margin-top: -12px;" +
      "}" +
      ".waRightBox-inner{" +
      "background: #f7f6f6;" +
      "height: 170px;" +
      "display: flex;" +
      "align-items: center;" +
      "padding: 30px 30px 30px 40px;" +
      "}" +
      ".waLeftTextContent h2{" +
      "color: #2eb4e9;" +
      "font-size: 14px;" +
      "line-height: 1.5;" +
      "font-weight: bold;" +
      "}" +
      ".waLeftTextContent p{" +
      "color: #2eb4e9;" +
      "font-size: 13px;" +
      "line-height: 2;" +
      "}" +
      ".waRightTextContent{" +
      "width: 50%;" +
      "padding-right: 15px;" +
      "}" +
      ".waRightTextContent h2{" +
      "color: #2eb4e9 !important;" +
      "font-size: 14px !important;" +
      "font-weight: bold;" +
      "}" +
      ".waRightTextContent p{" +
      "color: #2eb4e9 !important;" +
      "font-size: 13px !important;" +
      "line-height: 1.6;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "position: relative;" +
      "margin-bottom: 50px;" +
      "margin-top: -70px;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "background: #f7f6f6;" +
      "margin-top: 25px;" +
      "overflow: hidden;" +
      "padding-bottom: 20px;" +
      "}" +
      ".waRightImageContent{" +
      "display: flex;" +
      "width: 50%;" +
      "flex-wrap: wrap;" +
      "background-color: #ebe7e7 !important;" +
      "justify-content: center;" +
      "padding: 10px 6px 0 14px;" +
      "}" +
      ".waRightImageContent > div{" +
      "width: 31%;" +
      "background: #fff;" +
      "margin-right: 2%;" +
      "margin-bottom: 10px;" +
      "padding: 5px;" +
      "text-align:center;" +
      "}" +
      ".waRightImageContent > div  img{" +
      "width: 100%;" +
      "max-width: 70px;" +
      "}" +
      ".waRightImageContent > div.waRightImageSingleBox img{" +
      "width: 50%;" +
      "max-width: 32px;" +
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
      "font-weight: bold;" +
      "}" +
      ".waBottomBoxDescLeft{" +
      "text-align: center;" +
      "font-size: 13px;" +
      "color: #2eb4e9;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "text-align: center;" +
      "font-size: 13px;" +
      "color: #2eb4e9;" +
      "}" +
      ".waBottomBoxDescRight{" +
      "text-align: center;" +
      "font-size: 13px;" +
      "color: #2eb4e9;" +
      "}" +
      ".waLeftBox-inner-mobile{" +
      "width: 100%;" +
      "background: #f9f9f9;" +
      "display: flex;" +
      "align-items:center;" +
      "}" +
      ".waLeftImageContentMObile{" +
      "width: 22%;" +
      "position: relative;" +
      "}" +
      ".waLeftImgMobile{" +
      "margin-top: -29px;" +
      "width: 100%;" +
      "}" +
      ".waLeftTextContentMobile{" +
      "width: 78%;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "font-size: 12px;" +
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
      "}" +
      "#waPaymentIconList{" +
      "display: none;" +
      "}" +
      "#waPaymentPortraitIcon{" +
      "display: none;" +
      "}" +
      ".topContentBoxHTMLForMobile{" +
      "display: none;" +
      "}" +
      "#accordion{" +
      "display: none;" +
      "}" +
      "@media(max-width: 992px){" +
      ".waLeftTextContent h2 br{" +
      "display: none !important;" +
      "}" +
      ".waLeftTextContent {" +
      "padding-right: 10px;" +
      "}" +
      ".waRightBox-inner{" +
      "padding: 20px;" +
      "}" +
      "}" +
      "@media(max-width: 767px){" +
      "#collapseOne #panelBodyOneMobile .fade {" +
      "opacity: 1 !important;" +
      "}" +

      "#result-wrapper .panel .panel-heading h3{" +
      "margin-left: 5px !important;"+
      "margin-right: 5px !important;"+
      "}"+

      "#panelBodyOneMobile{" +
      "padding: 3px !important;" +
      "}" +
      "#panelBodyTwoMobile{" +
      "padding: 10px !important;" +
      "}" +
      ".waLeftTextContentMobile h2 br{" +
      "display: none !important;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "margin-left: -10px !important;" +
      "margin-right: -10px !important;" +
      "padding-bottom: 20px;" +
      "}" +
      ".hiddenOnMobile{" +
      "display: none;" +
      "}" +
      "#accordion{" +
      "display: block;" +
      "}" +
      ".topContentBoxHTMLForMobile{" +
      "display: block;" +
      "margin-bottom: 20px;" +
      "margin-top: 35px;" +
      "}" +
      "#waPaymentIconList{" +
      "display: none;" +
      "}" +
      "#waPaymentPortraitIcon{" +
      "display: block;" +
      "}" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}" +
      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "background: transparent;" +
      "height: auto;" +
      "margin-top: 50px;" +
      "}" +
      ".waBottomImgLeft{" +
      "margin-top: 0 !important;;" +
      "margin-left: -13px !important;" +
      "width: 110% !important;" +
      "}" +
      ".wacustomforiphone {" +
      "background: #f7f6f6;" +
      "overflow: hidden;" +
      "}" +
      ".waRightImageContent{" +
      "width: 100%;" +
      "}" +
      ".waLeftImgMobile{" +
      "margin-top: -10px !important;" +
      "width: 100% !important;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "padding:10px;" +
      "margin-top: 0 !important;" +
      "margin-bottom: 0 !important;" +
      "font-size: 14px !important;" +
      "line-height: 20px !important;" +
      "}" +
      ".waRightBoxContent-inner{" +
      "display: none;" +
      "}" +
      ".waBottomBoxDescLeft {" +
      "padding-left: 0px;" +
      "padding-right: 0px;" +
      "text-align: center;" +
      "padding-bottom: 20px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 110%;" +
      "margin-left: -13px;" +
      "}" +
      "#result-wrapper .hersteller-content{" +
      "display: none !important;" +
      "}" +
      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 14px;" +
      "font-weight: bold;" +
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
      "margin-top: 30px;" +
      "overflow:hidden;" +
      "}" +
      ".nav-tabs{" +
      "display:none;" +
      "}" +
      "#tab-votes{" +
      "opactiy: 1 !important;" +
      "}" +
      ".tab-content{" +
      "display:none !important;" +
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
      "padding: 22px 17px;" +
      "margin: 0;" +
      "font-size: 14px;" +
      "font-weight: bold;" +
      "color: #333;" +
      "position: relative;" +
      "}" +
      "#accordion .panel-title a:before," +
      "#accordion .panel-title a.collapsed:before{" +
      'content: "";' +
      "width: 20px;" +
      "height: 2px;" +
      "background: #1389B7;" +
      "position: absolute;" +
      "top: 30px;" +
      "right: 30px;" +
      "}" +
      "#accordion .panel-title a:after," +
      "#accordion .panel-title a.collapsed:after{" +
      'content: "";' +
      "width: 2px;" +
      "height: 20px;" +
      "background: #1389B7;" +
      "position: absolute;" +
      "bottom: 18px;" +
      "right: 39px;" +
      "transition: all 0.3s ease 0s;" +
      "}" +
      "#accordion .panel-title a:after{ height: 0; }" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -9px;" +
      "margin-bottom: 15px;" +
      "}" +
      "#accordion #panelBodyTwoMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
      "}" +
      ".accordionLinkTopMobile{" +
      "border: 2px solid #1389B7;" +
      "text-decoration: none !important;" +
      "}" +
      ".accordionLinkTopMobileTwo{" +
      "border: 2px solid #1389B7;" +
      "text-decoration: none !important;" +
      "}" +
      "#waPaymentIconList{" +
      "display: block;" +
      "}" +
      "#waPaymentPortraitIcon{" +
      "display: none;" +
      "}" +
      "}" +
      "@media(max-width: 375px){" +
      ".waLeftTextContentMobile h2 br{" +
      "display: none !important;" +
      "}" +
      "}"

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

(function pollForWaschheldenStyles() {
  if (window.jQuery !== undefined && document.querySelector('.hersteller-content')) {
    waschheldenStyles.init();
  } else {
      setTimeout(pollForWaschheldenStyles, 25);
    }
})();

