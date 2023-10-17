import React from 'react';
import Listetache from './form';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: ''
        }
    }


    inputValue = (e) => {
        this.setState({
            text: e.target.value
        })
        // console.log(e.target.value);
    }

    // ecouter la validation du formulaire
    ajoutTache = (e) => {
       e.preventDefault();
        if (this.state.text !== " ") {
            const newItem = {
                text: this.state.text,
                id: Date.now()
            }
            this.setState(state => ({
                items: state.items.concat(newItem),
                text: ''
            }))
        }
    }

    // gestion des evenements sur les bouttons
    edit = () => {
      console.log("succes");
    }


    render() {
        return (
            <div className="container pt-5 text-light">
                <div className="row">
                    <div className="col-6 mx-auto bg-dark p-3">
                        <h3 className="text-primary ">Todo-list</h3>
                        <form onSubmit={this.ajoutTache} className="input-group">
                            <input onChange={this.inputValue} type="text" className="form-control"  placeholder="ajouter une tache" value={this.state.text}></input>
                            <button className="btn btn-primary"> Ajouter </button>
                        </form>
                        <Listetache items={this.state.items} />
                    </div>
                </div>
            </div>
        );   
    }
}

export default Todo;

