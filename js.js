
$('.stretched-link').hover( function() {
    $(this).parents('.card').find('.collapse').collapse('show');
}, function() {
    $(this).parents('.card').find('.collapse').collapse('hide');
});