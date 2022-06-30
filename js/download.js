function withoutRuntime() {
    $("#agreeTerms").css({
        display: "block"
    });

    $("#quarog-dl").attr("href", "#a"); // #a -> withoutRuntimeダウンロードリンク
}

function mergedRuntime() {
    $("#agreeTerms").css({
        display: "block"
    });

    $("#quarog-dl").attr("href", "#b"); // #b -> mergedRuntimeダウンロードリンク
}

function downloadQuarog() {
    $("#agreeTerms").css({
        display: "none"
    });
}