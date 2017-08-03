$(".pick_left_primer_check").click(pick_toggle);
$(".pick_internal_oligo_check").click(pick_toggle);
$(".pick_right_primer_check").click(pick_toggle);

function pick_toggle() {
    if($(this).is(":checked")) {
        $(".answer_" + this.className).hide("slow");
    } else {
        $(".answer_" + this.className).show("slow");
    }
}