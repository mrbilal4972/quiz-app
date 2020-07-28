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
}
