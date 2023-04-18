import React from 'react';

class Sayac extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sayacDegeri: 0 };
  }

  artir = () => {
    this.setState({ sayacDegeri: this.state.sayacDegeri + 1 });
  };

  azalt = () => {
    this.setState({ sayacDegeri: this.state.sayacDegeri - 1 });
  };

  sifirla = () => {
    this.setState({ sayacDegeri: 0 });
  };

  render() {
    return (
      <div className="sayac-container">
        <h1 className="sayac-header">Sayaç Değeri: {this.state.sayacDegeri}</h1>
        <button className="sayac-button" onClick={this.artir}>Artır</button>
        <button className="sayac-button" onClick={this.azalt}>Azalt</button>
        <button className="sayac-button" onClick={this.sifirla}>Sıfırla</button>
      </div>
    );
  }
}

export default Sayac;
