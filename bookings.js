"use strict";

/*  1)  on submit - red box around blank required fields and print general message that data needs to be input
2)  if user changes flight or nbr of passengers and both are filled in then update total
*/

$(function () {

    const submitButton = $(".btn-submit");
    const chosenFlight = $("#flights");
    const cntPass = $("#passCnt");
    const msgTotal = $(".total");
    const msgMessage = $(".message");

    function setTotalMessage() {
        if (chosenFlight.val() != '' && cntPass.val() != '') {
            msgTotal.text(`Total price: $${chosenFlight.val() * cntPass.val()}`);
        }
    }

    function clearMessageText() {
        msgTotal.text('');
        msgMessage.text('');
    }

    chosenFlight.on("invalid", function () {
        msgMessage.text("Not all required details have been entered");
        chosenFlight.addClass("redbox");
    })

    cntPass.on("invalid", function () {
        msgMessage.text("Not all required details have been entered");
        cntPass.addClass("redbox");
    })

    $("form").on("submit", function (e) {
        console.log("submitting form");
        e.preventDefault();
    })

    chosenFlight.on("focus", () => {
        if (chosenFlight.hasClass("redbox")) {
            chosenFlight.removeClass("redbox");
        }
    })

    cntPass.on("focus", () => {
        if (cntPass.hasClass("redbox")) {
            console.log("inside focus cntpass");
            cntPass.removeClass("redbox");
        }
    })

    chosenFlight.on("input", function () {
        clearMessageText();
        setTotalMessage();
    })

    cntPass.on("input", function () {
        clearMessageText();
        setTotalMessage();
    })

})
