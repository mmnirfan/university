// ------------- VehicleStatus ------------- //

function postData(){
    url = "http://localhost:8537/api/vehiclestatus";
    data = '{"camera_info":{"camera_ip":"192.168.5.190"}}'
    params = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    }
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })

}

postData();


function appendData(data) {
    if(data.is_authorised === false){
        data.is_authorised = "Un-Authorized" 
    }else if (data.is_authorised === true){
         data.is_authorised = "Authorized"
    }else{
         return "un-defined";
    }
    var mainContainer = document.getElementById('table-body');
    var htmlstring = '';
    $.each(data, function(key, value){
        htmlstring += "<tr>";
        htmlstring += "<td>"+ data.number_plate +"</td>";
        htmlstring += "<td>"+ data.ActionTime +"</td>";
        htmlstring += "<td>"+ data.is_authorised +"</td>";
        htmlstring += "</tr>";
    });
    $(mainContainer).append(htmlstring); 
    //mainContainer.append(htmlstring);
}
appendData();


