function submitAnswers(){
	var total = 5; 
	var score = 0; 

	//..get the user input
	
	var q1 = document.forms["quizzForm"]["q1"].value; 
	var q2 = document.forms["quizzForm"]["q2"].value; 
	var q3 = document.forms["quizzForm"]["q3"].value; 
	var q4 = document.forms["quizzForm"]["q4"].value; 
	var q5 = document.forms["quizzForm"]["q5"].value; 

	var args = ['', q1, q2, q3, q4, q5]; 
	this.i = []; 
	// Validation
	for(i=1; i<args.length; i++){
		total = args[i]; 
		if (total == null || total == ''){
		 	alert("Opps missed question" + i);
		 	return false; 
		}

		// for(i =1; i<=total; i++){
		// 	if(eval('q'+i) == null || eval('q'+i) = ''){
		// 		alert('Opps you missed question ' + i);
		// 		return false; 
		// 	}
		// }
	}

	//Set the correct answers 
	var answers = ["b","a","d","b","d"];
	//Check the answers
	if(q1 == answers[0]){
		score++; 
	}
	if(q2 == answers[1]){
		score++; 
	} 
	if(q3 == answers[2]){
		score++; 
	} 
	if(q4 == answers[3]){
		score++; 
	} 
	if(q5 == answers[4]){
		score++; 
	}
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+ score +'</span> points</h3>';   
	alert('You got ' + score + "right"); 

	return false; 


}