/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';
import '/.PortfolioBanner.js';

/**
 * `portfolio-banner`
 *
 * @demo index.html
 * @element portfolio-banner
 */
export class PortfolioBanner extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-banner";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-banner-label-font-size, var(--ddd-font-size-s));
      }
      banner {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:  #00000066;
      position: fixed;
      top: 0;
      left: 0;
      height: var(--ddd-spacing-16);
      right: 0;
      gap: var(--ddd-spacing-4);
    }
    banner a {
      border: var(--ddd-border-width-md) solid var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-2);
      background-color: var(--ddd-theme-default-white) !important;
      text-decoration: none;
      color: var(--ddd-theme-default-link);
      border-radius:  var(--ddd-radius-md);
      transition: 0.4s;
    }
    banner a:hover {
      background-color: var(--ddd-theme-default-limestoneGray)  !important;
      border: var(--ddd-border-width-md) solid var(--ddd-theme-default-limestoneGray);
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <slot></slot>
</div>`;
  }


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioBanner.tag, PortfolioBanner);
