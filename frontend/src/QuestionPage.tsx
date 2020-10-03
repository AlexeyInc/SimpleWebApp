import React, { FC } from 'react';
import { Page } from './Page';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionData, getQuestion } from './QuestionsData';

interface RouteParams {
  questionId: string;
}

export const QuestionPage: FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => <Page>Question Page {match.params.questionId}</Page>;
