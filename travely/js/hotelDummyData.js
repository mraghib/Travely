class Hotel {
    constructor(id,name, country, starRating, description, pricing,hClass,hStyle,checkindate,checkoutdate) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.starRating = starRating;
        this.description = description;
        this.pricing = pricing;
        this.hClass = hClass; 
        this.hStyle = hStyle;
        var dateParts = checkindate.split("/");
        this.checkindate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
       // alert(this.checkindate);
        dateParts = checkoutdate.split("/");
        this.checkoutdate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

       // alert(this.checkoutdate);
    }
    // Getter
    sethStyle(new_style){
        this.style.push(new_style);
    }
    gethStyle(){
        return this.style;
    }
    getName() {
        return this.name;
    }
    getCountry() {
        return this.country;
    }
    getStar() {
        return this.starRating;
    }
    getDescription() {
        return this.description;
    }
    getPricing() {
        return this.pricing;
    }
}
class DesiredHotel
{   constructor()
    {
         this.country = null;
        this.starRating = null;
        this.checkindate = null;
        this.checkoutdate = null;
        this.pricing = null;
        this.hStyle = [];
        this.hClass = [];     
    }
    setCountry(country)
    {
        this.country = country;
    }
    setRating(rating)
    {
        this.rating = rating;
    }
    setcheckinDate(checkindate)
    {
       this.checkindate = new Date(checkindate.valueOf());
      // alert(checkindate);
    }
    setcheckoutDate(checkoutdate)
    {
        this.checkoutdate = checkoutdate;
    }
    setpricing(price)
    {
        this.pricing = price;
    }
    sethStyle(newStyle)
    {
            var index =  this.hStyle.indexOf(newStyle);
            if(index === -1)
            {
                this.hStyle.push(newStyle);
                alert(this.hStyle);
            }
    }
    sethClass(newclass)
    {
        var index =  this.hClass.indexOf(newclass);
        if(index === -1)
        {
            this.hClass.push(newclass);
            alert(this.hClass);
        }
    }
    getCountry()
    {
        return this.country;
    }
    getRating()
    {
        return this.rating;
    }
    getcheckinDate()
    {
       return this.checkindate; 
    }
    getcheckoutDate()
    {
        return this.checkoutdate;
    }
    getpricing()
    {
        return this.pricing;
    }
    gethStyle()
    {
        alert(this.hStyle);
       //return this.hStyle;
    }
    gethClass()
    {
       return this.hClass;
    }
    removeclass(remclass)
    {
        var index = this.hClass.indexOf(remclass);
        if(index != -1)
        {
            this.hClass.splice(index,1);
            alert(this.hClass);
        }
    }
    removestyle(remstyle)
    {
        var index = this.hStyle.indexOf(remstyle);
        if(index != -1)
        {
            this.hStyle.splice(index,1);
            alert(this.hStyle);
        }

    }
}
class SearchWidget{
    constructor()
    {
        this.hotelClass = new Hotel_Class();
        this.hotelStyle = new Hotel_Style();
        this.datesection = new DateSection();
        this.avari = new Hotel(1, "Avari", "Pakistan", 4, "One of the best hotels", 250,"3 Star","Luxury","16/03/2018","16/03/2019");
        this.marriot = new Hotel(2, "Marriot", "Pakistan", 4, "Located in heart of Lahore", 200,"4 Star","Condominium","16/03/2018","16/03/2020");
        this.serena = new Hotel(3, "Serena", "Pakistan", 4, "Traditional style", 180,"4 Star", "Budget","16/03/2018","16/03/2021");
        this.hilton = new Hotel(4, "Hilton", "Malaysia", 5, "The best in the country", 350,"3 Star", "Mid-Range","16/03/2018","16/03/2022");
        this.hotelPool = new Array();
        this.hotelPool[this.avari.id] = this.avari;
        this.hotelPool[this.marriot.id] = this.marriot;
        this.hotelPool[this.serena.id] = this.serena;
        this.hotelPool[this.hilton.id] =this.hilton;
        this.Desiredhotel = new DesiredHotel();
         }
}
class DateSection {
    constructor()
    {
        this.checkinDate = new Date();
        this.checkoutDate = new Date();
        this.html = "";
    }

