import React, {useState, useEffect} from 'react';

const PreSurvey = ( { answers, setAnswers, navigateTo } ) => {
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      questionText: '1. I am confident in my ability to recognize propaganda in the media.',
      answerOptions: [
        'No Confidence At All',
        'Slightly Confident',
        'Somewhat Confident',
        'Very Confident',
        'Extremely Confident'
      ],
      id: 1,
    },
    {
      questionText: '2. I read the news frequently',
      answerOptions: [
        'Never',
        'Rarely',
        'Sometimes',
        'Often',
        'Always'
      ],
      id: 2,
    },
    {
      questionText: '3. I consider myself to be a very political person.',
      answerOptions: [
        'Not Political At All',
        'Slightly Political',
        'Moderately Political',
        'Very Political',
        'Extremely Political'
      ],
      id: 3,
    }
  ];
  const buttonStyles = {
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    cursor: isComplete ? "pointer" : "not-allowed",
    backgroundColor: isComplete ? '#007BFF' : '#CCCCCC', // Different background color when disabled
    color: "white",
    width: '70px',
    border: '1px solid #ccc',
    boxShadow: 'none',
    backgroundImage: 'none',
    marginTop: 18,
    marginBottom: 10
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOptionChange = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    const allAnswered = questions.every(question => answers[question.id] !== undefined);
    setIsComplete(allAnswered);
  }, [answers, questions]);


  return (
    <div style={styles.articleContainer}>
      <h1>Pre-Survey</h1>
      <p>Please rate the following statements using the specific options provided for each. </p>
      {questions.map((question) => (
        <div key={question.id}>
          <div style={{margin: 12}}>{question.questionText}</div>
          <form>
            {question.answerOptions.map((option, index) => (
              <div key={index}>
                <input 
                  type="radio" 
                  id={`${question.id}-${option}`} 
                  name={`question-${question.id}`} 
                  value={option} 
                  onChange={(e) => handleOptionChange(question.id, e.target.value)} 
                  checked={answers[question.id] === option}
                  style={{marginTop: 10, margin: 10}} 
                />
                <label htmlFor={`${question.id}-${option}`}>{option}</label>
              </div>
            ))}
          </form>
        </div>
      ))}
      <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigateTo('consentForm')}>Previous</button>    
          <button style={buttonStyles} onClick={() => navigateTo('instructions')} disabled={!isComplete}>Next</button>   
      </div>
    </div>
  );
};


// Styles
const styles = {
  preformattedStyle: {
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      lineHeight: 1.4,
  },
  articleContainer: {
      marginRight: "20%",
      marginLeft: "20%",
      paddingBottom: 10,
      display: 'flex', // Added for flex layout
      flexDirection: 'column', // Stack items vertically
      justifyContent: 'space-between', // Space between items
      lineHeight: 1.2,
  },
  articleTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      fontFamily: 'Arial',
      marginTop: 200,
  },
  buttonContainer: {
      alignSelf: 'center', // Align button to the right
  },
  button: {
    fontSize: '18px', // Set the font size
    padding: '10px', // Add padding (optional)
    borderRadius: '5px',
    cursor: "pointer",
    backgroundColor: 'gray',
    marginBottom: 10,
    //fontWeight: 'bold',
    color: "white",
    // height: '45px', // Set the height of the button
    border: '1px solid #ccc', // A solid, light grey border; change as needed
    boxShadow: 'none', // Removes any shadow effect
    backgroundImage: 'none', // Removes any gradient background
    marginTop: 18,
    margin: 20,
}
};


export default PreSurvey;