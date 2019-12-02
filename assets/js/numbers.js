function compute(expression) {
    
	let result, tempMultiplication, tempDivision, newExpression;
	
	tempMultiplication = expression.split ("*"); 
	tempDivision = expression.split ("/");
	
	
	if (tempMultiplication.length > 1)
	{
		let temp1, temp2, replacementNbr, startIndex, endIndex, toBeReplaced;
		
		for (let i = 0; i < 2; i++)
		{
			if ((!tempMultiplication[i].includes("+")) && (!tempMultiplication[i].includes("-")) && (!tempMultiplication[i].includes("/")))
			{
				
				if (i==0)
				{
					temp1 = parseInt(tempMultiplication[i]);
					startIndex = 0;
				}
				else
				{
					temp2 = parseInt(tempMultiplication[i]);
					endIndex = tempMultiplication[i-1].length + tempMultiplication[i].length + 1;
				}
			}
			else
			{
				if (i == 0)
				{
					
					let j = 2;
					let multiple = 10;
					temp1 = parseInt(tempMultiplication[i].charAt(tempMultiplication[i].length -1));
					startIndex = tempMultiplication[i].length - 1;
					while ((tempMultiplication[i].charAt(tempMultiplication[i].length -j) != "+") && (tempMultiplication[i].charAt(tempMultiplication[i].length -j) != "/") && (tempMultiplication[i].charAt(tempMultiplication[i].length -j) != "-"))
					{
						temp1 += parseInt(tempMultiplication[i].charAt(tempMultiplication[i].length -j))*multiple;
						multiple *= 10;
						j++;
						startIndex--;
					}
				}
				else
				{
					let j = 0;
					temp2 = tempMultiplication[i].charAt(j);
					endIndex = tempMultiplication[i-1].length + 2;
					j++;

					while ((tempMultiplication[i].charAt(j) != "+") && (tempMultiplication[i].charAt(j) != "/") && (tempMultiplication[i].charAt(j) != "-"))
					{
						temp2 += tempMultiplication[i].charAt(j);
						endIndex++;
						j++;
					}
					
				}					
			}
		}

		replacementNbr = temp1*parseInt(temp2);
		toBeReplaced = expression.substring(startIndex, endIndex);
		newExpression = expression.replace(toBeReplaced, replacementNbr.toString());
		
		result = compute(newExpression);
	}
	
	else if (tempDivision.length > 1)
	{
		let temp1, temp2, replacementNbr, startIndex, endIndex, toBeReplaced;
		
		for (let i = 0; i < 2; i++)
		{
			if ((!tempDivision[i].includes("+")) && (!tempDivision[i].includes("-")) && (!tempDivision[i].includes("*")))
			{
				
				if (i==0)
				{
					temp1 = parseFloat(tempDivision[i]);
					startIndex = 0;
				}
				else
				{
					temp2 = parseFloat(tempDivision[i]);
					endIndex = tempDivision[i-1].length + tempDivision[i].length + 1;
				}
			}
			else
			{
				if (i == 0)
				{
					
					let j = 2;
					let multiple = 10;
					temp1 = parseFloat(tempDivision[i].charAt(tempDivision[i].length -1));
					startIndex = tempDivision[i].length - 1;
					while ((tempDivision[i].charAt(tempDivision[i].length -j) != "+") && (tempDivision[i].charAt(tempDivision[i].length -j) != "/") && (tempDivision[i].charAt(tempDivision[i].length -j) != "-"))
					{
						temp1 += parseFloat(tempDivision[i].charAt(tempDivision[i].length -j))*multiple;
						multiple *= 10;
						j++;
						startIndex--;
					}
				}
				else
				{
					let j = 0;
					temp2 = tempDivision[i].charAt(j);
					endIndex = tempDivision[i-1].length + 2;
					j++;

					while ((tempDivision[i].charAt(j) != "+") && (tempDivision[i].charAt(j) != "/") && (tempDivision[i].charAt(j) != "-"))
					{
						temp2 += tempDivision[i].charAt(j);
						endIndex++;
						j++;
					}
					
				}					
			}
		}

		replacementNbr = temp1/parseFloat(temp2);
		toBeReplaced = expression.substring(startIndex, endIndex);
		newExpression = expression.replace(toBeReplaced, replacementNbr.toString());
		
		result = compute(newExpression);
	}
	
	else
	{
		let operator, strOperand, nbrOperand;
		let i = 0;
		result = 0;
		
		while (i < expression.length)
		{
			if ((expression.charAt(i) == "+") || (expression.charAt(i) == "-"))
			{
				if (expression.charAt(i) == "-")
					operator = -1;
				else
					operator = 1;
				i++;
			}
			else
			{
				if ( i == 0)
					operator = 1;
				strOperand = expression.charAt(i);
				++i;
				while ((i < expression.length) && (expression.charAt(i) != "+") && (expression.charAt(i) != "-"))
				{
					strOperand += expression.charAt(i);
					++i;
				}
				
				nbrOperand = Number(strOperand);
				nbrOperand *= operator;
				result += nbrOperand;
			}
		}
	}

	return result;
}