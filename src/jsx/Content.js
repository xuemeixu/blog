var Content=React.createClass({
	getInitialState(){
     return{tag:"ALL",list:true}
	},
	onclick:function(tag){
		if(this.state.tag!=tag){
			this.setState({tag:tag});
			this.setState({list:true});
		}else{
			this.setState({list:true});
		}

	},
	changeClick:function(id){
		this.setState({list:false,id:id});
	},
   
	render:function(){
		var label=this.props.label;
		if(label=="主页")
		{
		return(
			<div className="content tab-content">
			 <div className="tab-pane active" id="content1">
			  <Content_left onclick={this.onclick}/>
		      <Content_right changeClick={this.changeClick} tag={this.state.tag} id={this.state.id} list={this.state.list}/>
		     </div>
			</div>);
		}
		if(label=="日志"){
			return(<div className="content2 tab-content">
			<div className="tab-pane active"  id="content2"> 
			  <section>
			    <div className="summary">
			    	<span className="dot"></span>
			    	<span className="summary_title">Um...!这里有3篇日志。</span>
			    </div>
			    <div className="dot_title">
			     	<span className="dot"></span>
			    	<div className="con2_title">2016</div>
			    </div>
			    <artical className="artical1">
			      	<span className="dot"></span>
			     <div className="ar_content">
			        <div className="time">05-07</div>
			       	<div className="ar_content1">JavaScript的基本数据类型</div>
			      </div>
			    </artical>
			    <artical className="artical2">
			      <span className="dot"></span>
			      <div className="ar_content">
			       	  <div className="time">05-07</div>
			       	  <div className="ar_content1">Linux内核编译</div>
			      </div>
			    </artical>
			    <artical className="artical3">
			      <span className="dot"></span>
			      <div className="ar_content">
			       	  <div className="time">05-28</div>
			       	  <div className="ar_content1">前端之路</div>
			      </div>
			    </artical>
			  </section>
			</div>
			</div>);
		}
	}
})