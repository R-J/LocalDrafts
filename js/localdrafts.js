jQuery(document).ready(function($) {
    // only do this if localStorage is supported
    if (window.localStorage !== undefined) {
        // create a stub for vanillas autosave function
        $.fn.autosave = function(opts) {
            return;
        }

        // determin DiscussionID so that drafts aren't mixed up
        var discussionID = document.getElementById('Form_DiscussionID').value;
        if (isNaN(discussionID) || discussionID === undefined) {
            discussionID = '0';
        }
        
        // get locally stored values
        var category = localStorage.getItem('category_' + discussionID);
        var name = localStorage.getItem('name_' + discussionID);
        var body = localStorage.getItem('body_' + discussionID);

        // category
        var el = document.getElementById('Form_CategoryID');
        if (category !== undefined && category !== null) {
            el.value = category;
        }
        $(el).on(
            'change',
            function() {
                localStorage.setItem('category_' + discussionID, this.value);
            }
        );

        // name
        var el = document.getElementById('Form_Name');
        if (name !== undefined && name !== null) {
            el.value = name;
        }
        $(el).on(
            'change',
            function() {
                localStorage.setItem('name_' + discussionID, this.value);
            }
        );

        // body
        var el = document.getElementById('Form_Body');
        if (body !== undefined && body !== null) {
            el.value = body;
        }
        $(el).on(
            'change',
            function() {
                localStorage.setItem('body_' + discussionID, this.value);
            }
        );
    }
});
