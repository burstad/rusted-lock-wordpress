import{r as e,h as r}from"./p-e97fde0a.js";const s=":host{display:inline-block}";const t=s;const a=class{constructor(r){e(this,r);this.status=undefined;this.size="medium";this.pill=false;this.clearable=false}getType(){switch(this.status){case"processing":return"warning";case"paid":return"success";case"payment_failed":return"danger";case"canceled":return"danger";case"void":return"danger";case"canceled":return"danger"}}getText(){switch(this.status){case"processing":return wp.i18n.__("Processing","surecart");case"payment_failed":return wp.i18n.__("Payment Failed","surecart");case"paid":return wp.i18n.__("Paid","surecart");case"canceled":return wp.i18n.__("Canceled","surecart");case"void":return wp.i18n.__("Canceled","surecart");case"draft":return wp.i18n.__("Draft","surecart");default:return this.status}}render(){return r("sc-tag",{key:"72599a56efcb25595c89a9d26486f35ce2034b35",type:this.getType(),pill:this.pill},this.getText())}};a.style=t;export{a as sc_order_status_badge};
//# sourceMappingURL=p-ea82ad3e.entry.js.map