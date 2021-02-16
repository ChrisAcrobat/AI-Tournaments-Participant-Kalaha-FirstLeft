'use strict'
ParticipantHelper.onmessage = data => {
	let length = (data.length/2) - 1;
	for(let i = 0; 0 < length; i++){
		if(0 < data[i]){
			ParticipantHelper.respond(i);
			return;
		}
	}
}
