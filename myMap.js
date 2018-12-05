var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'http://pokemon.wikia.com/wiki/File:001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
    map.entities.push(pushpin);
    
}

