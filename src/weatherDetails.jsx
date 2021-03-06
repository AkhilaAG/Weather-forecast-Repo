var React= require('react');
//var Button= require('./button');
var List=require('./list');

module.exports=React.createClass({
  render:function(){
       
        var list=this.props.city.list.map(function(item){
           
            return <List key={item.dt} data={item} 
                      
                       />
        }.bind(this));
        return <div className="row">

            <div className="col-md-12 weather-background">
                <div className="panel panel-default weather-panel">
                    <div className="panel-heading"><h3>Current weather of {this.props.city.name}*</h3></div>
                    <div className="row">
                       
                        <div className="col-md-11 col-md-offset-1">
                            
                            {list}

                           
                        </div>
                    </div>

                </div>
            </div>

        </div>
    }
})