// this is to get data from 2 different sources. for that you create a div id in the body of one of the sources and then do a if statment.



//if (document.getElementById("")){

//url = "https://api.myjson.com/bins/gddkt";
//}
//else{


// url = "https://api.myjson.com/bins/w5j7d";


//}



//var database = get.documentElement.raul_json;




url = "https://www.instagram.com/your_data_analyst/?__a=1";



$(document).ready(function(){ // this is to show the data in your document. it calls all the functions that you made

    $.getJSON(url, function(data){

        var insta_data = data;
        
        //.graphql.user.edge_owner_to_timeline_media.edges["0"].node.edge_media_to_caption.edges["0"].node /// when we have an array inside of another array we need to say the position eg:.["0"].

        var insta_text = insta_data.graphql.user.edge_owner_to_timeline_media.edges["0"].node.edge_media_to_caption.edges["0"].node;

      


        
        console.log(insta_text);

        // console.log(insta_data.graphql.user.edges.node.edge_media_to_caption.edges.node.text);
        //







    }
             );   

});


