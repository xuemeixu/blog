var Header=React.createClass({
	render:function(){
		return(
			<div className="header">
			  <div className="title">
			     <span className="logo-line-top">
			       <i></i>
			     </span>
			        <h2>xmx的博客</h2>
			     <span className="logo-line-bottom">
			       <i></i>
			     </span>
			  </div>
			  <ul class="nav nav-tabs">
           		<li  onClick={this.props.onclick.bind(null,"主页")}>主页</li>
  				<li onClick={this.props.onclick.bind(null,"日志")}>日志</li>
  				<li role="presentation"><a href="https://github.com/xuemeixu">项目</a></li>
 				<li role="presentation"><a href="../mylife/myself.html">关于我</a></li>
			</ul>
			</div>
		);
	}
})