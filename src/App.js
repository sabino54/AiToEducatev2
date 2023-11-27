import React, { useState, useEffect } from 'react';

import Highlighter from "react-highlight-words";

import article1URL from './Data/article1.txt';
import article2URL from './Data/article2.txt';
import article3URL from './Data/article3.txt';
import article4URL from './Data/article4.txt';
import article5URL from './Data/article5.txt';
import article6URL from './Data/article6.txt';
import 'react-tippy/dist/tippy.css'

import { Tooltip } from "react-tippy";

const MultipleArticlesReader = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const files = [article1URL, article2URL, article3URL, article4URL, article5URL, article6URL];
  
    Promise.all(files.map(fileURL => 
      fetch(fileURL)
        .then(response => response.text())
        .catch(error => console.error(`Error fetching ${fileURL}:`, error))
    ))
    .then(contents => setArticles(contents))
    .catch(error => console.error('Error with fetching articles:', error));
  }, []);
  

  const highlightsForArticles = new Map([
    ["However, the law might still not be on the side of the executive branch", "test1"],
    ["The order from U.S. District Judge Tanya Chutkan is a milestone moment in the federal case that accuses Trump of illegally conspiring to overturn his 2020 election loss to Democrat Joe Biden", "test2"],
    ["John Modlin, the chief patrol agent of the Tucson Sector of the southern border, announced that agents apprehended nearly 13,000 migrants last week. This marks the third week in a row of agents apprehending more than 10,000 migrants.", "test3"],
    ["Ms. Healey stressed that the state was not doing away with its 40-year-old right-to-shelter law, the only one of its kind in the nation. The law says that pregnant women and families with children who meet income guidelines and other criteria must be provided a place to stay.", "test4"],
    ["Mr Czuba appeared in court on Monday dressed in red jail clothes and with matted, white hair. He spoke only briefly to confirm that he would need a court-ordered public defender.", "test5"],
    ["Like other lawyers who have sought to have Mr. Trump freed from the gag order, Mr. Sauer at times exaggerated the strictures it imposed on the former president.", "test6"]
  ]);

  const articlesWithHighlights = {};
  // Convert the map keys to an array
  const keysArray = Array.from(highlightsForArticles.keys());
  
  articles.forEach((article, index) => {
      articlesWithHighlights[article] = [keysArray[index]];
  });

  console.log(articlesWithHighlights)

  const RenderHighlight = ({children}) => (
    <Tooltip title={highlightsForArticles.get(children)} position='left' arrow='true' animation='perspective'>
          <span style={{ color: 'red', textDecorationLine: 'underline', textDecorationColor: 'red',}}>
            {children}
          </span>
    </Tooltip>
  );

  return (
      <div style={styles.content}>
        <p style={styles.header}></p>
        {Object.entries(articlesWithHighlights).map(([content, highlights], index) => (
          <div key={index} style={styles.articleContainer} className='test'>
            <p style={styles.articleTitle}>Article {index + 1}</p>
              
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={highlights}
              autoEscape={true}
              textToHighlight={content}
              highlightTag={RenderHighlight}
            />

          </div>
        ))}
      </div>
  );
};

const styles = {
  header: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleContainer: {
    marginRight: 300,
    marginLeft: 300,
    paddingBottom: 10,
    borderBottom: '1px solid grey',
    justifyContent: 'center', 
    fontFamily: 'Roboto',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Arial',
  },
};

export default MultipleArticlesReader;