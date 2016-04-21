var otherActivity = 0;

function changePick(pick){
	switch(pick)
	{
		case 1: document.getElementById("pick_1").style.opacity = "1";
                document.getElementById("pick_2").style.opacity = "0";
				document.getElementById("pick_3").style.opacity = "0";
				document.getElementById("top-sub-text-1").style.display = "inline-block";
                document.getElementById("top-sub-text-2").style.display = "none";
				document.getElementById("top-sub-text-3").style.display = "none";
				break;
				
		case 2: document.getElementById("pick_1").style.opacity = "0";
                document.getElementById("pick_2").style.opacity = "1";
				document.getElementById("pick_3").style.opacity = "0";
				document.getElementById("top-sub-text-1").style.display = "none";
                document.getElementById("top-sub-text-2").style.display = "inline-block";
				document.getElementById("top-sub-text-3").style.display = "none";
				break;
				
		case 3: document.getElementById("pick_1").style.opacity = "0";
                document.getElementById("pick_2").style.opacity = "0";
				document.getElementById("pick_3").style.opacity = "1";
				document.getElementById("top-sub-text-1").style.display = "none";
                document.getElementById("top-sub-text-2").style.display = "none";
				document.getElementById("top-sub-text-3").style.display = "inline-block";
				break;
    }
}

function toggleOtherActivity(){
	if(otherActivity == 0){
		document.getElementById("activity-box-3").style.display = "inline-block";
		document.getElementById("divider-activity-3").style.display = "inline-block";
		otherActivity = 1;
	}
	else if(otherActivity == 1){
		document.getElementById("activity-box-3").style.display = "none";
		document.getElementById("divider-activity-3").style.display = "none";
		otherActivity = 0;
	}
}
