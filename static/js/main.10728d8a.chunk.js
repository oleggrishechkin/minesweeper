(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{22:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var r,o,l,a,i,c=t(1),u=t.n(c),s=t(9),b=t.n(s),f=(t(22),t(3)),d=t(5),g=t(4),j=t(2),O=Object(j.createTagged)(null),v=function(e,n){for(var t,r=0,o=-1;o<=1;++o)for(t=-1;t<=1;++t){var l,a;(null===(a=null===(l=e.board[t+n.row])||void 0===l?void 0:l[o+n.col])||void 0===a?void 0:a.isBomb)&&++r}return r||null},m=function(e,n){for(var t,r,o,l,a=[n];a.length;)if((t=a.pop())&&!t.isOpened&&!t.isFlag&&(t.isOpened=!0,t.bombCount=v(e,t),e.cells-=1,!t.bombCount))for(o=-1;o<=1;++o)for(l=-1;l<=1;++l){var i;!(r=null===(i=e.board[l+t.row])||void 0===i?void 0:i[o+t.col])||-1!==a.indexOf(r)||r.isOpened||r.isFlag||a.push(r)}return e},p=t(17),x=t(13),h=function(e){return Object(x.a)(Object(x.a)({},e),{},{board:Object(p.a)(e.board)})},y=Object(j.createTagged)(null),w=Object(j.createTagged)(null),T=function(e){for(var n,t=0,r=e.board.length,o=e.board[0].length;t<r;++t)for(n=0;n<o;n++)e.board[t][n].isBomb&&(e.board[t][n].isFlag=!0);return e},B=function(){y(Date.now()),w("win"),O((function(e){return T(h(e))}))},k=function(e){for(var n,t=0,r=e.board.length,o=e.board[0].length;t<r;++t)for(n=0;n<o;n++)e.board[t][n].isBomb&&(e.board[t][n].isOpened=!0);return e},S=function(){y(Date.now()),w("lose"),O((function(e){return k(h(e))}))},C=function(e){e.isOpened||e.isFlag||(e.isBomb?S():(O((function(n){return m(h(n),e)})),0===O().cells&&B()))},F=function(e,n){for(var t,r,o=0,l=!1,a=-1;a<=1;++a)for(t=-1;t<=1;++t){var i,c,u;(null===(c=r=null===(i=e.board[t+n.row])||void 0===i?void 0:i[a+n.col])||void 0===c?void 0:c.isFlag)?o++:(null===(u=r)||void 0===u?void 0:u.isBomb)&&(l=!0)}return o===n.bombCount?l?-1:1:0},M=function(e,n){for(var t,r=-1;r<=1;++r)for(t=-1;t<=1;++t){var o;m(e,null===(o=e.board[t+n.row])||void 0===o?void 0:o[r+n.col])}return e},D=function(e){var n=F(O(),e);0!==n&&(-1!==n?(O((function(n){return M(h(n),e)})),0===O().cells&&B()):S())},I=function(e,n){var t=n.isFlag;return e.board[n.row][n.col].isFlag=!t,e.flags+=t?1:-1,e},E=function(e){!e.isOpened&&(e.isFlag||O().flags>0)&&O((function(n){return I(h(n),e)}))},R=function(e,n){return[Math.floor(Math.random()*n),Math.floor(Math.random()*e)]},V=function(e,n,t,r,o){for(var l,a=[],i=0,c=0;c<n;++c)for(a[c]=[],l=0;l<e;++l)a[c][l]={row:c,col:l,bombCount:null,isBomb:!1,isFlag:!1,isOpened:!1};for(;i<t;){var u=R(e,n),s=Object(g.a)(u,2);c=s[0],l=s[1],a[c][l].isBomb||c===r&&o===l||(a[c][l].isBomb=!0,++i)}return{board:a,flags:t,cells:e*n-t}},A=Object(j.createTagged)(30),H=Object(j.createTagged)(16),J=Object(j.createTagged)(99),U=Object(j.createTagged)(null),q=function(e,n){O(V(A(),H(),J(),e,n)),U(Date.now()),C(O().board[e][n])},L=t(0),N=20,W=10,X="BOARD_ID",Y=function(e){console.log(e);var n=document.getElementById(X).getBoundingClientRect();return[Math.floor((e.clientY-n.top)/N),Math.floor((e.clientX-n.left)/N)]},_=function(){var e=Object(j.useTagged)(O),n=Object(j.useTagged)(w),t=Object(j.useTagged)(A),r=Object(j.useTagged)(H),o=e?e.board:V(t,r,0).board;Object(c.useLayoutEffect)((function(){var e=document.getElementById(X).getContext("2d"),n=0,t=0,r=o.length,l=o[0].length;for(e.fillStyle="black",e.fillRect(0,0,l*N,r*N);n<r;++n)for(t=0;t<l;++t){var a=o[n][t],i=a.col*N,c=a.row*N;if(e.fillStyle=a.isOpened?"aliceblue":"lightgray",e.fillRect(i,c,19,19),e.font="12px -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",e.textAlign="center",e.textBaseline="middle",a.isOpened){if(a.isBomb){if(a.isFlag){e.fillText("\u2705",i+W-1,c+W);continue}e.fillText("\ud83d\udca3",i+W-1,c+W)}else if(a.bombCount){switch(a.bombCount){case 1:e.fillStyle="blue";break;case 2:e.fillStyle="green";break;case 3:e.fillStyle="red";break;case 4:e.fillStyle="purple";break;case 5:e.fillStyle="maroon";break;case 6:e.fillStyle="turquoise";break;case 7:e.fillStyle="black";break;case 8:e.fillStyle="gray"}e.fillText(a.bombCount,i+W-1,c+W)}}else if(a.isFlag){e.fillText("\ud83d\udea9",i+W-1,c+W);continue}}}),[o]);var l=o[0].length*N,a=o.length*N;return Object(L.jsx)("canvas",{id:X,style:{width:l,height:a,userSelect:"none",cursor:"pointer",pointerEvents:n?"none":void 0},"data-is-over":!!n,width:l,height:a,onClick:function(n){var t=Y(n),r=Object(g.a)(t,2),l=r[0],a=r[1];e?C(o[l][a]):q(l,a)},onDoubleClick:e?function(e){var n=Y(e),t=Object(g.a)(n,2),r=t[0],l=t[1];D(o[r][l])}:null,onContextMenu:e?function(e){e.preventDefault();var n=Y(e),t=Object(g.a)(n,2),r=t[0],l=t[1];E(o[r][l])}:null})},z=function(e,n,t){return Math.max(Math.min(n,t),e)},G=function(){var e=Object(j.useTagged)(A);return Object(L.jsxs)("label",{children:["Width:",Object(L.jsx)("input",{defaultValue:e,type:"number",onBlur:function(e){return A(z(8,e.target.value,99))},min:8,max:99},e)]})},K=function(){var e=Object(j.useTagged)(H);return Object(L.jsxs)("label",{children:["Height:",Object(L.jsx)("input",{defaultValue:e,type:"number",onBlur:function(e){return H(z(1,e.target.value,99))},min:8,max:99},e)]})},P=function(){var e=Object(j.useTagged)(J);return Object(L.jsxs)("label",{children:["Bomb count:",Object(L.jsx)("input",{defaultValue:e,type:"number",onBlur:function(e){return J(z(0,e.target.value,A()*H()-1))},min:0,max:9800},e)]})},Q=d.a.div(r||(r=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n"]))),Z=function(){return Object(L.jsxs)(Q,{children:[Object(L.jsx)(G,{}),Object(L.jsx)(K,{}),Object(L.jsx)(P,{})]})},$=function(){var e=Object(c.useReducer)((function(e){return e+1}),0),n=Object(g.a)(e,2)[1],t=Object(j.useTagged)(U),r=Object(j.useTagged)(y);return Object(c.useEffect)((function(){var e;return!r&&t&&(e=setInterval((function(){n()}),1e3)),function(){clearInterval(e)}}),[t,r]),Object(L.jsxs)("span",{children:["Time:",t?Math.floor(((r||Date.now())-t)/1e3):0]})},ee=function(){O(null),U(null),y(null),w(null)},ne=function(){var e=Object(j.useTagged)(w);return Object(L.jsx)("button",{onClick:ee,children:"win"===e?"\ud83d\ude0e":"lose"===e?"\ud83d\ude35":"\ud83d\ude0a"})},te=function(){var e=Object(j.useTagged)(J),n=Object(j.useTagged)(O(o||(o=Object(f.a)(["flags"]))));return Object(L.jsxs)("span",{children:["Flags:","number"===typeof n?n:e]})},re=d.a.div(l||(l=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n"]))),oe=function(){return Object(L.jsxs)(re,{children:[Object(L.jsx)(te,{}),Object(L.jsx)(ne,{}),Object(L.jsx)($,{})]})},le=d.a.main(a||(a=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    height: calc(100vh - 20px);\n    padding-top: 20px;\n    width: calc(100vw - 40px);\n    align-items: center;\n"]))),ae=d.a.section(i||(i=Object(f.a)(["\n    display: flex;\n    overflow: auto;\n    max-width: 100%;\n    border-top: 1px solid black;\n    border-left: 1px solid black;\n"]))),ie=function(){return Object(L.jsxs)(le,{children:[Object(L.jsx)(Z,{}),Object(L.jsx)(oe,{}),Object(L.jsx)(ae,{children:Object(L.jsx)(_,{})})]})};b.a.render(Object(L.jsx)(u.a.StrictMode,{children:Object(L.jsx)(ie,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.10728d8a.chunk.js.map