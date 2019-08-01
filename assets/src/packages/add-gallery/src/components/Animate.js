import React from 'react';

export class Animate extends React.Component{
    constructor(props){
        super(props);
        this.tick=this.tick.bind(this);
    }
    componentDidMount(){
        this.init();
    }
    init(){
        const startState=this.getStartAttributes();
        this.setState({style:startState,tickCount:0});
        this.state=null;
        this.tickEnd=60*parseFloat(this.props.duration)
        this.step=this.getSteps(startState);
        this.units=this.getUnits();
        this.tick();
    }
    componentDidUpdate(prevProp,prevState){
       if(this.state===prevState){
            this.init();
       }
    }
    getStartAttributes(){
        const startAttr={},
              element=document.getElementsByClassName('animate-container')[0],
              elemStyles=window.getComputedStyle(element);
        for(var attr in this.props.start){
            if(this.props.start.hasOwnProperty(attr)){
                if(elemStyles[attr]===undefined) throw Error("Wrong style name "+attr+". Please enter valid name of css property.");
                startAttr[attr]=this.props.start[attr]==="auto"?parseInt(elemStyles[attr]):parseInt(this.props.start[attr]);
            }
        }
        return startAttr;
    }
    getSteps(startState){
        const steps={}
        for(var attr in this.props.start){
            if(this.props.start.hasOwnProperty(attr)){
                if(this.props.finish[attr]===undefined) throw Error("You don`t set finish property of attribute "+attr+".")
                steps[attr]=(parseFloat(this.props.finish[attr])-parseFloat(startState[attr]))/this.tickEnd;
            }
        }
        return steps;
    }
    getUnits(){
        const units={},
              pattern=/([a-z]*)/g;
        for(var attr in this.props.finish){
            if(this.props.finish.hasOwnProperty(attr)){
                var property=this.props.finish[attr];
                if((typeof property)!=="string") {
                    property+="";
                }
                var matches=property.match(pattern);
                units[attr]=matches[1];
            }
        }
        return units;
    }
    tick(){
        if(!this.state){
            window.requestAnimationFrame(this.tick);
            return;
        }
        const state=this.state,
              newState={
                  style:{}
                };
        newState.status="ticking";
        for(var attr in state.style){
            if(state.style.hasOwnProperty(attr)){
                newState.style[attr]=state.style[attr]+this.step[attr];
            }
        }
        newState.tickCount=state.tickCount+1;
        if(newState.tickCount<this.tickEnd+1){
            this.setState(newState);
            window.requestAnimationFrame(this.tick);
        }else {
            this.setState({style:{...this.props.finish},tickCount:this.tickEnd,status:"ready"});
        }
    }
    getStylesWithUnits(){
        if(!this.state)return {};
        const styles={},
              state=this.state.style;
        for(var attr in state){
            if(this.props.start.hasOwnProperty(attr)){
                if(this.units[attr]===undefined)throw Error("Units was not set for property "+attr);
                styles[attr]=state[attr]+this.units[attr];
            }
        }
        return styles;
    }
    render(){
        const style=this.getStylesWithUnits();
        return(
            <div className="animate-container" style={style}>
                {this.props.children}
            </div>
        )
    }
}