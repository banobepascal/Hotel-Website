var clickEvent = document.getElementById('menw');
clickEvent.addEventListener('click', runEvent);

function runEvent() {
	$(function() {
	$('#menw').hide();
	$('#how').show();
	// $('#how').style.fill
	});

}

var clickEvent1 = document.getElementById('how');
clickEvent1.addEventListener('click', runEvent1);

function runEvent1() {
	$(function() {
	$('#menw').show();
	$('#how').hide();
	});

}

var clickEvent3 = document.getElementById('haw');
clickEvent3.addEventListener('click', runEvent3);

function runEvent3() {
	$(function() {
	$('#book').show();
	$('#haw').hide();
	$('.wrapper').fadeOut(100);
	});

}

var clickEvent2 = document.getElementById('book');
clickEvent2.addEventListener('click', runEvent2);

function runEvent2() {
	$(function() {
	$('#book').hide();
	$('#haw').show();
	$('.wrapper').fadeIn(3000);
	});

}

var brum = document.querySelector('.grids');
brum.addEventListener('mouseover', rome);

function rome() {
	$(function() {
		$('#come').show();
	});
}

var brum1 = document.getElementById('bric');
brum1.addEventListener('mouseleave', rome1);

function rome1() {
	$(function() {
		$('#come').hide();
	});
}

var brum2 = document.querySelector('#brik');
brum2.addEventListener('mouseover', rome2);

function rome2() {
	$(function() {
		$('#com').show();
	});
}

var brum3 = document.getElementById('brik');
brum3.addEventListener('mouseleave', rome3);

function rome3() {
	$(function() {
		$('#com').hide();
	});
}


var brum4 = document.querySelector('#brk');
brum4.addEventListener('mouseover', rome4);

function rome4() {
	$(function() {
		$('#weq').show();
	});
}

var brum5 = document.getElementById('brk');
brum5.addEventListener('mouseleave', rome5);

function rome5() {
	$(function() {
		$('#weq').hide();
	});
}


var brum6 = document.querySelector('#brck');
brum6.addEventListener('mouseover', rome6);

function rome6() {
	$(function() {
		$('#rck').show();
	});
}

var brum7 = document.getElementById('brck');
brum7.addEventListener('mouseleave', rome7);

function rome7() {
	$(function() {
		$('#rck').hide();
	});
}


var brum8 = document.querySelector('#bick');
brum8.addEventListener('mouseover', rome8);

function rome8() {
	$(function() {
		$('#ick').show();
	});
}

var brum9 = document.getElementById('bick');
brum9.addEventListener('mouseleave', rome9);

function rome9() {
	$(function() {
		$('#ick').hide();
	});
}


var brum10 = document.querySelector('#bik');
brum10.addEventListener('mouseover', rome10);

function rome10() {
	$(function() {
		$('#ik').show();
	});
}

var brum11 = document.getElementById('bik');
brum11.addEventListener('mouseleave', rome11);

function rome11() {
	$(function() {
		$('#ik').hide();
	});
}

var brum12 = document.querySelector('#bic');
brum12.addEventListener('mouseover', rome12);

function rome12() {
	$(function() {
		$('#ic').show();
	});
}

var brum13 = document.getElementById('bic');
brum13.addEventListener('mouseleave', rome13);

function rome13() {
	$(function() {
		$('#ic').hide();
	});
}

var brum14 = document.querySelector('#ric');
brum14.addEventListener('mouseover', rome14);

function rome14() {
	$(function() {
		$('#ri').show();
	});
}

var brum15 = document.getElementById('ric');
brum15.addEventListener('mouseleave', rome15);

function rome15() {
	$(function() {
		$('#ri').hide();
	});
}


/* Views */

$(function() {
	$('#Penthouse').hide();
	$('#spas').hide();
});

var Pres = document.getElementById('bric');
Pres.addEventListener('click', dumb);

function dumb() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Penthouse').hide();
	$('#section-v').fadeIn(2000);
 });
}

var Pres1 = document.getElementById('back');
Pres1.addEventListener('click', dumb1);

function dumb1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#section-v').hide();
 });
}


var Pent = document.getElementById('brik');
Pent.addEventListener('click', real);

function real() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Penthouse').fadeIn(2000);
 });
}

var Pent1 = document.getElementById('bac');
Pent1.addEventListener('click', real1);

function real1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#Penthouse').hide();
 });
}

var grand = document.getElementById('brk');
grand.addEventListener('click', wow);

function wow() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Penthouse').hide();
	$('#Grandf').fadeIn(2000);
 });
}

var grand1 = document.getElementById('bak');
grand1.addEventListener('click', wow1);

function wow1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#Grandf').hide();
 });
}

var Fami = document.getElementById('brck');
Fami.addEventListener('click', tru);

function tru() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Grandf').hide();
	$('#Penthouse').hide();
	$('#Family').fadeIn(2000);
 });
}

var Fami1 = document.getElementById('bk');
Fami1.addEventListener('click', tru1);

function tru1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#Family').hide();
 });
}

var Spas = document.getElementById('bick');
Spas.addEventListener('click', trup);

function trup() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Grandf').hide();
	$('#Penthouse').hide();
	$('#Spas').fadeIn(2000);
 });
}

var Spas1 = document.getElementById('bck');
Spas1.addEventListener('click', trup1);

function trup1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#Spas').hide();
 });
}

var delu = document.getElementById('bik');
delu.addEventListener('click', trump);

function trump() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Grandf').hide();
	$('#Penthouse').hide();
	$('#Deluxe').fadeIn(2000);
 });
}

var delu1 = document.getElementById('bc');
delu1.addEventListener('click', trump1);

function trump1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#Deluxe').hide();
 });
}

var dou = document.getElementById('bic');
dou.addEventListener('click', trum);

function trum() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Grandf').hide();
	$('#Penthouse').hide();
	$('#double').fadeIn(2000);
 });
}

var dou1 = document.getElementById('ba');
dou1.addEventListener('click', trum1);

function trum1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#double').hide();
 });
}

var sig = document.getElementById('ric');
sig.addEventListener('click', tum);

function tum() {
	$(function() {
	$('#sec-s').hide();
	$('#hipe').hide();
	$('#Grandf').hide();
	$('#Penthouse').hide();
	$('#single').fadeIn(2000);
 });
}

var sig1 = document.getElementById('ack');
sig1.addEventListener('click', tum1);

function tum1() {
	$(function() {
	$('#sec-s').show();
	$('#hipe').show();
	$('#single').hide();
 });
}
