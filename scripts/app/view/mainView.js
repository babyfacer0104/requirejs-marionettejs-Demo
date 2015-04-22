define(['tpl!app/templates/main.tpl'], function (tpl) {
    var view = Marionette.ItemView.extend({
        template: tpl,
        className: 'hele',
        onRender: function () {
            console.log('showMain view');
        }
    });

    return view;
});