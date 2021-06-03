function addBlock(){
    let name = prompt('Enter name', 'No name');
    let phone = prompt('Enter phone', 'No phone');

    let parent = document.querySelector('#parent');
    let div = document.createElement('div');
    div.className = 'card w-75';

    let container = document.createElement('div');
    container.className = 'card-body';
    div.append(container);

    let nameText = document.createElement('h5');
    nameText.className = 'card-title';
    nameText.innerHTML = name;
    container.append(nameText);

    let phoneText = document.createElement('p');
    phoneText.className = 'card-text';
    phoneText.innerHTML = phone;
    container.append(phoneText);

    let buttonGroup = document.querySelector('#button-group');
    container.append(buttonGroup);

    parent.append(div);
};

let parent = document.querySelector('#parent');

parent.onclick = function(event) {
    let target = event.target;
    let buttonGroup = target.parentElement;
    let container = buttonGroup.parentElement;
    let card = container.parentElement;

    if(target.id === 'delete-btn'){
        card.remove();
    }
    if(target.id === 'edit-btn'){
        let newName = prompt('Enter new name', 'No name');
        let newPhone = prompt('Enter new phone', 'No phone');

        let name = container.firstElementChild;
        name.innerHTML = newName;

        let phone = name.nextElementSibling;
        phone.innerHTML = newPhone;
    }
};  
  