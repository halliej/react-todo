var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component{
    handleSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        if (todoText.trim().length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit.bind(this)} className="add-todo">
                    <input type="text" ref="todoText" placeholder="Enter todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
};

export default connect() (AddTodo);
