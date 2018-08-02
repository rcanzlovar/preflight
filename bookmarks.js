// Listen for form submit
//document.getElementById('myForm').addEventListener('submit', saveBookmark);

var stash = 'sites';
         var _things = // dont use blank, but it would be []; 
[{"id":"3162","name":"AU-Canberra-Biyaligee_Room_11.03"},{"id":"3027","name":"NZ-Wellington-Room_System"},{"id":"4590","name":"RU-Moscow-Portable-3"},{"id":"4576","name":"IT-Roma-Sala_Po"},{"id":"4187","name":"CH-Zurich-Video-Conf-RM"},{"id":"2374","name":"US-Boston-Mercury_Rm"},{"id":"578212988@okm-net.webex.com","name":"EYGSLTD - zMUST CALL BT TO BOOK - OKM Shiga, Japan"},{"id":"3222","name":"AU-Melbourne-Rm_30.057"},{"id":"3275","name":"AU-Sydney-Conference_RM_34.31"},{"id":"2291","name":"UK-Birmingham-Rm_09.01"},{"id":"3266","name":"MY-KualaLumpur-Cakrawala_Room"},{"id":"3252","name":"NZ-Auckland-7.236"},{"id":"3271","name":"AU-Sydney-Conference_RM_33.33"},{"id":"3029","name":"CN-Beijing-Portable_2"},{"id":"3163","name":"HK-CTO-22F-VC2-Portable"},{"id":"3226","name":"SG-ORQ-13F-Sentosa"},{"id":"4568","name":"UK-Glasgow-Floor8_Room2"},{"id":"4554","name":"AE-Dubai-Al-Attar-11th_Floor_Meeting_Room"},{"id":"4593","name":"UK-London-1MLP_3W_003"},{"id":"4664","name":"UK-London-25CP_17_M10"},{"id":"3217","name":"AU-Melbourne-RM_27.051"},{"id":"1382@202.160.126.45","name":"zMUST CALL BT TO BOOK - King & Wood Malleson"},{"id":"4594","name":"UK-London-1MLP_8W_007"},{"id":"4551","name":"CZ-Prague-Florentinum-Room_8.02"},{"id":"4458","name":"SK-Bratislava-Hradny_vrch_Rm"},{"id":"4091","name":"SE-Gothenburg-Liseberg"},{"id":"4163","name":"SE-Malmoe-Gustav-Adolfs-Torg"},{"id":"4481","name":"SE-Stockholm-2080_11"},{"id":"4737","name":"IN-New_Delhi-Aero_City-Portable-2"},{"id":"4711","name":"UK-London-6MLP_02_M2E"},{"id":"3198","name":"TW-Taichung-Portable-1"},{"id":"3030","name":"TW-Taipei-Meeting_Room"},{"id":"4596","name":"UK-London-1MLP_7W_003"},{"id":"4871","name":"UK-Manchester-SPS-10.M01_Rm"},{"id":"3068","name":"JP-Saitama-SNC_MtgRm"},{"id":"4663","name":"UK-London-25CP_14_M10"},{"id":"4662","name":" UK-London-1MLP_2W_005"},{"id":"4042","name":"UK-London-1MLP_Test"},{"id":"4445","name":"UK-Belfast_Rm_2"},{"id":"4426","name":"IE-Dublin-HC_B1_07_705"},{"id":"2003","name":"US-Atlanta-Portable_3"},{"id":"3233","name":"AU-Melbourne-Rm_26.055"},{"id":"3274","name":"AU-Sydney-Conference_RM_34.29"},{"id":"861058153968@216.98.190.10","name":"CN-BJ-1613-TP Room"},{"id":"85228469962@216.98.190.10","name":"CN-HK-2207-TP"},{"id":"862122288111@216.98.190.10","name":"CN-SH-TP Room"},{"id":"3002","name":"HK-OIE-62F-Conference_Room_6202"},{"id":"4498","name":"IN-Bangalore-GSS-RMZ-5F-Himalaya_Rm"},{"id":"4883","name":"UK-Edinburgh-Rm_AO.3.EV3"},{"id":"4569","name":"UK-London-25CP_13_M10"},{"id":"4078","name":"CH-Zurich-Dubai-FF-Portable_1"},{"id":"2701532@lifesizecloud.com","name":"zMUST CALL BT TO BOOK - EY Parthenon GmBH"},{"id":"4654","name":"IN-New_Delhi-Aero_City-Portable-4"},{"id":"61.12.0.26","name":"zMUST CALL BT TO BOOK - Fedders Electric - India"},{"id":"4179","name":"UK-Glasgow-Room_G1.08.M001"},{"id":"4171","name":"IN-Mumbai-Ruby-15F-Portable_1"},{"id":"195.209.143.30","name":"zMUST CALL BT TO BOOK - ROLIS - UK - PLP"},{"id":"95.161.206.198","name":"zMUST CALL BT TO BOOK - ROLIS - UK Ust-luga"},{"id":"4681","name":"IN-Gurgaon-GSS-UCP_Board_Room"},{"id":"0.0.0.0","name":"enter site name"},{"id":"4239","name":"FR-Paris-MIRO_Room"},{"id":"330517249@216.98.190.10","name":"FR-Paris-Venet-TP"},{"id":"4586","name":"UK-Bristol-MR2"},{"id":"4592","name":"UK-London-1MLP_4W_001"},{"id":"4743","name":"IN-Mumbai-Ruby-15F-Portable_1"},{"id":"2000201872@119.81.134.226","name":"zMUST CALL BT TO BOOK - azbpartners"},{"id":"14.141.243.195","name":"zMUST CALL BT TO BOOK - Tata Petrodyne - Mumbai"},{"id":"4754","name":"IN-New_Delhi-Aero_City-Portable-4"},{"id":"182.75.30.212","name":"zMUST CALL BT TO BOOK - Trimex Heavy Minerals"},{"id":"4502","name":"DE-Koeln-Boersenplatz1-Room_6.3.06"},{"id":"4154","name":"DE-Munich-K2"},{"id":"4724","name":"DE-Stuttgart-E30_C_Schipol"},{"id":"4139","name":"IN-Hyderabad-ILD-Saturn_Conf_Room"},{"id":"4736","name":"IN-New_Delhi-Aero_City-Portable-1"},{"id":"4896","name":"IN-Bangalore-UBC-13F-Boardroom"},{"id":"4375","name":"IN-Bangalore-Divyashree-Portable5"},{"id":"3152","name":"SG-ORQ-18F-Tanglin"},{"id":"3006","name":"AU-Melbourne-Portable_1"},{"id":"3011","name":"AU-Brisbane-Portable_2"},{"id":"3228","name":"AU-Melbourne-Rm_25.051"},{"id":"61282956111@216.98.190.10","name":"AU-SYD-33.55-TP"},{"id":"194.226.168.40","name":"zMUST CALL BT TO BOOK - ROLIS - PKT"},{"id":"91.228.120.42","name":"zMUST CALL BT TO BOOK - ROLIS - VSK - Room 216"},{"id":"4560","name":"IN-Gurgaon-Centre_Court_Ground_Flr"},{"id":"4563","name":"IN-Hyderabad-LCC-Portable_2"},{"id":"2321","name":"UK-Edinburgh- Rm_M13"},{"id":"4666","name":"UK-London-25CP_16_M10"},{"id":"4225","name":"FR-Paris-14AR1"},{"id":"4688","name":"BE-Diegem-San_Francisco_VC1"},{"id":"3201","name":"NL-Amsterdam-Room_21.2"},{"id":"3013","name":"AU-Canberra-Queen Caroline Lane_Room_11.01"},{"id":"3270","name":"AU-Sydney-Conference_RM_33.31"},{"id":"4878","name":"IN-Mumbai-Ruby-6F-Portable_5"},{"id":"3031","name":"CN-Shanghai-Portable_2"},{"id":"4471","name":"UK-Leeds-Meeting_Room_5"},{"id":"4723","name":"PL-Warsaw-Portable_1"},{"id":"movi","name":"Desktop Video Site"},{"id":"4084","name":"ES-Madrid-Room_17.A.02"},{"id":"62.82.98.16","name":"zMUST CALL BT TO BOOK - ICEX - Madrid"},{"id":"62.249.32.82","name":"zMUST CALL BT TO BOOK - Banca Mediolanum - Milan"},{"id":"4863","name":"ES-Madrid-Room_16.A.02"},{"id":"4831","name":"IN-Bangalore-BTP_Garnet-Portable1"},{"id":"4218","name":"IN-Bangalore-GSS-BMP-BR"},{"id":"4798","name":"IN-Bangalore-GSS-KMG-Portable_3"},{"id":"4795","name":"IN-KOC-Carnival_Ph4_5F-Recreation"},{"id":"4844","name":"IN-Gurgaon-GSS-UCP-Manhattan"},{"id":"4180","name":"IN-Bangalore-GSS-RMZ-Portable3"},{"id":"4739","name":"IN-Bangalore-RMZ-ERN-Mtg_Rm"},{"id":"914716647555@216.98.190.10","name":"IN-KL-Trivandrum-Innovation Centre -TP"},{"id":"4070","name":"UK-London-Test_1"},{"id":"6563098842@216.98.190.10","name":"SG-SG-Shenton-TP"},{"id":"4778","name":"EYGSLTD - IT-Milan-Rm_01.006"},{"id":"195.46.10.80","name":"zMUST CALL BT TO BOOK - IGI Poseidon - Athens"},{"id":"4420","name":"IN-Bangalore-GSS-RMZ-5F-Aravalli_Room"},{"id":"4895","name":"UK-Reading-Client_Suite_Rm-10"},{"id":"4584","name":"RU-Moscow-C5"},{"id":"95.161.206.205","name":"zMUST CALL BT TO BOOK - ROLIS - UK Kronshtadt"},{"id":"4514","name":"IN-Kolkatta-Block_B-Portable"},{"id":"3193","name":"AU-Brisbane-Room_51.19"},{"id":"61392888973@216.98.190.10","name":"AU-MEL-TP IX5000 - 23.04"},{"id":"61892171332@216.98.190.10","name":"AU-Perth-TP IX5000-Room 5.016"},{"id":"4770","name":"IN-KOC-Athulya_Ph1-Ruby"},{"id":"3164","name":"AU-Brisbane-Room_51.19"},{"id":"3155","name":"ID-Jakarta-Krakatau_Room"},{"id":"271003@196.15.250.110","name":"zMUST CALL BT TO BOOK - Old Mutual Life Assurance Company Ltd"},{"id":"4009","name":"IN-Pune-Ruby"},{"id":"54603918@91.240.204.151","name":"zMUST CALL BT TO BOOK - Danilei India Limited"},{"id":"217.6.54.202","name":"zMUST CALL BT TO BOOK - Toyota Kreditbank GmbH - Koln"},{"id":"3034","name":"CN-Beijing-EYU-portable_1"},{"id":"3154","name":"HK-CTO-22F-VC3-Portable_1"},{"id":"4149","name":"IN-Gurgaon-GVT-Portable_1"},{"id":"2409","name":"US-Philadelphia-Portable-3"},{"id":"2369","name":"US-Chicago-CHI22.1003"},{"id":"4530","name":"IN-Bangalore-UBC-Portable_3"},{"id":"3220","name":"CN-Guangzhou-Portable_2"},{"id":"3026","name":"CN-Shanghai-EYU_Rm"},{"id":"4629","name":"GR-Athens-3rd_Floor"},{"id":"4707","name":"UK-London-6MLP_GR_M10"},{"id":"2092","name":"US-Washington_DC-Portable_1"},{"id":"4588","name":"UK-London-1MLP_5W_FB04"},{"id":"6666","name":"this is a better 6666 value"},{"id":"12127739888@216.98.190.10","name":"US-NY-23N -TP"},{"id":"499517248@216.98.190.10","name":"DE-Frankfurt A.E00.104-TP"},{"id":"828469965@216.98.190.10","name":"KR-Seoul-Uranus-TP"},{"id":"4356","name":"UK-Bristol-MR1"},{"id":"4679","name":"UK-London-25CP_20_M04"},{"id":"4158","name":"DE-Hamburg-Conference_Room_11"},{"id":"14049642212@216.98.190.10","name":"US-ATL-Alpharetta-TP"},{"id":"2013","name":"US-Cleveland-Portable_1"},{"id":"2048","name":"US-Milwaukee-Rm_05.5040"},{"id":"16048993590@216.98.190.10","name":"CA-Vancouver-IX5000-TP"},{"id":"14032065152@216.98.190.10","name":"CA-Calgary IX5000-TP"},{"id":"442079517249@216.98.190.10","name":"UK-Telepresence-room-London-6MLP-TP"},{"id":"16175879288@216.98.190.10","name":"US-Boston-15.2151-TP"},{"id":"12027739890@216.98.190.10","name":"US-CHI-RM 24.2003-TP"},{"id":"12027739894@216.98.190.10","name":"US-WSH-3.1069F-TP"},{"id":"12017739893@216.98.190.10","name":"US-SCS-2.N2002-TP"},{"id":"12137739892@216.98.190.10","name":"US-SJE-10.169-TP"},{"id":"12147739891@216.98.190.10","name":"US-DAL 18-3077-TP"},{"id":"qazx","name":"asdfg"},{"id":"4172","name":"IN-Mumbai-Ruby-14F-Portable_1"},{"id":"4746","name":"IN-New_Delhi-Aero_City-Board_ Room"},{"id":"4850","name":"IN-Mumbai-Ruby-14F_AjantaRoom"},{"id":"4200","name":"RU-Moscow-Partners_Room"},{"id":"4669","name":"FR-Nantes-Belle_lle_Rm"},{"id":"1702@92.175.99.138","name":"zMUST CALL BT TO BOOK - Communauté d’Agglomération de la Rochelle"},{"id":"47206951@91.240.204.151","name":"zMUST CALL BT TO BOOK - Danilei India Limited"},{"id":"3028","name":"CN-Shanghai-Wuhan_Rm"},{"id":"3219","name":"CN-Shenzhen-CRB_21F_2105"},{"id":"4537","name":"IN-KOC-Carnival_Ph4_6F-Kabani"},{"id":"1029","name":"US-New_York_5_Times_SQ_Portable_4"},{"id":"3009","name":"AU-Adelaide-RM_12.06"},{"id":"3245","name":"AU-Perth-RM_4.241(For Internal Use Only)"},{"id":"4192","name":"IN-Chennai-Hexaware"},{"id":"4495","name":"UK-London-ML.9E.01"},{"id":"4800","name":"IN-Mumbai-Parthenon-Odysseus_1"},{"id":"4595","name":"UK-London-1MLP_6W_003"},{"id":"4667","name":"UK-London-25CP_18_M10"},{"id":"3239","name":"AU-Perth-RM_5.309 (For Internal Use only)"},{"id":"1101118@165.241.29.17","name":"zMUST CALL BT TO BOOK - Mitsubishi - Japan"},{"id":"4448","name":"IT-Rome-Sala-ADIGE"},{"id":"94.127.86.129","name":"zMUST CALL BT TO BOOK - Leonardo - UK"},{"id":"4807","name":"IT-Milan-Rm_09.006"},{"id":"62.74.229.250","name":"zMUST CALL BT TO BOOK - Grant Thornton - Athens"},{"id":"4876","name":"EYGSLTD - IN-Mumbai-Ruby-6F-Portable_5"},{"id":"182.73.181.70","name":"zMUST CALL BT TO BOOK - Shriram Fortune Solutions Limited"},{"id":"btconference","name":"246497963@216.98.185.12"},{"id":"246497963@216.98.185.12","name":"BT Conference"},{"id":"4410","name":"IN-Gurgaon-GVT-Portable_6"},{"id":"7635295@lifesizecloud.com","name":"zMUST CALL BT TO BOOK - DFPCL"},{"id":"4793","name":"LB-Beirut-ROOM-802"},{"id":"4701","name":"DE-Hamburg-Portable-1"},{"id":"4709","name":"UK-London-6MLP_GR_M04"},{"id":"4901","name":"UK-Reading-Meeting_Room-13"},{"id":"183.195.114.170","name":"zMUST CALL BT TO BOOK - Toray Industries"},{"id":"4430","name":"UK-Aberdeen_RM_3"},{"id":"4350","name":"UK-London-ML.GR.40"},{"id":"4665","name":"UK-London-25CP_15_M10"},{"id":"4140","name":"IN-Mumbai-Ruby-16F-Portable_1"},{"id":"3224","name":"AU-Melbourne-Rm_31.051"},{"id":"3269","name":"AU-Sydney-Conference_RM_20.105"},{"id":"3236","name":"CN-Beijing-Portable_3"},{"id":"4401","name":"CY-Limassol-VC_1"},{"id":"14047739889@216.98.190.10","name":"US-ATL-TP TX9200 - 14.2075"},{"id":"4917","name":"IN-Trivandrum-GSS-TJ-Phase2_RM01.134 _20"},{"id":"4699","name":"IN-Gurgaon-GVT-Desktop-VC-2"},{"id":"997600@iclconnect.com","name":"zMUST CALL BT TO BOOK - Idea Cellular - Mumbai"},{"id":"4202","name":"AZ-Baku-Portable_2"},{"id":"4630","name":"BY-Min-VC_Room"},{"id":"4512","name":"KZ-Almaty-Moscow_room"},{"id":"4589","name":"KZ-Astana-Huddle923"},{"id":"4413","name":"RU-Moscow-B1_London2"},{"id":"1193","name":"BR-Sao_Paulo-SPCTOffice-6th_floor-Room633"},{"id":"4702","name":"IN-Bangalore-RMZ-Tower_2C_2.036"},{"id":"3042","name":"JP-Tokyo-Hib-3F_Kenshu_1"},{"id":"4749","name":"PT-Lisbon-Room_9.26"},{"id":"195.226.155.35","name":"zMUST CALL BT TO BOOK - Raven Russia Limited - Guernsey, UK"},{"id":"918066814005@216.98.190.10","name":"IN-Bangalore-RMZ-TP-IX 5200"},{"id":"3273","name":"AU-Sydney-Conference_RM_33.11"},{"id":"4418","name":"IN-Bangalore-GSS-RMZ-8F-Ivory_Room"},{"id":"4806","name":"IN-Chennai-GDS-10F_075"},{"id":"4722","name":"IN-Gurgaon-GSS-UCP-Portable_3"},{"id":"4613","name":"TR-Istanbul-Rm_01.009"},{"id":"4523","name":"IN-KOC-Carnival_Ph4_6F-Adayar"},{"id":"4559","name":"IN-Gurgaon-UIS_Tower_5thfloor_Aquarius"},{"id":"125.99.78.2","name":"zMUST CALL BT TO BOOK - PRUTHA"},{"id":"4710","name":"UK-London-6MLP_GR_M11"},{"id":"2063","name":"US-New_York-5_Times_SQ-37026"},{"id":"3010","name":"AU-Adelaide-Portable_1"}];

