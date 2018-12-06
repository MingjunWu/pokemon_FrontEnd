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

function get_count_down_from_expire_time(expireTime){
 var nowTime = new Date().getTime() / 1000;
 var time_left = expireTime - nowTime;
 var second = Math.floor(time_left % 60);
 var minute = Math.floor(time_left / 60);
 return minute + " : " + second;
 
}
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    map_manager.map = map;
    window.setInterval(refresh_pokemon, 1000);
    
    
    
}

function refresh_pokemon(){
 
 //Prepare PushPin
 
  var layer = new Microsoft.Maps.Layer();
  var pushPins = [];
   for(var i in map_manager.map_items){
          var map_item = map_manager.map_items[i];
          var icon_url =  'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png';
          var count_down = get_count_down_from_expire_time(map_item["expire"]); 
          var pushpin = new Microsoft.Maps.Pushpin(
           new Microsoft.Maps.Location(map_item["latitude"],map_item["longitude"]), { 
            title: count_down,
            icon: icon_url
       });
      pushPins.push(pushpin);
    } 
    layer.add(pushPins);
 //Remove old PushPin
 map_manager.map.layers.clear();
 //Add new PushPin
 map_manager.map.layers.inseret(layer);
}

