(()=>{"use strict";var e,l={108:(e,l,n)=>{const t=window.wp.blocks;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}const r=window.wp.element,a=window.wp.i18n,i=window.wp.blockEditor,c=window.wp.components,s=window.wp.data;var u=n(868);const g=JSON.parse('{"u2":"cleanfairfax/inline-banner"}');(0,t.registerBlockType)(g.u2,{attributes:{text:{default:"",type:"string"},background_color:{default:"#000",type:"string"},text_color:{default:"#FFF",type:"string"},link:{default:"",type:"string"},link_title:{default:"",type:"string"}},category:"clean-fairfax",edit:function(e){const{attributes:l,setAttributes:n}=e,t=[...(0,s.useSelect)("core/block-editor").getSettings().colors,...u];return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.InspectorControls,null,(0,r.createElement)(i.PanelColorSettings,{title:(0,a.__)("Color"),colorSettings:[{value:l.background_color,onChange:e=>n({background_color:e}),label:(0,a.__)("Background color"),colors:t},{value:l.text_color,onChange:e=>n({text_color:e}),label:(0,a.__)("Text color"),colors:t}]}),(0,r.createElement)(c.PanelBody,{title:(0,a.__)("Link"),opened:!0},(0,r.createElement)(c.PanelRow,null,"Link"),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.TextControl,{onChange:e=>{n({link:e})},value:l.link})),(0,r.createElement)(c.PanelRow,null,"Link Title"),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.TextControl,{onChange:e=>{n({link_title:e})},value:l.link_title})))),(0,r.createElement)("div",o({},(0,i.useBlockProps)(),{style:{backgroundColor:l.background_color,color:l.text_color}}),(0,r.createElement)("div",{class:"flex-container"},(0,r.createElement)("div",{class:"text-container"},(0,r.createElement)(i.RichText,{value:l.text,tagName:"p",allowedFormats:["core/bold","core/italic"],onChange:e=>n({text:e}),placeholder:(0,a.__)("Type something...")})),l.link&&l.link_title&&(0,r.createElement)("div",{class:"button-container"},(0,r.createElement)("a",{href:l.link,class:"button"},l.link_title)))))},save:()=>null})},868:e=>{e.exports=JSON.parse('[{"name":"Black","slug":"black","color":"#000"},{"name":"Cyan bluish gray","slug":"cyan-bluish-gray","color":"#abb8c3"},{"name":"White","slug":"white","color":"#fff"},{"name":"Pale pink","slug":"pale-pink","color":"#f78da7"},{"name":"Vivid red","slug":"vivid-red","color":"#cf2e2e"},{"name":"Luminous vivid orange","slug":"luminous-vivid-orange","color":"#ff6900"},{"name":"Luminous vivid amber","slug":"luminous-vivid-amber","color":"#fcb900"},{"name":"Light green cyan","slug":"light-green-cyan","color":"#7bdcb5"},{"name":"Vivid green cyan","slug":"vivid-green-cyan","color":"#00d084"},{"name":"Pale cyan blue","slug":"pale-cyan-blue","color":"#8ed1fc"},{"name":"Vivid cyan blue","slug":"vivid-cyan-blue","color":"#0693e3"},{"name":"Vivid purple","slug":"vivid-purple","color":"#9b51e0"}]')}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return l[e](r,r.exports,t),r.exports}t.m=l,e=[],t.O=(l,n,o,r)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,r]=e[u],i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var s=o();void 0!==s&&(l=s)}}return l}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={450:0,894:0};t.O.j=l=>0===e[l];var l=(l,n)=>{var o,r,[a,i,c]=n,s=0;if(a.some((l=>0!==e[l]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var u=c(t)}for(l&&l(n);s<a.length;s++)r=a[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=globalThis.webpackChunkclean_fairfax_blocks=globalThis.webpackChunkclean_fairfax_blocks||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))})();var o=t.O(void 0,[894],(()=>t(108)));o=t.O(o)})();