    get_DateSection_html()
    {
        this.html = "<h5 id=\"destinationAppend\">Lowest prices for</h5>\n" +
            "\t\t<form name=\"form1\" id=\"form1\" action=\"hotelinformation.html\" method=\"get\">\n" +
            "\t\t\t<h3 id=\"here\"></h3> </form>\n" +
           "<div class='row'>"+
                "<div class='col-4'>"+
                    "<p>Checkin: <input type='text' id='checkin' ></p><br>"+
                "</div>"+
                "<div class='col-4'>"+
                    "<p>Checkout: <input type='text' id='checkout'>"+
                "</div>"+
                "<div class='col-4'>"+
                    "<input type='button' class='btn btn-primary' value='Submit' id = 'Submit' style ='height:33px'>"+
                "</div>"+
            "</div>";

        return this.html;
    }
    set_checkin_Date(currentDate) {
        this.checkinDate = currentDate;
        //alert(this.checkinDate);
    }
    get_checkin_Date(currentDate)
    {
        return this.checkinDate;
    }

    set_checkout_Date(currentDate) {
        this.checkioutDate = currentDate;
        alert(this.checkinDate);
    }
    get_checkout_Date(currentDate)
    {
        return this.checkoutDate;
    }
}
class Hotel_Class {
    constructor()
    {
        this.class_type = {1:"1 Star",2:"2 Star",3:"3 Star",4:"4 Star",5:"5 Star"};
        this.html = "";
    }
    hotel_Class_Html()
    {
        //alert(this.class_type[1]);
        this.html = "<h4>Hotel Class</h4> " 
        +"<div class ='hotelclass'>"
            +"<input type='checkbox' id = '1 Star' >"+" " +this.class_type[1]
            + "<br> <input type='checkbox'  id = '2 Star'>"+" " +this.class_type[2]
            +"<br> <input type='checkbox'   id = '3 Star'>"+" "+ this.class_type[3]
            +"<br> <input type='checkbox'  id = '4 Star'>"+" "+this.class_type[4]
            +"<br> <input type='checkbox' id = '5 Star'>"+" "+this.class_type[5]+"</div>"+"<hr>";
        return this.html;
    }
}
class Hotel_Style {
    constructor()
    {
        this.style_type = {1:"Luxury",2:"Condominium",3:"Budget",4:"Mid-Range"};
        this.html = "";
    }
    hotel_Style_Html()
    {
        this.html = "<h4>Hotel Style</h4>" 
        +"<div class ='hotelstyle'>"
          +  " <input type='checkbox'  id = "+this.style_type[1]+">" + " "+this.style_type[1]
            + "<br> <input type='checkbox' id = "+this.style_type[2]+">"+" "+this.style_type[2]
            +"<br> <input type='checkbox'  id = "+this.style_type[3]+">"+" "+this.style_type[3]
            +"<br> <input type='checkbox'  id = "+this.style_type[4]+">"+" "+this.style_type[4]
            +"</div>"
            +"<hr>";
        return this.html;
    }
}
class Dinein_Option {
    constructor()
    {
        this.Dinein_type = {1:"Chinese",2:"Pakistani",3:"American",4:"French"};
        this.html = "";
    }
    hotel_Class_Html()
    {
        this.html = "<h4>Hotel Class</h4> <input type=\"checkbox\"  >"+this.Dinein_type[1]
            + "<br> <input type=\"checkbox\" name=\"\">"+this.Dinein_type[2]
            +"<br> <input type=\"checkbox\" name=\"\">"+this.Dinein_type[3]
            +"<br> <input type=\"checkbox\" name=\"\">"+this.Dinein_type[4]+"hr";
        return this.html;
    }
}
class price_Slider {
    constructor()
    {

    }
}
/*class Traveler_Rating{
    constructor()
    {
        this.value = 0;
        this.html = "";
    }
    Traveler_Rating_Html()
    {
        this.html = "<div class=\"star-rating\">" +
            "<span class=\"fa fa-star-o\" data-rating=\"1\"></span>" +
            "<span class=\"fa fa-star-o\" data-rating=\"2\"></span>" +
            "<span class=\"fa fa-star-o\" data-rating=\"3\"></span>" +
            "<span class=\"fa fa-star-o\" data-rating=\"4\"></span>" +
            "<span class=\"fa fa-star-o\" data-rating=\"5\"></span>" +
            "<input type=\"hidden\" name=\"whatever3\" class=\"rating-value\" value=\"3.0\">\n"
            + "</div>";
    }
    set_Traveler_Rating()
    {
        var $star_rating = $('.star-rating .fa');

        var SetRatingStar = function() {
            return $star_rating.each(function() {
                if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                    return $(this).removeClass('fa-star-o').addClass('fa-star');
                } else {
                    return $(this).removeClass('fa-star').addClass('fa-star-o');
                }
            });
        };

        $star_rating.on('click', function() {
            $star_rating.siblings('input.rating-value').val($(this).data('rating'));
            return SetRatingStar();
        });

        SetRatingStar();
        $(document).ready(function() {

        });
    }
}*/

