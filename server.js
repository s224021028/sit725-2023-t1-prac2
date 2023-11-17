var express = require("express");
var app = express();
var port = process.env.port || 3000;
app.get("/", (req, res) => {
	var operation = req.query.operation;
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
    res.send("The result is: " + calculate(operation, num1, num2));
});
function calculate(operation, num1, num2)
{
	if (operation == "+" || operation == "add")
	{
		return num1 + num2;
	}
	else if(operation == "-" || operation == "sub")
	{
		return num1 - num2;
	}
	else if(operation == "*" || operation == "mul")
	{
		return num1 * num2;
	}
	else if(operation == "/" || operation == "div")
	{
		if (num2 == 0)
			return "Undefined"
		return num1 / num2;
	}
}
app.listen(port, () => {
    console.log(port);
})