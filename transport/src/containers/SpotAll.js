import React, {Component} from "react";
import Header from "../components/Header";
import {withRouter } from "react-router-dom"

class SpotAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            readyToLoad:true,
            isloaded:false,
            items: [],
            page:0,
        };
        this.loadingRef = React.createRef();
    }

    // When the page is first load, we call getSpot once manually. 
    // Afterwards, when the scrolling window intersects with ref, getSpot will be triggered.
    getSpot =(page)=>{
        this.setState({isloaded:false})
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
            }
            ,
            (error) => {
              this.setState({
                error:error,
                isloaded:true
              });
            }
            )
            if(page===0){
                setTimeout(()=>{
                    let newpage = 1
                    this.setState({page:newpage})      
                },1000)
            }
    }

    // When the scrolling window intersects with the ref, trigger the handleObserver().
    handleObserver=()=>{
        if(this.state.readyToLoad && this.state.page!==0 && this.state.isloaded){
            this.setState({readyToLoad:false})
            let gopage=this.state.page
            this.getSpot(gopage)
            this.setState({page:gopage+1})  
            setTimeout(()=>{
                this.setState({readyToLoad:true})
                console.log("wait ok!")
            },1000) // To prevent loading page too fast or loading two pages at the same time.
            
        }
    }
    // When the Router detects a URL change, this will be triggered.
    componentDidMount() {
        let page = 0
        this.getSpot(page)
        this.setState({readyToLoad:false})
        setTimeout(()=>{
            this.setState({readyToLoad:true})
            console.log("wait ok!")
        },1000)
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
          };
        
        this.observer = new IntersectionObserver(this.handleObserver, options)
        this.observer.observe(this.loadingRef.current);
      }

    renderSpotList = () =>{
        const { error, items } = this.state;
        if (error) {return <div>Error: {error.message}</div> }
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
export default withRouter(SpotAll);
