define(['marionette'], function () {
    App = new Marionette.Application();

    App.addRegions({
        mainRegion: "#page-body"
    });

    App.on('show:main', function () {
        require(['app/controller/mainCtrl'], function (Ctrl) {
            Ctrl.showMain();
        });
    });

    App.on('show:myPage', function () {
        require(['app/controller/mainCtrl'], function (Ctrl) {
            Ctrl.showMyPage();
        });
    });

    return App;
});