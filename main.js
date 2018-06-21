//main.js for the preflight generator 
// written by Bob Anzlovar rcanzlovar@gmail.com 2018 

var note_icon = "<img src='http://ccotex.com/wp-content/uploads/2014/11/interview-lg-icon.png' style='width:20px;'>";
var x_icon = "<img src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/delete-icon.png' alt='Delete' style='width:20px;'>";
var plus_icon = "<img src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/plus-icon.png' alt='Add' style='width:20px;'>";
var info_icon = "<img  src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/info-icon.png' alt='Info' style='width:20px;'>";
var phone_icon = "<img  src='https://www.oceanhousing.com/wp-content/uploads/2014/02/phone-icon.jpg' alt='Audio' style='width:20px;'>";
var save_icon = "<img  src='http://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-File-Save-icon.png' alt='Save' style='width:20px;'>";
var vip_icon = "<img  src='http://badgemonkey.com/images/vip.jpg' alt='Save' style='width:20px;'>";
var hide_icon = "<img  src='https://cdn4.iconfinder.com/data/icons/adjusting-the-interface/256/Ui_glyphs_invisible-128.png' alt='Save' style='width:20px;'>";
var rec_icon = "<img  src='http://myflare911.com/wp-content/uploads/2013/05/Record-icon-my-flare-alert.png' alt='Record' style='width:20px;'>";
var meet_icon = "<img  src='' alt='M&G' style='width:20px;'>";
var denver_pgi = "<strong> 91 303 318 6789</strong>";
var london_pgi = " <strong>9011 44 207 715 5260</strong>"; 

function whosyrdada1(row)
// this is the function called when you add a note
// onclick='deleteRow(this);
// this moves  copy of the currently built preflight to the botton
// of the cumulative block 
{
  // navigage up to the top level of this div s
    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode;
    i['id'] = document.getElementById('vc_num').value;

    var id = i['id'];// = 'confnum' + document.getElementsByTagName('')

    console.log('id=',id);
//    var j=row.parentNode.parentNode.parentNode.parentNode.parentNode;
    row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id = 'vcn' + document.getElementById('vc_num').value ;
//    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id) ;
    console.log('table name0?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    console.log('table name?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id = id;
    console.log('table name2?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    console.log('table name3?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);


    console.log('row.parentNode.parentNode.parentNode.parentNode:') ;
    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.rows[2].cells[0].children[0].innerText   ) ;
    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.rows[2].cells[0].children[0].innerHTML   ) ;

console.log('note to self',i)
//console.log('note to self',i.innerHTML)
 ///   row.parentNode.parentNode.parentNode.parentNode.parentNode.rows[2].cells[0].children[0].innerText  += 
 ///   i.innerText;
//    document.getElementById('cumulative').innerHTML += document.getElementById(id).innerHTML;
//    window.cumulative.innerHTML += i.innerHTML;
 //   document.getElementById('cumulative').innerHTML += i.innerHTML;
    document.getElementById('aliasinput').value = '';
    this.value = '';
