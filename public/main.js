
var update = document.getElementById('update')

update.addEventListener('click', function () {
	fetch('newDB', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'qwerty',
    'surname': 'qwerty'
  })
})
  // Send PUT Request here
})

var del = document.getElementById('delete')

del.addEventListener('click', function () {
  fetch('newDB', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Gulnar'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})

