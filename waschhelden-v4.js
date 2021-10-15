
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
      "margin-right: -15px;" +
      "display: flex;" +
      "align-items: center;" +
      "}" +
      ".waRightImageContent >*{" +
      "margin-bottom: 5px !important;" +
      "}" +
      ".waLeftTextContent h2{" +
      "color: #2eb4e9;" +
      "font-size: 14px;" +
      "margin-top: 45px;" +
      "text-align: justify;" +
      "margin-right: 97px;" +
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
      "margin-top: 0px !important;" +
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
      "margin-top: 4px;" +
      "margin-right: 10px;" +
      "margin-left: 6px;" +
      "}" +
      ".waRightImageSingleBoxTwo {" +
      "width: 30%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 4px;" +
      "margin-right: 11px;" +
      "}" +

      ".waRightImageSingleBoxThree {" +
      "width: 29%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-top: 4px;" +
      "margin-right: 2px;" +
      "}" +

      ".waRightImageSingleBoxFour {" +
      "width: 30%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-right: 8px;" +
      "margin-left: 5px;" +
      "}" +
      ".waRightImageSingleBoxFive {" +
      "width: 30%;" +
      "background: #fff;" +
      "height: 35px;" +
      "margin-right: 11px;" +
      "margin-left: 3px;" +
      "}" +
      ".waRightImageSingleBoxSix {" +
      "width: 29%;" +
      "background: #fff;" +
      "height: 35px;" +
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
      "background-color: #ebe7e7 !important;" +
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
      ".waBottomBoxDescLeft{" +
      "text-align: center;" +
      "margin-left: 60px;" +
      "margin-right: 50px;" +
      "font-size: 11px;" +
      "color: #2eb4e9;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "text-align: center;" +
      "margin-left: 50px;" +
      "margin-right: 50px;" +
      "font-size: 11px;" +
      "color: #2eb4e9;" +
      "}" +
      ".waBottomBoxDescRight{" +
      "text-align: center;" +
      "font-size: 11px;" +
      "color: #2eb4e9;" +
      "}" +
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
      "margin-top: -29px;" +
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
      "margin-top: 4px;" +
      "margin-left: 3px" +
      "}" +
      ".waImgVisaCardMobile{" +
      "width: 40px;" +
      "margin-top: 4px;" +
      "margin-left: 4px" +
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

      // Large
      "@media (min-width: 1401px) and (max-width: 1490px) {" +
      ".wacustomIphoneXContent{"+
        "display: none !important;"+
        "}"+

      ".waLeftTextContent h2{" +
      "margin-left: 45px !important;" +
      "margin-right: 96px !important;" +
      "font-size: 14px !important;" +
      "line-height: 20px;" +
      "text-align: justify;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 45px !important;" +
      "}" +

      "}"+
 
      // Desktop View 1300 + 1400
      "@media (min-width: 1301px) and (max-width: 1400px) {" +
      ".wacustomIphoneXContent{"+
        "display: none !important;"+
        "}"+

      ".waLeftTextContent h2{" +
      "margin-left: 45px !important;" +
      "margin-right: 73px !important;" +
      "font-size: 14px !important;" +
      "line-height: 20px;" +
      "text-align: justify;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 45px !important;" +
      "}" +

      ".waRightTextContent h2{" +
      "margin-left: 28px !important;" +
      "font-size: 14px !important;" +
      "}" +

      ".waRightTextContent p{" +
      "margin-left: 29px !important;" +
      "margin-right: 16px !important;" +
      "font-size: 12px !important;" +
      "word-spacing: 0 !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 30px !important;" +
      "margin-right: 10px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 40px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBoxTwo{" +
      "width: 29% !important;" +
      "height: 30px;" +
      "margin-right: 10px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 65px !important;" +
      "margin-left: 10px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 29% !important;" +
      "height: 30px !important;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 60px !important;" +
      "padding: 2px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 40px !important;" +
      "margin-left: 5px !important;" +
      "}" +

      ".waRightImageSingleBoxFour {" +
      "height: 30px;" +
      "width: 30%;" +
      "margin-right: 3px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 70px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "height: 30px;" +
      "margin-right: 12px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 70px;" +
      "margin-left: 5px;" +
      "margin-top: 5px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 30px;" +
      "width: 29%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 65px;" +
      "margin-left: 4px;" +
      "margin-top: 2px;" +
      "}" +

      ".waBottomBoxDescRight br{" +
      "display: none !important;" +
      "}" +

      
      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +
      "}" +

      // Desktop View 1200 + 1300
      "@media (min-width: 1201px) and (max-width: 1300px) {" +

      ".wacustomIphoneXContent{" +
      "display: none !important;" +
      "}"+


      ".waLeftTextContent h2{" +
      "margin-left: 85px !important;" +
      "margin-right: 52px !important;" +
      "font-size: 12px !important;" +
      "line-height: 20px;" +
      "text-align: justify;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 85px !important;" +
      "}" +

      ".waRightTextContent h2{" +
      "margin-left: 15px !important;" +
      "font-size: 12px !important;" +
      "}" +

      ".waRightTextContent p{" +
      "margin-left: 16px !important;" +
      "margin-right: 16px !important;" +
      "font-size: 11px !important;" +
      "word-spacing: 0 !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 30px !important;" +
      "margin-right: 5px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 29px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBoxTwo{" +
      "width: 29% !important;" +
      "height: 30px;" +
      "margin-right: 10px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 60px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 29% !important;" +
      "height: 30px !important;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 75px !important;" +
      "padding: 2px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBoxFour {" +
      "height: 30px;" +
      "width: 30%;" +
      "margin-right: 3px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 65px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "height: 30px;" +
      "margin-right: 8px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 65px;" +
      "margin-left: 5px;" +
      "margin-top: 5px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 30px;" +
      "width: 29%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 65px;" +
      "margin-left: 4px;" +
      "margin-top: 2px;" +
      "}" +

      ".waBottomBoxDescRight br{" +
      "display: none !important;" +
      "}" +

      
      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +
      "}" +

      // Desktop 1100 + 1200
      "@media (min-width: 1101px) and (max-width: 1200px) {" +
      ".wacustomIphoneXContent{" +
      "display: none !important;" +
      "}"+
      ".waLeftTextContent h2{" +
      "margin-left: 55px !important;" +
      "margin-right: 55px !important;" +
      "font-size: 12px !important;" +
      "line-height: 20px;" +
      "text-align: justify;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 55px !important;" +
      "}" +

      ".waRightTextContent h2{" +
      "margin-left: 15px !important;" +
      "font-size: 12px !important;" +
      "}" +

      ".waRightTextContent p{" +
      "margin-left: 16px !important;" +
      "margin-right: 0px !important;" +
      "font-size: 11px !important;" +
      "word-spacing: 0 !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 30px !important;" +
      "margin-right: 5px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 29px !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBoxTwo{" +
      "width: 29% !important;" +
      "height: 30px;" +
      "margin-right: 3px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 60px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 29% !important;" +
      "height: 30px !important;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 60px !important;" +
      "padding: 2px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBoxFour {" +
      "height: 30px;" +
      "width: 30%;" +
      "margin-right: 3px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 52px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "height: 30px;" +
      "margin-right: 5px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 53px;" +
      "margin-left: 5px;" +
      "margin-top: 7px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 30px;" +
      "width: 28%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 52px;" +
      "margin-left: 4px;" +
      "margin-top: 4px;" +
      "}" +

      ".waBottomBoxDescRight br{" +
      "display: none !important;" +
      "}" +

      
      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +
      "}" +


      "@media (max-width: 1100px) {" +
      ".waLeftTextContent h2{" +
      "margin-left: 0px !important;" +
      "margin-right: 75px !important;" +
      "font-size: 11px !important;" +
      "line-height: 20px;" +
      "text-align: justify;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 0px !important;" +
      "}" +

      ".waBottomBoxDescRight br{" +
      "display: none !important;" +
      "}" +

      ".waRightTextContent h2{" +
      "margin-left: 14px !important;" +
      "font-size: 10px !important;" +
      "}" +

      ".waRightTextContent p{" +
      "margin-left: 14px !important;" +
      "margin-right: 0px !important;" +
      "font-size: 10px !important;" +
      "word-spacing: 0 !important;" +
      "}" +

      ".waImgMasterCard{" +
      "width: 23px !important;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 23px !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 24px !important;" +
      "margin-right: 5px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 28px !important;" +
      "margin-top:0px !important;" +
      "}" +

      ".waRightImageSingleBoxFour{" +
      "width: 22% !important;" +
      "height: 23px;" +
      "margin-right: 2px;" +
      "}" +


      ".waRightImageSingleBoxTwo{" +
      "width: 24% !important;" +
      "height: 27px;" +
      "margin-right: 5px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 42px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 29% !important;" +
      "height: 27px !important;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 45px !important;" +
      "padding: 0px !important;" +
      "margin-left: 0px !important;" +
      "margin-top: 1px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "width: 30%;" +
      "height: 23px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 38px;" +
      "margin-left: 4px;" +
      "margin-top: 5px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 24px;" +
      "width: 29%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 45px;" +
      "margin-left: 2px;" +
      "margin-top: 1px;" +
      "}" +


      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 4px;" +
      "margin-right: 5px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: -3px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 370px !important;" +
      "}" +
      "}" +

      // Desktop View 1024
      "@media (max-width: 1025px) {" +
      ".wacustomIphoneXContent{" +
      "display: none !important;" +
      "}"+
      ".waLeftTextContent h2{" +
      "margin-left: 0 !important;" +
      "margin-right: 55px !important;" +
      "font-size: 12px !important;" +
      "line-height: 20px;" +
      "}" +

      ".waLeftTextContent p{" +
      "margin-left: 0px !important;" +
      "}" +

      ".waBottomBoxDescRight br{" +
      "display: none !important;" +
      "}" +

      ".waRightTextContent h2{" +
      "margin-left: 14px !important;" +
      "font-size: 12px !important;" +
      "}" +

      ".waRightTextContent p{" +
      "margin-left: 14px !important;" +
      "margin-right: 0px !important;" +
      "font-size: 11px !important;" +
      "word-spacing: 0 !important;" +
      "}" +

      ".waRightImageContent{" +
      "margin-right: 10px;" +
      "}"+

      ".waImgMasterCard{" +
      "width: 23px !important;" +
      "}" +

      ".waImgVisaCard{" +
      "width: 23px !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 24px !important;" +
      "margin-right: 5px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 28px !important;" +
      "margin-top:0px !important;" +
      "}" +

      ".waRightImageSingleBoxFour{" +
      "width: 22% !important;" +
      "height: 23px;" +
      "margin-right: 2px;" +
      "}" +


      ".waRightImageSingleBoxTwo{" +
      "width: 24% !important;" +
      "height: 27px;" +
      "margin-right: 5px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 42px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 29% !important;" +
      "height: 27px !important;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 45px !important;" +
      "padding: 0px !important;" +
      "margin-left: 0px !important;" +
      "margin-top: 1px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "width: 30%;" +
      "height: 23px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 38px;" +
      "margin-left: 4px;" +
      "margin-top: 5px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 24px;" +
      "width: 29%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 45px;" +
      "margin-left: 2px;" +
      "margin-top: 1px;" +
      "}" +


      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 4px;" +
      "margin-right: 5px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: -3px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 370px !important;" +
      "}" +
      "}" +

      // max width 1000
      "@media (max-width: 1000px) {" +
      ".wacustomIphoneXContent{" +
      "display: none !important;" +
      "}"+
      ".waLeftTextContent h2{" +
      "margin-left: 0px !important;" +
      "margin-right: 19px !important;" +
      "text-align: unset !important;" +
      "font-size: 13px !important" +
      "}" +
      ".waLeftTextContent p{" +
      "margin-left: 0px !important;" +
      "}" +
      ".waRightTextContent h2{" +
      "margin-left: 20px !important;" +
      "font-size: 13px !important;" +
      "margin-top: 0px !important;" +
      "}" +
      ".waRightTextContent p{" +
      "margin-left: 20px !important;" +
      "margin-right: 0px !important;" +
      "font-size: 10px !important;" +
      "word-spacing: 0 !important;" +
      "}" +
      ".waImgMasterCard{" +
      "width: 30px !important;" +
      "}" +
      ".waImgVisaCard{" +
      "width: 30px !important;" +
      "}" +

      ".waRightImageSingleBox{" +
      "height: 26px !important;" +
      "margin-right: 5px !important;" +
      "}" +

      ".waImgPaypalCard{" +
      "width: 35px !important;" +
      "margin-top:0px !important;" +
      "}" +

      ".waRightImageSingleBoxFour{" +
      "width: 28% !important;" +
      "height: 23px;" +
      "margin-right: 2px;" +
      "}" +
      ".waRightImageSingleBoxTwo{" +
      "width: 24% !important;" +
      "height: 27px;" +
      "margin-right: 5px;" +
      "}" +

      ".waImgKaufCard{" +
      "width: 53px !important;" +
      "margin-left: 0px !important;" +
      "}" +

      ".waRightImageSingleBoxThree{" +
      "width: 34% !important;" +
      "height: 27px !important;" +
      "margin-left: 3px;" +
      "}" +

      ".waImgSepaCard{" +
      "width: 64px !important;" +
      "padding: 0px !important;" +
      "margin-left: 5px !important;" +
      "margin-top: 1px !important;" +
      "}" +

      ".waRightImageSingleBoxFive{" +
      "width: 30%;" +
      "height: 23px;" +
      "}" +

      ".waImgAmazonCard {" +
      "width: 55px;" +
      "margin-left: 4px;" +
      "margin-top: 5px;" +
      "}" +

      ".waRightImageSingleBoxSix {" +
      "height: 24px;" +
      "width: 29%;" +
      "}" +

      ".waImgKlamaCard {" +
      "width: 57px;" +
      "margin-left: 2px;" +
      "margin-top: 1px;" +
      "}" +
      ".waBottomBoxTitle {" +
      "font-size: 11px;" +
      "text-align: center;" +
      "margin-left: 6px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 4px;" +
      "margin-right: 5px;" +
      "font-size: 10px;" +
      "}" +

      ".waBottomBoxDescMiddle {" +
      "text-align: center;" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "font-size: 10px;" +
      "}" +


      ".waBottomBoxWrapper-inner{" +
      "height: 335px !important;" +
      "}" +
      "}" +

      
      "@media (max-width: 981px) {" +
      ".wacustomIphoneXContent{" +
      "display: none !important;" +
      "}"+
      ".waRightImageContent{" +
      "margin-right: 10px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner{" +
      "height: 308px !important;" +
      "}" +
      ".waLeftTextContent h2{" +
      "margin-left: 0 !important;" +
      "margin-right: 15px !important;" +
      "font-size: 12px !important;" +
      "line-height: 20px;" +
      "}" +
      "}" +

      

      // Mobile View
      "@media(min-width: 800px) and (max-width: 830px){" +
      ".wacustomforiphone, .waMiddleBoxContentMobile {" +
      "width: 100%;" +
      "}" +

      "#panelBodyOneMobile {"+
      "display:block !important;"+
    "}"+

      ".waRightBoxContent-inner {" +
      "display: none;" +
      "}" +

      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waLeftImgMobile{"+
      "width:46% !important;" +
      "}"+

      ".waLeftTextContentMobile h2{" +
      "font-size: 13px;"+
      "margin-left: 113px !important;"+
      "margin-right: 165px !important;;"+
      "}"+

      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +
      ".waBottomBoxDescLeft {" +
      "margin-left: 70px;" +
      "margin-right: 46px;" +
      "text-align: center;" +
      "}" +
      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +
      ".waRightImageSingleBoxMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 19% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "margin-bottom: 5px;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "margin-left: 140px;" +
      "margin-right: 125px;" +
      "}" +
      "#result-wrapper .hersteller-content{" +
      "display: none !important;" +
      "}"+
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 555px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 104.5%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 104.5%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
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
      "}"+

      "@media (min-width: 411px) and (max-width: 480px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +

      ".waBottomBoxDescLeft{" +
      "text-align: center;" +
      "margin-left: 30px;" +
      "margin-right: 30px;" +
      "}" +

      ".waBottomBoxDescMiddle{" +
      "margin-right: 10px;" +
      "text-align: center;" +
      "margin-left: 20px;" +
      "}" +

      ".waLeftImgMobile{" +
      "margin-top: -42px !important;" +
      "}" +

      ".waLeftTextContentMobile h2{" +
      "margin-top: 15px;" +
      "margin-left: 32px;" +
      "margin-right: 3px;" +
      "}" +

      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 370px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 108%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "margin-top: 65px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 108%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
      "margin-bottom: 15px;" +
      "}" +
      "#accordion #panelBodyTwoMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
      "}" +
      ".accordionLinkTopMobile{" +
      "border-top: 2px solid #1389B7;" +
      "border-left: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "text-decoration: none !important;" +
      "}" +
      ".accordionLinkTopMobileTwo{" +
      "border-top: 2px solid #1389B7;" +
      "border-left: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "text-decoration: none !important;" +
      "}" +
      "}" +

      "@media (min-width: 568px) and (max-width: 639px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -28px !important;" +
      "width: 54% !important;" +
      "}" +

      ".waLeftTextContentMobile h2{" +
      "margin-right: 90px;" +
      "text-align: justify;" +
      "margin-left: 125px;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 470px !important;" +
      "}" +

      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +

      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 55px;" +
      "margin-right: 18px;" +
      "}" +

      ".waBottomBoxDescMiddle {" +
      "margin-left: 109px;" +
      "margin-right: 95px;" +
      "}" +

      ".waImgPaypalCardMobile{" +
      "width: 65px;" +
      "margin-left: 5px;" +
      "margin-top: 10px;" +
      "}" +

      ".waImgAmazonCardMobile{" +
      "width: 62px;" +
      "margin-left: 6px;" +
      "margin-top: 9px;" +
      "}" +

      ".waRightImageSingleBoxMobile{" +
      "width: 19% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 15% !important;" +
      "}" +

      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +
      "}" +

      // 671 and 768
      "@media (min-width: 671px) and (max-width: 768px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -35px !important;" +
      "width: 50% !important;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "margin-left: 99px;" +
      "margin-right: 145px;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 330px !important;" +
      "}" +

      ".waBottomImgLeft {" +
      "margin-top: 20px;" +
      "margin-left: 0px;" +
      "width: 100%;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 0px;" +
      "margin-right: 0px;" +
      "text-align: center;" +
      "}" +

      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 104.3%;" +
      "margin-left: -13px;" +
      "}" +

      ".waRightImageSingleBoxMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 17% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 17% !important;" +
      "}" +

      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 470px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +
      ".waBottomBoxDescLeft {" +
      "margin-left: 70px;" +
      "margin-right: 46px;" +
      "text-align: center;" +
      "}" +
      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +
      ".waRightImageSingleBoxMobile{" +
      "width: 17% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "margin-left: 140px;" +
      "margin-right: 125px;" +
      "}" +
      "#result-wrapper .hersteller-content{" +
      "display: none !important;" +
      "}"+

      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 475px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
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
      "}" +

      // 661 and 670
      "@media (min-width: 661px) and (max-width: 670px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -42px !important;" +
      "width: 60% !important;" +
      "}" +

      ".waLeftTextContentMobile h2{" +
      "margin-left: 116px;" +
      "margin-right: 108px;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 485px !important;" +
      "}" +

      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 100px;" +
      "margin-right: 103px;" +
      "text-align: center;" +
      "}" +

      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +

      ".waRightImageSingleBoxMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 17% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 15% !important;" +
      "}" +

      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 470px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +
      ".waBottomBoxDescLeft {" +
      "margin-left: 70px;" +
      "margin-right: 46px;" +
      "text-align: center;" +
      "}" +
      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +
      ".waRightImageSingleBoxMobile{" +
      "width: 17% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "margin-left: 140px;" +
      "margin-right: 125px;" +
      "}" +
      "#result-wrapper .hersteller-content{" +
      "display: none !important;" +
      "}"+


      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 475px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
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

      "}" +

      // 640 and 660
      "@media (min-width: 640px) and (max-width: 660px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -45px !important;" +
      "width: 65% !important;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "margin-right: 124px;" +
      "text-align: justify;" +
      "margin-left: 95px;" +
      "}" +
      ".waBottomBoxWrapper-inner{" +
      "height: 470px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 105%;" +
      "}" +
      ".waBottomBoxDescLeft {" +
      "margin-left: 70px;" +
      "margin-right: 46px;" +
      "text-align: center;" +
      "}" +
      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 105%;" +
      "margin-left: -13px;" +
      "}" +
      ".waRightImageSingleBoxMobile{" +
      "width: 17% !important;" +
      "}" +
      ".waRightImageSingleBoxTwoMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 14% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 15% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 16% !important;" +
      "}" +
      ".waPaymentBox-inner-mobile{" +
      "height: 46px !important;" +
      "}" +
      ".waBottomBoxDescMiddle{" +
      "margin-left: 140px;" +
      "margin-right: 125px;" +
      "}" +
      "#result-wrapper .hersteller-content{" +
      "display: none !important;" +
      "}"+

      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 475px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 105.5%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
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

      ".waLeftBox-inner-mobile{" +
      "margin-top: 50px !important;" +
      "}"+

      "}" +

      // 320 and 350
      "@media (min-width: 320px) and (max-width: 350px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -20px !important;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "font-size: 10px !important;" +
      "}" +

      ".waRightImageSingleBoxMobile{" +
      "width: 32% !important;" +
      "}" +

      ".waImgMasterCardMobile{" +
      "width: 39px;" +
      "margin-top: 6px;" +
      "}" +

      ".waImgVisaCardMobile{" +
      "width: 37px;" +
      "margin-top: 6px;" +
      "}" +



      ".waRightImageSingleBoxTwoMobile{" +
      "width: 29% !important;" +
      "}" +
      ".waRightImageSingleBoxThreeMobile{" +
      "width: 30% !important;" +
      "}" +
      ".waRightImageSingleBoxFourMobile{" +
      "width: 26.1% !important;" +
      "}" +
      ".waRightImageSingleBoxFiveMobile{" +
      "width: 30.1% !important;" +
      "}" +
      ".waRightImageSingleBoxSixMobile{" +
      "width: 35% !important;" +
      "}" +

      "}" +

      "@media (min-width: 481px) and (max-width: 550px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "width: 70% !important;" +
      "}" +
      ".waLeftTextContentMobile h2{" +
      "margin-left: 65px !important;" +
      "margin-right: 35px !important;" +
      "}" +

      ".waBottomBoxWrapper-inner{" +
      "height: 385px !important;" +
      "}" +

      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "margin-left: -13px;" +
      "width: 107%;" +
      "}" +

      ".waBottomBoxDescLeft {" +
      "margin-left: 70px;" +
      "margin-right: 46px;" +
      "text-align: center;" +
      "}" +

      ".waMiddleBoxContentMobile{" +
      "background: #f7f6f6 !important;" +
      "margin-top: 20px;" +
      "}" +

      ".waBottomImgMiddle{" +
      "margin-top: 0 !important;" +
      "width: 107%;" +
      "margin-left: -13px;" +
      "}" +

      ".waBottomBoxDescMiddle{" +
      "margin-left: 60px;" +
      "margin-right: 60px;" +
      "}" +
      "}" +

      "@media (min-width: 375px) and (max-width: 400px){" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waLeftImgMobile{" +
      "margin-top: -32px !important;" +
      "}" +

      ".waLeftTextContentMobile h2{" +
      "font-size: 11px !important;" +
      "margin-left: 26px;" +
      "margin-right: 15px;" +
      "}" +

      ".waBottomBoxDescMiddle{" +
      "margin-left: 0 !important;" +
      "}" +


      "}" +


      "@media (max-width: 410px) {" +
      ".wacustomIphoneXContent{" +
      "display: block !important;" +
      "}"+

      ".waiPhoneInnerMobile{" +
      "display: none !important;" +
      "}"+

      ".hersteller-content {" +
      "display: none;" +
      "}" +
      ".wa-border-have{" +
      "border-bottom: 0px !important;" +
      "}" +
      ".waBottomBoxWrapper {" +
      "margin-top: -45px !important;" +
      "}" +
      ".waBottomBoxWrapper-inner {" +
      "margin-top: 50px !important;" +
      "height: 300px !important;" +
      "}" +
      ".waBottomImgLeft {" +
      "margin-top: 0;" +
      "width: 111%;" +
      "margin-left: -15px;" +
      "}" +
      ".waBottomBoxTitle{" +
      "font-size: 10px;" +
      "font-weight: 600;" +
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
      "}" +
      ".waBottomImgMiddle{" +
      "margin-top: 0;" +
      "width: 111%;" +
      "margin-left: -15px;" +
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
      "padding: 22px 15px;" +
      "margin: 0;" +
      "font-size: 13px;" +
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
      "#accordion .panel-body{" +
      "font-size: 15px;" +
      "line-height: 28px;" +
      "letter-spacing: 1px;" +
      "padding: 20px 25px;" +
      "}" +
      "#accordion #panelBodyOneMobile{" +
      "border-left: 2px solid #1389B7;" +
      "border-bottom: 2px solid #1389B7;" +
      "border-right: 2px solid #1389B7;" +
      "margin-top: -5px;" +
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
      "}"
  },
  mainJS: function () {
    var $ = window.jQuery;

    //For JS
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
      '<a class="accordionLinkTopMobile hidden-lg hidden-md visible-xs visible-sm" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Beschreibung & Lieferumfang</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
      '<div class="panel-body hidden-lg visible-md hidden-sm visible-xs" id="panelBodyOneMobile">' +
      '</div>' +
      '</div>' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingTwo">' +
      '<h4 class="panel-title">' +
      '<a class="accordionLinkTopMobileTwo hidden-lg hidden-md visible-xs visible-sm collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Kundenmeinungen</a>' +
      '</h4>' +
      '</div>' +
      '</div>' +
      '<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">' +
      '<div class="panel-body hidden-lg hidden-md visible-sm visible-xs panelBodyTwoMobile" id="panelBodyTwoMobile">' +
      '</div>' +
      '</div>' +
      '</div>';


      var contentForIphoneX = '<div class="row wacustomIphoneXContent">' +
      '<div class="col-sm-12">' +
      '<div class="waLeftBox-inner-mobile waiPhoneInnerMobile">' +
      '<div class="waLeftImageContentMObile">' +
      '<img src="https://sandbox.echologyx.com/wp-content/uploads/2021/08/waschhelden_two.png" class="img-responsive waLeftImgMobile"/>' +
      "</div>" +
      '<div class="waLeftTextContentMobile">' +
      '<h2> Wir sind auch nach dem Kauf für Fragen rund um das Produkt jederzeit für dich da.</h2>' +
      "</div>" +
      "</div>" +
      '<div class="paymentIconTitleMobile">' +
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
      '</div>';
      $("#product-offer").after(contentForIphoneX);


    $("#tab-votes").removeClass("tab-pane fade").addClass("tab-pane fade in");
    $("#article-tabs").after(accordionLinkMobile);
    $("#tab-description").clone().appendTo("#panelBodyOneMobile");
    $("#tab-votes").clone().appendTo("#panelBodyTwoMobile");
    $("#tab-description").removeClass("tab-pane fade active collapse").addClass("panel-collapse collapse in");


    // $(document).ready(function () {

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


    // });





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