//    document.getElementById('notes').value = '';
//    document.getElementById('POITable').deleteRow(i);
}
function whosyrdada2(row)
// this is the function that is called when you add a completed conference to the cumulative 
// onclick='deleteRow(this);
// this moves  copy of the currently built preflight to the botton
// of the cumulative block 
{
  // navigage up to the top level of this div s
    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode;
    i['id'] = document.getElementById('vc_num').value;

    var id = i['id'];// = 'confnum' + document.getElementsByTagName('')

    console.log('id=',id);
//    var j=row.parentNode.parentNode.parentNode.parentNode.parentNode;
    row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id = 'vcn' + document.getElementById('vc_num').value ;
//    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id) ;
    console.log('table name0?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    console.log('table name?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id = id;
    console.log('table name2?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    console.log('table name3?',row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);


    console.log('row.parentNode.parentNode.parentNode.parentNode:') ;
//    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.rows[2].cells[0].children[0].innerText   ) ;

console.log('i',i);
//    row.parentNode.parentNode.parentNode.parentNode.parentNode.rows[2].cells[0].children[0].innerText  += 
//    i.innerText;
//    document.getElementById('cumulative').innerHTML += document.getElementById(id).innerHTML;
//    window.cumulative.innerHTML += i.innerHTML;
   document.getElementById('cumulative').innerHTML += i.innerHTML;
//    document.getElementById('aliasinput').value = '';
//    document.getElementById('notes').value = '';
//    document.getElementById('POITable').deleteRow(i);
}

function killpreflight(thing) {
//  var elem = document.getElementById("myDiv");
    console.log('elem');
    console.log(elem);
    var elem = thing.parentNode; 
    console.log('elem.p');
    console.log(elem);
    var elem = thing.parentNode.parentNode; 
    console.log('td .p.p');
    console.log(elem);
    var elem = thing.parentNode.parentNode.parentNode; 
    console.log('tr.p.p.p');
    console.log(elem);
    var elem = thing.parentNode.parentNode.parentNode.parentNode; 
    console.log('elem.p.p.p.p');
    var x = elem.getElementsByTagName('tr');
    console.log(x[1]);
    x[1].style.display="none";

//    console.log(elem.TableRow[1]);
    var elem = thing.parentNode.parentNode.parentNode.parentNode.parentNode; 
    console.log('table');
    console.log(elem);
    var elem = thing.parentNode.parentNode.parentNode.parentNode.parentNode; 
    console.log('div');
    console.log(elem);

    elem.parentNode.removeChild(elem);
}

function noteshower(thing) {
    var elem = thing.parentNode.parentNode.parentNode.parentNode; 
    var x = elem.getElementsByTagName('tr');
    x[1].style.display="inline";
}
function notehider(thing) {
    var elem = thing.parentNode.parentNode.parentNode.parentNode; 
    var x = elem.getElementsByTagName('tr');
    x[1].style.display="none";
}
function deleteRow(row)
// onclick='deleteRow(this);
{
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('POITable').deleteRow(i);
}
function insRow(thing)
{
  console.log('thing.id',thing.id);

    var x=document.getElementById('POITable');
       // deep clone the targeted row
       // THIS IS VULNERABLE TO BREAKING IF YOU ADD A ROW AT THE TOP
    var new_row = x.rows[3].cloneNode(true);
       // get the total number of rowEYGSLTD - UK-London-25CP_18_M10n
    var len = x.rows.length;
       // set the innerHTML of the first row 
    console.log( document.getElementById('aliasinput').value);
    console.log( document.getElementById('sitenameinput').value);

    console.log('alias saved?',
      isThingSaved({'id':document.getElementById('aliasinput').value})
    );
    if ( isThingSaved({'id':document.getElementById('aliasinput').value}) ){
      console.log('getting saved thing...');
      getThing({
        'stash':'sites',
        'id':document.getElementById('aliasinput').value,
        'result':'sitenameinput'
      });
    } else {
      console.log('saving saved thing...');
      saveThing({
        'id':document.getElementById('aliasinput').value,
        'name':document.getElementById('sitenameinput').value,
        'stash':'sites',
        'result':'notes'
      });
    }
    console.log('alias saved?',
      isThingSaved({'id':document.getElementById('aliasinput').value})
    );

    new_row.cells[0].innerHTML   = document.getElementById('aliasinput').value;
    if (document.getElementById('aliasinput').value == 'audio') {
        new_row.cells[0].innerHTML   = phone_icon;
        console.log('bridge',document.getElementById('bridge').value);
        if (document.getElementById('bridge').value == "den_cms_01"
          || document.getElementById('bridge').value == "den_cms_02" ) {
          new_row.cells[0].innerHTML   += denver_pgi;
        }
        if (document.getElementById('bridge').value == "lon_acano_01"
          || document.getElementById('bridge').value == "lon_acano_02" ) {
          new_row.cells[0].innerHTML   += london_pgi;
        }

        new_row.cells[1].innerHTML   = "<strong>" + document.getElementById('sitenameinput').value + "</strong>";
//    	document.getElementById('audioline').innerHTML = phone_icon;
    } else {
        new_row.cells[1].innerText   = document.getElementById('sitenameinput').value;
    }
    new_row.cells[2].innerHTML     = "<a href='#' onclick='deleteRow(this);'>" + x_icon + "</a>";

//    console.log(getElementsByTagName('input')[0]);
       // grab the input from the first cell and update its ID and value
/*
    var inp1 = new_row.cells[1].getElementsByTagName('input')[4];
    inp1.id += len;
    inp1.value = '';

       // grab the input from the first cell and update its ID and value
    var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    inp2.id += len;
    inp2.value = '';
*/
       // append the new row to the table
    x.appendChild( new_row );
    document.getElementById('aliasinput').value = '';
    document.getElementById('sitenameinput').value = '';
}
// For todays date;
function dog_notes  (thing) {
  //sweep the note entry into the notes compilaiton field 
    time = new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});
    // make the notes visible... 
    var elem = thing.parentNode.parentNode.parentNode.parentNode.parentNode; 
    var x = elem.getElementsByTagName('tr');
    console.log(x);
//    x[2].cells[0].children[0].innerText = "lkjlkjlj";
    console.log(x[2].cells[0].children[0].innerText);
    console.log(x[1].cells[0].childNodes[1].childNodes[6].value);

    x[2].cells[0].children[0].innerText += 
      time  + ' ' 
      + x[1].cells[0].childNodes[1].childNodes[8].value + "\n";
   document.getElementById("note_entry").value = '';
}

