$(function () {
	$('#header').load('../header.html', function () {
		$('.menuBtn').click(function () {
			$('.menuList').slideDown(500)
		})

		$('.menuList .oper img').click(function () {
			$('.menuList').slideUp(300)
		})
	})
	$('#footer').load('../footer.html')

})