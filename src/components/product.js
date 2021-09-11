import React from "react";
import "../styles.css";

import Logo from "../img/logo.svg";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`product ${
          this.props.selected && "selected"
        } animate__animated animate__fadeIn`}
        style={{
          marginRight: this.props.mr
        }}
        onClick={() => this.props.onClick()}
      >
        <img className="backImg" src={Logo} />
        {this.props.selected && (
          <div className="selectedDiv animate__animated animate__fadeIn animate__faster">
            Выбрано
          </div>
        )}

        <div className="productInfo">
          <div
            className="rare"
            style={{
              backgroundColor: this.props.rare.color
            }}
          >
            {this.props.rare.text}
          </div>
          <div className="productInfo_bottom">
            <div className="productInfo_bottom_col">
              <h3>{this.props.name}</h3>
              <div>
                <span>Цена за 1 шт:</span>
                <span>${this.props.price}</span>
              </div>
              <div>
                <span>В инвентаре:</span>
                <span>{this.props.count} шт.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
