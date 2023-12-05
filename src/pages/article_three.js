import React, { useState, useEffect } from "react";
import article3URL from '../Data/article3.txt'; 
import Highlighter from "react-highlight-words";
import 'react-tippy/dist/tippy.css';
import { questions } from "../Data/articlequestions";
import RenderHighlight from "../Data/renderhighlight"; 

const highlights = ["A new report from House Republicans showed that at least 2,148,738 illegal migrants were released into the country"];

const Article_three = ({ answers, setAnswers, navigateTo }) => {
  const [articleContent, setArticleContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionChange = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Check if all questions have been answered
    const allAnswered = questions.every(question => answers[question.id] !== undefined);
    setIsComplete(allAnswered);
  }, [answers, questions]);


    useEffect(() => {
        // Fetch the content of the text file
        fetch(article3URL)
            .then(response => response.text())
            .then(text => setArticleContent(text))
            .catch(error => console.error('Error fetching text file:', error));
    }, []);

    const renderQuestion = (question) => (
      <div key={question.id} style={{margin: 10}}>
          <div style={{ margin: 12 }}>{question.questionText}</div>
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
                          style={{ marginTop: 10, margin: 10 }}
                      />
                      <label htmlFor={`${question.id}-${option}`}>{option}</label>
                  </div>
              ))}
          </form>
      </div>
  );

  return (
    <div style={styles.articleContainer}>
        <div style={{ marginBottom: '60px' }}> 
            <p style={styles.articleTitle}>Article 3</p>
            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={highlights}
                autoEscape={true}
                textToHighlight={articleContent}
                highlightTag={(props) => <RenderHighlight tooltipText="Custom Tooltip Text" {...props} />}
                style={styles.preformattedStyle}
            />
        </div> 
        {questions.map(renderQuestion)}
        <div style={styles.buttonContainer}>
            <button 
                style={{ ...styles.button, backgroundColor: isComplete ? '#007BFF' : '#CCCCCC', cursor: isComplete ? "pointer" : "not-allowed" }}
                onClick={() => isComplete && navigateTo('articleFour')}
                disabled={!isComplete}
            >
                Next
            </button>
        </div>
    </div>
);
};

const styles = {
    preformattedStyle: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        lineHeight: 1.4,
    },
    articleContainer: {
        marginRight: 180,
        marginLeft: 180,
        paddingBottom: 10,
        display: 'flex', // Added for flex layout
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'space-between', // Space between items
        //backgroundColor: 'red',
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
        backgroundColor: '#007BFF',
        marginBottom: 10,
        //fontWeight: 'bold',
        color: "white",
        width: '70px', // Set the width of the button
        // height: '45px', // Set the height of the button
        border: '1px solid #ccc', // A solid, light grey border; change as needed
        boxShadow: 'none', // Removes any shadow effect
        backgroundImage: 'none', // Removes any gradient background
        marginTop: 18,
    }
};

export default Article_three;
