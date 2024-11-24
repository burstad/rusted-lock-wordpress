import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{o as onFirstVisible}from"./lazy.js";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$k}from"./sc-alert2.js";import{d as defineCustomElement$j}from"./sc-block-ui2.js";import{d as defineCustomElement$i}from"./sc-button2.js";import{d as defineCustomElement$h}from"./sc-card2.js";import{d as defineCustomElement$g}from"./sc-dashboard-module2.js";import{d as defineCustomElement$f}from"./sc-dialog2.js";import{d as defineCustomElement$e}from"./sc-empty2.js";import{d as defineCustomElement$d}from"./sc-flex2.js";import{d as defineCustomElement$c}from"./sc-form-control2.js";import{d as defineCustomElement$b}from"./sc-format-date2.js";import{d as defineCustomElement$a}from"./sc-icon2.js";import{d as defineCustomElement$9}from"./sc-input2.js";import{d as defineCustomElement$8}from"./sc-skeleton2.js";import{d as defineCustomElement$7}from"./sc-spacing2.js";import{d as defineCustomElement$6}from"./sc-spinner2.js";import{d as defineCustomElement$5}from"./sc-stacked-list2.js";import{d as defineCustomElement$4}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scLicenseCss=":host{display:block}.license__date{font-weight:var(--sc-font-weight-semibold)}.license__heading{display:flex;align-items:center;gap:1rem}.license__key{display:block}.close__button{position:absolute;top:0;right:0;font-size:22px;z-index:1}.license-cancel{display:grid;gap:0.5em}",ScLicenseStyle0=scLicenseCss,ScLicense$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.deleteActivation=async()=>{try{this.busy=!0,await apiFetch({path:`surecart/v1/activations/${this.selectedActivationId}`,method:"DELETE"}),this.onCloseDeleteModal(),await this.initialFetch()}catch(e){console.error(e),this.deleteActivationError=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}},this.onCloseDeleteModal=()=>{this.selectedActivationId="",this.showConfirmDelete=!1,this.busy=!1,this.deleteActivationError=""},this.licenseId=void 0,this.loading=!1,this.error="",this.license=void 0,this.copied=!1,this.showConfirmDelete=!1,this.selectedActivationId="",this.deleteActivationError="",this.busy=!1}componentWillLoad(){onFirstVisible(this.el,(()=>{this.initialFetch()}))}async initialFetch(){try{this.loading=!0,await this.getLicense()}catch(e){console.error(e),this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}}async getLicense(){this.license=await apiFetch({path:addQueryArgs(`surecart/v1/licenses/${this.licenseId}`,{expand:["activations","purchase","purchase.product"]})})}async copyKey(e){try{await navigator.clipboard.writeText(e),this.copied=!0,setTimeout((()=>{this.copied=!1}),2e3)}catch(e){console.error(e),alert(wp.i18n.__("Error copying to clipboard","surecart"))}}renderStatus(){var e,s,t,i;return"active"===(null===(e=this.license)||void 0===e?void 0:e.status)?h("sc-tag",{type:"success"},wp.i18n.__("Active","surecart")):"revoked"===(null===(s=this.license)||void 0===s?void 0:s.status)?h("sc-tag",{type:"danger"},wp.i18n.__("Revoked","surecart")):"inactive"===(null===(t=this.license)||void 0===t?void 0:t.status)?h("sc-tag",{type:"info"},wp.i18n.__("Inactive","surecart")):h("sc-tag",{type:"info"},null===(i=this.license)||void 0===i?void 0:i.status)}renderLoading(){return h("sc-dashboard-module",null,h("span",{slot:"heading"},h("sc-skeleton",{style:{width:"120px"}})),h("sc-card",null,h("sc-stacked-list",null,h("sc-flex",{flexDirection:"column",style:{gap:"1em"}},h("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"40%",display:"inline-block"}})))))}renderEmpty(){return h("sc-empty",{icon:"activity"},wp.i18n.__("License not found.","surecart"))}renderLicenseHeader(){var e;const s=null===(e=this.license)||void 0===e?void 0:e.purchase,t=null==s?void 0:s.product;return h(Fragment,null,h("span",{slot:"heading"},h("div",{class:"license__heading"},null==t?void 0:t.name,!this.loading&&!s.live_mode&&h("sc-tag",{type:"warning",size:"small"},wp.i18n.__("Test Mode","surecart")))))}renderContent(){var e,s,t,i,n,o,c,l,a,r;return this.loading&&!(null===(e=this.license)||void 0===e?void 0:e.id)?this.renderLoading():(null===(s=this.license)||void 0===s?void 0:s.id)?h(Fragment,null,h("sc-dashboard-module",{error:this.error},this.renderLicenseHeader(),h("sc-card",{noPadding:!0},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"2","--sc-stacked-list-row-align-items":"center"}},h("div",null,wp.i18n.__("License Status","surecart")),this.renderStatus()),h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,wp.i18n.__("License Key","surecart")),h("div",{class:"license__key"},h("sc-input",{value:null===(t=this.license)||void 0===t?void 0:t.key,readonly:!0},h("sc-button",{class:"license__copy",type:"default",size:"small",slot:"suffix",onClick:()=>{var e;return this.copyKey(null===(e=this.license)||void 0===e?void 0:e.key)}},this.copied?wp.i18n.__("Copied!","surecart"):wp.i18n.__("Copy","surecart"))))),h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,wp.i18n.__("Date","surecart")),h("sc-format-date",{date:null===(i=this.license)||void 0===i?void 0:i.created_at,type:"timestamp",month:"short",day:"numeric",year:"numeric"})),h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,wp.i18n.__("Activations Count","surecart")),h("span",null,null===(n=this.license)||void 0===n?void 0:n.activation_count," / ",(null===(o=this.license)||void 0===o?void 0:o.activation_limit)||h("span",null,"∞")))))),h("sc-dashboard-module",null,h("span",{slot:"heading"},h("slot",{name:"heading"},wp.i18n.__("Activations","surecart"))),h("sc-card",{noPadding:!0},(null===(a=null===(l=null===(c=this.license)||void 0===c?void 0:c.activations)||void 0===l?void 0:l.data)||void 0===a?void 0:a.length)?h("sc-stacked-list",null,null===(r=this.license)||void 0===r?void 0:r.activations.data.map((e=>h("sc-stacked-list-row",{style:{"--columns":"4"}},h("sc-format-date",{class:"license__date",date:e.created_at,type:"timestamp",month:"short",day:"numeric",year:"numeric"}),h("div",null,e.name),h("div",null,e.fingerprint),h("div",null,h("sc-button",{size:"small",onClick:()=>{this.selectedActivationId=e.id,this.showConfirmDelete=!0}},"Delete")))))):h("sc-empty",null,wp.i18n.__("No activations present.","surecart")),this.loading&&h("sc-block-ui",{style:{"--sc-block-ui-opacity":"0.75"},spinner:!0})))):this.renderEmpty()}renderConfirmDelete(){return h("sc-dialog",{open:this.showConfirmDelete,style:{"--body-spacing":"var(--sc-spacing-x-large)"},noHeader:!0,onScRequestClose:this.onCloseDeleteModal},h("sc-button",{class:"close__button",type:"text",circle:!0,onClick:this.onCloseDeleteModal,disabled:this.loading},h("sc-icon",{name:"x"})),h("sc-dashboard-module",{heading:wp.i18n.__("Delete Activation","surecart"),class:"license-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},h("span",{slot:"description"},wp.i18n.__("Are you sure you want to delete activation?","surecart")),h("sc-flex",{justifyContent:"flex-start"},h("sc-button",{type:"primary",disabled:this.loading||this.busy,onClick:this.deleteActivation},wp.i18n.__("Delete Activation","surecart")),h("sc-button",{style:{color:"var(--sc-color-gray-500"},type:"text",onClick:this.onCloseDeleteModal,disabled:this.loading||this.busy},wp.i18n.__("Cancel","surecart"))),this.busy&&h("sc-block-ui",{style:{"--sc-block-ui-opacity":"0.75"},spinner:!0})))}render(){return h("sc-spacing",{key:"43cefcac974ad717fec5172b9398f1f27fbd9e8a",style:{"--spacing":"var(--sc-spacing-large)"}},this.renderContent(),this.renderConfirmDelete())}get el(){return this}static get style(){return ScLicenseStyle0}},[1,"sc-license",{licenseId:[1,"license-id"],loading:[32],error:[32],license:[32],copied:[32],showConfirmDelete:[32],selectedActivationId:[32],deleteActivationError:[32],busy:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-license","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-dialog","sc-empty","sc-flex","sc-form-control","sc-format-date","sc-icon","sc-input","sc-skeleton","sc-spacing","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-tag","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-license":customElements.get(e)||customElements.define(e,ScLicense$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$k();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$j();break;case"sc-button":customElements.get(e)||defineCustomElement$i();break;case"sc-card":customElements.get(e)||defineCustomElement$h();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$g();break;case"sc-dialog":customElements.get(e)||defineCustomElement$f();break;case"sc-empty":customElements.get(e)||defineCustomElement$e();break;case"sc-flex":customElements.get(e)||defineCustomElement$d();break;case"sc-form-control":customElements.get(e)||defineCustomElement$c();break;case"sc-format-date":customElements.get(e)||defineCustomElement$b();break;case"sc-icon":customElements.get(e)||defineCustomElement$a();break;case"sc-input":customElements.get(e)||defineCustomElement$9();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$8();break;case"sc-spacing":customElements.get(e)||defineCustomElement$7();break;case"sc-spinner":customElements.get(e)||defineCustomElement$6();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$5();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$4();break;case"sc-tag":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScLicense=ScLicense$1,defineCustomElement=defineCustomElement$1;export{ScLicense,defineCustomElement};