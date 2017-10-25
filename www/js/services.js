angular.module('starter.services', [])
.factory('User', function() {
    
      var o = {
        compras: []
      }

      o.addSongToCompras = function(play) {
        // make sure there's a song to add
        if (!play) return false;
    
        // add to favorites array
        o.compras.unshift(play);
      }
    
      return o;
    });
   