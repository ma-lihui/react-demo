import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import Menu from '../components/Menu'
import { INDEX_MENU } from '../constant'
import doc from '../doc'
import '../css/markdown.css'
import {  MarkdownPreview  } from 'react-marked-markdown';
import markdowndStyle from '../css/github-gist.css'

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:''
        };
        const { match } = this.props;
        const filename = match.params.nav;
        this.getData(filename);
    }
    componentWillReceiveProps(nextPorps,nextState){
        const { match } = nextPorps;
        const filename = match.params.nav;
        if(this.props.match.url !== nextPorps.match.url){
            this.getData(filename);
        }
    }
    getData(filename){
        if(doc[filename]){
            fetch( doc[filename] ).then (res => {
                return res.text();
            }).then( data => {
                this.setState({data})
            });
        }else {
            setTimeout(()=>this.setState({data:''}));
        }
    };
    render(){
        return  <MarkdownPreview ref="markdown" className="markdown" markedOptions={{style:markdowndStyle}} value={ this.state.data }/>;
        // return <ReactMarkdown className="markdown" style={markdowndStyle} source={this.state.data}/>;
    }
}
export default class Index extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const {match} = this.props;
      return (
          <div className="main">
              <Menu menuList={ INDEX_MENU } preUrl={match.url}/>
              <div className="content">
                  <Route path="/index" exact render={() => (
                    <Redirect to={`/index${INDEX_MENU[0].url}`}/>
                  )}/>
                  <Route path="/index/:nav" component={Content}/>
              </div>
          </div>
      );
  }
}
