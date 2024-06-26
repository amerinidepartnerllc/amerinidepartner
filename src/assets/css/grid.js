import { createGlobalStyle } from 'styled-components';
import { device } from '../../theme';

export const GridCSS = createGlobalStyle `
.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
}
  
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media (min-width: 1400px) {
    .container {
      max-width: 1280px;
    }
  }
  
  .container-fluid {
    width: 100vw;
    padding-right: 80px;
    padding-left: 80px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  
  .no-gutters > .col,
  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
  
  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  
  .col-1 {
    -ms-flex: 0 0 16.66vw;
    flex: 0 0 16.66vw;
    max-width: 16.66vw;
  }
  
  .col-2 {
    -ms-flex: 0 0 33.32vw;
    flex: 0 0 33.32vw;
    max-width: 33.32vw;
  }
  
  .col-3 {
    -ms-flex: 0 0 49.98vw;
    flex: 0 0 49.98vw;
    max-width: 49.98vw;
  }
  
  .col-4 {
    -ms-flex: 0 0 66.64vw;
    flex: 0 0 66.64vw;
    max-width: 66.64vw;
  }
  
  .col-5 {
    -ms-flex: 0 0 83.3vw;
    flex: 0 0 83.3vw;
    max-width: 83.3vw;
  }
  
  .col-6 {
    -ms-flex: 0 0 99.99vw;
    flex: 0 0 99.99vw;
    max-width: 99.99vw;
  }
  
  .offset-1 {
    margin-left: 16.666667vw;
  }
  .offset-1-right {
    margin-right: 16.666667vw;
  }
  .offset-2 {
    margin-left: 33.333333vw;
  }
  .offset-3 {
    margin-left: 50vw;
  }
  .offset-4 {
    margin-left: 66.666667vw;
  }
  .offset-5 {
    margin-left: 83.333333vw;
  }
  
  .offset-11 {
    margin-left: 91.666667vw;
  }
  

  .d-none {
    display: none !important;
  }
  
  .d-inline {
    display: inline !important;
  }
  
  .d-inline-block {
    display: inline-block !important;
  }
  
  .d-block {
    display: block !important;
  }
  
  .d-table {
    display: table !important;
  }
  
  .d-table-row {
    display: table-row !important;
  }
  
  .d-table-cell {
    display: table-cell !important;
  }
  
  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  
  .d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  
  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  
  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-md-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  
  @media (min-width: 992px) {
    .d-lg-none {
      display: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  
  @media (min-width: 1200px) {
    .d-xl-none {
      display: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  
  @media print {
    .d-print-none {
      display: none !important;
    }
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-print-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  
  .flex-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  
  .flex-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  
  .flex-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  
  .flex-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  
  .flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  
  .flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  
  .flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  
  .flex-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  
  .flex-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  
  .flex-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  
  .flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  
  .flex-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  
  .justify-content-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  
  .justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  
  .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  
  .justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  
  .justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  
  .align-items-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  
  .align-items-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  
  .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  
  .align-items-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  
  .align-items-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  
  .align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  
  .align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  
  .align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  
  .align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  
  .align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  
  .align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  
  .align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  
  .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  
  .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  
  .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  
  .align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  
  .align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
  
  @media (min-width: 576px) {
    .flex-sm-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-sm-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .flex-sm-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-sm-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .justify-content-sm-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-sm-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .align-items-sm-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-sm-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-sm-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-sm-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-sm-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-sm-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-sm-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
  }
  
  @media (min-width: 768px) {
    .flex-md-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-md-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .flex-md-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-md-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .justify-content-md-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-md-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .align-items-md-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-md-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-md-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-md-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-md-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-md-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-md-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-md-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-md-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-md-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-md-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-md-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-md-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-md-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
  }
  
  @media (min-width: 992px) {
    .flex-lg-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-lg-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .flex-lg-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-lg-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .justify-content-lg-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-lg-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .align-items-lg-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-lg-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-lg-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-lg-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-lg-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-lg-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-lg-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
  }
  
  @media (min-width: 1200px) {
    .flex-xl-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-xl-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .flex-xl-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-xl-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .justify-content-xl-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-xl-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .align-items-xl-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-xl-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-xl-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-xl-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-xl-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-xl-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-xl-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
  }



.text-left{text-align:left!important}
.text-right{text-align:right!important}
.text-center{text-align:center!important}


@media ${device.xlarge}{
    .col-1 {
      -ms-flex: 0 0 20vw;
      flex: 0 0 20vw;
      max-width: 20vw;
    }
    
    .col-2 {
      -ms-flex: 0 0 40vw;
      flex: 0 0 40vw;
      max-width: 40vw;
    }
    
    .col-3 {
      -ms-flex: 0 0 60vw;
      flex: 0 0 60vw;
      max-width: 60vw;
    }
    
    .col-4 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-5 {
      -ms-flex: 0 0 83.3vw;
      flex: 0 0 83.3vw;
      max-width: 83.3vw;
    }
    
    .col-6 {
      -ms-flex: 0 0 99.99vw;
      flex: 0 0 99.99vw;
      max-width: 99.99vw;
    }




    .offset-1 {
      margin-left: 10vw;
    }
    .offset-1-right {
      margin-right: 10vw;
    }
    .offset-2 {
      margin-left: 20vw;
    }
    .offset-3 {
      margin-left: 30vw;
    }
    .offset-4 {
      margin-left: 40vw;
    }
    .offset-5 {
      margin-left: 50vw;
    }
    
    .offset-11 {
      margin-left: 60vw;
    }
}

@media ${device.large}{
    .col-1 {
      -ms-flex: 0 0 20vw;
      flex: 0 0 20vw;
      max-width: 20vw;
    }
    
    .col-2 {
      -ms-flex: 0 0 40vw;
      flex: 0 0 40vw;
      max-width: 40vw;
    }
    
    .col-3 {
      -ms-flex: 0 0 60vw;
      flex: 0 0 60vw;
      max-width: 60vw;
    }
    
    .col-4 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-5 {
      -ms-flex: 0 0 75vw;
      flex: 0 0 75vw;
      max-width: 75vw;
    }
    
    .col-6 {
      -ms-flex: 0 0 90vw;
      flex: 0 0 90vw;
      max-width: 90vw;
    }




    .offset-1 {
      margin-left: 10vw;
    }
    .offset-1-right {
      margin-right: 10vw;
    }
    .offset-2 {
      margin-left: 20vw;
    }
    .offset-3 {
      margin-left: 30vw;
    }
    .offset-4 {
      margin-left: 40vw;
    }
    .offset-5 {
      margin-left: 50vw;
    }
    
    .offset-11 {
      margin-left: 60vw;
    }
}

@media ${device.medium}{
 .col-1 {
   -ms-flex: 0 0 20vw;
   flex: 0 0 20vw;
   max-width: 20vw;
 }
 
 .col-2 {
   -ms-flex: 0 0 40vw;
   flex: 0 0 40vw;
   max-width: 40vw;
 }
 
 .col-3 {
   -ms-flex: 0 0 60vw;
   flex: 0 0 60vw;
   max-width: 60vw;
 }
 
 .col-4 {
   -ms-flex: 0 0 80vw;
   flex: 0 0 80vw;
   max-width: 80vw;
 }
 
 .col-5 {
   -ms-flex: 0 0 75vw;
   flex: 0 0 75vw;
   max-width: 75vw;
 }
 
 .col-6 {
   -ms-flex: 0 0 90vw;
   flex: 0 0 90vw;
   max-width: 90vw;
 }




 .offset-1 {
   margin-left: 10vw;
 }
 .offset-1-right {
   margin-right: 10vw;
 }
 .offset-2 {
   margin-left: 20vw;
 }
 .offset-3 {
   margin-left: 30vw;
 }
 .offset-4 {
   margin-left: 40vw;
 }
 .offset-5 {
   margin-left: 50vw;
 }
 
 .offset-11 {
   margin-left: 60vw;
 }
}


@media ${device.small}{
    .col-1 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-2 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-3 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-4 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-5 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }
    
    .col-6 {
      -ms-flex: 0 0 80vw;
      flex: 0 0 80vw;
      max-width: 80vw;
    }




    .offset-1 {
      margin-left: 10vw;
    }
    .offset-1-right {
      margin-right: 10vw;
    }
    .offset-2 {
      margin-left: 80vw;
    }
    .offset-3 {
      margin-left: 80vw;
    }
    .offset-4 {
      margin-left: 80vw;
    }
    .offset-5 {
      margin-left: 80vw;
    }
    
    .offset-11 {
      margin-left: 80vw;
    }
}
`;