const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `<span>
  <table>
  <tr>
    <th>Key</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key == ' ' ? 'Space' : event.key}</td>
    <td>${event.code}</td>
  </tr>
</table>
  </span>`;
});
