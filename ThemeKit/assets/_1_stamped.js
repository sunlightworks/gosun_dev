// ============================================================================
// Third Party / Stamped.io
// ============================================================================





 
 
function buttonStyle() {
    $(".stamped-summary-actions-newquestion, .stamped-pagination a").addClass("btn btn--subtle flex");
    $(".stamped-summary-actions-newreview").addClass("btn btn--primary");
    console.log('Button style finished');
};

function readMore() {
    $('.stamped-review-content-body').addClass('read-more js-read-more');
    $('.stamped-review-content-body').attr({
        'data-characters': 220,
        'data-btn-class':'read-more__btn js-tab-focus'
    });
    console.log('Read more finished');
};


    
function officialReply() {
    $('[data-author="GoSun"]').closest('.stamped-review-reply').addClass('reply--official');
    console.log('Official reply finished');
};



$(window).bind("load", function() {
    buttonStyle();
    readMore();
    $('.stamped-tabs li', '.next a', '.page a').click(officialReply, buttonStyle, readMore);
});