import React, { Component } from "react"
import { HashRouter, Route, NavLink,withRouter } from "react-router-dom"
import  SpotAll  from "./SpotAll.js"
import  SpotCity  from "./SpotCity.js"
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            choosingCity:false,
        }
    }
    render() {
        return (
            <HashRouter>
                <div className="scenic-spot__view-buttons">
                <NavLink to="/scenicSpot"><button>全部景點列表</button></NavLink>
                <button onClick={()=>{this.setState((s)=>({choosingCity:!s.choosingCity}))}}>縣市景點列表</button>
                {this.state.choosingCity?
                <ul className="city-buttons">
                    <NavLink to="/scenicSpot/Taipei"><button>臺北市</button></NavLink>
                    <NavLink to="/scenicSpot/NewTaipei"><button>新北市</button></NavLink>
                    <NavLink to="/scenicSpot/Taoyuan"><button>桃園市</button></NavLink>
                    <NavLink to="/scenicSpot/Taichung"><button>臺中市</button></NavLink>
                    <NavLink to="/scenicSpot/Tainan"><button>臺南市</button></NavLink>
                    <NavLink to="/scenicSpot/Kaohsiung"><button>高雄市</button></NavLink>
                    <NavLink to="/scenicSpot/Keelung"><button>基隆市</button></NavLink>
                    <NavLink to="/scenicSpot/Hsinchu"><button>新竹市</button></NavLink>
                    <NavLink to="/scenicSpot/HsinchuCounty"><button>新竹縣</button></NavLink>
                    <NavLink to="/scenicSpot/MiaoliCounty"><button>苗栗縣</button></NavLink>
                    <NavLink to="/scenicSpot/ChanghuaCounty"><button>彰化縣</button></NavLink>
                    <NavLink to="/scenicSpot/NantouCounty"><button>南投縣</button></NavLink>
                    <NavLink to="/scenicSpot/YunlinCounty"><button>雲林縣</button></NavLink>
                    <NavLink to="/scenicSpot/Chiayi"><button>嘉義市</button></NavLink>
                    <NavLink to="/scenicSpot/ChiayiCounty"><button>嘉義縣</button></NavLink>
                    <NavLink to="/scenicSpot/PingtungCounty"><button>屏東縣</button></NavLink>
                    <NavLink to="/scenicSpot/YilanCounty"><button>宜蘭縣</button></NavLink>
                    <NavLink to="/scenicSpot/HualienCounty"><button>花蓮縣</button></NavLink>
                    <NavLink to="/scenicSpot/TaitungCounty"><button>臺東縣</button></NavLink>
                    <NavLink to="/scenicSpot/KinmenCounty"><button>金門縣</button></NavLink>
                    <NavLink to="/scenicSpot/PenghuCounty"><button>澎湖縣</button></NavLink>
                    <NavLink to="/scenicSpot/LienchiangCounty"><button>連江縣</button></NavLink>
                </ul>
                :
                null
                }
                </div>
                <hr /> 
                <Route exact path="/scenicSpot" component={withRouter(SpotAll)} />
                <Route path="/scenicSpot/:City" component={withRouter(SpotCity)} />
            </HashRouter>
        )
    }
}
export default (Main);