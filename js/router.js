const router = {
    routes: {}
};
router.add = (divId) => {
    router.routes[divId] = Handlebars.compile($('#' + divId).html());
};
router.navigateTo = (divId) => {
    var template = router.routes[divId];
    $('#app').html(template());
};

router.add('route-home');
router.add('route-dashboard');
router.add('route-growth');
router.add('menu-bar');

const navigateTo = router.navigateTo;

navigateTo('route-home');

Handlebars.registerPartial("menu", $("#menu-bar").html());
