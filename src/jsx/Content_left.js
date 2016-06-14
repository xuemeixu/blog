var Content_left=React.createClass({
	render:function(){
		return(
			<div className="content_left">
			  <ul>目录
			   <li onClick={this.props.onclick.bind(null,"ALL")}>ALL</li>
			   <li onClick={this.props.onclick.bind(null,"HTML")}>HTML</li>
			   <li onClick={this.props.onclick.bind(null,"CSS")}>CSS</li>
			   <li onClick={this.props.onclick.bind(null,"JavaScript")}>JavaScript</li>
			   <li onClick={this.props.onclick.bind(null,"REACT")}>REACT</li>
			   <li onClick={this.props.onclick.bind(null,"Project")}>Project</li>
			   <li onClick={this.props.onclick.bind(null,"个人收录")}>个人收录</li>
			   <li onClick={this.props.onclick.bind(null,"随笔")}>随笔</li>
			   <li onClick={this.props.onclick.bind(null,"其他")}>其他</li>			   
			  </ul>
			</div>
			);
	}
})