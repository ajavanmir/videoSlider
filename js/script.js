window.onload = function(){
    let listItem = document.querySelector(".navigation");
    [...listItem.children].forEach(function(item){
        item.addEventListener("click",function(e){
            e.preventDefault();
            let item = e.currentTarget;
            if(item.dataset.url){
                let dataUrl = `videos/${item.dataset.url}`;
                document.getElementById("slider").src = dataUrl;
            }
        })
    })
}