var myWidget = new SearchWidget();
function getchangedcheckinDate() {
    date = $("#checkindate").val();
    //alert(date);
}
function displayAvailableHotels(matchedArray)
{
    $("div").remove(".col-sm-4, .py-2");
    $("div").remove(".col-12, .rem");
    for (i = 1; i <matchedArray.length; i++)
    {
        $("#hotelInfo").append(
            "<div class= 'col-sm-4 py-2'>" +
                "<div class= 'card h-100'>" +
                    "<h4>Image</h4>" +
                    "<img src= 'images/marriot.jpeg' class= 'img-fluid img-thumbnail' alt= 'Responsive image' style= 'height: 272px'>" +
                "</div>" +
            "</div>" +
            
            "<div class='col-sm-4 py-2'>" +
                "<div class='card h-100'>" +
                    "<h4>Description</h4>" +
                        "<div class='card-block'>" +
                            "<h5>"+matchedArray[i].name+"</h5>" +
                            "<p>"+matchedArray[i].description+"</p>" +
                            "<ul>" +
                                "<li>Size: 230 sq. ft</li>" +
                                "<li>Size: 230 sq. ft</li>" +
                                "<li>Size: 230 sq. ft</li>" +
                            "</ul>" +
                        "</div>" +
                "</div>" +
            "</div>" +
            "<div class= 'col-sm-4 py-2'>"+
                "<div class= 'card h-100'>"+
                    "<h4>Pricing</h4>"+
                        "<div class='card-body'>"+
                            "<h4 class='card-title'>Bed Size</h4>"+
                            "<p class='card-text'>Available Bed Sizes are :</p>"+
                            "<ul>" +
                                "<li>Single Bed : 100$</li>" +
                                "<li>Double Bed : 200$</li>" +
                                "<li>King Bed : 300$</li>" +
                            "</ul>" +
                            "<a href='#' id='hotelDetail' class='btn btn-primary' style = 'text-align:centre; vertical-align=bottom;'>Know More...</a>"+
                        "</div>"+
                "</div>"+
            "</div>"
         );
    }
}

