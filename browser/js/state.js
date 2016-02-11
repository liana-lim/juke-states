juke.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('/', '/albums');
    $urlRouterProvider.when('/artist/:artistId', '/artist/:artistId/albums');

    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/templates/albums.html',
        resolve: {
            albums: function(AlbumFactory) {
                return AlbumFactory.fetchAll();
            }
        },
        controller: 'AlbumsCtrl'
    });

    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/templates/artists.html',
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll();
            }
        },
        controller: 'ArtistsCtrl'
    });

    $stateProvider.state('album', {
        url: '/album/:albumId',
        templateUrl: '/templates/album.html',
        resolve: {
            album: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchById($stateParams.albumId);
            }
        },
        controller: 'AlbumCtrl'
    });    

    $stateProvider
    .state('artist', {
        url: '/artist/:artistId',
        templateUrl: '/templates/artist.html',
        resolve: {
            artist: function(ArtistFactory, $stateParams) {
                return ArtistFactory.fetchById($stateParams.artistId);
            }
        },
        controller: 'ArtistCtrl'
    })
    .state('artist.albums', {
        url: '/albums',
        templateUrl: '/templates/albums.html',
        resolve: {
            artist: function(ArtistFactory, $stateParams) {
                return ArtistFactory.fetchById($stateParams.artistId);
            }
        },
        controller: 'ArtistCtrl'
    })
    .state('artist.songs', {
        url: '/songs',
        templateUrl: '/templates/songs.html',
        resolve: {
            artist: function(ArtistFactory, $stateParams) {
                return ArtistFactory.fetchById($stateParams.artistId);
            }
        },
        controller: 'ArtistCtrl'
    });

    $locationProvider.html5Mode(true);

});

