import React, { Component} from "react";
import Header from "../components/Header";

class SpotApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isloaded:false,
            items: [],
            page:0,
        };
        this.loadingRef = React.createRef();

    }
    getSpot =(page)=>{
        console.log("a fetch")
        let URL1 = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip="
        let URL2 = (page*30).toString()
        let URL3 = "&$format=JSON"
        fetch(URL1+URL2+URL3,{method: "GET"})
          .then(res=>res.json())
          .then(
            (result) => {
              this.setState(s=>{
                s.isloaded = true
                Array.prototype.push.apply(s.items, result);
                return s
                })
                console.log(result)
            }
            ,
            (error) => {
              this.setState({
                error:error,
                isloaded:true
              });
            }
            )
        // console.log(this.state.items)
    }
    handleObserver=()=>{
        let newpage = this.state.page + 1
        this.setState({page:newpage})
        this.getSpot(newpage)
    }
    componentWillUnmount() {
        this._isMounted = false;
        // kill any pending calculations
    } 
    componentDidMount() {
        let page = 0
        this.getSpot(page)
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
          };
        
        this.observer = new IntersectionObserver(this.handleObserver, options)
        this.observer.observe(this.loadingRef.current);
      }

    renderSpotList = () =>{
        const { error, isloaded, items } = this.state;
        if (error) {return <div>Error: {error.message}</div> }
        else if (!isloaded){return <img src="../../public/img/loading.gif" id="loading" alt="back"></img>}
        else{
            return(
                <ul className="scenic-spot__list" id="spot-list" >
                <br></br>
                {items.map((item)=>{
                    return(
                    <li key={item.ID} >
                        <h1 style={{whiteSpace: "nowrap"}}>{item.Name}</h1>
                        {(()=>{
                            if (Object.keys(item.Picture).length === 0){
                                return <label style={{fontWeight:"bold"}}>暫時沒有圖片喔~</label>
                            }else{
                            return( 
                                <img src={item.Picture["PictureUrl1"]} style={{maxWidth: "30em",maxHeight:"25em"}} title={item.Picture["PictureDescription1"]} alt={item.Picture["PictureDescription1"]}/>
                            )
                            }
                        })()}
                        <div>{item.Description}</div>
                    </li>
                    )
                })}
                </ul>
            )
        }
    }
    render(){
        return(
            <div className={this.props.className}>
                {/* <div className="scenic-spot__view-buttons">
                    <button >全部景點列表</button>
                    <button >縣市景點列表</button>
                </div> */}
                <Header text="Scenic Spot (All Scenic Spot))" class="scenic-spot__header"/>
                <section className="scenic-spot__main">
                {this.renderSpotList()}
                </section>

                <div
                    ref={this.loadingRef}
                    style={{height:"50px",width:"100px"}}
                    >
                    <label>Loading...</label>
                </div>
            </div>
        )
    }
}
export default SpotApp;
