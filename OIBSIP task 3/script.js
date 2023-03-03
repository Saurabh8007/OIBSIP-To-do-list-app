const input = document.querySelector('input');
const add = document.querySelector('.bt');
input.addEventListener("input", (e) => {
    e.preventDefault()
    localStorage.setItem("todo", JSON.stringify(input.value))
    add.addEventListener('click', addList);
    function addList(list) {
        list.preventDefault()
        const ntcomplt = document.querySelector('.uncompleted');
        const complt = document.querySelector('.completed');
        const newit = document.createElement('li');
        const ckbtn = document.createElement('button');
        ckbtn.innerHTML = '<i class="fa fa-check-square"></i>';
        const dltbtn = document.createElement('button');
        dltbtn.innerHTML = '<i class="fa fa-trash"></i>';
        if (input.value !== '') {
            newit.textContent = input.value;
            input.value = '';
            ntcomplt.appendChild(newit);
            newit.appendChild(ckbtn);
            newit.appendChild(dltbtn);
        }
        ckbtn.addEventListener('click', function () {
            const parent = this.parentNode;
            parent.remove();
            complt.appendChild(parent);
            ckbtn.style.display = 'none';
        });
        dltbtn.addEventListener('click', function () {
            const parent = this.parentNode;
            parent.remove();
            localStorage.removeItem("todo")
        });
    }
})