/*function displayAvailableHotels(count) {
    for (i = 1; i <=count; i++) {
        $("#hotelInfo").append(
            "<div class= 'col-sm-4 py-2'>" +
            "<div class= 'card h-100'>" +
            "<h4>Image</h4>" +
            "<img src= 'images/marriot.jpeg' class= 'img-fluid img-thumbnail' alt= 'Responsive image' style= 'height: 272px'>" +
            "</div>" +
            "</div>" +

            "<div class='col-sm-4 py-2'>" +
            "<div class='card h-100'>" +
            "<h4>Description</h4>" +
            "<div class='card-block'>" +
            "<h5>Marriot Hotel</h5>" +
            "<p>The six awards include JW Marriott winning the Best Business Hotel Brand in North America.</p>" +
            "<ul>" +
            "<li>Size: 230 sq. ft</li>" +
            "<li>Size: 230 sq. ft</li>" +
            "<li>Size: 230 sq. ft</li>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class= 'col-sm-4 py-2'>"+
            "<div class= 'card h-100'>"+
            "<h4>Pricing</h4>"+
            "<div class='card-body'>"+
            "<h4 class='card-title'>Bed Size</h4>"+
            "<p class='card-text'>Available Bed Sizes are :</p>"+
            "<ul>" +
            "<li>Single Bed : 100$</li>" +
            "<li>Double Bed : 200$</li>" +
            "<li>King Bed : 300$</li>" +
            "</ul>" +
            "<a href='#' id='hotelDetail' class='btn btn-primary' style = 'text-align:centre; vertical-align=bottom;'>Know More...</a>"+
            "</div>"+
            "</div>"+
            "</div>"
        );
    }
}*/
function findHotels(destination) {
    var matchedArr = new Array();
    var count =1;

    for(i=1;i<myWidget.hotelPool.length;i++)
    {

        if(destination === myWidget.hotelPool[i].getCountry()) {
            alert(myWidget.hotelPool[i].getCountry());
            matchedArr[count] = myWidget.hotelPool[i];
            count ++;
        }
    }
    //alert(matchedArr);
    return matchedArr;
}
function displayNoHotelsFound() {
    $("div").remove(".col-sm-4, .py-2");
    $("div").remove(".col-12, .rem");
    $("#hotelInfo").append("<div class='col-12 rem'><h2>No Hotel Found</h2></div>");
}
function onSubmit(DesiredHotel,hotelList)
{
    var matchedHotels = new Array();
    var matchedHotelsCount = 1;
    for(i = 1 ; i < hotelList.length ; i++)
    {
        if( hotelList[i].country === DesiredHotel.country)//country
        {

            if((hotelList[i].checkindate <= DesiredHotel.checkindate && hotelList[i].checkoutdate >= DesiredHotel.checkoutdate) ||(DesiredHotel.checkindate===null))//dates
            {
                //alert(DesiredHotel.hStyle.length);
               for(j = 0 ;j <= DesiredHotel.hStyle.length;j++)
               {
                   if ((DesiredHotel.hStyle[j] === hotelList[i].hStyle)||(DesiredHotel.hStyle.length===0))
                   {
                       for(k = 0 ;k <= DesiredHotel.hClass.length;k++)
                       {
                           if (DesiredHotel.hClass[k] === hotelList[i].hClass||(DesiredHotel.hClass.length===0))
                           {
                               matchedHotels[matchedHotelsCount] = hotelList[i];
                               matchedHotelsCount++;
                               alert(matchedHotelsCount);
                               if(DesiredHotel.hClass.length===0)
                                   break;
                           }
                       }
                       if(DesiredHotel.hStyle.length===0)
                           break;
                   }
               }
            }
        }
    }
    return matchedHotels;
}
$(document).ready(function()
{
    var destinationComplete = window.location.search;
    var destination = destinationComplete.split("=");
   // var countHotels;

    $("#DateSection").append(myWidget.datesection.get_DateSection_html());
    $("#SearchFilterDiv").append(myWidget.hotelClass.hotel_Class_Html());
    $("#SearchFilterDiv").append(myWidget.hotelStyle.hotel_Style_Html());
    document.getElementById("destinationAppend").innerHTML += " " + destination[1];
    myWidget.Desiredhotel.country = destination[1];
    $(function() {
        $( "#checkin" ).datepicker({minDate : 0, dateFormat: 'dd-mm-yy'});
        $('.ui-datepicker').addClass('my-class');
        $("#checkout").attr("disabled", "disabled");
        $( "#checkout" ).datepicker({minDate:0, dateFormat: 'dd-mm-yy'});

        $( "#checkin" ).on("change",function(){
            onCheckin();

        });

    });

    function onCheckin(){
        if($("#checkin").val() !== ""){
            $("#checkout").removeAttr("disabled");
            var dateMin = $('#checkin').datepicker("getDate");
            myWidget.Desiredhotel.setcheckinDate(dateMin);
            //alert(dateMin);
            var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            //alert(rMin);
            $("#checkout").datepicker('option', 'minDate', new Date(rMin));
        }else{
            $("#checkout").val("");
            $("#checkout").attr("disabled", "disabled");
        }
    }
    //var hotels = findHotels(destination[1]);
    displayAvailableHotels(findHotels(destination[1]));

$(".hotelclass").bind("click",function(){
        $("div.hotelclass input").each(function(){
        var $input = $(this);
            if($input.prop("checked"))
            {
                // alert(this.id);
                myWidget.Desiredhotel.sethClass(String(this.id));
                //alert(myWidget.Desiredhotel.hStyle);
            }
            else
            {
                myWidget.Desiredhotel.removeclass(this.id);
                //alert(myWidget.Desiredhotel.hStyle);
            }
    });
    
    });
     $(".hotelstyle").bind("click",function(){
        $("div.hotelstyle input").each(function(){
        var $input = $(this);
         if($input.prop("checked"))
        {
           // alert(this.id);
            myWidget.Desiredhotel.sethStyle(String(this.id));
            //alert(myWidget.Desiredhotel.hStyle);
        }
        else
        {
              myWidget.Desiredhotel.removestyle(String(this.id));
            //alert(myWidget.Desiredhotel.hStyle);
        }
        
    });
    //alert(myWidget.Desiredhotel.gethStyle());
    });

     $('#Submit').bind( "click", function()
    {
       var matchedArr = onSubmit(myWidget.Desiredhotel,myWidget.hotelPool);
        if(matchedArr.length<1)
            displayNoHotelsFound();
        else
            displayAvailableHotels(matchedArr);
    });
    /*countHotels = findHotels(destination);
    if(countHotels<1)
        displayNoHotelsFound(countHotels);

    else
        displayAvailableHotels(countHotels);
*/
});
