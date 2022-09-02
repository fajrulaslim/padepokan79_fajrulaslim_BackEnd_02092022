$('.btn-delete').on('click', function(e){
	e.preventDefault();
	const linkhref = $(this).attr('href');

	Swal.fire({
	  title: 'Are you sure?',
	  text: "Data will be delete.",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#d33',
	  cancelButtonColor: '#3085d6',
	  confirmButtonText: 'Delete!'
	}).then((result) => {
	  if (result.value) {
	    document.location.href= linkhref;
	  }
	});
});