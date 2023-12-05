import React from 'react';
import supabase from '../supabase';

const ExitQuestions = ({ answers, setAnswers, navigateTo, presurveyanswers, articleoneanswers, articletwoanswers, articlethreeanswers, articlefouranswers}) => {

    const submit = async () => {
        const {data, error} = await supabase.from('responses').insert({
          exitquestions: {},
          preserv: presurveyanswers,
          articleOne: articleoneanswers,
          articleTwo: articletwoanswers,
          articleThree: articlethreeanswers,
          articleFour: articlefouranswers,
        });
        console.log(error)
      }

    const handleSubmit = async () => {
        await submit();
        navigateTo('finished'); 
    };

  return (
    <div style={styles.articleContainer}>
      <h1>Exit Questionnaire</h1>
      <p>Answer the questions....NOW</p>
      
      <div style={styles.buttonContainer}>  
          <button style={{ ...styles.button, backgroundColor: '#007BFF' }} onClick={handleSubmit}>SUBMIT</button>   
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
      marginRight: 200,
      marginLeft: 200,
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
    padding: '14px', // Add padding (optional)
    borderRadius: '5px',
    cursor: "pointer",
    backgroundColor: 'gray',
    marginBottom: 10,
    color: "white",
    border: '1px solid #ccc', // A solid, light grey border; change as needed
    boxShadow: 'none', // Removes any shadow effect
    backgroundImage: 'none', // Removes any gradient background
    marginTop: 18,
    margin: 10,
},
};


export default ExitQuestions;
