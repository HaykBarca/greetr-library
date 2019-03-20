var g  = G$('Hayk', 'Ghonakhchyan');
g.greet().greet('formal').setLang('am').greet().greet('formal');

$('#submit').on('click', function() {
    const msg = G$('Hayk', 'Ghonakhchyan');
    $('#selectDiv').hide();
    msg.setLang($('#selectLang').val()).log().HTMLgreet($('#logMessage'), 'formal');
});