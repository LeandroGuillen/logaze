(this.webpackJsonplogaze=this.webpackJsonplogaze||[]).push([[0],{156:function(e,r,a){e.exports=a(210)},161:function(e,r,a){},162:function(e,r,a){},210:function(e,r,a){"use strict";a.r(r);var t=a(13),i=a.n(t),d=a(51),n=a.n(d),l=(a(161),a(162),a(154)),o=(a(208),a(209),a(155)),c=function(){var e=Object(t.useState)([]),r=Object(o.a)(e,2),a=r[0],i=r[1];return Object(t.useEffect)((function(){(function(){var e="https://api.jsonbin.io/b/".concat("5dac6fed5751f76337fd4ac2","/latest");return fetch(e).then((function(e){return e.json()}))})().then(i)}),[]),a},s=function(e){var r=e.value;return null===r?r:i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},"Buy")},h=function(e){var r=e.value;return null===r?"":r?"Yes":"No"},m=function(e){return function(r){var a=r.value;return null===a?a:a.toFixed(e)}},u=function(){var e=c(),r={columnDefs:[{headerName:"Price (USD)",field:"price",width:130,cellRenderer:m(2),filter:"agNumberColumnFilter",sort:"asc"},{headerName:"Type",field:"product-type",width:70},{headerName:"Model",field:"model"},{headerName:"Screen Size",field:"screen-size",width:70,cellRenderer:m(1),filter:"agNumberColumnFilter"},{headerName:"Resolution",field:"resolution",width:100},{headerName:"IPS Screen?",field:"screen-has-ips",width:70,cellRenderer:h},{headerName:"Display",field:"display-type"},{headerName:"Memory Size",field:"memory-size",width:70},{headerName:"Hard Drive Type",field:"hard-drive-type",width:70},{headerName:"Hard Drive Size",field:"hard-drive-size",width:70},{headerName:"Processor Brand",field:"processor-brand",width:70},{headerName:"Processor Range",field:"processor-range",width:80},{headerName:"Processor",field:"processor"},{headerName:"Wireless",field:"wireless"},{headerName:"Graphics",field:"graphics"},{headerName:"Touchscreen?",field:"screen-supports-touch",width:70,cellRenderer:h},{headerName:"Buy!",field:"url",width:70,cellRendererFramework:s},{headerName:"Hard Drive",field:"hard-drive"},{headerName:"Memory",field:"memory"},{headerName:"Memory Soldered?",field:"memory-soldered",width:70,cellRenderer:h},{headerName:"Processor Cache",field:"processor-cache",width:70},{headerName:"Battery",field:"battery"},{headerName:"Warranty",field:"warranty"},{headerName:"Operating System",field:"operating-system"},{headerName:"Original Price",field:"orig-price",width:70,cellRenderer:m(2),filter:"agNumberColumnFilter"},{headerName:"Pointing Device",field:"pointing-device"},{headerName:"Part Number",field:"part-number"},{headerName:"Keyboard",field:"keyboard"},{headerName:"Bluetooth",field:"bluetooth",width:70}],defaultColDef:{sortable:!0,filter:!0,resizable:!0},suppressCellSelection:!0,enableCellTextSelection:!0};return i.a.createElement("div",{className:"logaze-table"},i.a.createElement("div",{className:"ag-theme-balham-dark logaze-table-wrapper"},i.a.createElement(l.AgGridReact,{gridOptions:r,rowData:e,multiSortKey:"ctrl",onFirstDataRendered:function(e){return e.columnApi.autoSizeColumns()}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[156,1,2]]]);
//# sourceMappingURL=main.27a363d3.chunk.js.map