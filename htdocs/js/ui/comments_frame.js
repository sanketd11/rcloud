RCloud.UI.comments_frame = {
    body: function() {
        return RCloud.UI.panel_loader.load_snippet('comments-snippet');
    },
    init: function() {
        $("#comment-submit").click(function() {
            if(!Notebook.empty_for_github($("#comment-entry-body").val())) {
                editor.post_comment($("#comment-entry-body").val());
                $("#comment-entry-body").height("38px");
            }
            return false;
        });

        $("#comment-entry-body").keydown(function (e) {
            if ((e.keyCode == 10 || e.keyCode == 13 || e.keyCode == 115 || e.keyCode == 19) &&
                (e.ctrlKey || e.metaKey)) {
                if(!Notebook.empty_for_github($("#comment-entry-body").val())) {
                    editor.post_comment($("#comment-entry-body").val());
                    $("#comment-entry-body").height("38px");
                }
                return false;
            }
            var comment = $("#comment-entry-body");
            comment.bind('input', function() {
                comment.css("height", '38 px');
                comment.css("height", comment[0].scrollHeight  + 'px');
            });
            return undefined;
        });
    }
};
