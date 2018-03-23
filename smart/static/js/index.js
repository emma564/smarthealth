/**
 * Created by emma on 2/24/2018.
 */
$(document).ready(function () {
    // event for time
    $('#times1').keyup(function(){
    var user_text3 =$('#u_age').val();

    $('#times2').html(user_text3);
    });


    });
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


//event for gender
$("#submit1").click(function () {
    var user_sex =$("input[name='gender']:checked").val();
     $('.gender_feedback').html(user_sex)

    if (user_sex ===undefined){
        alert('please select your gender')
    }

})
//event for age
$('#u_age').keyup(function(){
    var user_text =$('#u_age').val();
        $('.age_feedback').html(user_text)
});
// events for buttons
//event for fat1
$('#fat1').click(function() {
    var symptoms= $(this).val();
    $('.fat2').html(symptoms)
    $('#fat3').val(symptoms)
});
//event for head1
$('#head1').click(function() {
    var symptoms= $(this).val();
    $('.head2').html(symptoms)
    $('#head3').val(symptoms)
});
//event for fever
$('#fever1').click(function() {
    var symptoms= $(this).val();
    $('.fever2').html(symptoms)
    $('#fever3').val(symptoms)
});

//event for fat1
$('#nau1').click(function() {
    var symptoms= $(this).val();
    $('.nau2').html(symptoms)
    $('#nau3').val(symptoms)
}  );
// event for add
$('#add').click(function () {
     var add_symptom=$('#sys_list').val();
    $('.symptoms').append(add_symptom + " ,");
    $('#symptom22').val(add_symptom)


});
//event for times

$('#times1').keyup(function () {
     var duaration_check= $('#dration').find(":selected").text();
    $('.duration1').html(duration_check + ":");
    var times=$('#times1').val();
    $('.times2').html(times);
})