//[];

// Save Bookmark
// saveThing({id:'15145',name:'main and 17th',stash:'mystops'})
function isThingSaved(e){
  let match = 0;
  if ( typeof e == 'object' && typeof e.id == 'string') { id = e.id }
  if ( typeof e == 'object' && typeof e.stash == 'string') { stash = e.stash }

  if(localStorage.getItem(stash) === null){
    return 0;
  }

  things = JSON.parse(localStorage.getItem(stash));
  // Loop through the bookmarks
  for(var i =0;i < things.length;i++){
    if(things[i].id == id){
      // Remove from array
      return 1;
    }

    // test for partial string - does the saved thing start with the given id? 
    const mything = things[i].id;
    if (mything.startsWith(id)) {
      match += 1;
//      alert ("yay yay yay");
//      return 1;
    }
  }
  
  if (match == 1) {
    return 1;
  } else {
    return 0;
  }
}

function saveThing(e){
  if ( typeof e == 'object' && typeof e.id == 'string') { id = e.id }
  if ( typeof e == 'object' && typeof e.name == 'string') { name = e.name }
  if ( typeof e == 'object' && typeof e.stash == 'string') { stash = e.stash }
  if ( typeof e == 'object' && typeof e.result == 'string') { result = e.result }

  if (id == '0.0.0.0') {return 0}

  if (id == 'audio') {return 0}
    // don't save movi - we have already saved it 
  if (id == 'movi') {return 0}
  // make init be something specia
  if (id == 'init') {
      // take it from the saved one at the top of this script
      localStorage.setItem(stash, JSON.stringify(_things));
    return 1
  }

  var thing = {
    'id': id,
    'name': name
  }

  // Test if bookmarks is null
  if(localStorage.getItem(stash) === null){
    // Init array
    var things = //[]; 
    // start with a literal of the array so that a new user isn't starting empty. Can preload things here too. 
    // Add to array
    _things.push(thing);
    // Set to localStorage
    localStorage.setItem(stash, JSON.stringify(_things));
  } else {
    // Get bookmarks from localStorage
    var things = JSON.parse(localStorage.getItem(stash));
    // Add bookmark to array
    things.push(thing);

    // Re-set back to localStorage
    localStorage.setItem(stash, JSON.stringify(things));
    document.getElementById('stringify').innerText = JSON.stringify(things);
  }

  // Clear form
//  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  getThing({'stash':stash,'result':result});
}