// For todays date;
function cat_notes  () {
	//sweep the note entry into the notes compilaiton field 
    time = new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});
    // make the notes visible... 
  document.getElementById("notesrow").style.display =  '';
  document.getElementById("notes").innerHTML += 
  time  + ' ' 
   + document.getElementById("note_entry").value + "<br />";
   document.getElementById("note_entry").value = '';
}
//whenever you feel like it, copy the bits from the input fields to the display parts. Handy for "onchange" or "onexit" handlers
var copyfields = function () {
  var dialdetails = '';
  document.getElementById('conferencenumber_display').innerText  = document.getElementById('vc_num').value;
  document.getElementById('bridge_display').innerText  = document.getElementById('bridge').value;

  if (document.getElementById('vip_check').checked == true) {
      document.getElementById('vip').innerHTML = vip_icon;
  } else {
      document.getElementById('vip').innerHTML = '';
  }


  if (document.getElementById('rec_check').checked == true) {
      document.getElementById('rec').innerHTML = rec_icon;
  } else {
      document.getElementById('rec').innerHTML = '';
  }





  if (document.getElementById('bridge').value != '' 
    && document.getElementById('vc_num').value != '') {
    var bridge = document.getElementById('bridge').value;
    var vcnum = document.getElementById('vc_num').value;

    if (bridge ==  'lon_acano_01' 
      || bridge ==  'lon_acano_02') {
      dialdetails = 'SIP/H.323: ' + vcnum + '@216.98.185.12\n';
      dialdetails += 'Skype: ' + vcnum + '@lync.emea.vbmeet.com\n';
      dialdetails += 'Web: https://emea.vbmeet.com/?id=' +  vcnum + '\n';
    }

    if (bridge ==  'den_cms_01' 
      || bridge ==  'den_cms_02') {
      dialdetails = 'SIP/H.323: ' + vcnum + '@216.98.188.98\n';
      dialdetails += 'Skype: ' + vcnum + '@lync.amer.vbmeet.com\n';
      dialdetails += 'Web: https://amer.vbmeet.com/?id=' +  vcnum + '\n';
      dialdetails += 'Web: https://amer.vbmeet.com/?id=' +  vcnum + '\n';
    }

    if (bridge ==  'lon_8510' 
      || bridge ==  'lon_8710_1'
      || bridge ==  'lon_8710_2') {

      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.185.12\n';

      if (bridge == 'lon_8510') {
          dialdetails += 'MOVI: 024' + vcnum + '@joinbyvideo.com\n';
      } else {
          dialdetails += 'MOVI: 023' + vcnum + '@joinbyvideo.com\n';
      }
    }

    if (bridge ==  'den_8510' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82\n';
      dialdetails += 'MOVI: 019' + vcnum + '@joinbyvideo.com\n';
    }
    
    if (bridge ==  'den_8710_1' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82\n';
      dialdetails += 'MOVI: 014' + vcnum + '@joinbyvideo.com\n';
    }
    
    if (bridge ==  'den_8710_2' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82\n';
      dialdetails += 'MOVI: 015' + vcnum + '@joinbyvideo.com\n';
    }
    
    if (bridge ==  'den_8710_3' ) {
          dialdetails += 'MOVI: 013' + vcnum + '@216.98.185.12\n';
    }
    

    if (bridge ==  'aus_4210' 
      || bridge ==  'ffm_8510'
      || bridge ==  'scs_8510'
      || bridge ==  'sgm_mcu'
      || bridge ==  'ind_4210') {
      dialdetails = 'MOVI: ' + vcnum + '\n';
    }


    document.getElementById('dialdetails').innerText = dialdetails;


/*
London ACANO
MOVI : confnum@216.98.185.12
https://emea.joinbyvideo.com/index.html?id=confnum
confnum@lync.emea.joinbyvideo.com

Denver Acano
MOVI : confnum@216.98.188.98
https://amer.joinbyvideo.com/index.html?id=confnum
confnum@lync.amer.joinbyvideo.com
*/

  }
  // really need to do the math to subtract the setup time so we display two real times. 
//  document.getElementById('meeting_setup').innerText  = document.getElementById('setup_time').value;
  document.getElementById('meeting_start').innerText  = document.getElementById('start_time').value;
  document.getElementById('meeting_end').innerText  = document.getElementById('end_time').value;


  var endDate = document.getElementById('start_time').value;

  var startdate = new Date(endDate);

  document.getElementById('meeting_start').innerHTML = 
  startdate.toLocaleTimeString('en-US', { hour12: false ,hour: "numeric", 
                                             minute: "numeric"});

  var durationInMinutes = document.getElementById('setup_time').value 
  	? document.getElementById('setup_time').value 
  	: 15;

// wind the clock back setup time
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);


// get the date after winding the clock so it works right around midnight

  document.getElementById('meeting_date').innerText  =  
    startdate.toDateString('en-US', { hour12: false ,hour: "numeric", 
                                             minute: "numeric"});


  document.getElementById('meeting_setup').innerHTML = startdate.toLocaleString('en-US', { hour12: false,hour: "numeric", 
                                             minute: "numeric"} );
}

// is this even used?
var filldate = function () {
  Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
  }



  var legs = [];

  var list = [
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }
  ];


  // For the time now
  Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  }
  // You can then simply retrieve the date and time by doing the following:

  var newDate = new Date();

  var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
  var date = " " + new Date().today() + " @ " + new Date().timeNow();

  alert (datetime);
  var d = new Date();
  document.write(d.toLocaleString());

  alert(d.toLocaleString());

  time = new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});

}

