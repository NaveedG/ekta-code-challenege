// #1 What is this code doing? How might it be improved?
return !this.allQuestions.filter(q => q.subThreadName == this.currentQuestion.subThreadName ) .filter(q => q.mrLevel == this.currentQuestion.mrLevel) .some( q => q.currentAnswer == "No")

/* This code is performing the following operations:

1.) Iterating through an array of questions (an instance of allQuestions) to remove any question which has a subThreadName that is not equal in value to the current question's subThreadName.
2.) Iterating through the array of remaining questions from (1) to remove any question which has a mrLevel that is not equal in value to the current question's mrLevel.
3.) Iterating through the array of remaining questions from (2) to check if any of the questions have a current answer with the value of "No" and therefore return true.
4.) If the final iteration returns true, then false will be returned due to the logical operator 'not' (!) at the beginning. If the final iteration returns false, then true will be returned.

The clarity of the code may be improved by removing the 'not' operator at the beginning and modifying the third iteration: */

return this.allQuestions.filter(q => q.subThreadName == this.currentQuestion.subThreadName ).filter(q => q.mrLevel == this.currentQuestion.mrLevel).every( q => q.currentAnswer != "No")
