
var Feed = function()
{
	var el = document.getElementById('displayArea');
	while ( el.firstChild ) el.removeChild( el.firstChild );
    var url;
    var id = document.getElementById("choice").selectedIndex;
    if(id==1)
  	{
  		url="http://dev-mystique.tavisca.com/api/deals/all?token=hldd4j4twjbqoprqqpxhydm4&$filter=Type eq 'hotel'"
  	}
  	else if (id==2) {
  		url="http://dev-mystique.tavisca.com/api/deals/all?token=hldd4j4twjbqoprqqpxhydm4&$filter=Type eq 'car'"
  	}
  
 
  var xmlhttp;
   xmlhttp=new XMLHttpRequest();
   xmlhttp.onreadystatechange=function()
    {
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("Content").innerHTML=xmlhttp.responseText;
		var result =JSON.parse(xmlhttp.responseText);
		switch(id)
		{
			case 1:
				var count = result.deals.length;
				for(var ii = 0;ii<count;ii++)
					{
						var hotel_deals = result.deals[ii];
						
						 
							var hotel_div = document.createElement("div");
							hotel_div.id = "hdiv"+ii;
							hotel_div.className='h_style';
							var hotel_desc = document.createElement("div");
							hotel_desc.className='bkg-attribute';
							hotel_div.appendChild(hotel_desc);
							
							var hotel_name_label = document.createElement("H1");
							hotel_name_label.className="color_l";
							hotel_name_label.innerHTML = hotel_deals.hotelName;
							hotel_desc.appendChild(hotel_name_label);

							var desc = document.createTextNode(hotel_deals.description);
							hotel_desc.appendChild(desc);

							var h_l0 = document.createElement("H1");
							h_l0.className="label_prop";
							h_l0.innerHTML = "Validity";
							hotel_desc.appendChild(h_l0);

							var h_l1 = document.createElement("H5");
							h_l1.className="label_prop";
							h_l1.innerHTML = hotel_deals.validityPeriod.start.date;
							hotel_desc.appendChild(h_l1);

							var h_l2 = document.createElement("H5");
							h_l2.className="label_prop";
							h_l2.innerHTML = hotel_deals.validityPeriod.start.time;
							hotel_desc.appendChild(h_l2);

							var h_l3 = document.createElement("H5");
							h_l3.className="label_prop";
							h_l3.innerHTML = hotel_deals.validityPeriod.start.systemDateTime;
							hotel_desc.appendChild(h_l3);

							var hotel_img = document.createElement("img");
							hotel_img.className="image";
							hotel_img.src = hotel_deals.imageUrl;
							hotel_div.appendChild(hotel_img);
							document.getElementById("displayArea").appendChild(hotel_div);
						
					}
				break;
				case 2:
				 		var count = result.deals.length;
    					for(var counter = 0;counter<count;counter++)
							{
								var cars = result.deals[counter];
								if(cars.rentalCompanyName !== "")
								{
									var cardiv = document.createElement("div");
									cardiv.id = "cdiv"+counter;
									cardiv.className="h_style";
									
									
									var cardesc = document.createElement("div");
									cardesc.className="bkg-attribute";
									cardiv.appendChild(cardesc);
									
									var cnamelabel = document.createElement("H1");
									cnamelabel.className="color_l";
									cnamelabel.innerHTML = cars.rentalCompanyName;
									cardesc.appendChild(cnamelabel);

									var cdesc = document.createTextNode(cars.description);	
									cardesc.appendChild(cdesc);

									var journey_l1 = document.createElement("H5");
									journey_l1.className="label_prop";
									journey_l1.innerHTML = cars.validityPeriod.start.date;
									cardesc.appendChild(journey_l1);

									var journey_l2 = document.createElement("H5");
									journey_l2.className="label_prop";
									journey_l2.innerHTML = cars.validityPeriod.start.time;
									cardesc.appendChild(journey_l2);

									var journey_l3 = document.createElement("H5");
									journey_l3.className="label_prop";
									journey_l3.innerHTML = cars.validityPeriod.start.systemDateTime;
									cardesc.appendChild(journey_l3);

									var car_img = document.createElement("img");
									car_img.className="image";
									car_img.src = cars.imageUrl;
									cardiv.appendChild(car_img);
									document.getElementById("displayArea").appendChild(cardiv);
								}
							}
			break;

		}
	}
}
xmlhttp.open("GET",url,true);
xmlhttp.send();
}