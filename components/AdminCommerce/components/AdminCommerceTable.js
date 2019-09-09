import React from "react";

const AdminCommerceTable = () => (
  <React.Fragment>
    <table className="admin-commerce-container--table mb-4">
      <tbody>
        <tr className="admin-commerce-container--table-title">
          <th>Code</th>
          <th>Amount</th>
          <th>Type of discount</th>
          <th>Applies</th>
          <th>Status</th>
          <th>Date Start</th>
          <th>Date End</th>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">40.00</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container">
              <i className="fas fa-euro-sign"/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container">CREDITS</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-active">Aсtive</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount d-flex justify-content-between">21/06/2019
            <div className="handle-commerce-item">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">40.00</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container">
              <i className="fas fa-euro-sign"/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container percent-color">PRICING</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-upcoming">Upcoming</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount">21/06/2019
            <div className="handle-commerce-item">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">10%</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container double-pricing">
              <i className="fas fa-percent "/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container percent-color">PRICING</span><br/>
            <span className="pricing-commerce-container">CREDITS</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-over">Over</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount">21/06/2019
            <div className="handle-commerce-item handle-double">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">40.00</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container ">
              <i className="fas fa-euro-sign"/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container">CREDITS</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-active">Aсtive</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount">21/06/2019
            <div className="handle-commerce-item">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">40.00</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container">
              <i className="fas fa-euro-sign"/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container">CREDITS</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-active">Aсtive</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount">21/06/2019
            <div className="handle-commerce-item">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="admin-commerce-container--first-row table-row-title">YTT46VSQ</td>
          <td className="admin-commerce-container--middle-row table-row-amount">40.00</td>
          <td className="admin-commerce-container--middle-row">
            <span className="amount-commerce-container">
              <i className="fas fa-euro-sign"/>
            </span>
          </td>
          <td className="admin-commerce-container--middle-row">
            <span className="pricing-commerce-container">CREDITS</span>
          </td>
          <td className="admin-commerce-container--middle-row row-status-active">Aсtive</td>
          <td className="admin-commerce-container--middle-row table-row-amount">14/06/2019</td>
          <td className="admin-commerce-container--last-row table-row-amount">21/06/2019
            <div className="handle-commerce-item">
              <i className="fas fa-book-open ml-4 handle-commerce-item--edit"/>
              <i className="fas fa-trash-alt ml-3 handle-commerce-item--delete"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);

export default AdminCommerceTable;
