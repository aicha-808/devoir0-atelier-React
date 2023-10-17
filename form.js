import React from 'react';

class Listetache extends React.Component {
  render() {
      return (
          <ul className="list-group mt-4">
              {this.props.items.map(tache => (
                  <li key={tache.id} className="list-group-item mb-3 d-flex justify-content-between">
                  {tache.text}
                  <div className="btn-group">
                      <button onClick={this.edit} type="button" className="btn btn-warning ">Modifier</button>
                      <button onClick={this.delete} type="button" className="btn btn-danger mx-1">supprimer</button>
                  </div>
                  </li>
              ))}
          </ul>
      )
  } 
}
export default Listetache;
