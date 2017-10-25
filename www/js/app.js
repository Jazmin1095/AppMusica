angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true, // propiedad que permite decir que se van a anidar los estados que puede heredar a estados hijos
        templateUrl: 'templates/tabs.html',
        controller: 'TabsCtrl'
      })

      .state('tab.compras', {
        url: '/compras',
        views: {
          'tab-compras': {
            templateUrl: 'templates/compras.html',
            controller: 'BuyCtrl'
          }
        }
      })
      .state('tab.playlists', {
        url: '/playlists',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('tab.single', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

      .state('tab.single2', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_2.html',
            controller: 'Playlist2Ctrl'
          }
        }
      })

      .state('tab.single3', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_3.html',
            controller: 'Playlist3Ctrl'
          }
        }
      })

      .state('tab.single4', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_4.html',
            controller: 'Playlist4Ctrl'
          }
        }
      })

      .state('tab.single5', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_5.html',
            controller: 'Playlist5Ctrl'
          }
        }
      })

      .state('tab.single6', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_6.html',
            controller: 'Playlist6Ctrl'
          }
        }
      })

      .state('tab.single7', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_7.html',
            controller: 'Playlist7Ctrl'
          }
        }
      })

      .state('tab.single8', {
        url: '/playlists/:playlistDetalles',
        views: {
          'tab-playlists': {
            templateUrl: 'templates/playlist_8.html',
            controller: 'Playlist8Ctrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/playlists');
  });
