async function fetchUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();

  const list = document.getElementById('user-list');
  list.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email}) `;
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = () => deleteUser(user.id);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

async function addUser(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });

  fetchUsers();
  event.target.reset();
}

async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  fetchUsers();
}

document.getElementById('user-form').addEventListener('submit', addUser);
fetchUsers();
