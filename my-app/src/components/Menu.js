import "../App.css";
import { useContext, useState } from "react";
import { GameStateContext } from "../helpers/Contexts";



function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );

  const mockData = [
    {
      id: 0,
      title: "Are you little interest or pleasure in doing things ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 1,
      title: "Are you feeling down, depressed, or hopeless ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 2,
      title: "Are you trouble falling or staying asleep, or sleeping too much ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 3,
      title: "Are you feeling tired or having little energy ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 4,
      title: "Are you poor appetite or overeating ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 5,
      title: "Are you feeling bad about yourself - or that you are a failure or have let yourself or your family down ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 6,
      title: "Are you trouble concentrating on things, such as reading the newspaper or watching television ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 7,
      title: "Are you moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
    {
      id: 8,
      title: "Are you thoughts that you would be better off dead, or of hurting yourself in some way ?",
      answer: [
        {
          id: 1,
          titleAns: "Not at all",
          answerChild: "des 1",
          point: 0
        },
        {
          id: 1,
          titleAns: "Several days",
          answerChild: "des 2",
          point: 1
        },
        {
          id: 1,
          titleAns: "More than half the days",
          answerChild: "des 3",
          point: 2
        },
        {
          id: 1,
          titleAns: "Nearly every day",
          answerChild: "des 4",
          point: 3
        },
      ]
    },
  ]

  const [data, setData] = useState([])

  const [activeQuestion, setActiveQuestion] = useState(mockData[0])

  const [point, setPoint] = useState()

  const [isShownAns, setIsShownAns] = useState(false)
  const [isOptionChosen, setIsOptionChosen] = useState(false)

  // spread 
  const handleChoose = (parent, child) => {
    console.log("data", { parent, child });
    setData((prev) => [...prev, {parent, child}])
  } 
  console.log("data", data);

  const calculation = () => {
    // reduce trong javascript 
    // const totalPoint = data[0]?.child?.point + data[1]?.child?.point + data[2]?.child?.point + data[3]?.child?.point // hard code 
    const listPoint = data?.map(item => {
      return item?.child?.point
    })
    console.log("listPoint",listPoint)
    const test = listPoint?.reduce((total, current) => {
      return total + current
    })
    // 
    setPoint(test)
    console.log("test",test);
    // console.log("total", totalPoint);
  }

  /* Not doing anything. */
  const handleActive = () => {
    setActiveQuestion(mockData[activeQuestion?.id + 1])
    console.log("test", mockData[activeQuestion?.id + 1]);
  }

  console.log("activeQuestion",activeQuestion);
  return (
    <>
      {isShownAns ? (
        <div> 
          {point && (
        <div className="Menu">
          <div className="scoreNoti">Your score is: {point}</div>
          <button className="NextFinishRes restart">
            <a href="http://localhost:3000/">Restart</a>
            <div class="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
            </div>
          </button>
        </div>
      )}
      </div>
      ) : (
            <div className="Menu">
              
      {/* <label>Enter your name</label>
      <input
        type="text"
        placeholder="Ex: John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button class="startButton"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start testing
      </button> */}

      {activeQuestion && (
        <div className="content">
          <h1 className="questions">{activeQuestion?.title}</h1>
          {/* <h1 className={`${activeQuestion?.answer?.length > 4 ? "quiz_4ans" : "quiz_2ans"}`}>{activeQuestion?.title}/{mockData.length}</h1> */}
          <h2 className="quiz">Question {activeQuestion?.id+1}/{mockData.length}</h2>
          <div className="options">
            {activeQuestion?.answer?.length > 0 && activeQuestion?.answer?.map((ele) => {
              return (
                <button onClick={() => handleChoose(activeQuestion, ele)}>{ele?.titleAns}</button>
              )
            })}
          </div>
        </div>
      )}

      {/* <div>
        {mockData?.map((item) => {
          return (
            <div>
              <h1>{item?.title}</h1>
              <div>
                {item?.answer?.length > 0 && item?.answer?.map((ele) => {
                  return (
                    <p onClick={() => handleChoose(item, ele)}>{ele?.titleAns}</p>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div> */}
      
      {/* for(let i=0;i<mockData.length;i++) {
        if(data[i].length === mockData[0].length) {
          return function() {
            <button className="nextQuestion" onClick={() => handleActive()}>Next question</button>}
          }
        }
      } */}
      {(data?.findIndex(item => item?.id === activeQuestion?.id) === activeQuestion?.id) ? 
        (<button className="NextFinishRes" onClick={() => handleActive()}>Next question</button>) 
        : null}
        
      {(data?.length === mockData.length) ? (
      // <button onClick={calculation}>calculation</button>
        <button className="NextFinishRes" onClick={() => {
          setIsShownAns(true)
          calculation()
        }}>
          Finish test
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>      
      ) : (
        <button className="NextFinishRes"  onClick={() => handleActive()}>
          Next question
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>
      )}
      
      {/* {point && (
        <div>
          <div>Your score is: {point}</div>
          <button className="restart">Restart</button>
        </div>
      )} */}
    </div>
      )}
    </>
  );
}

export default Menu;