// Delete bookmark
function deleteThing(e){
  // you can use this from the console to manually delete something
  // deleteThing({'id':'4233','stash':'sites','result':'notes_entry'})
  if ( typeof e == 'object' && typeof e.id == 'string') { id = e.id }
  if ( typeof e == 'object' && typeof e.stash == 'string') { stash = e.stash }
  if ( typeof e == 'object' && typeof e.result == 'string') { result = e.result }
  // Get bookmarks from localStorage
  var things = JSON.parse(localStorage.getItem(stash));
  // Loop through the bookmarks
  for(var i =0;i < things.length;i++){
    if(things[i].id == id){
      // Remove from array
      things.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem(stash, JSON.stringify(things));

  // Re-fetch bookmarks
  //fetchThings({'stash':stash,'result':result});
  getThing({'stash':stash,'result':result});
}

// Fetch bookmarks
//fetchBookmarks({stash:'stops',results:'heading'})
function getThing(e){
  if ( typeof e == 'object' && typeof e.id == 'string') { id = e.id }
  if ( typeof e == 'object' && typeof e.stash == 'string') { stash = e.stash }
  if ( typeof e == 'object' && typeof e.result == 'string') { result = e.result }
  if ( typeof e == 'object' && typeof e.alias == 'string') { alias = e.alias }

//don't save these at all 
    if (id == 'audio') {return 0}
//    if (id == 'movi') {return 0}

  // init it if it isn't there 
  if(localStorage.getItem(stash) === null){
    // Init array
    var things = [];
    // Set to localStorage
    localStorage.setItem(stash, JSON.stringify(things));
  } 
  // Get bookmarks from localStorage
  var things = JSON.parse(localStorage.getItem(stash));
  // this pushes out the whole local storage but we have 
  // in the control panel now. 
//  console.log('things',things);
  // Get output id
  var thingsResult = document.getElementById(result);
  // Build output
  thingsResult.innerText = '';
  for(var i = 0; i < things.length; i++){
    let match = 0;
    var name = things[i].name;
    var lid = things[i].id;

    if (lid == id) {
      console.log('name',name);
      document.getElementById(result).value = name;
      document.getElementById(result).value = name;
      return name;
    }

    if (lid.startsWith(id)) {
      match += 1;
      // would we want to bail as soon as we hit > 1? 
    }

    if (match == 1) {
      document.getElementById(alias).value = lid;
      document.getElementById(result).value = name;
    }
  }
}

// Validate Form
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
