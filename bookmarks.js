// Listen for form submit
//document.getElementById('myForm').addEventListener('submit', saveBookmark);

var stash = 'sites';
         var _things = // dont use blank, but it would be []; 
[];

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
