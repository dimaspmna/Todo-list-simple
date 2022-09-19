let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');


// Add btn mati



input.addEventListener('keyup', ()=> {
  if(input.value.trim() !== 0) {
    addBtn.classList.add('active')
  }else{
    addBtn.classList.remove('active')
  }
})

// menambahkan item ke list

addBtn.addEventListener('click',() => {
  if (input.value.trim() != 0){
  let newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.innerHTML = `
  <p> ${input.value} </p>
  <div class="item-btn">
  <i class="fa-regular fa-circle-check"></i>
  <i class="fa-regular fa-circle-xmark"></i>
  </div>
  `
  tasks.appendChild(newItem);
  input.value = '';
  

  }else{
    alert('Please enter a task')
  }
})


// menghapus list
tasks.addEventListener('click', (e) =>{
  if (e.target.classList.contains('fa-circle-xmark')) {
    e.target.parentElement.parentElement.remove();
  }
})

// menandai tasks selesa
tasks.addEventListener('click', (e) =>{
  if(e.target.classList.contains('fa-circle-check')){
    e.target.parentElement.parentElement.classList.
    toggle('completed');
  }
})