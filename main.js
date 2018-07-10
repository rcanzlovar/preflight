//main.js for the preflight generator 
// written by Bob Anzlovar rcanzlovar@gmail.com 2018 


const note_icon = "<img src='http://ccotex.com/wp-content/uploads/2014/11/interview-lg-icon.png' alt='Note' style='width:20px;'>";
const x_icon = "<img src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/delete-icon.png' alt='Delete' style='width:20px;'>";
const plus_icon = "<img src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/plus-icon.png' alt='Add' style='width:20px;'>";
const info_icon = "<img  src='http://icons.iconarchive.com/icons/dryicons/simplistica/128/info-icon.png' alt='Info' style='width:20px;'>";
const phone_icon = "<img  src='https://www.oceanhousing.com/wp-content/uploads/2014/02/phone-icon.jpg' alt='Audio' style='width:20px;'>";
const save_icon = "<img  src='http://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-File-Save-icon.png' alt='Save' style='width:20px;'>";
const vip_icon = "<img  src='http://badgemonkey.com/images/vip.jpg' alt='VIP' style='width:20px;'>";
const hide_icon = "<img  src='https://cdn4.iconfinder.com/data/icons/adjusting-the-interface/256/Ui_glyphs_invisible-128.png' alt='Hide' style='width:20px;'>";
const rec_icon = "<img  src='http://myflare911.com/wp-content/uploads/2013/05/Record-icon-my-flare-alert.png' alt='Rec' style='width:20px;'>";
const meet_icon = "<img src='http://aaclax.com/images/icons/icon-hands.png' alt='M&G' style='width:20px;'>";
const watch_icon = "<img src='https://cdn0.iconfinder.com/data/icons/fashion-volume-2/72/28-512.png' alt='Watch' style='width:20px;'>";
const cert_icon = "<img src='https://conceptdraw.com/a155c4/p17/preview/640/pict--certificate-cloud-round-icons---vector-stencils-li0brary.png--diagram-flowchart-example.png' alt='Cert' style='width:20px;'>";
const jabber_icon1 = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/XMPP_logo.svg/1200px-XMPP_logo.svg.png' alt='Jabber' style='width:20px;'>";
const jabber_icon = "<img src='https://oit.duke.edu/sites/default/files/styles/large/public/thumbnails/image/xmpp.png' alt='Jabber' style='width:20px;'>";
const skype_icon = "<img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Skype-icon.png' alt='Jabber' style='width:20px;'>";
const denver_pgi = "<strong>91 303 318 6789</strong>";
const london_pgi = " <strong>9011 44 2077 155 260</strong>"; 


// # # # # # # # # # # # # # # # # # # # # # # # # 
// this is the function that is called when you add a completed conference to the cumulative 
// this moves  copy of the currently built preflight to the botton
// of the cumulative block 
function whosyrdada2(row)
{
  // navigate up to the top level of this div s
    var i=row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    i['id'] = document.getElementById('vc_num').value;

    var id = i['id'];// = 'confnum' + document.getElementsByTagName('')

    console.log('id=',id);
    console.log(row.parentNode.parentNode.id); // bingo
    console.log(row.parentNode.parentNode.parentNode.id);
    console.log(row.parentNode.parentNode.parentNode.parentNode.id);
    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.id);
    console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);

    row.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id = 'vcn' + document.getElementById('vc_num').value ;
    row.parentNode.parentNode.parentNode.parentNode.parentNode.id = 'xyz' + document.getElementById('vc_num').value ;
   document.getElementById('cumulative').innerHTML += i.innerHTML;
}

// # # # # # # # # # # # # # # # # # # # # # # # # 
// delete a preflight that has been saved down to cumulative. Warning: if you do this
// to the master, it goes away. Must reload. 
function killpreflight(thing) {
//  var elem = document.getElementById("myDiv");
    var elem = thing.parentNode.parentNode.parentNode.parentNode; 

//    console.log(thing.parentNode.parentNode.parentNode.parentNode.parentNode.id); // bingo
    // only let this delete the form if it's in the cumulative 
    if ( thing.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == 'cumulative') {
        elem.parentNode.removeChild(elem);
    } else { alert ("Can't delete the input form"); } 
    /* 

    var x = elem.getElementsByTagName('tr');
    console.log(x[1]);
    x[1].style.display="none";

//    console.log(elem.TableRow[1]);
    var elem = thing.parentNode.parentNode.parentNode.parentNode.parentNode; 
    var elem = thing.parentNode.parentNode.parentNode.parentNode.parentNode; 
*/ 
}

// show or hide the note entry field
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

