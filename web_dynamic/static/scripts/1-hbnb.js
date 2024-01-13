$(document).ready(function() {
        $('input[type=checkbox]').on('click', function () {
                const myList = [];
                const myId = [];
                $('input[type=checkbox]:checked').each(function () {
                        mylist.push($(this).attr('data-name'));
                        myId.push($(this).attr('data-id'));
                });     
                if (myList.length === 0) {
                        $('.amenities h4').html('&nbsp;');
                } else {
                        $('.amenities h4').text(myList.join(', '));
                }       
        });     
});
