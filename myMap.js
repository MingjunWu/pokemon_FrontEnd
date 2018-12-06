var map;
var map_manager = {
 "map": null,
 "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1544128666,
        "longitude" : -73.45,
        "latitude" : 40.75,
    },
    {
        "pokemon_id" : 2,
        "expire" : 1544128666,
        "longitude" : -73.46,
        "latitude" : 40.76,
    }
    
    
]
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    map_manager.map = map;
    
    for(var i in map_manager.map_items){
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft,Maps.Location(map_item["latitude"],map_item["longitude"]), { icon: 'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png',
     });
    map.entities.push(pushpin);
    }
    
}

