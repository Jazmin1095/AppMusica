angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('TabsCtrl', function($scope) {//, $ionicModal, $timeout


})

.controller('PlaylistsCtrl', function($scope,  $timeout) {

  $scope.playlists = [
    { title: 'My Everything', artist: 'Ariana Grande', thumb: 'http://st.cdjapan.co.jp/pictures/s/15/05/UICU-1255.jpg?v=1', detalles:'tab.single' },
    { title: 'Dangerous Woman', artist: 'Ariana Grande', thumb:'http://st.cdjapan.co.jp/pictures/s/14/08/NEOIMP-12249.jpg?v=1', detalles: 'tab.single2' },
    { title: 'Sobre el amor y sus efectos secundarios', artist: 'Morat', thumb:'https://images-na.ssl-images-amazon.com/images/I/711OY+pMeDL._CR0,53,1224,1224_UX128.jpg', detalles: 'tab.single3'},
    { title: 'Flicker', artist: 'Niall Horan', thumb:'https://68.media.tumblr.com/avatar_fc8cbe1ade51_128.png', detalles: 'tab.single4' },
    { title: 'Reputation', artist: 'Taylor Swift', thumb:'http://st.cdjapan.co.jp/pictures/s/07/08/POCS-24013.jpg?v=1', detalles: 'tab.single5' },
    { title: 'Update', artist: 'Yandel', thumb:'https://i.pinimg.com/236x/74/dd/40/74dd409d69f544810a0f99c40b974176.jpg', detalles: 'tab.single6' },
    { title: 'Divide ÷', artist: 'Ed Sheeran', thumb:'https://i.pinimg.com/originals/14/90/39/14903946e8b9a2d3f02e60a3b718617b.jpg', detalles: 'tab.single7' },
    { title: 'Evolve', artist: 'Imagine Dragons', thumb: 'http://st.cdjapan.co.jp/pictures/s/13/40/UICS-1328.jpg?v=1', detalles: 'tab.single8'}
    
   /*  pressHandler(args) {
        alert('sound/song.mp3');
    } */
  
  ];
  
  $scope.playSound = function() {
    var audio = new Audio('sound/song.mp3');
    audio.play();
    };
    
  })
  
    /*
 {
        
*/
.controller('PlaylistCtrl', function($scope, $timeout, User) { //User, , $stateParams
  $scope.play = [
  { title: 'My Everything', artist: 'Ariana Grande', thumb: 'http://st.cdjapan.co.jp/pictures/s/15/05/UICU-1255.jpg?v=1' }
 , $scope.sendFeedback = function (bool) {
    //  bool = true;
    if (bool) User.addSongToCompras($scope.play);
    }
]

$scope.songs = [
  { song:'Intro', duration:'1:20'  },
  { song:'Problem (feat. Iggy Azalea)', duration:'3:14'  },
  { song:'One Last Time', duration:'3:17'  },
  { song:'Break Free (feat. Zedd)', duration:'3:35'  },
  { song:'Love Me Harder', duration:'3:56'  },
  { song:'My Everything', duration:'2:49'  }
];

 })

 .controller('Playlist2Ctrl', function($scope, $stateParams) {
  $scope.playl = [
    { title: 'Dangerous Woman', artist: 'Ariana Grande', thumb:'http://st.cdjapan.co.jp/pictures/s/14/08/NEOIMP-12249.jpg?v=1', detalles: 'templates/d-playlist2.html' },
  ]
  $scope.song = [
    { song:'Moonlight', duration:'3:20'  },
    { song:'Dangerous Woman', duration:'3:14'  },
    { song:'Be Alright', duration:'2:17'  },
    { song:'Into You', duration:'4:05'  },
    { song:'Side To Side', duration:'3:56'  },
    { song:'Sometimes', duration:'2:49'  }
  ]
   }) 

   .controller('Playlist3Ctrl', function($scope, $stateParams) {
    $scope.playl3 = [
      { title: 'Sobre el amor y sus efectos secundarios', artist: 'Morat', thumb:'https://images-na.ssl-images-amazon.com/images/I/711OY+pMeDL._CR0,53,1224,1224_UX128.jpg', detalles: 'tab.single3'},
    ]
    $scope.song3 = [
      { song:'En un sólo día', duration:'3:57'  },
      { song:'Aprender a quererte', duration:'3:49'  },
      { song:'Yo más te adoro', duration:'3:17'  },
      { song:'Cómo te atreves', duration:'4:05'  },
      { song:'Una vez más', duration:'3:56'  },
      { song:'Mil tormentas', duration:'2:49'  }
    ]
     }) 

     .controller('Playlist4Ctrl', function($scope, $stateParams) {
      $scope.playl4 = [
        { title: 'Flicker', artist: 'Niall Horan', thumb:'https://68.media.tumblr.com/avatar_fc8cbe1ade51_128.png', detalles: 'tab.single4' },
      ]
      $scope.song4 = [
        { song:'On the Loose', duration:'3:20'  },
        { song:'This Town', duration:'3:14'  },
        { song:'Slow Hands', duration:'2:17'  },
        { song:'Too Much To Ask', duration:'4:05'  },
        { song:'Flicker', duration:'3:56'  },
        { song:'On My Own', duration:'2:49'  }
      ]
       }) 

       .controller('Playlist5Ctrl', function($scope, $stateParams) {
        $scope.playl5 = [
          { title: 'Reputation', artist: 'Taylor Swift', thumb:'http://st.cdjapan.co.jp/pictures/s/07/08/POCS-24013.jpg?v=1', detalles: 'tab.single5' },
        ]
        $scope.song5 = [
          { song:'Ready For It?', duration:'3:20'  },
          { song:'Look What You Made Me Do', duration:'3:14'  },
          { song:'Gorgeous', duration:'2:17'  },
          
        ]
         }) 

         .controller('Playlist6Ctrl', function($scope, $stateParams) {
          $scope.playl6 = [
            { title: 'Update', artist: 'Yandel', thumb:'https://i.pinimg.com/236x/74/dd/40/74dd409d69f544810a0f99c40b974176.jpg', detalles: 'tab.single6' },
          ]
          $scope.song6 = [
            { song:'Como antes', duration:'3:20'  },
            { song:'No pare', duration:'3:14'  },
            { song:'Llégale', duration:'2:17'  },
            { song:'Sólo Mía', duration:'4:05'  },
            { song:'Si se da', duration:'3:56'  },
            
          ]
           }) 

           .controller('Playlist7Ctrl', function($scope, User, $stateParams) {
            $scope.playl7 = [
              { title: 'Divide ÷', artist: 'Ed Sheeran', thumb:'https://i.pinimg.com/originals/14/90/39/14903946e8b9a2d3f02e60a3b718617b.jpg', detalles: 'tab.single7' },
            ]
            $scope.song7 = [
              { song:'Eraser', duration:'3:20'  },
              { song:'Dive', duration:'3:14'  },
              { song:'Shape Of You', duration:'2:17'  },
              { song:'Perfect', duration:'4:05'  },
              { song:'Happier', duration:'3:56'  },
              { song:'New Man', duration:'2:49'  }
            ]
             }) 

             .controller('Playlist8Ctrl', function($scope, $stateParams) {
              $scope.playl8 = [
                { title: 'Evolve', artist: 'Imagine Dragons', thumb: 'http://st.cdjapan.co.jp/pictures/s/13/40/UICS-1328.jpg?v=1', detalles: 'tab.single8'}
              ]
              $scope.song8 = [
                { song:'Whatever It Takes', duration:'3:20'  },
                { song:'Believer', duration:'3:14'  },
                { song:'Walking the Wire', duration:'2:17'  },
                { song:'Thunder', duration:'4:05'  },
                { song:'I Don´t Know Why', duration:'3:56'  },
                
              ]
               }) 

               .controller('BuyCtrl', function($scope, User) {//$stateParams
                //  get the list of our favorites from the user service
                  $scope.compras = User.compras;
               })