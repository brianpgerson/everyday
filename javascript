<html><head>
  <title>Learning Javascript</title>

<meta charset="utf-8">
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">



</style>


</head>
<body>


<button id="stylesChanger">Change the Text!</button>

<div id="firstDiv">This is some text</div>


	<script type="text/javascript">

	var myArray=new Array();

	myArray[0]="pizza";
	myArray[1]="dogs";


	document.getElementById("stylesChanger").onclick=function () {
		
		document.getElementById("firstDiv").innerHTML=myArray[0];
	}


</script>

</body>
</html>

