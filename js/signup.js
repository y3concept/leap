const signup = {};

signup.init = () => {
    $('#otherIndustry').hide();
}

signup.selectIndustry = () => {
    if ($('#industry').val() == 'others') {
        $('#otherIndustry').show();
    } else {
        $('#otherIndustry').hide();
    }
}