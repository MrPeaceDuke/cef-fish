import "./styles.css";
import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import Product from "./components/product";

import { ReactComponent as Logo } from "./img/logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0,
      products: [
        {
          name: "salmon",
          category: 0,
          title: "Лосось",
          price: 120,
          rare: {
            color: "#ACACAC",
            text: "Очень длинный обычный вид 100% максимум"
          },
          inventory: 10
        },
        {
          name: "mackerel",
          category: 0,
          title: "Макрель",
          price: 520,
          rare: {
            color: "#ACACAC33",
            text: "Обычный вид"
          },
          inventory: 3
        },
        {
          name: "sturgeon",
          category: 0,
          title: "Осетр",
          price: 240,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 15
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "black",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "gray",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 0,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 1,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 1,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "trout",
          category: 1,
          title: "Радужная форель",
          price: 70,
          rare: {
            color: "red",
            text: "Обычный вид"
          },
          inventory: 5
        },
        {
          name: "stingray",
          category: 1,
          title: "Скат",
          price: 230,
          rare: {
            color: "green",
            text: "Легендарный вид"
          },
          inventory: 12
        },
        {
          name: "cod",
          category: 1,
          title: "Треска",
          price: 700,
          rare: {
            color: "gray",
            text: "Обычный вид"
          },
          inventory: 6
        }
      ],
      selectedProductIndex: -1,
      count: 1
    };
  }
  switchCategory() {
    this.setState({
      selectedCategory: this.state.selectedCategory ? 0 : 1,
      count: 1,
      selectedProductIndex: -1
    });
  }
  selectProduct(value) {
    this.setState({
      selectedProductIndex:
        value === this.state.selectedProductIndex ? -1 : value,
      count: 1
    });
  }
  changeSlider(value) {
    this.setState({
      count: value
    });
  }
  render() {
    let selectedProduct;
    if (this.state.selectedProductIndex !== -1) {
      selectedProduct = this.state.products.filter(
        (el) => el.category === this.state.selectedCategory
      )[this.state.selectedProductIndex];
    }
    return (
      <div className="sellFish">
        <div className="mainBlock">
          <div className="shop">
            <div className="categories">
              <span
                className={!this.state.selectedCategory && "selected"}
                onClick={() => this.switchCategory()}
              >
                Рыбы
              </span>
              <span
                className={this.state.selectedCategory && "selected"}
                onClick={() => this.switchCategory()}
              >
                Морепродукты
              </span>
            </div>
            <div className="products" key={this.state.selectedCategory}>
              {this.state.products
                .filter((el) => el.category === this.state.selectedCategory)
                .map((el, i) => (
                  <Product
                    key={i}
                    selected={i === this.state.selectedProductIndex}
                    name={el.title}
                    price={el.price}
                    count={el.inventory}
                    rare={el.rare}
                    mr={`${(i + 1) % 3 !== 0 && "1.3vh"}`}
                    onClick={() => this.selectProduct(i)}
                  />
                ))}
            </div>
          </div>
          <div
            className="cart animate__animated animate__fadeIn"
            key={this.state.selectedProductIndex}
          >
            {this.state.selectedProductIndex !== -1 && (
              <React.Fragment>
                <Logo />
                <h5>Выбранный вид:</h5>
                <h2>{selectedProduct.title}</h2>
                <h5>Количество:</h5>
                <div className="slider_count">
                  <Slider
                    style={{
                      width: "70%"
                    }}
                    onChange={(e) => this.changeSlider(e)}
                    min={1}
                    step={1}
                    max={selectedProduct.inventory}
                  />
                  <span className="count">{this.state.count}</span>
                </div>
                <h4>Сумма выплаты:</h4>
                <h2>$ {selectedProduct.price * this.state.count}</h2>
                <div className="sellBtn">Продать рыбу</div>
                <div className="exitBtn">Выход</div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
