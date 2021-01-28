'use strict';

// the info panel

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
    _inherits(Info, _React$Component);

    function Info() {
        _classCallCheck(this, Info);

        return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
    }

    _createClass(Info, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "test-info" },
                React.createElement(
                    "p",
                    { className: "jp", id: "info-text" },
                    this.props.name
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.props.onSubmitMode },
                    React.createElement("input", { type: "radio", name: "mode", value: "2", onChange: this.props.onChangeMode, defaultChecked: true }),
                    React.createElement(
                        "span",
                        null,
                        " In order  "
                    )
                )
            );
        }
    }]);

    return Info;
}(React.Component);

// the score panel


var Score = function (_React$Component2) {
    _inherits(Score, _React$Component2);

    function Score() {
        _classCallCheck(this, Score);

        return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).apply(this, arguments));
    }

    _createClass(Score, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "test-score" },
                React.createElement(
                    "p",
                    { className: "narrow-text", id: "score-text" },
                    this.props.correct,
                    " / ",
                    this.props.question
                ),
                React.createElement(
                    "button",
                    { id: "reset-btn", onClick: this.props.onClickReset },
                    "Reset"
                )
            );
        }
    }]);

    return Score;
}(React.Component);

// the main panel


var Board = function (_React$Component3) {
    _inherits(Board, _React$Component3);

    function Board() {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
    }

    _createClass(Board, [{
        key: "render",
        value: function render() {

            var prev = void 0,
                next = void 0;

            // check the status of prev button
            if (this.props.prev == 1) {
                prev = React.createElement(Prev, { onClickPrev: this.props.onClickPrev });
            } else {
                // this.props.prev==0
                prev = React.createElement(PrevLight, null);
            }

            // check the status of next button
            if (this.props.next == 1) {
                next = React.createElement(Next, { onClickNext: this.props.onClickNext });
            } else {
                // this.props.next==2
                next = React.createElement(Restart, { onClickNext: this.props.onClickNext });
            }

            return React.createElement(
                "div",
                { id: "test-board" },
                prev,
                React.createElement(
                    "div",
                    { id: "test-board-center" },
                    React.createElement(
                        "p",
                        { className: "jp", id: "character" },
                        this.props.character
                    ),
                    React.createElement(
                        "p",
                        { className: "narrow-text" },
                        this.props.answer,
                        React.createElement("br", null)
                    ),
                    React.createElement(
                        "form",
                        { autoComplete: "off", onSubmit: this.props.onSubmit },
                        React.createElement("input", { id: "inputanswer", name: "inputanswer", type: "text", spellCheck: "false", ref: this.props.input_ref }),
                        React.createElement("br", null),
                        React.createElement(
                            "button",
                            { id: "enter-btn" },
                            "Enter"
                        )
                    ),
                    React.createElement(
                        "p",
                        { className: "narrow-text", id: "result" },
                        this.props.result
                    )
                ),
                next
            );
        }
    }]);

    return Board;
}(React.Component);

function Next(props) {
    return React.createElement(
        "div",
        { id: "test-board-next", onClick: props.onClickNext },
        React.createElement("img", { className: "side", src: "images/Next.png" }),
        React.createElement(
            "p",
            { className: "side" },
            "Next"
        )
    );
}

function Restart(props) {
    return React.createElement(
        "div",
        { id: "test-board-next", onClick: props.onClickNext },
        React.createElement("img", { className: "side", src: "images/Restart.png" }),
        React.createElement(
            "p",
            { className: "side" },
            "Restart"
        )
    );
}

function Prev(props) {
    return React.createElement(
        "div",
        { id: "test-board-prev", onClick: props.onClickPrev },
        React.createElement("img", { className: "side", src: "images/Prev.png" }),
        React.createElement(
            "p",
            { className: "side" },
            "Prev"
        )
    );
}

function PrevLight(props) {
    return React.createElement(
        "div",
        { id: "test-board-prevlight" },
        React.createElement("img", { id: "side-light-img", src: "images/Prev.png" }),
        React.createElement(
            "p",
            { id: "side-light-text" },
            "Prev"
        )
    );
}

