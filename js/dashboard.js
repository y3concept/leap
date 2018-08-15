const dashboard = {};

dashboard.init = () => {
	$("#reportResult").hide();

	// update progress bar for cards upon page load
	dashboard.updateProgressBar('cashflowCard', 'this-week');
	dashboard.updateProgressBar('cashflowCard', 'this-year');
	dashboard.updateProgressBar('cashflowCard', 'last-year');
	dashboard.updateProgressBar('julianCard', 'high');
	dashboard.updateProgressBar('julianCard', 'low');
	dashboard.updateProgressBar('julianCard', 'maybe');

	// update progress bar when running reports
	$("#runReport").click(function(){
		$("#revenueForm").slideUp();

		dashboard.updateProgressBar('revenueTab', 'industryProgress');
		dashboard.updateProgressBar('revenueTab', 'areaProgress');
		dashboard.updateProgressBar('revenueTab', 'modelProgress');

		dashboard.updateProgressBar('profitTab', 'industryProgress');
		dashboard.updateProgressBar('profitTab', 'areaProgress');
		dashboard.updateProgressBar('profitTab', 'modelProgress');

		dashboard.updateProgressBar('arpuTab', 'industryProgress');
		dashboard.updateProgressBar('arpuTab', 'areaProgress');
		dashboard.updateProgressBar('arpuTab', 'modelProgress');

		$("#reportResult").slideDown();
	});

	$('#editQuery').click( function(e) {
		e.preventDefault();
		$("#revenueForm").slideDown();
		return false;
	});
}

dashboard.updateProgressBar = (tabName, progressName) => {
    var value = Math.floor(Math.random() * 100);
    $('#'+tabName+' .'+progressName).css('width', value+'%').attr('aria-valuenow', value);

    if (value > 80) {
        $('#' + tabName + ' .progress-bar.' + progressName).removeClass().addClass('progress-bar ' + progressName + ' bg-success');
    } else if (value > 15 && value < 40) {
        $('#'+tabName+' .progress-bar.'+progressName).removeClass().addClass('progress-bar ' + progressName + ' bg-warning');
    } else if ( value < 15) {
        $('#'+tabName+' .progress-bar.'+progressName).removeClass().addClass('progress-bar ' + progressName + ' bg-danger');
    } else {
        $('#'+tabName+' .progress-bar.'+progressName).removeClass().addClass('progress-bar ' + progressName);
    }
}
