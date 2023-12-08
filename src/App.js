import React, { useState, useEffect } from 'react';
import ArticleOne from "./pages/article_one";
import ConsentForm from './pages/consentForm';
import ArticleTwo from "./pages/article_two";
import ArticleThree from "./pages/article_three";
import ArticleFour from "./pages/article_four";
import PreSurvey from './pages/presurvey';
import Instructions from './pages/instructions';
import ExitQuestions from './pages/exitquestions';
import Finished from './pages/finished';

const MultipleArticlesReader = () => {
  const [currentPage, setCurrentPage] = useState('consentForm');
  const [consentChecked, setConsentChecked] = useState(false);

  const [preSurveyAnswers, setPreSurveyAnswers] = useState({});
  const [articleOneAnswers, setArticleOneAnswers] = useState({});
  const [articleTwoAnswers, setArticleTwoAnswers] = useState({});
  const [articleThreeAnswers, setArticleThreeAnswers] = useState({});
  const [articleFourAnswers, setArticleFourAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState({})

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case 'consentForm':
      content = <ConsentForm consentChecked={consentChecked} setConsentChecked={setConsentChecked} navigateTo={navigateTo} />;
      break;
    case 'preSurvey':
      content = <PreSurvey answers={preSurveyAnswers} setAnswers={setPreSurveyAnswers} navigateTo={navigateTo} />;
      break;
    case 'instructions':
      content = <Instructions navigateTo={navigateTo} />;
      break;
    case 'articleOne':
      content = <ArticleOne  answers={articleOneAnswers} setAnswers={setArticleOneAnswers} navigateTo={navigateTo} />;
      break;
    case 'articleTwo':
      content = <ArticleTwo  answers={articleTwoAnswers} setAnswers={setArticleTwoAnswers} navigateTo={navigateTo} />;
      break;
    case 'articleThree':
      content = <ArticleThree answers={articleThreeAnswers} setAnswers={setArticleThreeAnswers} navigateTo={navigateTo} />;
      break;
    case 'articleFour':
      content = <ArticleFour  answers={articleFourAnswers} setAnswers={setArticleFourAnswers} navigateTo={navigateTo} />;
      break;
    case 'exitQuestions':
      content = <ExitQuestions answers={finalAnswers} setAnswers={setFinalAnswers} navigateTo={navigateTo} 
      presurveyanswers = {preSurveyAnswers}
      articleoneanswers = {articleOneAnswers}
      articletwoanswers = {articleTwoAnswers}
      articlethreeanswers = {articleThreeAnswers}
      articlefouranswers = {articleFourAnswers}
      />;
      break;
    case 'finished':
    content = <Finished
    />;
    break;
    }

  return <div>{content}</div>;
};

export default MultipleArticlesReader;
