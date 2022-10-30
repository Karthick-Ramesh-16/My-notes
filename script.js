$(function() {
    $("#note-title").val(sessionStorage.getItem("title"));
    $("#note-content").text(sessionStorage.getItem("content"));

    $("#note-save-btn").click(function() {
        sessionStorage.setItem("title", $("#note-title").val());
        sessionStorage.setItem("content", $("#note-content").val());
        $("#note-saved").css("display", "flex");
        $("#note-saved").css("justifyContent", "space-between");
    });
});
