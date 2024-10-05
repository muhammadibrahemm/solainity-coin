import { useEffect, useState } from 'react';
import { UseTokenContext } from '../Context/useContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export const MathMcqs = () => {
    const [questionArray, setQuestionArray] = useState([]);
    const [optionsArray, setOptionsArray] = useState([]);
    const [correctAnsArray, setCorrectAnsArray] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const { userData, setMathScoreState } = UseTokenContext();
    const navigate = useNavigate();


    const generateMcqs = async () => {
        try {
            const res = await fetch("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple");
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error fetching MCQs:", error);
        }
    };

    useEffect(() => {
        const fetchMcqs = async () => {
            const data = await generateMcqs();
            if (data && data.results) {
                let questions = [];
                let options = [];
                let correctAnswers = [];

                data.results.forEach((ele) => {
                    questions.push(ele.question);
                    correctAnswers.push(ele.correct_answer);
                    options.push([...ele.incorrect_answers, ele.correct_answer].sort());
                });

                setQuestionArray(questions);
                setOptionsArray(options);
                setCorrectAnsArray(correctAnswers);
            } else {
                console.log("No results found in MCQ data.");
            }
            setLoading(false); // Set loading to false after fetching
        };

        fetchMcqs();
    }, []);

    const handleOptionChange = (questionIndex, selectedOption) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleSubmit = async () => {
        let calculatedScore = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === correctAnsArray[index]) {
                calculatedScore++;
            }
        });

        console.log("Calculated Score:", calculatedScore);
        const email = userData.necessaryData.email
        

        try {
            const res = await fetch('http://localhost:5000/api/activity/update-score',{
                method: 'PUT',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ keyword: 'math' , email }) // wrap in an object if necessary
            });

            if(res.ok){
                const data = await res.json();
                console.log(data);
                toast.success('Score is updated sucessfully')
                setMathScoreState(true);
                navigate('/user/activity');
            }
            
        } catch (error) {
            console.log('error in sending data to db',error);
        }
        
    };

    if (loading) return <p>Loading questions...</p>;

    return (
        <div className="p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold mb-6 text-center">Math MCQs</h1>
            {questionArray.length > 0 ? (
                <div className="space-y-8">
                    {questionArray.map((question, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow-lg">
                            <p className="text-lg font-medium">{`Q${index + 1}: ${question}`}</p>
                            <div className="mt-4 space-y-2">
                                {optionsArray[index]?.map((option, optIndex) => (
                                    <label key={optIndex} className="block">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            checked={selectedAnswers[index] === option}
                                            onChange={() => handleOptionChange(index, option)}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={handleSubmit}
                        className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                    >
                        Submit Answers
                    </button>
                </div>
            ) : (
                <p>No questions available.</p>
            )}
        </div>
    );
};
