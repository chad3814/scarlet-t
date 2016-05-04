jQuery(document).ready(function($) {
	$.each(names, function(key, value) {
		$("p").highlight(key, {caseSensitive: false, className: 'trump-highlight-3814', wordsOnly:true });
        console.log('ran highlight for', key);
	});

	$('.trump-highlight-3814').each(function() {
        var $elem =$(this);
		var name = $elem.text();
		var according_to = names[name];
        if (!according_to) return;

        var height = $elem.height();
        $elem.append('<a href="' + according_to + '" title="According to ' + according_to + '" target="_blank"><img src="chrome-extension://ikfomgbobifffcbkakeeggmilocbfhdf/scarlet-t-white.png" height=' + height + '></a>');
        console.log('appended T for', name, $elem);
    });
});
