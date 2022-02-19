document.getElementById('add-border').addEventListener('click',function(){
    document.getElementById('friends').style.border = "5px solid red";
});

function changeBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = "lightblue";
    }
};

document.getElementById('add-friend').addEventListener('click',function(){
    const getSection = document.getElementById('friends');
    const addDiv = document.createElement('div');
    addDiv.classList.add('friend');
    addDiv.innerHTML = `
            <h3 class="friends-name">New Friend</h3>
            <p>Reprehenderit, repellendus.</p>
    `
    getSection.appendChild(addDiv);
});

function addPadding(){
    document.getElementById('friends').style.padding ="10px"
};

/* document.getElementById('color-name').addEventListener('click',event =>{
    console.log(event.target.style.color = "red");
}) */