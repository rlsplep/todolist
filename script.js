const AddBtn = document.getElementById('add-btn');

const Input = document.getElementById('task-input');
const TaskList = document.getElementById('task-list');
const EmptyMsg = document.getElementById('empty-msg');


AddBtn.addEventListener('click', () => {
    const addbut = Input.value;
    if (addbut !== '') {
        EmptyMsg.style.display = 'none';
    }

    const li = document.createElement('li');
    li.className = "task-item";
    li.innerHTML = `          <label class="checkbox-container">
            <input type="checkbox" class="task-checkbox" />
            <span class="custom-checkbox"></span>
          </label>

          <div class="task-plate">
            <span class="task-text">${addbut}</span>

            <div class="task-actions">
              <button class="edit-btn">EDIT</button>
              <button class="dlt-btn">DELETE</button>
            </div>
          </div>`;
    TaskList.appendChild(li);
    const dltBtn = li.querySelector('.dlt-btn');
    dltBtn.addEventListener('click', () => {
        li.remove();
    })
    Input.value = '';
})