$(document).ready(()=> {
	$("#task").keypress((key) => {
		if(key.which == 13) { //13 is the enter key.
			let task = $("#task").val();
			// alert(task);
			// add inputted item to the lst
			// Other solution
			// $('ul').append('<li>'+task+'</li>')
			$("#tasklist").append("<li>" + task + "</li>");
		}
	})
			//on () looks for severtal things. 
			//1st is the parent where the create 
			//elements would belong to.

			//function to run when the child element has 
			//been born and event done to it
			//Solution
		$("#tasklist").on("click", "li", function(){
			// $(this).wrap("<strike>");
			//1. Strike will soon be obsolete
			//2. Strike is a styling tag
			//3. Use Css instead
			// $(this).css("text-decoration", "line-through");
			$(this).toggleClass("done");
		});

});




// 

