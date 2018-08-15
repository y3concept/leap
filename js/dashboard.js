$("#reportResult").hide();

// update progress bar for cards upon page load
updateProgressBar('cashflowCard', 'this-week');
updateProgressBar('cashflowCard', 'this-year');
updateProgressBar('cashflowCard', 'last-year');
updateProgressBar('julianCard', 'high');
updateProgressBar('julianCard', 'low');
updateProgressBar('julianCard', 'maybe');

// update progress bar when running reports
$("#runReport").click(function(){
    $("#revenueForm").slideUp();

    updateProgressBar('revenueTab', 'industryProgress');
    updateProgressBar('revenueTab', 'areaProgress');
    updateProgressBar('revenueTab', 'modelProgress');

    updateProgressBar('profitTab', 'industryProgress');
    updateProgressBar('profitTab', 'areaProgress');
    updateProgressBar('profitTab', 'modelProgress');

    updateProgressBar('arpuTab', 'industryProgress');
    updateProgressBar('arpuTab', 'areaProgress');
    updateProgressBar('arpuTab', 'modelProgress');

    $("#reportResult").slideDown();
});

$('#editQuery').click( function(e) {
    e.preventDefault();
    $("#revenueForm").slideDown();
    return false;
});

function updateProgressBar(tabName, progressName) {
    var value = Math.floor(Math.random() * 100);
    $('#'+tabName+' .'+progressName).css('width', value+'%').attr('aria-valuenow', value);
}
