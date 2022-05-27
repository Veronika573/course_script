const button = document.getElementById('btn')
button.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    swal({
        title: "Send this data?",
        text: (`You entered
        Name:${name}
        Surname:${surname}
        Email:${email}`),
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your data has been sent", {
            icon: "success",
          });
        } 
      });
})

form.addEventListener('submit', function (e) {
    e.preventDefault()
  })