/*
 * Tyler Deans
 * November 15, 2015
 */



function LetExpressionModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
	

}

/*
 * This function creates a let expression with random stuff in it for use in questions
 */
LetExpressionModel.prototype.randomLetExpression = function() {
	
    this.answer = 0;
	
    // A number between 1 and 2
    letChoice = getRandomInt(1, 3);
    // Numbers between 1 and 5
    xVar1 = getRandomInt(1, 6);
    yVar = getRandomInt(1, 6);
    xVar2 = getRandomInt(2, 6);
    val = getRandomInt(1, 6);

    /*
        Change xVar1 and xVar2 values if they are the same value in order to avoid confusion
    */
    // Let expression
    if (letChoice === 1) {

        if (xVar1 === xVar2) {
            xVar2 += 1;
        }

        yVar = xVar1 + val;
        this.answer = xVar2 + yVar;

        // Shows the let expression in Racket on the webpage
        this.letExpressionString = "<pre>(define x " + xVar1 + ")" + "\n";
        this.letExpressionString += "(define y " + yVar + ")" + "\n";
        this.letExpressionString += "(let ([x " + xVar2 + "]" + "\n";
        this.letExpressionString += "   [y " + " (+ x " + val + ")])" + "\n";
        this.letExpressionString += "  (+ x y))" + "\n";
        this.letExpressionString += "</pre></br>";
    } 
    // Let* expression
    else if (letChoice === 2) {
        if (xVar1 === xVar2) {
            xVar2 += 1;
        }
        //Let* expression
        yVar = xVar2 + val;
        this.answer = xVar2 + yVar;

        // Shows the let* expression in Racket on the webpage
        this.letExpressionString = "<pre>(define x " + xVar1 + ")" + "\n";
        this.letExpressionString += "(define y " + yVar + ")" + "\n";
        this.letExpressionString += "(let* ([x " + xVar2 + "]" + "\n";
        this.letExpressionString += "   [y " + " (+ x " + val + ")])" + "\n";
        this.letExpressionString += "  (+ x y))" + "\n";
        this.letExpressionString += "</pre></br>";
    }
    

    return this.answer;
}

LetExpressionModel.prototype.getLetExpression = function() {
    return this.letExpressionString;
}



