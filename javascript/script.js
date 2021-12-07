
// alert("This calculator works best if your mobile device settings have been adjusted to track your screentime. Instructions for how to do this are included in the calculator. Please adjust your settings and revisit our site once your device has collected enough data.");


function percentage_2() {

    // Method returns the element of num1 id
    var num1 = document.getElementById("num1").value;

    // Method returns the elements of num2 id
    // var num2 = document.getElementById("num2").value;
    // document.getElementById("value2")
    //     .value = (num1 * 100) / (24 - num2) + "%";

      // calculate how many days a year they're losing

      // document.getElementById("value3")
      // .value = (num1 / 24) * 365;


      var total = (num1 / 24) * 365;

      var rounded = Math.round(total);


      var result = "You spend " + rounded + " days a year on your mobile device.";

      // window.open('results.html');

      document.getElementById("numeral").innerHTML = result ;

      document.getElementById("userInput").innerHTML = " ";




      // document.getElementById("response").innerHTML = "That's scary, right?" ;

    //store output as variable

	//use variable to run conditional statement
		if (total < 50){
			document.getElementById("response").innerHTML = "Good news, that's less than the average person. But it's still a lot of days. Think about what you could do in " + rounded + " days."
		} else if (total > 50){
			document.getElementById("response").innerHTML = "Unfortunately, that's more than most people. Think about what you could do in " + rounded + " days."
		};

    var moon = Math.round(total / 3);
    var habit = Math.round(total / 21);
    var walking = Math.round((total * 24) * 3.1);
    var everest = Math.round(total / 60);
    var drive = Math.round(total / 14);


    document.getElementById("moon").innerHTML = "You could travel to the moon " + moon + " times.";
    document.getElementById("habit").innerHTML = "You could form " + habit + " new habits.";
    document.getElementById("walking").innerHTML = "You could walk " + walking + " miles.";
    document.getElementById("everest").innerHTML = "You could hike Mount Everest " + everest + " time(s).";
    document.getElementById("drive").innerHTML = "You drive from New York to California and back " + drive + " times.";
    document.getElementById("message").innerHTML = "If I had first asked if you had time to do any of these things, you probably would've said no. And you probably don't want to, which is understandable. But you without a doubt have the time. Your screens are just stealing it from you.";
    document.getElementById("next").innerHTML = "<a href= 'next.html' > so what now? → </a>" ;




};
