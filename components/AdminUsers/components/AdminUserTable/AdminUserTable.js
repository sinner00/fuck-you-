import React from "react";
import PropTypes from "prop-types";

const AdminUserTable = ({ isToggled, changeView, handleInnerPage}) => (
  <React.Fragment>
    <table>
      <tbody>
        <tr className="header-table">
          <th className="table-title-name">Name</th>
          <th>IG name</th>
          <th>Email</th>
          <th>Credit Balance</th>
          <th>Account Type</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type">PREMIUM</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type">PREMIUM</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type">PREMIUM</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type-standart">STANDART</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type-standart">STANDART</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0 suspended">
            <i className="fas fa-coins ml-0"/> 0</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type-standart">STANDART</span>
          </td>
          <td className="border-left-0 suspended ">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Suspended
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type-standart">STANDART</span>
          </td>
          <td className="border-left-0">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Deactivated
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border-right-0 table-username">
            <i className="fas fa-user-circle"/>
                    Firstname Lastname</td>
          <td className="border-right-0 border-left-0 ">@user.name</td>
          <td className="border-right-0 border-left-0">user@mail.com</td>
          <td className="border-right-0 border-left-0">
            <i className="fas fa-coins ml-0"/> 1265</td>
          <td className="border-right-0 border-left-0">
            <span className="account-type-standart">STANDART</span>
          </td>
          <td className="border-left-0 pending ">
            <div className="table-item-changable">
              <i className="fas fa-circle suspended-circle"/>
                        Pendindg
            </div>
            <div className="table-inner-item float-right">
              <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
              <i className="fas fa-trash-alt"/>
            </div>
          </td>
        </tr>
        {
          isToggled
            ? (
              <React.Fragment>
                <tr>
                  <td className="border-right-0 table-username">
                    <i className="fas fa-user-circle"/>
                                Firstname Lastname</td>
                  <td className="border-right-0 border-left-0 ">@user.name</td>
                  <td className="border-right-0 border-left-0">user@mail.com</td>
                  <td className="border-right-0 border-left-0">
                    <i className="fas fa-coins ml-0"/> 1265</td>
                  <td className="border-right-0 border-left-0">
                    <span className="account-type-standart">STANDART</span>
                  </td>
                  <td className="border-left-0 pending ">
                    <div className="table-item-changable">
                      <i className="fas fa-circle suspended-circle"/>
                                    Pendindg
                    </div>
                    <div className="table-inner-item float-right">
                      <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
                      <i className="fas fa-trash-alt"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-right-0 table-username">
                    <i className="fas fa-user-circle"/>
                                Firstname Lastname</td>
                  <td className="border-right-0 border-left-0 ">@user.name</td>
                  <td className="border-right-0 border-left-0">user@mail.com</td>
                  <td className="border-right-0 border-left-0">
                    <i className="fas fa-coins ml-0"/> 1265</td>
                  <td className="border-right-0 border-left-0">
                    <span className="account-type-standart">STANDART</span>
                  </td>
                  <td className="border-left-0 pending ">
                    <div className="table-item-changable">
                      <i className="fas fa-circle suspended-circle"/>
                                    Pendindg
                    </div>
                    <div className="table-inner-item float-right">
                      <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
                      <i className="fas fa-trash-alt"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-right-0 table-username">
                    <i className="fas fa-user-circle"/>
                                Firstname Lastname</td>
                  <td className="border-right-0 border-left-0 ">@user.name</td>
                  <td className="border-right-0 border-left-0">user@mail.com</td>
                  <td className="border-right-0 border-left-0">
                    <i className="fas fa-coins ml-0"/> 1265</td>
                  <td className="border-right-0 border-left-0">
                    <span className="account-type-standart">STANDART</span>
                  </td>
                  <td className="border-left-0 pending ">
                    <div className="table-item-changable">
                      <i className="fas fa-circle suspended-circle"/>
                                    Pendindg
                    </div>
                    <div className="table-inner-item float-right">
                      <i onClick={() => { changeView(true), handleInnerPage(true) } } className="fas fa-book-open"/>
                      <i className="fas fa-trash-alt"/>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            )
            : null
        }
      </tbody>
    </table>
  </React.Fragment>
);

AdminUserTable.propTypes = {
  isToggled: PropTypes.bool,
  changeView: PropTypes.func,
  handleInnerPage: PropTypes.func
};

export default AdminUserTable;