//  these are for site alias rows
// onclick='deleteRow(this);
function xdeleteRow(row) {
//    var i=row.parentNode.rowIndex;
// this deletes a row in the alias table
    console.log(row.parentNode.parentNode.id); // the td
    console.log(row.parentNode.parentNode.parentNode.id); // the tr
    console.log(row.parentNode.parentNode.parentNode.parentNode.rows); // the tr
    row.parentNode.parentNode.parentNode.parentNode.deleteRow(3); // the tr
}
function deleteRow(row) {
//    var i=row.parentNode.rowIndex;
// this deletes a row in the alias table
    var i= row.parentNode.parentNode.parentNode.rowIndex;
    console.log('i',i);

    console.log(row.parentNode.parentNode.id); // the td
    console.log(row.parentNode.parentNode.rows); // the td
    console.log(row.parentNode.parentNode.parentNode.id); // the tr
    console.log(row.parentNode.parentNode.parentNode.rows); // the tr
    console.log(row.parentNode.parentNode.parentNode.parentNode.id); // the tr
    console.log(row.parentNode.parentNode.parentNode.parentNode); // the tr
    console.log(row.parentNode);
//    console.log(row.parentNo00ide.parentNode.parentNode.rows(i)); // the tr
    console.log(row.parentNode.parentNode.parentNode.rowIndex);
//    row.parentNode.parentNode.parentNode.parentNode.deleteRow(i); // the tr
    row.parentNode.parentNode.parentNode.parentNode.deleteRow(i); // the tr

 //   console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode.rows); // the tr
 //   console.log(row.parentNode.parentNode.parentNode.parentNode.parentNode); // the tr
//    row.parentNode.parentNode.parentNode.parentNode.parentNodex.deleteRow(i); // the tr
//    row.parentNode.parentNode.parentNode.deleteRow(i); // the tr
//    document.getElementById('confTable').deleteRow(i);
//    document.getElementById('confTable').deleteRow(i);
}
function insRow(thing) {
  console.log('thing.id',thing.id);

    var x=document.getElementById('confTable');
       // deep clone the targeted row
       // THIS IS VULNERABLE TO BREAKING IF YOU ADD A ROW AT THE TOP
    var new_row = x.rows[3].cloneNode(true);
       // get the total number of rowEYGSLTD - UK-London-25CP_18_M10n
    var len = x.rows.length;
       // set the innerHTML of the first row 
    console.log( document.getElementById('aliasinput').value);
    console.log( document.getElementById('sitenameinput').value);

    if ( isThingSaved({'id':document.getElementById('aliasinput').value}) ){
      console.log('getting saved thing...');
      getThing({
        'stash':'sites',
        'id':document.getElementById('aliasinput').value,
        'result':'sitenameinput'
      });
    } else {
      console.log('saving thing...');
      saveThing({
        'id':document.getElementById('aliasinput').value,
        'name':document.getElementById('sitenameinput').value,
        'stash':'sites',
        'result':'notes'
      });
    }

    // if it's a 4 digit numeric, add 'vc.ey.net' for a full alias in the alias column
    new_row.cells[0].innerHTML   = testAlias( document.getElementById('aliasinput').value);

    // build a spiffy audio cel with an icon and the phone number for dialing 
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

        // thi is the dial info no validation done at all 
        new_row.cells[1].innerHTML   = "<strong>" + document.getElementById('sitenameinput').value + "</strong>";
    } else {
        new_row.cells[1].innerText   = document.getElementById('sitenameinput').value;
    }
    new_row.cells[1].innerHTML     += "<span style='float: right;'><a href='#' id='delsite' onclick='deleteRow(this);'>" + x_icon + "</a></span>";

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


  if (document.getElementById('watch_check').checked == true) {
      document.getElementById('watch').innerHTML = watch_icon;
  } else {
      document.getElementById('watch').innerHTML = '';
  }


  if (document.getElementById('cert_check').checked == true) {
      document.getElementById('cert').innerHTML = cert_icon;
  } else {
      document.getElementById('cert').innerHTML = '';
  }


  if (document.getElementById('mg_check').checked == true) {
      document.getElementById('mg').innerHTML = meet_icon;
  } else {
      document.getElementById('mg').innerHTML = '';
  }





  if (document.getElementById('bridge').value != '' 
    && document.getElementById('vc_num').value != '') {
    var bridge = document.getElementById('bridge').value;
    var vcnum = document.getElementById('vc_num').value;

    if (bridge ==  'lon_acano_01' 
      || bridge ==  'lon_acano_02') {
      dialdetails = '<a href="xmpp:' + vcnum + '@216.98.185.12">' + jabber_icon + '</a>\n';
      dialdetails += vcnum + '@216.98.185.12<br />\n';
      dialdetails += '<a href="sip:' + vcnum + '@lync.emea.vbmeet.com">' +  skype_icon + '</a>\n';
      dialdetails += vcnum + '@lync.emea.vbmeet.com<br />\n';
      dialdetails += '<a href="https://emea.vbmeet.com/?id=' +  vcnum + '" target="_new">';
      dialdetails += 'https://emea.vbmeet.com/?id=' +  vcnum + '</a>\n';
    }

    if (bridge ==  'den_cms_01' 
      || bridge ==  'den_cms_02') {
      dialdetails = '<a href="xmpp:' + vcnum + '@216.98.188.98">' + jabber_icon + '</a>\n';
      dialdetails += vcnum + '@216.98.188.98\n';
      dialdetails += '<a href="sip:' + vcnum + '@lync.amer.vbmeet.com">' + skype_icon + '</a>\n';
      dialdetails += vcnum + '@lync.amer.vbmeet.com<br />\n';
      dialdetails += '<a href="https://amer.vbmeet.com/?id=' +  vcnum + '" target="_new">';
      dialdetails += 'https://amer.vbmeet.com/?id=' +  vcnum + '</a>\n';
    }

    if (bridge ==  'lon_8510' 
      || bridge ==  'lon_8710_1'
      || bridge ==  'lon_8710_2') {

      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.185.12<br />\n';

      if (bridge == 'lon_8510') {
          dialdetails += '<a href="xmpp:024' + vcnum + '@joinbyvideo.com">' + jabber_icon + '024' +  vcnum + '@joinbyvideo.com</a>\n';
      } else {
          dialdetails += 'MOVI: ';
          dialdetails += '<a href="xmpp:023' + vcnum + '@joinbyvideo.com">' + jabber_icon + '023' +  vcnum + '@joinbyvideo.com</a>\n';
      }
    }

    if (bridge ==  'den_8510' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82<br />\n';
      dialdetails += 'MOVI: 019' + vcnum + '@joinbyvideo.com\n';
      dialdetails += '<a href="xmpp:019' + vcnum + '@joinbyvideo.com">' + jabber_icon + '019' +  vcnum + '@joinbyvideo.com</a>\n';
    }
    
    if (bridge ==  'den_8710_1' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82<br />\n';
      dialdetails += 'MOVI: 014' + vcnum + '@joinbyvideo.com\n';
      dialdetails += '<a href="xmpp:014' + vcnum + '@joinbyvideo.com">' + jabber_icon + '014' +  vcnum + '@joinbyvideo.com</a>\n';
    }
    
    if (bridge ==  'den_8710_2' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82<br />\n';
      dialdetails += 'MOVI: 015' + vcnum + '@joinbyvideo.com\n';
      dialdetails += '<a href="xmpp:015' + vcnum + '@joinbyvideo.com">' + jabber_icon + '015' +  vcnum + '@joinbyvideo.com</a>\n';
    }
    
    if (bridge ==  'den_8710_3' ) {
      dialdetails = 'SIP/H323: ' + vcnum + '@216.98.188.82<br />\n';
      dialdetails += 'MOVI: 013' + vcnum + '@216.98.185.12\n';
      dialdetails += '<a href="xmpp:013' + vcnum + '@joinbyvideo.com">' + jabber_icon + '013' +  vcnum + '@joinbyvideo.com</a>\n';
    }
    

    if (bridge ==  'aus_4210' 
      || bridge ==  'ffm_8510'
      || bridge ==  'scs_8510'
      || bridge ==  'sgm_mcu'
      || bridge ==  'ind_4210') {
      dialdetails = 'MOVI: ' + vcnum + '\n';
          dialdetails += '<a href="xmpp:' + vcnum + '">' + jabber_icon +  vcnum + '</a>\n';
    }


    document.getElementById('dialdetails').innerHTML = dialdetails;


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

// check the end time , if its 9999 then format it as 99:99 in the output 
      function xtestAlias(thing) {  
        var re = /(\d{2})(\d{2})/;  

        var OK = re.exec(thing);  
        if (OK)  
        {
         // we matched!  
          //0 = whole string, 1 & 2 are the bits 
          return(OK[1]+':'+OK[2]);
        }
        else
          return(thing);
      }   
   document.getElementById('end_time').value =  document.getElementById('meeting_end').innerText  = testTime(document.getElementById('end_time').value);
    testTime(document.getElementById('end_time').value); 
  // now that we have it, share it to the original place 



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

//  alert (datetime);
  var d = new Date();
  document.write(d.toLocaleString());

//  alert(d.toLocaleString());

  time = new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});

}



function testAlias(thing) {  
  // check if this is a 4 digit numeric string, return 99:99 if it is
  var re = /(\d{4})/;  
  
  var OK = re.exec(thing);  
  if (OK)  
  {
   // we matched!  
    //0 = whole string, 1 & 2 are the bits 
    return(OK[1]+ '@vc.ey.net');
  }
  else
    return(thing);
}

function testTime(thing) {  
  // check if this is a 4 digit numeric string, return 99:99 if it is
  var re = /(\d{2})(\d{2})/;  
  
  var OK = re.exec(thing);  
  if (OK)  
  {
   // we matched!  
    //0 = whole string, 1 & 2 are the bits 
    return(OK[1]+':'+OK[2]);
  }
  else
    return(thing);
}