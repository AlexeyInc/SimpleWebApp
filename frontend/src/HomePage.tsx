import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PrimaryButton, PageTitle } from './Styles';

import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';

import { useEffect, useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Page } from './Page';

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    history.push('/ask');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
