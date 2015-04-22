define([
    'app/view/mainView',
    'app/view/personalView'
], function (MainView, PersonalView) {
    var ctrl = {
        showMain: function () {
            console.log('showMain controller');
            var view = new MainView();
            App.mainRegion.show(view);
        },
        showMyPage: function () {
            console.log('showMyPage controller');
            var view = new PersonalView();
            App.mainRegion.show(view);
        }
    };

    return ctrl;
});