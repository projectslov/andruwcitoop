$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var messageContainer = $("#message-container");

    function open() {
        envelope.addClass("open").removeClass("close");

        // Wait for hearts animation (~7s) then hide the envelope and show message
        setTimeout(function () {
            envelope.fadeOut(500, function () {
                messageContainer.fadeIn(500).addClass("show-message");
            });
        }, 7000);
    }

    function close() {
        messageContainer.fadeOut(500, function () {
            envelope.fadeIn(500).addClass("close").removeClass("open");
        });
    }

    btn_open.click(open);
    btn_reset.click(close);
});
