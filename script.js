//your JS code here. If required.
function daysOfYear(p) {
	if(p%4==0 &&p%100!=0 || p%400==0){
		return p;
	}
	return 365;
	
}