var Test = function (_React$Component4) {
    _inherits(Test, _React$Component4);

    function Test(props) {
        _classCallCheck(this, Test);

        var _this4 = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

        _this4.onClickReset = function () {
            _this4.setState({
                correctNumber: 0,
                questionNumber: 0
            });
        };

        _this4.onSubmit = function (event) {

            // prevent refreshing the webpage
            event.preventDefault();

            // read the input content
            var input_answer = new FormData(event.target).get('inputanswer');

            // update the interface
            _this4.setState({
                questionNumber: _this4.state.questionNumber + 1,
                answer: _this4.props.answerList[_this4.state.characterIndex]
            });

            // check the answer
            if (input_answer.localeCompare(_this4.props.answerList[_this4.state.characterIndex], undefined, { sensitivity: 'base' }) == 0) {
                // correct
                _this4.setState({
                    result: "O",
                    correctNumber: _this4.state.correctNumber + 1
                });
            } else {
                // wrong
                _this4.setState({
                    result: "X"
                });
            }
        };

        _this4.onClickPrev = function () {

            // update the interface
            _this4.setState({
                characterIndex: _this4.state.characterIndex - 1,
                answer: "",
                result: ""
            });

            // update the status of prev/next
            if (_this4.state.characterIndex == 1) {
                // second page to first page
                _this4.setState({
                    prev: 0
                });
            } else if (_this4.state.characterIndex == _this4.state.characterNumber - 1) {
                // last page to second last page
                _this4.setState({
                    next: 1
                });
            }

            // update the question in the main panel
            _this4.setState(function (state) {
                return {
                    character: _this4.props.questionList[state.characterIndex]
                };
            });

            // clean up the input column
            _this4.input_ref.current.value = "";
        };

        _this4.onClickNext = function () {

            // update the interface
            _this4.setState({
                answer: "",
                result: ""
            });

            // update the status of prev/next
            if (_this4.state.characterIndex == _this4.state.characterNumber - 1) {
                // last page jump to first page
                _this4.setState({
                    characterIndex: 0,
                    prev: 0,
                    next: 1
                });
            } else if (_this4.state.characterIndex == _this4.state.characterNumber - 2) {
                // second last page to last page
                _this4.setState({
                    characterIndex: _this4.state.characterIndex + 1,
                    next: 2
                });
            } else if (_this4.state.characterIndex == 0) {
                // first page to second page
                _this4.setState({
                    characterIndex: _this4.state.characterIndex + 1,
                    prev: 1
                });
            } else {
                _this4.setState({
                    characterIndex: _this4.state.characterIndex + 1
                });
            }

            // update the question in the main panel
            _this4.setState(function (state) {
                return {
                    character: _this4.props.questionList[state.characterIndex]
                };
            });

            // clean up the input column
            _this4.input_ref.current.value = "";
        };

        _this4.state = {

            // parameters for updating the status
            characterNumber: _this4.props.questionList.length, // total number of characters
            characterIndex: 0, // current character index to show
            prev: 0, // state of the prev button, 0: hide, 1: show
            next: 1, // state of the next button, 1:show, 2: change to restart

            // parameters for showing the interface
            correctNumber: 0, // number of correct answers, shown in the score panel
            questionNumber: 0, // number of answered questions, shown in the score panel
            character: _this4.props.questionList[0], // question in the main panel, default the first one in the question list
            answer: "", // answer in the main panel, default empty
            result: "" // X/O in the main panel, default empty

        };
        _this4.input_ref = React.createRef();
        return _this4;
    }

    // rest the numbers in the score panel


    // submit the answer in the main panel


    /*
    onChangeMode = (event) => {
        console.log(event.target.value);
    }
    */

    // click the prev button


    // click the next/restart button


    _createClass(Test, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "test" },
                React.createElement(
                    "div",
                    { id: "title-panel" },
                    React.createElement(
                        "h2",
                        { className: "jp" },
                        "\u4E94\u5341\u97F3\u3000\u30C6\u30B9\u30C8"
                    )
                ),
                React.createElement(
                    "div",
                    { id: "upper-panel" },
                    React.createElement(Info, {
                        name: this.props.testName,
                        onChangeMode: this.onChangeMode
                    }),
                    React.createElement(Score, {
                        correct: this.state.correctNumber,
                        question: this.state.questionNumber,
                        onClickReset: this.onClickReset
                    })
                ),
                React.createElement(
                    "div",
                    { id: "lower-panel" },
                    React.createElement(Board, {
                        character: this.state.character,
                        answer: this.state.answer,
                        result: this.state.result,
                        onSubmit: this.onSubmit,
                        input_ref: this.input_ref,
                        onClickPrev: this.onClickPrev,
                        onClickNext: this.onClickNext,
                        prev: this.state.prev,
                        next: this.state.next
                    })
                )
            );
        }
    }]);

    return Test;
}(React.Component);

var test_name = "ひらがな あ行";
var question_list = ["あ", "い", "う", "え", "お"];
var answer_list = ["a", "i", "u", "e", "o"];

ReactDOM.render(React.createElement(Test, { testName: test_name, questionList: question_list, answerList: answer_list }), document.getElementById('root'));