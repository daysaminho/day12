async function my_fetch(url) {;
    let response = await fetch(url);
    let all = await response.json();

    console.log(all);
    
}

my_fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528");