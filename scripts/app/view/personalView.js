define(['tpl!app/templates/personal.tpl'], function (tpl) {
    var view = Marionette.ItemView.extend({
        template: tpl,
        className: 'personal',
        onRender: function () {
            console.log('showMyPage view');
        }
    });

    return view;
});