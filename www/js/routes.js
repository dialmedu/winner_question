angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.tienda'
      2) Using $state.go programatically:
        $state.go('home.tienda');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /responde/tab3/reclama
      /responde/tab1/reclama
  */
  .state('home.tienda', {
    url: '/reclama',
    views: {
      'tab3': {
        templateUrl: 'templates/tienda.html',
        controller: 'tiendaCtrl'
      },
      'tab1': {
        templateUrl: 'templates/tienda.html',
        controller: 'tiendaCtrl'
      }
    }
  })

  .state('home.responde', {
    url: '/responde',
    views: {
      'tab2': {
        templateUrl: 'templates/responde.html',
        controller: 'respondeCtrl'
      }
    }
  })

  .state('home.respondeImagen', {
    url: '/imagen1',
    views: {
      'tab2': {
        templateUrl: 'templates/respondeImagen.html',
        controller: 'respondeImagenCtrl'
      }
    }
  })

  .state('home.comunidad', {
    url: '/comunidad',
    views: {
      'tab3': {
        templateUrl: 'templates/comunidad.html',
        controller: 'comunidadCtrl'
      }
    }
  })

  .state('home', {
    url: '/responde',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.cupon'
      2) Using $state.go programatically:
        $state.go('home.cupon');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /responde/tab3/cupon1
      /responde/tab1/cupon1
  */
  .state('home.cupon', {
    url: '/cupon1',
    views: {
      'tab3': {
        templateUrl: 'templates/cupon.html',
        controller: 'cuponCtrl'
      },
      'tab1': {
        templateUrl: 'templates/cupon.html',
        controller: 'cuponCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.opps'
      2) Using $state.go programatically:
        $state.go('home.opps');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /responde/tab3/noacceso
      /responde/tab1/noacceso
  */
  .state('home.opps', {
    url: '/noacceso',
    views: {
      'tab3': {
        templateUrl: 'templates/opps.html',
        controller: 'oppsCtrl'
      },
      'tab1': {
        templateUrl: 'templates/opps.html',
        controller: 'oppsCtrl'
      }
    }
  })

  .state('home.agregar', {
    url: '/agregar',
    views: {
      'tab3': {
        templateUrl: 'templates/agregar.html',
        controller: 'agregarCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/responde/tab1/reclama')

  

});