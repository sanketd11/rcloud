Notebook.Cell.create_model = function(content, language)
{
    var id_ = -1;
    var result = {
        views: [], // sub list for pubsub
        parent_model: null,
        language: function() {
            return language;
        },
        content: function(new_content) {
            if (!_.isUndefined(new_content)) {
                if(content != new_content) {
                    content = new_content;
                    notify_views(function(view) {
                        view.content_updated();
                    });
                    return content;
                }
                else return null;
            }
            return content;
        },
        id: function(new_id) {
            if (!_.isUndefined(new_id) && new_id != id_) {
                id_ = new_id;
                notify_views(function(view) {
                    view.id_updated();
                });
            }
            return id_;
        },
        json: function() {
            return {
                content: content,
                language: language
            };
        }
    };
    function notify_views(f) {
        _.each(result.views, function(view) {
            f(view);
        });
    }
    return result;
};
