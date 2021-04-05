import React, { Component } from "react"
import { HashRouter, Route, NavLink  ,withRouter,Switch} from "react-router-dom"
import  SpotApp  from "./SpotApp.js"
import  SpotCity  from "./SpotCity.js"
import { useHistory } from 'react-router'
class MyRouter extends Component {
    constructor(props){
        super(props);
    }
    routerTo=(v)=> {
        console.log(this.props.history)
        this.props.history.push({pathname: "/scenicSpot/"+v, state: {data: v}})
      }
    render(){
    return(
        
                <div key={this.props.location.key}>
                    
        {/* <button onClick={()=>this.routerTo("Taoyuan")}>桃園市</button>
        <button onClick={()=>this.routerTo("Taipei")}>台北市</button> */}
                    <div className="scenic-spot__view-buttons">
                        <ul className="city-buttons">
                            <NavLink to="/scenicSpot/Taipei"><button>臺北市</button></NavLink>
                            <NavLink to="/scenicSpot/NewTaipei"><button>新北市</button></NavLink>
                            <NavLink to="/scenicSpot/Taoyuan"><button onClick={()=>this.routerTo("Taoyuan")}>桃園市</button></NavLink>
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
                            <NavLink to="/"><button>首頁</button></NavLink>
                        </ul>
                    </div>
                    <hr /> 
                    <Switch>
                    <Route path="/scenicSpot/:City" component={withRouter(SpotCity)} />
                    <Route exact path="/scenicSpot" component={withRouter(SpotApp)} />
                    </Switch>
                    {/* <Route exact path="/" component={Main} /> */}
                </div>
            
    )
}}
export default (MyRouter);