let API_KEY = "Na9aj9QqHVTfUEa2PCvTTm1ygTjeGw5m";
document.querySelector('#myform').addEventListener('submit',function(e){
    e.preventDefault();
    e.stopPropagation();
    let input = document.getElementById('input').value
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        const items = data.data;
        const listItems = items.map(items => {
            const imageUlr = items.images.original.ulr 
            return `<li><img src='${imageUlr}'></li>`
        });
        document.getElementById('ulItem').innerHTML = listItems.join('')
    })
    .catch(err => console.error(err))
})