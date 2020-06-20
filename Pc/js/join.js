$(function () {
    $('.hexagon_child_child').on('mouseenter', function () {
        $(this).css({ 'backgroundColor': '#C82D21' })
        $(this).find('.origin').hide()
        $(this).find('.change').show().css({"display":'flex'})

    })
    $('.hexagon_child_child').on('mouseleave', function () {
        $(this).css({ 'backgroundColor': '#F7B6B2' })
        $(this).find('.origin').show()
        $(this).find('.change').hide()
    })
});