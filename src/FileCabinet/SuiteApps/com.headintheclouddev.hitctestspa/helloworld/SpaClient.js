define(["exports","@uif-js/core/jsx-runtime","@uif-js/component"],(function(n,t,e){"use strict";function o(){return t.jsx(e.ContentPanel,{horizontalAlignment:e.ContentPanel.HorizontalAlignment.CENTER,verticalAlignment:e.ContentPanel.VerticalAlignment.CENTER,children:t.jsx(e.Heading,{children:"Hello World!"})})}n.run=function(n){console.log("SpaClient - run context",n),n.setLayout("application"),n.setContent(t.jsx(o,{}))}}));
