import React from 'react';

const HomePage = ( { consentChecked, setConsentChecked, navigateTo } ) => {

  const handleCheckboxChange = (event) => {
    setConsentChecked(event.target.checked);
  };

  const buttonStyles = {
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    cursor: consentChecked ? "pointer" : "not-allowed",
    backgroundColor: consentChecked ? '#007BFF' : '#CCCCCC', // Different background color when disabled
    color: "white",
    width: '70px',
    border: '1px solid #ccc',
    boxShadow: 'none',
    backgroundImage: 'none',
    marginTop: 18,
    marginBottom: 10
  };

  return (
    <div style={styles.articleContainer}>
      <h1>Consent Form</h1>
      <p>You are invited to participate in a research study. You will be asked to answer questions about various short social reasoning stories. All information collected will remain confidential.</p>
      
      <h2>Risks and Benefits:</h2>
      <p>Risks involved in this study are the same as those normally associated with using a computer (e.g., mild eye/arm strain). If you have any pre-existing conditions that might make reading and completing a computer-based survey strenuous for you, you should probably elect to not participate in this study. If at any time during the study you feel unable to participate because you are experiencing strain, you may end your participation without penalty. We cannot and do not guarantee or promise that you will receive any benefits from this study. Your decision whether or not to participate in this study will not affect your employment, medical care, and/or grades in school.</p>
      
      <h2>Time Involvement:</h2>
      <p>Your participation in this experiment will take around 20-30 minutes.</p>
      
      <h2>Payment:</h2>
      <p>If recruitment materials indicate payment (e.g., Prolific or other recruitment), you will receive compensation as indicated.</p>
      
      <h2>Subject's Rights:</h2>
      <p>If you have read this notice and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to answer particular questions. Your individual privacy will be maintained in all published and written data resulting from the study.</p>
      
      <h2>Contact Information:</h2>
      <p>If you have any questions, concerns or complaints about this research study, its procedures, or risks and benefits, you should ask the Protocol Director, (XXXXX, Phone: (XXX) XXX-XXXX; Email: XXX@stanford.edu).</p>
      
      <h2>Independent Contact:</h2>
      <p>If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB)...</p>
      <p>You may want to print a copy of this consent form to keep. By clicking the button below, you acknowledge that you have read the above information, that you are 18 years of age, or older and give your consent to participate in our internet-based study and consent for us to analyze the resulting data.</p>
      

      <label>
        <input type="checkbox"
          checked={consentChecked} 
          onChange={handleCheckboxChange} />
            I have read and understood the information above, and I agree to participate in this study.
      </label>
      
        <div style={styles.buttonContainer}>
            <button style={buttonStyles} onClick={() => navigateTo('preSurvey')} disabled={!consentChecked}>Next</button>     
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
};


export default HomePage;

