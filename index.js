let id = 0;


document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('Favorite-Planet').value;
    row.insertCell(1).innerHTML = document.getElementById('Distance-From-Earth').value;
    row.insertCell(2).innerHTML = document.getElementById('Size-of-Planet').value;
    
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('Favorite-Planet').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
}

