import {Quiz, Question} from './../Types/quiz_type';

function shuffleArray(options: string[]) {
    options.sort(() => 0.5-Math.random());
    return options;
}

export const getQuiz = async(no_of_questions: number, level: string): Promise<Question[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${no_of_questions}&category=21&difficulty=${level}&type=multiple`)
    let {results} = await res.json();
    let quiz: Question[] = results.map((quesObj: Quiz) => {
        return {
            question: quesObj.question,
            answer: quesObj.correct_answer,
            options: shuffleArray([quesObj.correct_answer, ...quesObj.incorrect_answers])
        }
    })
    return quiz
}