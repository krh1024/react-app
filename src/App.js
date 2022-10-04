import React from "react";
import Food from "./components/Food";

// const foodIlike = [
//     {id: 1,name:"kimchi", src: "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg", rating: 3},
//     {id: 2,name:"sam", src: "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg", rating: 3.1},
//     {id: 3,name:"ramyeon", src: "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg", rating: 3.2}
// ];

// function App() {
//     return (
//         <main className="App">
//             {foodIlike.map(dish => (
//                 <Food key={dish.id} name={dish.name} src={dish.src} rating={dish.rating} />
//             ))}
//         </main>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        alert("생성?");
    }
    state = {
        count: 0
    };

    plus = () => {
        this.setState( st => ({ count: st.count +1}));
    }
    minus = () => {
        this.setState({
            count:this.state.count - 1
        });
    }
    componentDidMount() {
        console.log("123"); 
    }
    componentWillUnmount() {
        console.log ("refrash?"); 
    } 
    render() {
        return (
            <React.StrictMode>
                <div>
                    <h1>state is {this.state.count}</h1>
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.minus}>-</button>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;
