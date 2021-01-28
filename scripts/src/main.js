'use strict';

// the info panel
class Info extends React.Component {
    render() {
        return (
            <div id="test-info">
                <p className="jp" id='info-text'>{this.props.name}</p>
                <form onSubmit={this.props.onSubmitMode}>
                    {/*<input type="radio" name='mode' value="1" onChange={this.props.onChangeMode}/><span> Random  </span>*/}
                    <input type="radio" name='mode' value="2" onChange={this.props.onChangeMode} defaultChecked /><span> In order  </span>
                    {/*<input type="radio" name='mode' value="3" onChange={this.props.onChangeMode} /><span> Smart  </span>*/}
                </form>
            </div>
        )
    }
}

// the score panel
class Score extends React.Component {
    render() {
        return (
            <div id="test-score">
                <p className='narrow-text' id="score-text" >{this.props.correct} / {this.props.question}</p>
                <button  id="reset-btn" onClick={this.props.onClickReset}>Reset</button>
            </div>
        )
    }
}


// the main panel
class Board extends React.Component {
    render() {

        let prev, next;

        // check the status of prev button
        if ( this.props.prev==1) {
            prev = <Prev onClickPrev={this.props.onClickPrev} />
        } else {  // this.props.prev==0
            prev = <PrevLight />
        }

        // check the status of next button
        if ( this.props.next==1) {
            next = <Next onClickNext={this.props.onClickNext} />
        } else {  // this.props.next==2
            next = <Restart onClickNext={this.props.onClickNext} />
        }

        return (
            <div  id="test-board">
                {prev}
                <div id="test-board-center">
                    <p className="jp" id="character">{this.props.character}</p>
                    <p className='narrow-text'>{this.props.answer}<br></br></p>
                    <form  autoComplete="off" onSubmit={this.props.onSubmit}>
                        <input id='inputanswer' name='inputanswer' type='text' spellCheck="false" ref={this.props.input_ref} /><br></br>
                        <button id='enter-btn'>Enter</button>
                    </form>
                    <p className='narrow-text' id='result'>{this.props.result}</p>
                </div>
                {next}  
            </div>
        )
    }
}

function Next(props) {
    return (
        <div id="test-board-next" onClick={props.onClickNext}>   
            <img className='side' src='images/Next.png'/>
            <p className='side'>Next</p>
        </div>
    );
}

function Restart(props) {
    return (
        <div id="test-board-next" onClick={props.onClickNext}>   
            <img className='side' src='images/Restart.png'/>
            <p className='side'>Restart</p>
        </div>
    );
}

function Prev(props) {
    return (
        <div id="test-board-prev"  onClick={props.onClickPrev}>
            <img className='side' src='images/Prev.png'/>
            <p className='side'>Prev</p>
        </div>
    );
}


function PrevLight(props) {
    return (
        <div id="test-board-prevlight">
            <img id='side-light-img' src='images/Prev.png'/>
            <p id='side-light-text'>Prev</p>
        </div>
    );
}

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            // parameters for updating the status
            characterNumber: this.props.questionList.length,  // total number of characters
            characterIndex: 0,  // current character index to show
            prev: 0,  // state of the prev button, 0: hide, 1: show
            next: 1,  // state of the next button, 1:show, 2: change to restart

            // parameters for showing the interface
            correctNumber: 0,  // number of correct answers, shown in the score panel
            questionNumber: 0,  // number of answered questions, shown in the score panel
            character: this.props.questionList[0],  // question in the main panel, default the first one in the question list
            answer: "",  // answer in the main panel, default empty
            result: "",  // X/O in the main panel, default empty
            
        } 
        this.input_ref = React.createRef();  
    }

    // rest the numbers in the score panel
    onClickReset = () => {
        this.setState( { 
            correctNumber: 0,
            questionNumber: 0
        } );
    }

    // submit the answer in the main panel
    onSubmit = (event) => {

        // prevent refreshing the webpage
        event.preventDefault();

        // read the input content
        let input_answer = (new FormData(event.target)).get('inputanswer');

        // update the interface
        this.setState( {
            questionNumber: this.state.questionNumber + 1,
            answer: this.props.answerList[this.state.characterIndex],
        } );

        // check the answer
        if (input_answer.localeCompare(this.props.answerList[this.state.characterIndex], undefined, {sensitivity:'base'})==0) {
            // correct
            this.setState( { 
                result: "O",
                correctNumber: this.state.correctNumber + 1
            } );
        } else {
            // wrong
            this.setState( { 
                result: "X",
            } );
        }

    }

    /*
    onChangeMode = (event) => {
        console.log(event.target.value);
    }
    */

    // click the prev button
    onClickPrev = () => {

        // update the interface
        this.setState( { 
            characterIndex: this.state.characterIndex - 1,
            answer: "",
            result: ""
        } );

        // update the status of prev/next
        if ( this.state.characterIndex==1) {  // second page to first page
            this.setState( { 
                prev: 0
            } );
        } else if  ( this.state.characterIndex==this.state.characterNumber-1) {  // last page to second last page
            this.setState( { 
                next: 1
            } );
        } 

        // update the question in the main panel
        this.setState( (state) => ({
            character: this.props.questionList[state.characterIndex]
        }) )

        // clean up the input column
        this.input_ref.current.value = "";
    }

    // click the next/restart button
    onClickNext = () => {

        // update the interface
        this.setState( { 
            answer: "",
            result: ""
        } );

        // update the status of prev/next
        if ( this.state.characterIndex==this.state.characterNumber-1) {  // last page jump to first page
            this.setState( { 
                characterIndex: 0,
                prev: 0,
                next: 1
            } );
        } else if ( this.state.characterIndex==this.state.characterNumber-2) {  // second last page to last page
            this.setState({ 
                characterIndex: this.state.characterIndex + 1,
                next: 2
            } );
        } else if (this.state.characterIndex==0) {  // first page to second page
            this.setState({ 
                characterIndex: this.state.characterIndex + 1,
                prev: 1
            } );
        } else {
            this.setState({ 
                characterIndex: this.state.characterIndex + 1,
            } );
        }

        // update the question in the main panel
        this.setState( (state) => ({
            character: this.props.questionList[state.characterIndex]
        }) )

        // clean up the input column
        this.input_ref.current.value = "";
    }

    render() {
        return (
            <div className="test">
                <div id="title-panel">
                    <h2  className="jp">五十音　テスト</h2>
                </div>
                <div id="upper-panel">
                    <Info 
                        name={this.props.testName}
                        onChangeMode={this.onChangeMode}
                    />
                    <Score
                        correct={this.state.correctNumber}
                        question={this.state.questionNumber}
                        onClickReset={this.onClickReset}
                    />
                </div>
                <div id="lower-panel">
                    <Board
                        character={this.state.character}
                        answer={this.state.answer}
                        result={this.state.result}
                        onSubmit={this.onSubmit}
                        input_ref={this.input_ref}
                        onClickPrev={this.onClickPrev}
                        onClickNext={this.onClickNext}
                        prev={this.state.prev}
                        next={this.state.next}
                    />
                </div>
            </div>
        )
    }
}

let test_name = "ひらがな あ行"
let question_list = ["あ","い","う","え","お"]
let answer_list = ["a","i","u","e","o"]

ReactDOM.render(
    <Test testName={test_name} questionList={question_list} answerList={answer_list} />,
    document.getElementById('root')
)