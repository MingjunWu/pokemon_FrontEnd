var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});


var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/blob/gh-pages/images/pushpin_images/pokemon/1.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);
    
}

