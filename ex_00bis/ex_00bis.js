async function check_route(url) {;
    try {
    let response = await fetch(url);
   if (response.ok) {
    let all = await response.json();
console.log ("all is good");
    console.log(all);
    
} else {

    console.log("shit appens");
}
} catch(error) {

    console.log("shit appens");
}
}

check_route("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528");