var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
    map.entities.push(pushpin);
    
}

