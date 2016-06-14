var Content_right=React.createClass({
	render:function(){
		var list=this.props.list;
		var tag=this.props.tag;
		var articalList=ARTICLE;
		var TagHTML=articalList.filter(v=>{
			if(tag=="ALL")
				return true;
			return v.tag==tag;
		}).reverse().map((articalList)=>{
		return(
			
			 <div className="cot_rig_cot">
			   <h2 className="title" onClick={this.props.changeClick.bind(null,articalList.id)}>{articalList.title}</h2>
			   <div className="note">
			    <p className="note_one">发表于：<span>{articalList.date}</span></p>
			    <p>归类于：<span>{articalList.tag}</span></p>
			   </div>
			   <p className="des">{articalList.description}</p>
			   <div className="button" onClick={this.props.changeClick.bind(null,articalList.id)}>read more</div>
			 </div>
			
			);
		});
		if (list==true) {
		  return(<div className="content_right">
			 {TagHTML}
			  </div>);
		}else{
			return(
			<div className="cot_rig_cot2">
			  <h2 className="title">{ARTICLE[this.props.id-1].title}</h2>
			  <div className="note">
			    <p>发表于：<span>{ARTICLE[this.props.id-1].date}</span></p>
			    <p>归类于：<span>{ARTICLE[this.props.id-1].tag}</span></p>
			   </div>
			   <div className="ati_content" dangerouslySetInnerHTML={{__html:marked(ARTICLE[this.props.id-1].content)}}></div>
			</div>
			);
		}
	}
})
