var Main=React.createClass({
	getInitialState(){
		return{label:"主页"}
	},
	onclick:function(label){
		if(this.state.label!=label){
			this.setState({label:label});
		}
	},
	render:function(){
		return(	
			<div className="main">	
			   <Header onclick={this.onclick} />
			   <Content label={this.state.label}/>
			   <Footer/>
			</div>		
			);
	}
})

React.render(
	<div>
	<Main/>
	</div>,
	document.getElementById("Blog")
	)