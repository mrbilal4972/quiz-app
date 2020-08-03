import React from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Question = {
    question: string
    answer: string
    options: string[]
}

export type Propstype ={
    btn: string
    Q_No: number
    ans: string
    opt: string[]
    ques: string
    callback: (e:React.FormEvent<EventTarget>) => void
  }

export type ScorePropsType = {
    score: number
    clickHandler: () => void
    answerForDisplay: any
}

export type ScoreCardPropstype ={
    score: number
    clickHandler: () => void
  }
  
  export type AnswerType = {
    userAnswer: string
    answer: string
}
  
export type Data = {
    Q_No: number;
    Your_Answer: string;
    Correct_Answer: string;
  }

export type Column = {
    id: 'Q_No' | 'Your_Answer' | 'Correct_Answer';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

export type AnswerValidationProps = {
    answerForDisplay: any
}