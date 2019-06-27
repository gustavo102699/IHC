


$(document).ready()
{
    var latlng = new google.maps.LatLng(41.375822, 2.177770);
    var latlng2 = new google.maps.LatLng(41.362822, 2.167770);
    
    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    var marker = new google.maps.Marker({
        position: latlng,
        title: 'Estatua Cristobal Colon',
        draggable: true
    });
    
    marker.setMap(map);
    
    var popup = new google.maps.InfoWindow({
        content: 'Estatua Cristobal Colon Barcelona (Spain)',
        position: latlng
    });
    
    
    popup.open(map);
}